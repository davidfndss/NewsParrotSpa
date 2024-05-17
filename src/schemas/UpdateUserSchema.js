import { z } from "zod"

const UpdateUserSchema = z.object({
  name: z.string().min(3, { message: "Nome muito curto" }).max(30, { message: "O nome não pode ter mais de 30 caracteres" }).optional(),
  avatar: z.string().optional(),
  background: z.string().optional(),
})

export { UpdateUserSchema }
