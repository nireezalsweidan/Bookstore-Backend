import { Schema, model, Document } from "mongoose";

export interface ICustomer extends Document {
    name: string;
    email: string;
    phone: string;
}

const customerSchema = new Schema<ICustomer>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        phone: {type: String, required: true}
    },
    { timestamps: true }
);

export default model<ICustomer>("Customer", customerSchema);
