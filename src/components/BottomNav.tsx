import { Home, Mail, Briefcase } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-surface/80 backdrop-blur-xl border border-border shadow-2xl">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
          <Home className="w-4 h-4" />
          Home
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
          <Briefcase className="w-4 h-4" />
          Work
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
          <Mail className="w-4 h-4" />
          Contact
        </button>
      </div>
    </div>
  );
}
