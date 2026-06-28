import { Router } from "express";
import {
    createAuthor,
    getAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
} from "../controllers/author.controller";
import { validate } from "../middlewares/validate.middleware";
import { createAuthorSchema } from "../validators/author.validator";
const router = Router();

router.post("/", validate(createAuthorSchema), createAuthor);
router.get("/", getAuthors);
router.get("/:id", getAuthorById);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);

export default router;
