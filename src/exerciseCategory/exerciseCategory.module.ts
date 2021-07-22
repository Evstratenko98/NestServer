import { ExerciseCategoryController } from './exerciseCategory.controller';
import { ExerciseCategoryService } from './exerciseCategory.service';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ExerciseCategory, ExerciseCategorySchema } from "./schemas/exerciseCategory.schema";
import { ExerciseModule } from 'src/exercise/exercise.module';
import { Exercise, ExerciseSchema } from 'src/exercise/schemas/exercise.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: ExerciseCategory.name, schema: ExerciseCategorySchema}]),
        MongooseModule.forFeature([{name: Exercise.name, schema: ExerciseSchema}]),
        ExerciseModule,
    ],
    providers: [ExerciseCategoryService],
    controllers: [ExerciseCategoryController]
})

export class ExerciseCategoryModule {}