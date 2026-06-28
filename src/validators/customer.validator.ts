import { z } from "zod";

export const createCustomerSchema = z.object({
    name: z.string().min(2, "Name too short"),
    email: z.email(), 
    phone: z.string().min(8, "Phone number too short").max(15, "Phone number too long")
});