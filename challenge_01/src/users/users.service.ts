import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { RespondeDto } from 'src/shared/dto/shared.response.dto';
import { SharedService } from 'src/shared/shared.service';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 0;
constructor(private sharedService: SharedService) {}
  create(createUserDto: CreateUserDto): RespondeDto {
    const user: User = {
      id: this.sharedService.getHashData(this.idCounter.toString()),
      ...createUserDto
    }
    this.users.push(user);
    const res : RespondeDto = {
      message: "User created",
      status_code: HttpStatus.CREATED,
      content: user
    }
    this.idCounter += 1;
    console.log(this.idCounter)
    return res;
  }

  findAll(): RespondeDto {
    const res: RespondeDto = {
      message: "Returned all users",
      status_code: HttpStatus.OK,
      content: this.users
    }
    return res;
  }

  findOne(id: string): RespondeDto {
     const res: RespondeDto = {
      message: "Returned one user",
      status_code: HttpStatus.OK,
      content: this.users.find(user => user.id === id)
    
     }
    return res;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id).content;

    if (user) {
      user.name = updateUserDto.name !== undefined ? updateUserDto.name : user.name;
      user.age = updateUserDto.age !== undefined ? updateUserDto.age : user.age;

      return user;
    }
    return null;
  }

  remove(id: string): RespondeDto {
    const userIndex = this.users.map(e => e.id).indexOf(id);

    if (userIndex !== -1) {
      const removedUser = this.users.splice(userIndex, 1);
      const res: RespondeDto = {
        message: `Removed user with id: ${id}`,
        status_code: HttpStatus.OK
      };
      return res;

    }
    const res: RespondeDto = {
      message: "No user found",
      status_code: HttpStatus.BAD_REQUEST
    }
    return res;
  }

  removeAll(): RespondeDto {
    this.users = [];
    const res: RespondeDto = {
      message: "Removed all users",
      status_code: HttpStatus.OK
    }
    return res;
  }
}