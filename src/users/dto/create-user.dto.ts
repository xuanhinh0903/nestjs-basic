import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email is not valid' })
  @IsNotEmpty({ message: 'Email is not empty' })
  email: string;

  @IsNotEmpty({ message: 'Password is not empty' })
  password: string;

  name: string;
  phone: string;
  age: number;
}
