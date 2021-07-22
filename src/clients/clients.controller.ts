import { ClientService } from './clients.service';
import { Controller, Post, Get, Delete } from "@nestjs/common";

@Controller('/user')
export class ClientController {
    constructor(private clientService: ClientService) {}

    @Post()
    createNewUser() {
        return this.clientService.createNewUser()
    }
    
    @Get()
    findAllUser() {
        // return this.clientService.findAlluser()
        return "Вернулись все пользователи"
    }

    @Get(':id')
    findUser() {
        return this.clientService.findUser()
    }

    @Delete(':id')
    deleteUser() {
        return this.clientService.deleteUser()
    }
    
    @Get('/search')
    searchUser() {
        return this.clientService.searchUser()
    }

    @Post('/rating/:id')
    setRating() {
        return this.clientService.findUser()
    }

    @Post('/photo/:id')
    setPhoto() {
        return this.clientService.findUser()
    }
}