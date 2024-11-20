import { mongoose } from 'mongoose';
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Set phone number'],
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: [true, 'Set contact type'],
      default: 'personal',
    },
  },
  { versionKey: false, timestamps: true },
);

export const ContactsCollection = mongoose.model('Contact', contactSchema);
