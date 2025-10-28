export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        {/* Glowing Circuit Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© 2025 Dr. Mouhammad Samman. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Powered by</span>
            <span className="text-primary font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
              DR.SAMMAN AI
            </span>
          </div>
        </div>

        {/* AI Signature Animation */}
        <div className="mt-8 flex justify-center">
          <svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="signature-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(100, 100, 255)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(100, 100, 255)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(150, 100, 255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 10,20 Q 50,10 100,20 T 190,20"
              stroke="url(#signature-gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="400"
              strokeDashoffset="400"
            >
              <animate attributeName="stroke-dashoffset" from="400" to="0" dur="3s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      </div>
    </footer>
  )
}
