import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../helpers/connectToDatabase";
import { Configuration, OpenAIApi } from "openai";

// todo add try catch

const OPENAI_API_KEY = "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"

const configuration = new Configuration({
    // shabeera setup later
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { idea } = JSON.parse(req.body);
            
            if (!idea) {
                res.status(400).json({ message: 'Idea is required' });
                return;
            }

            try {
                // const prompt = `Generate a name, description, and target audience for a startup idea:\n\nIdea: ${idea}\n\nName: `;
                // const response = await openai.createCompletion({
                //     model: "text-davinci-003",
                //     prompt,
                //     max_tokens: 150,
                //     n: 1,
                //     stop: null,
                //     temperature: 0.8,
                // });
                // console.log(JSON.stringify({ response }))
                // const output = response.choices[0].text.trim().split('\n');
                // const name = output[0];
                // const description = output[1].substring("Description: ".length);
                // const targetAudience = output[2].substring("Target audience: ".length);
                // example `Generate a name, description, and target audience for a startup idea:\n\nIdea: ${a toaster that never runs out of battery }\n\nName: `
                const name = "EverToast"
                const description= "EverToast is a revolutionary toaster that never runs out of battery, ensuring that you can always enjoy perfectly toasted bread, bagels, and more. With its innovative power source, you'll never have to worry about running out of juice in the middle of making breakfast. EverToast is also equipped with a range of customizable settings, allowing you to get your toast just the way you like it every time."
                
                const targetAudience = "Busy professionals, families, and anyone who loves toast but doesn't have time to waste waiting for their toaster to charge or dealing with the frustration of a dead battery. EverToast is perfect for people who value convenience and reliability in their appliances, and who want a high-quality toaster that will last for years to come."
                res.status(200).json({ name, description, targetAudience });
                // res.status(200).json({ response });
            } catch (error) {
                console.error("error", JSON.stringify(error?.response?.data))
                res.json({ message: error instanceof Error ? error.message : "Something went wrong" });
            }
        } catch (err) {
        }
    }

}