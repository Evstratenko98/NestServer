import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateExerciseCategoryDto } from './dto/create-exerciseCategory.dto';
import { ExerciseCategoryService } from './exerciseCategory.service';

@Controller('/category')
export class ExerciseCategoryController {
    constructor(private exerciseCategoryService: ExerciseCategoryService) {}

    @Post()
    create(@Body() dto: CreateExerciseCategoryDto) {
        return this.exerciseCategoryService.create(dto)
    }

    @Get()
    findAll() {
        return this.exerciseCategoryService.findAll() 
    }

    @Get(':id')
    findOne(@Param('id') id: ObjectId) {
        return this.exerciseCategoryService.findOne(id)
    }

    @Put(':id') 
    update(@Param('id') id: ObjectId, @Body() dto: CreateExerciseCategoryDto) {
        return this.exerciseCategoryService.update(id, dto)
    }

    @Delete(':id') 
    delete(@Param('id') id: ObjectId) {
        return this.exerciseCategoryService.delete(id)
    }
}