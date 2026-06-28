import {model, Schema, Document, Types } from "mongoose"

interface OrderedBook {
    book: Types.ObjectId;
    quantity: number;
    unitPrice: number;
}

export interface IOrder extends Document {
    customer: Types.ObjectId;
    books: OrderedBook[];
    orderDate: Date;
    totalAmount: number;
    address: string;
    status: string;
    paymentMethod: string;
}
const orderSchema = new Schema<IOrder> (
    {
        customer: {type: Types.ObjectId, required: true, ref: "Customer"},
        orderDate: {type: Date, default: Date.now},
        totalAmount: {type: Number, required: true},
        address: {type: String, required: true},
        status: {type: String, enum: ["Processing", "Shipped", "Delivered"],default: "Processing"},
        paymentMethod: {type: String, enum: ["Cash on Delivery", "Credit Card"]},

        books: [{
            book: {type: Schema.Types.ObjectId, ref: "Book", required: true},
            quantity: {type: Number, required: true, min: 1},
            unitPrice: {type: Number, required: true},
        }]
    },
    { timestamps: true }
)
export default model<IOrder>("Order", orderSchema);
