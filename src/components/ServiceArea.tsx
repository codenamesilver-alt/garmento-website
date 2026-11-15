"use client";

export default function ServiceArea() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-md min-h-[320px] flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #EAF2F8 0%, #FAF9F6 60%, #FFFFFF 100%)" }}
    >
      <style>{`
        @keyframes sa-scooter {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes sa-garment {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.9; }
          50% { transform: translateY(-18px) rotate(8deg); opacity: 1; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.9; }
        }
        @keyframes sa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes sa-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Road */}
      <div className="absolute bottom-12 left-0 right-0 h-1.5" style={{ backgroundColor: "rgba(20,45,78,0.12)" }} />
      <div className="absolute bottom-[46px] left-0 right-0 flex justify-between px-6 opacity-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-6 h-1 rounded" style={{ backgroundColor: "#142D4E" }} />
        ))}
      </div>

      {/* Shop (left) */}
      <div className="absolute left-6 bottom-14 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: "#142D4E" }}>
          <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M9 22V12h6v10" />
          </svg>
        </div>
        <p className="font-nav text-xs font-semibold mt-2" style={{ color: "#142D4E" }}>Garmento</p>
      </div>

      {/* House (right) */}
      <div className="absolute right-6 bottom-14 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: "#B89532" }}>
          <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M9 22V12h6v10" />
          </svg>
        </div>
        <p className="font-nav text-xs font-semibold mt-2" style={{ color: "#142D4E" }}>Your Door</p>
      </div>

      {/* Scooter moving */}
      <div className="absolute bottom-[52px] left-0 right-0 overflow-hidden h-12">
        <div className="absolute" style={{ animation: "sa-scooter 6s linear infinite", left: "0" }}>
          <div className="flex items-center gap-1">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#142D4E" strokeWidth={1.5}>
              <circle cx="5" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              <path d="M5 17h4l2-5h4l2 3h3" />
              <path d="M9 12l1-4h3" />
            </svg>
            <span className="text-xl" style={{ animation: "sa-float 1.2s ease-in-out infinite" }}>🧺</span>
          </div>
        </div>
      </div>

      {/* Floating garments */}
      {["👕", "👖", "👗"].map((g, i) => (
        <div
          key={i}
          className="absolute text-3xl"
          style={{
            left: `${20 + i * 22}%`,
            top: `${18 + (i % 2) * 12}%`,
            animation: `sa-garment 3s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {g}
        </div>
      ))}

      {/* Pulse rings around shop */}
      <div className="absolute left-[calc(6px+32px)] bottom-[calc(56px+32px)] -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-4 h-4">
          <span className="absolute inset-0 rounded-full" style={{ backgroundColor: "#B89532", animation: "sa-pulse 2s ease-out infinite" }} />
          <span className="absolute inset-0 rounded-full" style={{ backgroundColor: "#B89532" }} />
        </div>
      </div>

      {/* Badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-nav font-semibold shadow-md" style={{ backgroundColor: "#142D4E", color: "#FFFFFF" }}>
        Free Doorstep Pickup &amp; Delivery
      </div>

      {/* Distance label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="font-heading text-sm font-bold" style={{ color: "#142D4E" }}>Within 3 km radius</p>
        <p className="font-body text-xs" style={{ color: "#414B56" }}>We come to you — no extra charge</p>
      </div>
    </div>
  );
}
