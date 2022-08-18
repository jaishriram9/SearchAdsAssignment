import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adsSchema = Schema({
  primaryText: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  CTA: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  CID: [{
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  }],
});

const Add = mongoose.model("Add", adsSchema);
export default Add;
