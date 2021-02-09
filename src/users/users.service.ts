import { Injectable } from '@nestjs/common';
import { User } from './models'
import { CreateUserInput, UpdateUserInput, DeleteUserInput } from './dto/input';
import { GetUsersArgs, GetUserArgs } from './dto/args';
import { v4 as uuidv4 } from 'uuid'


@Injectable()
export class UsersService {
  private users: User[] = [];

  public createUser(createUserData: CreateUserInput): User {
    const user: User = {
      userId: uuidv4(),
      ...createUserData
    }

    this.users.push(user)

    return user
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find(user => user.userId === getUserArgs.userId)
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map(userId => this.getUser({ userId }))
  }

  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find(user => user.userId === updateUserData.userId)

    Object.assign(user, updateUserData)

    return user
  }

  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId)

    const user = this.users[userIndex]
    this.users.splice(userIndex)
    return user
  }
}
