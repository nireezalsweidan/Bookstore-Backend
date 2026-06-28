import { z } from "zod";

export const createOrderSchema = z.object({
    customer: z.string(),

    books: z.array(
        z.object({
            book: z.string(),
            quantity: z.number().int().min(1),
            unitPrice: z.number().min(0)
        })
    ).min(1),

    totalAmount: z.number().min(0),

    address: z.string().min(1),

    status: z.enum([
        "Processing",
        "Shipped",
        "Delivered"
    ]).optional(),

    paymentMethod: z.enum([
        "Cash on Delivery",
        "Credit Card"
    ])
});

export const updateOrderSchema = z.object({
    customer: z.string().optional(),

    books: z.array(
        z.object({
            book: z.string(),
            quantity: z.number().int().min(1),
            unitPrice: z.number().min(0)
        })
    ).optional(),

    totalAmount: z.number().min(0).optional(),

    address: z.string().optional(),

    status: z.enum([
        "Processing",
        "Shipped",
        "Delivered"
    ]).optional(),

    paymentMethod: z.enum([
        "Cash on Delivery",
        "Credit Card"
    ]).optional()
});