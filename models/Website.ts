import mongoose, { Document } from 'mongoose';

interface AboutUsItem {
  heading: string;
  description: string;
  image: string;
}

export interface WebsiteDocument extends Document {
  project_id: mongoose.Types.ObjectId;
  hero: {
    title: string;
    description: string;
    image: string;
  };
  about_us: AboutUsItem[];
  createdAt: Date;
  updatedAt: Date;
}

const websiteSchema = new mongoose.Schema({
  project_id: { type: String, required: true },
  hero: {
    heading: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  about_us: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
}, {
  timestamps: true, // Automatically adds and manages createdAt and updatedAt fields
});

export const Website = mongoose.models.Website || mongoose.model('Website', websiteSchema);
