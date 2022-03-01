import mongoose, { Schema } from "mongoose";

const reqString = {
    type: String,
    required: true
}
const Str = {
    type: String,
}

const schema = new Schema(
    {
        userId: reqString,
        guildId: reqString,
        staffId: reqString,
        reason: Str,
        expires: Date,
        type: {
            type: String,
            required: true,
            enum: ['Suspend', 'MakeElite', 'MakeHoster', 'MakeImmortal', 'MakeJigsaw', 'MakeSaint', 'MakeVeteran']
        }
    },
    {
        timestamps: true,
    }
)

const name = 'punishments'
export default mongoose.models[name] || mongoose.model(name, schema)