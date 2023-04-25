import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../helpers/connectToDatabase"
import openai from 'openai';


// todo add try catch

const openAIKey = "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"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { db, client } = await connectToDatabase()
            await client.connect()
            console.log(req.body, "bboyd")
            const body = JSON.parse(req.body)
            const { description = undefined , type = ""} = body;
            console.log({type})

            // if (!description) { // data is not sent to us
            //     throw new Error("Description is not provided")
            // }

            // validate the idea

            // openai.chat.create(
            //     model="gpt-3.5-turbo",
            //     messages=[
            //           {"role": "system", "content": "You are a helpful assistant."},
            //           {"role": "user", "content": "Who won the world series in 2020?"},
            //           {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            //           {"role": "user", "content": "Where was it played?"}
            //       ]
            //   )
            //   res.status(200).json(response.choices[0].text);

            if(type === "only-description") {
                console.log("getting inside the condition")
                res.status(200).json({
                    values: [
                        {
                            id: 1, 
                            value: "target 1"
                        }, 
                        {
                            id: 2, 
                            value: "target 2"
                        }, 
                        {
                            id: 3, 
                            value: "target 3"
                        }
                    ]
                })

                return
            }
            // using open ai first come up with a company name? 


            // example description: standing desk for programmers 

            // name - desker

            // GPT should provide a good marketing descriptions which can be used in the website

            // send the above data back to frontend
            // todo change the collection name later
            const collection = db.collection('test-shabeera')
            const data = await collection.insertOne({
                text: req.body.name
            })
            await client.close()
            res.status(200).json({
                name: "test shabeera", 
                description: "this desciprtion should be shown in the FE , the FE shoudl show step 2. This shoudl be editable   "
            })
        } catch (error) {
            console.error("error", error)
            res.json({ message : error instanceof Error ? error.message : "Something went wrong" })
        }
    }
}


// import { connectToDatabase } from '../utils/connectToDatabase'