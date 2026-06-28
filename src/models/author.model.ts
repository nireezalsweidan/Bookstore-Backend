import { Schema, model, Document } from "mongoose";

export interface IAuthor extends Document {
    name: string;
    country: string;
}

const authorSchema = new Schema<IAuthor>(
    {
        name: { type: String, required: true, trim: true },
        country: { type: String, required: true }
    },
    { timestamps: true }
);

export default model<IAuthor>("Author", authorSchema);
