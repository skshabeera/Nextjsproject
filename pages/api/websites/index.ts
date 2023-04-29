import type { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import { connectToDatabase } from '<yes>/helpers/connectToDatabase';
import { Website, WebsiteDocument } from '<yes>/models/Website';

const websiteSchema = Joi.object({
    project_id: Joi.string().required(),
    hero: Joi.object({
        heading: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
    }),
    about_us: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            image: Joi.string().required(),
        })
    )
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            await connectToDatabase();
            // Validate input data
            const { error, value } = websiteSchema.validate(JSON.parse(req.body));
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            // Insert data into the database using Mongoose model
            const website: WebsiteDocument = new Website(value);
            const result = await website.save();

            // Return success response
            return res.status(201).json({ message: 'Website created successfully', _id: result._id });
        } catch (error) {
            // Return error response
            console.log("error", error)
            return res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        // Return method not allowed error
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
