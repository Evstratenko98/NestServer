import { ObjectId } from "mongoose"

export class CreateExerciseDto {
    readonly title: string
    readonly description: string
    readonly exerciseCategoryId: ObjectId
}