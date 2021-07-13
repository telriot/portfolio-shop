import mongoose from 'mongoose'

export const createMongooseId = () : string => new mongoose.Types.ObjectId().toHexString()
