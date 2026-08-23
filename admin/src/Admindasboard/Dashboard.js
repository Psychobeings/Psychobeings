import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('today');
  const [currentTime, setCurrentTime] = useState(new Date());

  // In-Memory State for Appointments & Notes
  const [appointments, setAppointments] = useState([
    { id: 1, client: 'Sarah Chen', time: '10:00 AM', type: 'Initial Consultation', status: 'Upcoming', note: '' },
    { id: 2, client: 'Marcus Vance', time: '01:30 PM', type: 'CBT Follow-up', status: 'Upcoming', note: '' },
    { id: 3, client: 'John Doe', time: 'Yesterday', type: 'Routine Check-in', status: 'Pending SOAP', note: '' }
  ]);

  // Form State for Clinical Notes
  const [selectedClient, setSelectedClient] = useState(null);
  const [soapNote, setSoapNote] = useState({ subjective: '', objective: '', assessment: '', plan: '' });

  // Live Clock Effect
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle Note Save to In-Memory State
  const handleSaveNote = (e) => {
    e.preventDefault();
    if (!selectedClient) return;

    setAppointments(prev => prev.map(app => 
      app.id === selectedClient.id 
        ? { ...app, status: 'Completed', note: JSON.stringify(soapNote) } 
        : app
    ));

    alert(`Clinical Note Saved for ${selectedClient.client}`);
    setSelectedClient(null);
    setSoapNote({ subjective: '', objective: '', assessment: '', plan: '' });
  };

  const styles = {
    container: { display: 'flex', height: '100vh', backgroundColor: '#f9f8f3', fontFamily: 'Segoe UI, sans-serif' },
    sidebar: { width: '260px', backgroundColor: '#124045', color: '#fff', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column' },
    brand: { fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '2rem', letterSpacing: '0.5px' },
    navItem: (isActive) => ({
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      cursor: 'pointer',
      marginBottom: '0.5rem',
      backgroundColor: isActive ? '#1f6b72' : 'transparent',
      color: isActive ? '#ffffff' : '#cbd5e1'
    }),
    main: { flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' },
    header: { backgroundColor: '#ffffff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb' },
    content: { padding: '2rem' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' },
    card: { backgroundColor: '#ffffff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' },
    cardHeader: { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.5rem', marginBottom: '1rem' },
    itemRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px dashed #e5e7eb' },
    btn: { backgroundColor: '#1f6b72', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer' },
    textarea: { width: '100%', height: '60px', marginTop: '0.25rem', marginBottom: '0.75rem', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e5e7eb' },
    badge: (status) => ({
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
      borderRadius: '12px',
      backgroundColor: status === 'Completed' ? '#d1fae5' : '#fef3c7',
      color: status === 'Completed' ? '#065f46' : '#92400e'
    })
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <aside style={styles.sidebar}>
        <div style={styles.brand}>PSYCHOBEINGS</div>
        {['today', 'notes', 'clients', 'calendar', 'billing'].map((tab) => (
          <div key={tab} style={styles.navItem(activeTab === tab)} onClick={() => setActiveTab(tab)}>
            {tab === 'today' ? "Today's Dashboard" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </aside>

      {/* Main Workspace */}
      <main style={styles.main}>
        <header style={styles.header}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Welcome Back</h1>
            <small style={{ color: '#6b7280' }}>Solo Practice Management Hub</small>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f6b72' }}>{currentTime.toLocaleTimeString()}</div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
        </header>

        <div style={styles.content}>
          {activeTab === 'today' && (
            <div style={styles.grid}>
              {/* Appointments List */}
              <div style={{ ...styles.card, gridColumn: 'span 2' }}>
                <div style={styles.cardHeader}>
                  <h3 style={{ margin: 0, color: '#124045' }}>Today's Sessions</h3>
                </div>
                {appointments.map(app => (
                  <div key={app.id} style={styles.itemRow}>
                    <div>
                      <strong>{app.time}</strong> — {app.client} <small>({app.type})</small>
                    </div>
                    <div>
                      <span style={styles.badge(app.status)}>{app.status}</span>
                      <button 
                        style={{ ...styles.btn, marginLeft: '0.5rem' }}
                        onClick={() => { setSelectedClient(app); setActiveTab('notes'); }}
                      >
                        {app.status === 'Completed' ? 'View Notes' : 'Start Session'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clinical SOAP Notes View */}
          {activeTab === 'notes' && (
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={{ margin: 0, color: '#124045' }}>
                  {selectedClient ? `Clinical Notes: ${selectedClient.client}` : 'Select a Client to Write Notes'}
                </h3>
              </div>
              
              {selectedClient ? (
                <form onSubmit={handleSaveNote}>
                  <label><strong>Subjective (Client's perspective):</strong></label>
                  <textarea 
                    style={styles.textarea} 
                    value={soapNote.subjective} 
                    onChange={e => setSoapNote({ ...soapNote, subjective: e.target.value })} 
                    placeholder="Describe symptoms, client comments..."
                  />

                  <label><strong>Objective (Practitioner observations):</strong></label>
                  <textarea 
                    style={styles.textarea} 
                    value={soapNote.objective} 
                    onChange={e => setSoapNote({ ...soapNote, objective: e.target.value })} 
                    placeholder="Observed behavior, mood, affect..."
                  />

                  <label><strong>Assessment (Clinical impression):</strong></label>
                  <textarea 
                    style={styles.textarea} 
                    value={soapNote.assessment} 
                    onChange={e => setSoapNote({ ...soapNote, assessment: e.target.value })} 
                    placeholder="Progress, diagnosis updates..."
                  />

                  <label><strong>Plan (Treatment plan):</strong></label>
                  <textarea 
                    style={styles.textarea} 
                    value={soapNote.plan} 
                    onChange={e => setSoapNote({ ...soapNote, plan: e.target.value })} 
                    placeholder="Next session goals, homework..."
                  />

                  <button type="submit" style={styles.btn}>Save SOAP Note</button>
                </form>
              ) : (
                <p style={{ color: '#6b7280' }}>Please select an appointment from Today's Dashboard to open the SOAP editor.</p>
              )}
            </div>
          )}

          {activeTab === 'clients' && <div style={styles.card}><h3>Clients Directory</h3></div>}
          {activeTab === 'calendar' && <div style={styles.card}><h3>Calendar</h3></div>}
          {activeTab === 'billing' && <div style={styles.card}><h3>Billing</h3></div>}
        </div>
      </main>
    </div>
  );
}