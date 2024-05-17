import { z } from "zod"

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .toLowerCase(),
  password: z
    .string()
    .min(6, { message: "Senha muito curta" }),
})

export { signInSchema }