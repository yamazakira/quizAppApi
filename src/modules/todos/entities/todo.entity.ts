import { ApiProperty } from "@nestjs/swagger";

export class Todo {
    @ApiProperty()
    Id: string;

    @ApiProperty()
    Body: string;

    @ApiProperty()
    CreatedAt: Date;
}

