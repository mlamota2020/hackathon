import { Schema, model, models } from 'mongoose'
/** Model of the reports. */
const ReportSchema = new Schema({
    name: { 
        type: String,
        required: true,
    },
    report: { 
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export default models.Report || model('Report', ReportSchema);