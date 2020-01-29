import { ObjectType, Field, ID } from 'type-graphql'
import { Comment } from './comments/comments.schema'
import { CommentFeed } from './comments/comments.resolver'

@ObjectType()
export class BlogPost {
  @Field(type => ID)
  id: string

  @Field()
  title: string

  @Field()
  content: string

  @Field(type => [Comment])
  comments?: Comment[]

  @Field(type => CommentFeed)
  commentFeed?: typeof CommentFeed

  @Field()
  createdAt: Date
}
