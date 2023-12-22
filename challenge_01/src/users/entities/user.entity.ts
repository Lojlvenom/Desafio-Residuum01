import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNotEmpty } from "class-validator";


export class User {
    
    id: String;

    @ApiProperty()
    @IsNotEmpty()
    name: String;

    @ApiProperty()
    @IsNotEmpty()
    age: String;
}
