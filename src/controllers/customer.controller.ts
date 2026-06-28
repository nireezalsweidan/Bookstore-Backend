import { Request, Response, NextFunction } from "express";
import Customer from "../models/customer.model";

export const createCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        next(error);
    }
};

export const getCustomers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        next(error);
    }
};

export const getCustomerById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
            return;
        }
        res.json(customer);
    } catch (error) {
        next(error);
    }
};

export const updateCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(customer);
    } catch (error) {
        next(error);
    }
};

export const deleteCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
