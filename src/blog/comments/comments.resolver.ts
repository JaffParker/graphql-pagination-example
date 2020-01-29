import { Feed } from '../../global-schema/pagination.schema'
import { Comment } from './comments.schema'

export const CommentFeed = Feed(Comment)
