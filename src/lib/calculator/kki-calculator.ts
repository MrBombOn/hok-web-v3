import { KkiInput } from './kki-schema'
import { toast } from 'sonner' // Később

export function calculateKKI(input: KkiInput): { kki: number; weightedAvg: number; completedCredits: number; totalCredits: number } {
  const activeSubjects = input.subjects.filter(s => !s.ghost)
  
  if (activeSubjects.length === 0) return { kki: 0, weightedAvg: 0, completedCredits: 0, totalCredits: 0 }
  
  const totalCredits = input.subjects.reduce((sum, s) => sum + s.credit, 0)
  const completedCredits = activeSubjects.reduce((sum, s) => sum + s.credit, 0)
  
  const weightedSum = activeSubjects.reduce((sum, s) => sum + (s.grade * s.credit), 0)
  const weightedAvg = weightedSum / 30 // TVSZ /30 [web:20]
  const kki = weightedAvg * (completedCredits / totalCredits)
  
  // TVSZ check
  if (completedCredits < 20) toast.warning('Figyelem: Kevés teljesített kredit!')
  
  return { kki: Math.round(kki * 100) / 100, weightedAvg: Math.round(weightedAvg * 100) / 100, completedCredits, totalCredits }
}
