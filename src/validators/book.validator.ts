import { z } from "zod";

export const createBookSchema = z.object({   
    title: z.string().min(1, "Title is required"),

    price: z
        .number()
        .min(0, "Price must be positive"),

    stock: z
        .number()
        .min(0)
        .optional(),

    genre: z.string().min(1),

    publicationYear: z
        .number()
        .int()
        .min(1000)
        .max(new Date().getFullYear()),

    author: z.string(),

    publisher: z.string()
});

export const updateBookSchema = z.object({
    title: z.string().optional(),
    price: z.number().min(0).optional(),
    stock: z.number().min(0).optional(),
    genre: z.string().optional(),
    publicationYear: z.number().optional(),
    author: z.string().optional(),
    publisher: z.string().optional()
});