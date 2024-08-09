import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    
    @IsInt() 
    @IsPositive()
    @Min(1)
    no: number;

    @IsString({message: 'Must be a string'})
    @MinLength(1)
    name: string
}
