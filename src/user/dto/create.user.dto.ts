import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty()
    public firstname: string;

    @ApiProperty()
    public lastname: string;

    @ApiProperty()
    public age: number;

    @ApiProperty()
    public updated: Date;
}