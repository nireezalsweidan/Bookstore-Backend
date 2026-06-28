import { Schema, model, Document } from "mongoose";

export interface IPublisher extends Document {
    name: string;
    country: string;
}

const publisherSchema = new Schema<IPublisher>(
    {
        name: { type: String, required: true, trim: true },
        country: { type: String, required: true }
    },
    { timestamps: true }
);

export default model<IPublisher>("Publisher", publisherSchema);
