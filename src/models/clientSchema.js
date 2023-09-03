import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    contatos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "contactSchema",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Clients", clientSchema);
