import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {Document} from 'mongoose';
import * as mongoose from 'mongoose'
import { Exercise } from "src/exercise/schemas/exercise.schema";

export type ExerciseCategoryDocument = ExerciseCategory & Document

@Schema()
export class ExerciseCategory {
    @Prop()
    title: string

    @Prop()
    description: string

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'}]})
    exercises: Exercise[]
}

export const ExerciseCategorySchema = SchemaFactory.createForClass(ExerciseCategory)