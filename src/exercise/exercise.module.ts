import { ExerciseCategory, ExerciseCategorySchema } from './../exerciseCategory/schemas/exerciseCategory.schema';
import { Exercise, ExerciseSchema } from './schemas/exercise.schema';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ExerciseController } from "./exercise.controller";
import { ExerciseService } from "./exercise.service";
import { FileService } from 'src/files/file.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Exercise.name, schema: ExerciseSchema}]),
        MongooseModule.forFeature([{name: ExerciseCategory.name, schema: ExerciseCategorySchema}]),
    ],
    controllers: [ExerciseController],
    providers: [ExerciseService, FileService],
})
export class ExerciseModule {}