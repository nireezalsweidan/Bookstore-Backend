import { z } from "zod";

export const createPublisherSchema = z.object({
    name: z.string().min(2, "Name too short"),
    country: z.string()
});