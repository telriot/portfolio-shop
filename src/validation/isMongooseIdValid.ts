import mongoose from 'mongoose'

export const isMongooseIdValid = (id:string) => mongoose.Types.ObjectId.isValid(id)