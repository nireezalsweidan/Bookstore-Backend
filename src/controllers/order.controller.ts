import { Request, Response } from "express";
import Order from "../models/order.model";

export const createOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const order = await Order.create(req.body);

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getOrders = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const orders = await Order.find()
            .populate("customer")
            .populate("books.book");

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getOrderById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const order = await Order.findById(req.params.id)
            .populate("customer")
            .populate("books.book");

        if (!order) {
            res.status(404).json({
                message: "Order not found"
            });
            return;
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!order) {
            res.status(404).json({
                message: "Order not found"
            });
            return;
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const order = await Order.findByIdAndDelete(
            req.params.id
        );

        if (!order) {
            res.status(404).json({
                message: "Order not found"
            });
            return;
        }

        res.status(200).json({
            message: "Order deleted successfully"
        });
    } catch (error) {
        res.status(500).json(error);
    }
};