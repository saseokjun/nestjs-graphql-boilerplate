import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './models'
import { UsersService } from './users.service'
import { GetUserArgs, GetUsersArgs } from './dto/args';
import { CreateUserInput, UpdateUserInput, DeleteUserInput } from './dto/input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.getUser(getUserArgs)
  }

  @Query(() => [User], { name: 'users', nullable: 'itemsAndList' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.usersService.getUsers(getUsersArgs)
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.usersService.createUser(createUserData)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.usersService.updateUser(updateUserData)
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
    return this.usersService.deleteUser(deleteUserData)
  }
}
