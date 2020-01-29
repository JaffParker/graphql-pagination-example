import { Module } from '@nestjs/common'
import { BlogService } from './blog.service'
import { CommentsModule } from './comments/comments.module'
import { BlogResolver } from './blog.resolver'

@Module({
  imports: [CommentsModule],
  providers: [BlogService, BlogResolver]
})
export class BlogModule {}
