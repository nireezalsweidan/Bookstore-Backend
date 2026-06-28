import { Router } from "express";

import {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
} from "../controllers/book.controller";

import { validate } from "../middlewares/validate.middleware";

import {
    createBookSchema,
    updateBookSchema
} from "../validators/book.validator";

const router = Router();

router.post("/", validate(createBookSchema), createBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.put("/:id", validate(updateBookSchema), updateBook);
router.delete("/:id", deleteBook);

export default router;
