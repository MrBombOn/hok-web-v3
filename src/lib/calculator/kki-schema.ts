import { z } from 'zod'

export const SubjectSchema = z.object({
  name: z.string().min(1, 'Tantárgy neve kötelező'),
  grade: z.number().min(1).max(5, 'Jegy 1-5 között'),
  credit: z.number().min(1).max(30, 'Kredit 1-30'),
  ghost: z.boolean().default(false),
})

export const KkiInputSchema = z.object({
  subjects: z.array(SubjectSchema).min(1),
})

export type Subject = z.infer<typeof SubjectSchema>
export type KkiInput = z.infer<typeof KkiInputSchema>
