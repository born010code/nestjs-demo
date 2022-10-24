import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;
}