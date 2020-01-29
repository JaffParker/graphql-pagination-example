import { Resolver, Query, ResolveProperty, Parent, Args } from '@nestjs/graphql'
import { BlogPost } from './blog.schema'
import { BlogService } from './blog.service'
import { Comment } from './comments/comments.schema'
import { Feed, PageParams } from '../global-schema/pagination.schema'
import { ArgsType, Field } from 'type-graphql'
import { CommentFeed } from './comments/comments.resolver'

const BlogPostFeed = Feed(BlogPost)

@ArgsType()
class GetBlogPostFeed {
  @Field()
  pageParams: PageParams
}

@Resolver(of => BlogPost)
export class BlogResolver {
  constructor(private blog: BlogService) {}

  @Query(returns => [BlogPost])
  async getBlogPosts(): Promise<BlogPost[]> {
    return await this.blog.getAllPosts()
  }

  @Query(returns => BlogPostFeed)
  async getBlogPostFeed(
    @Args() { pageParams }: GetBlogPostFeed
  ): Promise<typeof BlogPostFeed> {
    const resource = await this.blog.getPaginatedPosts(pageParams)
    const edges = resource.nodes.map($ => ({ cursor: $.id, node: $ }))

    return { ...resource, edges }
  }

  @ResolveProperty()
  async comments(@Parent() { id }: BlogPost): Promise<Comment[]> {
    return await this.blog.getCommentsForPost(id)
  }

  @ResolveProperty()
  async commentFeed(
    @Parent() { id }: BlogPost,
    @Args() { pageParams }: GetBlogPostFeed
  ): Promise<typeof CommentFeed> {
    const resource = await this.blog.getPaginatedCommentsForPost(id, pageParams)
    const edges = resource.nodes.map($ => ({ cursor: $.id, node: $ }))

    return { ...resource, edges }
  }
}
