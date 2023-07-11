import { Body, ConfigurableModuleBuilder, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { destoryUserDto } from './dto/destoryUserDto';
import { updateUserDto } from './dto/updateuser.Dto';

//ユーザーエンドポイント用コントローラ　
//エンドポイントごとにUserServiceに指示を出す
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('create')
    async create(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    @Get('showDB')
    showDB() {
        return this.userService.showDB();
    }

    @Get('showID')
    showID() {
        return this.userService.showID();
    }

    @Post('destory')
    async destory(@Body() data: destoryUserDto) {
        return this.userService.destory(data.id);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.userService.findOne(id);
    }

    @Post('update')
    async updateFromID(@Body() update: updateUserDto) {
        return this.userService.updateFromID(update);
    }
}
