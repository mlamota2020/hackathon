import { connect } from 'mongoose'

const conn = {
    isConnected: false
}

export async function dbConnect() {
    if (conn.isConnected) return

    const db = await connect(process.env.DB_URL)
    conn.isConnected = db.connections[0].readyState
}