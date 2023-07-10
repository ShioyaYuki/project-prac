import { ApiProperty }from'@nestjs/swagger';


export class updateUserDto{
    
    @ApiProperty()
    public id: number;

    @ApiProperty()
    public firstname: string;

    @ApiProperty()
    public lastname: string;

    @ApiProperty()
    public age: number;

    @ApiProperty()
    public updated: Date;
}