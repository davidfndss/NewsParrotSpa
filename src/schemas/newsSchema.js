import { z } from "zod"

const newsSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Título muito curto" }),
  text: z
    .string()
    .min(10, { message: "Descrição muito curta" }),
  banner: z.string().min(1, { message: "Campo obrigatório" })
})

export { newsSchema }