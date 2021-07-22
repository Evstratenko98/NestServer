import { User } from '../../mainDto/user.dto'

export class CreateClientDto extends User{
    readonly height
    readonly weight
}