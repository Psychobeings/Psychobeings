/**
 * Psychobeings Workspace Settings - Calendar Module Manager
 * Manages configuration, toggle state, and API updates for workspace calendar settings.
 */

document.addEventListener('DOMContentLoaded', () => {
  WorkspaceCalendarModule.init();
});

const WorkspaceCalendarModule = (() => {
  // DOM Elements
  const DOM = {
    toggleSwitch: document.getElementById('calendar-module-toggle'),
    settingsPanel: document.getElementById('calendar-settings-panel'),
    settingsForm: document.getElementById('calendar-settings-form'),
    saveBtn: document.getElementById('save-calendar-settings-btn'),
    resetBtn: document.getElementById('reset-calendar-settings-btn'),
    statusBadge: document.getElementById('calendar-module-status'),
    timezoneSelect: document.getElementById('workspace-timezone'),
    bufferTimeSelect: document.getElementById('buffer-time-select'),
    autoSyncToggle: document.getElementById('auto-sync-google')
  };

  // State
  let state = {
    isEnabled: true,
    isDirty: false,
    config: {
      timezone: 'Asia/Kolkata',
      slotDuration: 50, // minutes
      bufferTime: 10,   // minutes
      autoSyncGoogle: true,
      allowClientCancellation: true,
      cancellationWindowHours: 24
    }
  };

  /**
   * Initializes event bindings and loads current workspace settings
   */
  const init = async () => {
    if (!DOM.toggleSwitch) return;

    bindEvents();
    await fetchWorkspaceSettings();
  };

  /**
   * Attach UI event listeners
   */
  const bindEvents = () => {
    // Module ON/OFF switch
    DOM.toggleSwitch.addEventListener('change', (e) => {
      state.isEnabled = e.target.checked;
      updateModuleUIState();
      markDirty();
    });

    // Form inputs change handler
    if (DOM.settingsForm) {
      DOM.settingsForm.addEventListener('change', () => markDirty());
      DOM.settingsForm.addEventListener('submit', handleSave);
    }

    // Reset button
    if (DOM.resetBtn) {
      DOM.resetBtn.addEventListener('click', handleReset);
    }
  };

  /**
   * Fetches settings from backend workspace API
   */
  const fetchWorkspaceSettings = async () => {
    try {
      // Replace with your actual backend endpoint
      const response = await fetch('/api/workspace/settings/calendar');
      if (response.ok) {
        const data = await response.json();
        state.isEnabled = data.enabled;
        state.config = { ...state.config, ...data.config };
        populateFormValues();
        updateModuleUIState();
      }
    } catch (error) {
      console.warn('Using default calendar module settings:', error);
      populateFormValues();
      updateModuleUIState();
    }
  };

  /**
   * Populates form controls with current state values
   */
  const populateFormValues = () => {
    DOM.toggleSwitch.checked = state.isEnabled;
    if (DOM.timezoneSelect) DOM.timezoneSelect.value = state.config.timezone;
    if (DOM.bufferTimeSelect) DOM.bufferTimeSelect.value = state.config.bufferTime;
    if (DOM.autoSyncToggle) DOM.autoSyncToggle.checked = state.config.autoSyncGoogle;
  };

  /**
   * Toggles settings panel visibility based on module status
   */
  const updateModuleUIState = () => {
    if (DOM.settingsPanel) {
      if (state.isEnabled) {
        DOM.settingsPanel.classList.remove('disabled');
        DOM.settingsPanel.querySelectorAll('input, select, button').forEach(el => el.removeAttribute('disabled'));
      } else {
        DOM.settingsPanel.classList.add('disabled');
        DOM.settingsPanel.querySelectorAll('input, select, button').forEach(el => {
          if (el !== DOM.toggleSwitch) el.setAttribute('disabled', 'true');
        });
      }
    }

    if (DOM.statusBadge) {
      DOM.statusBadge.textContent = state.isEnabled ? 'Active' : 'Disabled';
      DOM.statusBadge.className = `status-badge ${state.isEnabled ? 'active' : 'inactive'}`;
    }
  };

  /**
   * Marks state as dirty to enable save button
   */
  const markDirty = () => {
    state.isDirty = true;
    if (DOM.saveBtn) DOM.saveBtn.removeAttribute('disabled');
  };

  /**
   * Saves updated settings to the workspace backend API
   */
  const handleSave = async (e) => {
    e.preventDefault();
    if (!state.isDirty) return;

    const payload = {
      enabled: state.isEnabled,
      config: {
        timezone: DOM.timezoneSelect ? DOM.timezoneSelect.value : state.config.timezone,
        bufferTime: DOM.bufferTimeSelect ? parseInt(DOM.bufferTimeSelect.value) : state.config.bufferTime,
        autoSyncGoogle: DOM.autoSyncToggle ? DOM.autoSyncToggle.checked : state.config.autoSyncGoogle
      }
    };

    try {
      if (DOM.saveBtn) DOM.saveBtn.textContent = 'Saving...';

      const response = await fetch('/api/workspace/settings/calendar', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        state.config = payload.config;
        state.isDirty = false;
        if (DOM.saveBtn) {
          DOM.saveBtn.textContent = 'Saved!';
          DOM.saveBtn.setAttribute('disabled', 'true');
          setTimeout(() => { DOM.saveBtn.textContent = 'Save Changes'; }, 2000);
        }
      } else {
        throw new Error('Failed to update workspace calendar settings.');
      }
    } catch (error) {
      console.error('Save failed:', error);
      alert('Could not save calendar settings. Please try again.');
      if (DOM.saveBtn) DOM.saveBtn.textContent = 'Save Changes';
    }
  };

  /**
   * Resets form to last saved state
   */
  const handleReset = () => {
    populateFormValues();
    state.isDirty = false;
    if (DOM.saveBtn) DOM.saveBtn.setAttribute('disabled', 'true');
  };

  return { init, fetchWorkspaceSettings };
})();