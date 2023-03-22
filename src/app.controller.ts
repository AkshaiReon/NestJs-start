import {Controller,Get} from '@nestjs/common'

@Controller()
export class AppController{
    @Get()
    getRootRoute(){
        return 'hello world'
    }
    @Get("/name")
    getNameRoute(){
        return "Akshai P Sajeev"
    }

}