import { z } from "zod";

export const createAuthorSchema = z.object({
    name: z.string().min(2, "Name too short"),
    country: z.string()
});