import {Request, Response, NextFunction} from "express";
import Author from "../models/author.model";


export const createAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        next(error);
    }
};

export const getAuthors = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch(error) {
        next(error);
    }
}

export const getAuthorById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            res.status(404).json({message: "Author not Found"});
            return;
        }
        res.json(author);
    } catch(error) {
        next(error);
    }
}

export const updateAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const author = await Author.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true, runValidators: true }
        );
        res.json(author);
    } catch(error) {
        next(error);
    }
}

export const deleteAuthor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await Author.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch(error) {
        next(error);
    }
}