import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from "./schemas/user.schema";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {

  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id)
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto)
    return newUser.save()
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id)
  }

  async update(id: string, userDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, {new: true})
  }

}