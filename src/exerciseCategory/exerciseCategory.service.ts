import { Injectable } from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Exercise, ExerciseDocument } from "src/exercise/schemas/exercise.schema";
import { CreateExerciseCategoryDto } from "./dto/create-exerciseCategory.dto";
import { ExerciseCategory, ExerciseCategoryDocument } from "./schemas/exerciseCategory.schema";

@Injectable()
export class ExerciseCategoryService {
    constructor(
        @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>,
        @InjectModel(ExerciseCategory.name) private exerciseCategoryModel: Model<ExerciseCategoryDocument>
    ) {}

    async create(dto: CreateExerciseCategoryDto): Promise<ExerciseCategory>{
        const exerciseCategory =  await this.exerciseCategoryModel.create({...dto})
        return exerciseCategory
    }

    async findAll(): Promise<ExerciseCategory[]> {
        const exerciseCategories = await this.exerciseCategoryModel.find()
        return exerciseCategories
    }

    async findOne(id: ObjectId): Promise<ExerciseCategory> {
        const exerciseCategory = await this.exerciseCategoryModel.findById(id).populate('exercises')
        return exerciseCategory
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const exerciseCategory = await this.exerciseCategoryModel.findByIdAndDelete(id)
        return exerciseCategory._id
    }
    
    async update(id: ObjectId, dto: CreateExerciseCategoryDto): Promise<ExerciseCategory> {
        const exerciseCategory = await this.exerciseCategoryModel.findById(id)
        exerciseCategory.description = dto.description
        exerciseCategory.save()
        return exerciseCategory
    }
}