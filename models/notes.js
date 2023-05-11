import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'title required'],
    },
    body: {
      type: String,
      trim: true,
      required: [true, 'body required'],
    },
    image_url: {
      type: String,
      trim: true,
      required: [true, 'image url required'],
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Note = mongoose.model('Note', noteSchema);
