import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { BlogModule } from './blog/blog.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'graphql-schema.gql',
      buildSchemaOptions: { dateScalarMode: 'isoDate' }
    }),
    BlogModule
  ]
})
export class AppModule {}
