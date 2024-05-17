import { z } from "zod"

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "A pesquisa não pode ser vazia" })
    .refine(value => !/^\s*$/.test(value), { message: "A pesquisa não pode ter apenas espaços" })
    .refine(value => !/\//.test(value), { message: "A pesquisa não pode conter o caractere '/'" })
})

export { searchSchema }