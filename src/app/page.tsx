export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      
      <h1 className="text-6xl font-black text-aurora-cyan">
        PTE MIK HÖK
      </h1>
      
      <p className="text-2xl text-light-text dark:text-dark-text">
        Clean Aurora v2 – Tailwind v3 Teszt
      </p>
      
      <div className="bg-aurora-grad text-white px-8 py-4 rounded-xl shadow-glow">
        Aurora Gradient Gomb
      </div>
      
      <div className="w-64 h-32 bg-dark-panel rounded-main shadow-soft border border-dark-border flex items-center justify-center">
        <span className="text-dark-text">Card Teszt</span>
      </div>

    </main>
  )
}
