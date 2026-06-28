import {model, Schema, Document, Types } from "mongoose"

export interface IBook extends Document {
    title: string;
    price: number;
    author: Types.ObjectId;
    publisher: Types.ObjectId;
    publicationYear: number;
    stock: number;
    genre: string;
}
const bookSchema = new Schema<IBook> (
    {
        title: {type: String, required: true},
        price: {type: Number, required: true, min: 0},
        stock: {type: Number, default: 0},
        genre: {type: String, required: true},
        publicationYear: {type: Number, required: true},
        author: {type: Schema.Types.ObjectId, ref: "Author", required: true},
        publisher: {type: Schema.Types.ObjectId, ref: "Publisher", required: true}
    },
    { timestamps: true }
)
export default model<IBook>("Book", bookSchema);
