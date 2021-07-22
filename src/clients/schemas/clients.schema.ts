import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {Document} from 'mongoose'
import * as mongoose from 'mongoose'

export type ClientDocument = Client & Document

@Schema()
export class Client {
    @Prop()
    email: string

    @Prop()
    name: string

    @Prop()
    gender: 'Male' | 'Female'

    @Prop()
    height: number

    @Prop()
    weight: number

    @Prop()
    rating: number

    @Prop()
    photo: string
}

export const ClientSchema = SchemaFactory.createForClass(Client)