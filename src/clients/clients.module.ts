import {Module} from "@nestjs/common"
import { ClientController } from './clients.controller'
import { ClientService } from './clients.service'

@Module({
    imports: [],
    controllers: [ClientController],
    providers: [ClientService]
})

export class ClientModule {}