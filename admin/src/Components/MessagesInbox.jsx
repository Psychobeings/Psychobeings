import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MessageSquareText, Mail, Phone, Clock3, CheckCheck } from 'lucide-react';

const API_BASE_URL = (process.env.REACT_APP_URL || 'http://localhost:8080/').replace(/\/?$/, '/');

export default function MessagesInbox() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}email/messages`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken') || ''}`,
        },
      });
      setMessages(response.data || []);
      setError('');
    } catch (err) {
      console.error('Failed to fetch messages:', err);
      setError('Unable to load messages right now.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`${API_BASE_URL}email/messages/${id}/status`, { status }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken') || ''}`,
        },
      });
      fetchMessages();
    } catch (err) {
      console.error('Failed to update message status:', err);
    }
  };

  const replyToMessage = (message) => {
    const subject = encodeURIComponent(`Re: ${message.subject || 'Your inquiry'}`);
    const body = encodeURIComponent(
      `Hi ${message.name},\n\nThank you for reaching out to Psychobeings.\n\nWe have received your message and will get back to you shortly.\n\nBest regards,\nPsychobeings Team`
    );
    window.location.href = `mailto:${message.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-semibold">Inbox</p>
          <h1 className="text-2xl font-bold text-stone-900 mt-2">Contact Messages</h1>
        </div>
        <div className="bg-white border border-stone-200 rounded-2xl px-3 py-2 text-sm font-semibold text-stone-700">
          {messages.length} total
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-4 text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 text-sm text-stone-500">
          Loading messages...
        </div>
      ) : messages.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-8 text-center text-stone-500">
          No client messages yet.
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message._id} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#237A88]/10 text-[#237A88] p-2 rounded-xl">
                      <MessageSquareText className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900">{message.name}</h3>
                      <p className="text-xs text-stone-500">{message.subject || 'General Inquiry'}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-stone-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      {message.email}
                    </span>
                    {message.phone && (
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        {message.phone}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="w-3.5 h-3.5" />
                      {new Date(message.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-stone-700 whitespace-pre-wrap">{message.message}</p>
                </div>

                <div className="flex flex-col gap-2 min-w-[180px]">
                  <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                    message.status === 'new'
                      ? 'bg-amber-100 text-amber-700'
                      : message.status === 'read'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {message.status}
                  </span>

                  <button
                    onClick={() => updateStatus(message._id, 'read')}
                    className="text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-2 rounded-xl"
                  >
                    Mark as read
                  </button>
                  <button
                    onClick={() => updateStatus(message._id, 'replied')}
                    className="text-xs font-medium bg-[#237A88] hover:bg-[#1a5f68] text-white px-3 py-2 rounded-xl flex items-center justify-center gap-2"
                  >
                    <CheckCheck className="w-3.5 h-3.5" />
                    Mark as replied
                  </button>
                  <button
                    onClick={() => replyToMessage(message)}
                    className="text-xs font-medium border border-[#237A88]/30 text-[#237A88] bg-[#237A88]/5 hover:bg-[#237A88]/10 px-3 py-2 rounded-xl"
                  >
                    Reply by email
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
