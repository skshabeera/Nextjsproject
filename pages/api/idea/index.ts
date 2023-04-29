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


type AboutUsItem = {
    image: string;
    title: string;
    description: string;
};

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
                const description = "EverToast is a revolutionary toaster that never runs out of battery, ensuring that you can always enjoy perfectly toasted bread, bagels, and more. With its innovative power source, you'll never have to worry about running out of juice in the middle of making breakfast. EverToast is also equipped with a range of customizable settings, allowing you to get your toast just the way you like it every time."

                const targetAudience = ["Tech Enthusias", "Creative Professionals", "Fitness Enthusiasts", "Small Business Owners", "Students and Educators", "Travel and Adventure Seekers"]

                const aboutUsItems: AboutUsItem[] = [
                    {
                        title: "about us 1",
                        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    },
                    {
                        title: "about us 1",
                        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    },
                    {
                        title: "about us 1",
                        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    }, {
                        title: "about us 1",
                        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    }
                ]
                res.status(200).json({ name, description, targetAudience, aboutUsItems });
                // res.status(200).json({ response });
            } catch (error) {
                console.error("error", JSON.stringify(error?.response?.data))
                res.json({ message: error instanceof Error ? error.message : "Something went wrong" });
            }
        } catch (err) {
        }
    }

}