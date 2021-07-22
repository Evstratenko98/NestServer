import { FileService, FileType } from './../files/file.service';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateExerciseDto } from "./dto/create-exercise.dto";
import { Exercise, ExerciseDocument } from "./schemas/exercise.schema";
import { ExerciseCategory, ExerciseCategoryDocument } from 'src/exerciseCategory/schemas/exerciseCategory.schema';

@Injectable() 
export class ExerciseService {
    constructor(
        @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>,
        @InjectModel(ExerciseCategory.name) private exerciseCategoryModel: Model<ExerciseCategoryDocument>,         
        private fileService: FileService
    ) {}

    async create(dto: CreateExerciseDto): Promise<Exercise> {
        // const picturePath = this.fileService.createFile(FileType.PICTURE, picture)
        // console.log(picturePath)
        // const exercise = await this.exerciseModel.create({...dto, picture: picturePath})
        const exercise = await this.exerciseModel.create({...dto})
        const exerciseCategory = await this.exerciseCategoryModel.findById(dto.exerciseCategoryId)
        exerciseCategory.exercises.push(exercise._id)
        await exerciseCategory.save()
        return exercise
    }

    async findAll() {
        const exercises = await this.exerciseModel.find()
        return exercises
    }

    async findOne(id: ObjectId): Promise<Exercise> {
        const exercise = await this.exerciseModel.findById(id)
        return exercise
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const exercise = await this.exerciseModel.findByIdAndDelete(id)
        return exercise._id
    }

    async update(id: ObjectId, dto: CreateExerciseDto): Promise<Exercise> {
        const exercise = await this.exerciseModel.findById(id)
        exercise.description = dto.description
        exercise.save()
        return exercise
    }
}