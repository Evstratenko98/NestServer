import { ExerciseCategory } from './../../exerciseCategory/schemas/exerciseCategory.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import * as mongoose from 'mongoose'

export type ExerciseDocument = Exercise & Document

@Schema()
export class Exercise {
    @Prop()
    title: string

    @Prop()
    description: string

    // @Prop()
    // picture: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'ExerciseCategory'})
    category: ExerciseCategory
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise)