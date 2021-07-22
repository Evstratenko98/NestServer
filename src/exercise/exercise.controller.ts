import { CreateExerciseDto } from './dto/create-exercise.dto';
import { ObjectId } from 'mongoose';
import { ExerciseService } from './exercise.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('/exercise')
export class ExerciseController {
    constructor(private exerciseService: ExerciseService) {}  
    
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateExerciseDto) {
        // const {picture} = files
        // return this.exerciseService.create(dto, picture[0])
        return this.exerciseService.create(dto)
    }

    @Get()
    findAll() {
        return this.exerciseService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: ObjectId) {
        return this.exerciseService.findOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.exerciseService.delete(id)
    }

    @Put(':id')
    update(@Param('id') id: ObjectId, @Body() createExerciseDto: CreateExerciseDto) {
        return this.exerciseService.update(id, createExerciseDto)
    }
}