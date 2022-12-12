import { dbConnect } from 'utils/mongoose'
import Report from 'models/Report'
import ResolvedReport from 'models/ResolvedReport'

dbConnect()

export default async (req, res) => {
    
    const { method, body, query: {id} } = req

    switch (method) {
        case "GET":
            try {
                const report = await Report.findById(id)
                if (!report) return res.status(400).json({msg: "Report not founded."})
                return res.status(200).json(report)
            } catch (error) {
                return res.status(400).json({msg: error.message })
            }

        case "PUT":
            try {
                const updatedReport = await Report.findByIdAndUpdate(id, body, {
                    new: true
                })
                if (!updatedReport) return res.status(404).json({msg: "Report not founded."})
                return res.status(200).json(updatedReport)
            } catch (error) {
                return res.status(500).json({msg: error.message})
            }

        case "DELETE":
            try {
                const { person_name, title, report, state } = await Report.findById(id)
                const resolvedReport = new ResolvedReport({person_name, title, report, state})
                resolvedReport.save()
                await Report.findByIdAndDelete(id)
                return res.status(204).json()
            } catch (error) {
                return res.status(400).json({msg: error.message })
            }
    
        default:
            return res.status(400).json({msg: "That method isn't supported."})
 }
}