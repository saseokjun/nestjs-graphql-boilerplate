import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql'
    }),
    UsersModule
  ],
  providers: [UsersService]
})
export class AppModule {}
