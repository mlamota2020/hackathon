import { dbConnect } from 'utils/mongoose'
import { useSession } from 'next-auth/react'
import Report from 'models/Report'

dbConnect()
const { data: session } = useSession()

export default async function handler(req, res) {
    const { data: session } = useSession()

    switch (method) {
        case "GET":
            try {
                const reports = await Report.find().filter({'name': session.user.name})
            } catch (error) {
                return res.status(400).json({error: error.message})
            }
    }
}