import { Request, Response } from "express";
import Book from "../models/book.model";

export const createBook = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json(book);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getBooks = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const books = await Book.find()
            .populate("author")
            .populate("publisher");

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getBookById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const book = await Book.findById(req.params.id)
            .populate("author")
            .populate("publisher");

        if (!book) {
            res.status(404).json({
                message: "Book not found"
            });
            return;
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateBook = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!book) {
            res.status(404).json({
                message: "Book not found"
            });
            return;
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteBook = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const book = await Book.findByIdAndDelete(
            req.params.id
        );

        if (!book) {
            res.status(404).json({
                message: "Book not found"
            });
            return;
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });
    } catch (error) {
        res.status(500).json(error);
    }
};