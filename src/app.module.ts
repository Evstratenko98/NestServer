import { AppController } from './app.controller';
import { ClientModule } from './clients/clients.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'
import { ExerciseCategoryModule } from './exerciseCategory/exerciseCategory.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }), 
        MongooseModule.forRoot('mongodb+srv://Stanislav:stanislav010101@cluster.9zl3b.mongodb.net/SportHelper?retryWrites=true&w=majority'),
        ExerciseCategoryModule,
    ],
    controllers: [AppController],
})

export class AppModule {}
