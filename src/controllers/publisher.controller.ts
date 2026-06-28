import {Request, Response, NextFunction} from "express";
import Publisher from "../models/publisher.model";


export const createPublisher = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const publisher = await Publisher.create(req.body);
        res.status(201).json(publisher);
    } catch (error) {
        next(error);
    }
};

export const getPublishers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const publishers = await Publisher.find();
        res.json(publishers);
    } catch(error) {
        next(error);
    }
}

export const getPublisherById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const publisher = await Publisher.findById(req.params.id);
        if (!publisher) {
            res.status(404).json({message: "Publisher not Found"});
            return;
        }
        res.json(publisher);
    } catch(error) {
        next(error);
    }
}

export const updatePublisher = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const publisher = await Publisher.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true, runValidators: true }
        );
        res.json(publisher);
    } catch(error) {
        next(error);
    }
}

export const deletePublisher = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await Publisher.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch(error) {
        next(error);
    }
}