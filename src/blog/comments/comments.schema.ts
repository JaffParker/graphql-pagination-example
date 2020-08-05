import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class Comment {
  @Field(() => ID) id: string
  @Field() userName: string
  @Field() content: string
  @Field() createdAt: Date
}
