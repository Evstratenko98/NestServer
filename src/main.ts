import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'

const start = async () => {
    try {
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)
        app.enableCors()
        await app.listen(5000, () => console.log(`Server started on port ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start()