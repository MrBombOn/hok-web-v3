'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, ToggleLeft, ToggleRight } from 'lucide-react'
import { Subject } from '@/lib/calculator/kki-schema'
import { calculateKKI } from '@/lib/calculator/kki-calculator'
import { cn } from '@/lib/design-system'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

type KkiInput = { subjects: Subject[] }

export default function KKICalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: '', grade: 0, credit: 0, ghost: false }
  ])
  const [result, setResult] = useState<{ kki: number; weightedAvg: number; completedCredits: number; totalCredits: number } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const activeSubjects = subjects.filter(s => s.name.trim() && !s.ghost)
    if (activeSubjects.length === 0) return alert('Adj meg legalább 1 aktív tantárgyat!')
    
    const input: KkiInput = { subjects }
    const calcResult = calculateKKI(input)
    setResult(calcResult)
  }

  const addSubject = () => setSubjects([...subjects, { name: '', grade: 0, credit: 0, ghost: false }])
  const toggleGhost = (index: number) => {
    const newSubs = [...subjects]
    newSubs[index].ghost = !newSubs[index].ghost
    setSubjects(newSubs)
  }
  const updateSubject = (index: number, field: 'name' | 'grade' | 'credit', value: string | number) => {
    const newSubs = [...subjects]
    newSubs[index] = { ...newSubs[index], [field]: value }
    setSubjects(newSubs)
  }
  const removeSubject = (index: number) => {
    if (subjects.length > 1) setSubjects(subjects.filter((_, i) => i !== index))
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 max-w-6xl mx-auto rounded-main shadow-soft bg-[var(--color-light-panel)] dark:bg-[var(--color-dark-panel)]"
    >
      <motion.h1 
        initial={{ scale: 0.9 }} 
        animate={{ scale: 1 }}
        className="text-4xl md:text-6xl font-black mb-16 text-center bg-clip-text text-transparent aurora-grad drop-shadow-glow"
      >
        🧮 KKI Kalkulátor (PTE MIK TVSZ)
      </motion.h1>
      
      <form onSubmit={handleSubmit} className="grid gap-8 max-w-4xl mx-auto">
        {subjects.map((sub, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: i * 0.05 }}
          >
            <Card className="overflow-hidden hover:shadow-glow transition-all">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <h3 className="text-2xl font-bold flex-1">📚 Tantárgy {i + 1}</h3>
                  <div className="flex gap-3 flex-wrap">
                    <Button 
                      type="button" 
                      variant={sub.ghost ? "ghost" : "outline"}
                      size="sm"
                      onClick={() => toggleGhost(i)}
                    >
                      {sub.ghost ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                      <span className="hidden sm:inline">Ghost</span>
                    </Button>
                    {subjects.length > 1 && (
                      <Button 
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => removeSubject(i)}
                      >
                        <Trash2 size={18} />
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-8">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-[var(--color-light-text)] dark:text-[var(--color-dark-text)]">
                      📖 Tantárgy neve
                    </label>
                    <Input 
                      placeholder="Pl. Webfejlesztés"
                      value={sub.name} 
                      onChange={(e) => updateSubject(i, 'name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-[var(--color-light-text)] dark:text-[var(--color-dark-text)]">
                      🎯 Jegy (1-5)
                    </label>
                    <Input 
                      type="number" 
                      placeholder="5" 
                      value={sub.grade || ''} 
                      onChange={(e) => updateSubject(i, 'grade', +e.target.value)}
                      min={1} max={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-[var(--color-light-text)] dark:text-[var(--color-dark-text)]">
                      📊 Kredit (1-30)
                    </label>
                    <Input 
                      type="number" 
                      placeholder="5" 
                      value={sub.credit || ''} 
                      onChange={(e) => updateSubject(i, 'credit', +e.target.value)}
                      min={1} max={30}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            type="button" 
            variant="outline"
            size="lg"
            onClick={addSubject}
            className="flex-1 max-w-sm mx-auto sm:mx-0"
          >
            ➕ Új tantárgy
          </Button>
          <Button 
            type="submit"
            size="xl"
            className="flex-1 max-w-sm mx-auto sm:mx-0"
          >
            🚀 KKI Számítása & AutoSave
          </Button>
        </div>
      </form>
      
      {result && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-[var(--color-aurora-cyan)] to-[var(--color-aurora-blue)] border-none shadow-2xl">
            <CardContent className="p-12 text-white text-center">
              <motion.h2 
                initial={{ y: 20 }} 
                animate={{ y: 0 }}
                className="text-4xl font-black mb-8 drop-shadow-2xl"
              >
                📈 EREDMÉNY
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-2xl">
                <div className="space-y-2">
                  <div className="text-6xl font-black">★ {result.kki}</div>
                  <div className="text-lg opacity-90">KKI</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-black">{result.weightedAvg}</div>
                  <div className="text-lg opacity-90">Súlyozott átlag (/30)</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">{result.completedCredits}/{result.totalCredits}</div>
                  <div className="text-lg opacity-90">Kredit arány</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </motion.div>
  )
}
