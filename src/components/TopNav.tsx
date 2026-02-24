import { useEffect, useState } from "react";

export default function TopNav() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                timeZone: "America/New_York",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full px-6 py-8 flex justify-between items-start z-[100] pointer-events-none">
            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent -z-10"></div>

            <div className="flex-1 text-xs font-mono text-zinc-400 uppercase tracking-widest pointer-events-auto">
                NEW YORK, US<br />{time}
            </div>

            <div className="flex-1 flex justify-end pointer-events-auto">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-light/80 backdrop-blur-md border border-white/5 rounded-full shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 relative">
                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    </div>
                    <span className="text-white/90 text-[10px] md:text-xs font-medium tracking-widest uppercase">AVAILABLE FOR WORK</span>
                </div>
            </div>
        </div>
    );
}
