import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://shabeera:Shabeera@cluster0.bo2j2dk.mongodb.net/?retryWrites=true&w=majority"

export async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(uri)
    const db = client.db()
    return {
      client,
      db,
    }
  } catch (error) {
    console.error({ connectToDatabase: error })
    throw new Error(error)
  }
}