import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class Comment {
  @Field(type => ID)
  id: string

  @Field()
  userName: string

  @Field()
  content: string

  @Field()
  createdAt: Date
}
