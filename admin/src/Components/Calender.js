import React, { useState, useEffect } from 'react';
import Calendar from './calendar.js'; // Ensure path matches your project structure

// Initialize calendar instance outside component to persist state across renders
const calendarEngine = new PracticeCalendar({
  slotDuration: 45, // 45-minute practice sessions
  businessHours: { start: 9, end: 17 } // 9:00 AM to 5:00 PM
});

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState('2026-08-26');
  const [slots, setSlots] = useState([]);
  const [clientName, setClientName] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [message, setMessage] = useState('');

  // Update slots list whenever the selected date changes
  useEffect(() => {
    refreshSlots();
  }, [selectedDate]);

  const refreshSlots = () => {
    const dailySlots = calendarEngine.getDailySlots(selectedDate);
    setSlots(dailySlots);
    setSelectedSlot('');
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedSlot || !clientName.trim()) {
      setMessage('Please select a time slot and enter a client name.');
      return;
    }

    try {
      calendarEngine.bookAppointment({
        date: selectedDate,
        startTime: selectedSlot,
        clientName: clientName.trim(),
        type: 'Consultation'
      });

      setMessage(`Successfully booked ${selectedSlot} for ${clientName}!`);
      setClientName('');
      refreshSlots(); // Refresh grid to mark slot as booked
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Practice Schedule & Booking</h2>

      {/* Date Picker */}
      <div style={styles.fieldGroup}>
        <label>Select Date: </label>
        <input 
          type="date" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Feedback Message */}
      {message && <p style={styles.message}>{message}</p>}

      {/* Available Slots Grid */}
      <h3>Available Time Slots</h3>
      <div style={styles.grid}>
        {slots.map((slot) => (
          <button
            key={slot.time}
            disabled={!slot.isAvailable}
            onClick={() => setSelectedSlot(slot.time)}
            style={{
              ...styles.slotButton,
              backgroundColor: !slot.isAvailable 
                ? '#e0e0e0' 
                : selectedSlot === slot.time 
                ? '#007bff' 
                : '#e8f5e9',
              color: !slot.isAvailable 
                ? '#888' 
                : selectedSlot === slot.time 
                ? '#fff' 
                : '#2e7d32',
              cursor: slot.isAvailable ? 'pointer' : 'not-allowed'
            }}
          >
            {slot.time} {slot.isAvailable ? '(Open)' : '(Booked)'}
          </button>
        ))}
      </div>

      {/* Booking Form */}
      <form onSubmit={handleBooking} style={styles.form}>
        <h4>Book Selected Slot ({selectedSlot || 'None'})</h4>
        <input
          type="text"
          placeholder="Client / Patient Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          style={styles.input}
        />
        <button type="submit" disabled={!selectedSlot} style={styles.submitBtn}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

// Inline Styles for quick visualization
const styles = {
  container: { maxWidth: '500px', margin: '20px auto', fontFamily: 'Arial, sans-serif' },
  fieldGroup: { marginBottom: '15px' },
  input: { padding: '8px', fontSize: '14px', width: '100%', boxSizing: 'border-box' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' },
  slotButton: { padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontWeight: 'bold' },
  form: { marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' },
  submitBtn: { marginTop: '10px', padding: '10px', width: '100%', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  message: { color: '#d32f2f', fontWeight: 'bold' }
}
