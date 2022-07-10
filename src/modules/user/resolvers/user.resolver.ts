import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
@Resolver('User')
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query('jwt')
  login(@Args('email') email: string, @Args('password') password: string) {
    return this.usersService.login(email, password);
  }

  @Query('user')
  getById(@Args('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Mutation()
  register(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.usersService.register(firstName, lastName, email, password);
  }
}
