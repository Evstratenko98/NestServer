import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Client, ClientDocument } from "./schemas/clients.schema";
import { Model, ObjectId } from "mongoose";

@Injectable()
export class ClientService {
    constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) {}

    async createNewUser() {}

    async findAlluser() {
        return "Получен список всех пользователей"
    }

    async findUser() {}

    async deleteUser() {}

    async searchUser() {}

    async setRating() {}

    async setPhoto() {}
}