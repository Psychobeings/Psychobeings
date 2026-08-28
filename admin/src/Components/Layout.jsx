import { useNavigate, Outlet } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Header Bar */}
      <header className="flex justify-between items-center p-4 bg-white border-b">
        <span className="font-bold text-lg">Psychobeings Clinical Portal</span>
        
        {/* Add the onClick handler here */}
        <button
          onClick={() => navigate('/notes/new')}
          className="flex items-center gap-2 bg-[#237A88] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm hover:bg-[#1C646F] transition"
        >
          <span>+ New Progress Note</span>
        </button>
      </header>

      {/* Renders nested routes like Dashboard, Client Roster, and /notes/new */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}