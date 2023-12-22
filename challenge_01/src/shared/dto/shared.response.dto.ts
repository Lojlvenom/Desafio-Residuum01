import { HttpStatus } from "@nestjs/common";
import { ApiProperty, ApiResponse } from "@nestjs/swagger";

export class RespondeDto {
    @ApiProperty({example: true})
    message: String;

    status_code: HttpStatus;
    content?;
}