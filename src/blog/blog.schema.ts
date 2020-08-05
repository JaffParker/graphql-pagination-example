import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Comment } from './comments/comments.schema'
import { CommentFeed } from './comments/comments.resolver'

@ObjectType()
export class BlogPost {
  @Field(() => ID) id: string
  @Field() title: string
  @Field() content: string
  @Field(() => [Comment]) comments?: Comment[]
  @Field(() => CommentFeed) commentFeed?: typeof CommentFeed
  @Field() createdAt: Date
}
