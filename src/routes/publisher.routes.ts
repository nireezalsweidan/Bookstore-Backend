import { Router } from "express";
import {
    createPublisher,
    getPublishers,
    getPublisherById,
    updatePublisher,
    deletePublisher
} from "../controllers/publisher.controller";
import { validate } from "../middlewares/validate.middleware";
import { createPublisherSchema } from "../validators/publisher.validator";
const router = Router();

router.post("/", validate(createPublisherSchema), createPublisher);
router.get("/", getPublishers);
router.get("/:id", getPublisherById);
router.put("/:id", updatePublisher);
router.delete("/:id", deletePublisher);

export default router;
