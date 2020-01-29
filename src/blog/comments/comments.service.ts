import { Injectable } from '@nestjs/common'
import { parseISO } from 'date-fns'
import {
  PaginatedResourceQueryOptions,
  PaginatedResource
} from '../../paginated-resource'

@Injectable()
export class CommentsService {
  async getForPost(id: string): Promise<Comment[]> {
    return comments.filter($ => $.postId === id)
  }

  async getPaginatedCommentsForPost(
    id: string,
    { count, currentPage, after, goToPage }: PaginatedResourceQueryOptions
  ): Promise<PaginatedResource<Comment>> {
    const commentsForPost = await this.getForPost(id)
    const totalCount = commentsForPost.length
    const totalPages = Math.ceil(commentsForPost.length / count)
    let nodes = []

    if (goToPage) {
    } else {
      nodes = commentsForPost
        .filter($ => parseInt($.id) > parseInt(after || '-1'))
        .slice(0, count)
    }

    return {
      totalCount,
      nodes,
      pageInfo: {
        totalPages,
        start: nodes[0].id,
        end: nodes[nodes.length - 1].id,
        hasNextPage: false,
        hasPrevPage: false
      }
    }
  }
}

export interface Comment {
  id: string
  postId: string
  userName: string
  content: string
  createdAt: Date
}

const comments: Comment[] = [
  {
    id: '0',
    postId: '1',
    content:
      'Voluptatem voluptas voluptas in ut et minima saepe aliquam architecto.',
    userName: 'Florence Becker',
    createdAt: parseISO('2019-05-07T06:00:28.273Z')
  },
  {
    id: '1',
    postId: '1',
    content: 'Nisi et ducimus cumque quod numquam et fugiat quia sed.',
    userName: 'Zane Feil',
    createdAt: parseISO('2020-01-20T15:36:46.702Z')
  },
  {
    id: '2',
    postId: '1',
    content:
      'Voluptates voluptates dolores debitis assumenda reprehenderit corporis.',
    userName: 'Alexanne Bartoletti',
    createdAt: parseISO('2020-01-14T09:53:40.163Z')
  },
  {
    id: '3',
    postId: '1',
    content: 'Vitae qui molestiae aut esse quia quia adipisci laborum.',
    userName: 'Dave Reilly',
    createdAt: parseISO('2019-11-02T11:39:39.913Z')
  },
  {
    id: '4',
    postId: '1',
    content: 'Exercitationem repellat aspernatur autem et et est.',
    userName: 'Hester Aufderhar',
    createdAt: parseISO('2019-03-19T12:52:51.489Z')
  },
  {
    id: '5',
    postId: '1',
    content: 'Dolorum praesentium distinctio quo amet optio consequatur.',
    userName: 'Rogers Gorczany',
    createdAt: parseISO('2019-08-08T04:26:21.050Z')
  },
  {
    id: '6',
    postId: '1',
    content: 'Culpa omnis et amet debitis.',
    userName: 'Dakota Padberg',
    createdAt: parseISO('2019-03-20T04:13:00.026Z')
  },
  {
    id: '7',
    postId: '1',
    content: 'Voluptatem doloribus aut minus sit aliquam.',
    userName: 'Earline Volkman',
    createdAt: parseISO('2019-11-14T03:28:45.831Z')
  },
  {
    id: '8',
    postId: '1',
    content: 'Porro fugiat cumque voluptas fugit molestias unde.',
    userName: 'Nathanael Flatley',
    createdAt: parseISO('2019-11-15T04:11:23.827Z')
  },
  {
    id: '9',
    postId: '1',
    content: 'Voluptate aut earum.',
    userName: 'Alessia Hyatt',
    createdAt: parseISO('2019-07-13T06:04:15.591Z')
  },
  {
    id: '10',
    postId: '1',
    content: 'Fugiat aut dolorem tempore error.',
    userName: 'Josianne Thiel',
    createdAt: parseISO('2019-04-04T04:42:10.909Z')
  },
  {
    id: '11',
    postId: '1',
    content: 'Alias et voluptatibus.',
    userName: 'Cielo Mills',
    createdAt: parseISO('2019-08-29T17:26:35.366Z')
  },
  {
    id: '12',
    postId: '1',
    content: 'Illum commodi sapiente possimus molestias ea voluptatem libero.',
    userName: 'Blaise Kemmer',
    createdAt: parseISO('2019-06-22T18:10:57.818Z')
  },
  {
    id: '13',
    postId: '1',
    content: 'A consequatur repudiandae quia quo distinctio alias.',
    userName: 'Breanna Schaden',
    createdAt: parseISO('2019-06-06T08:20:13.934Z')
  },
  {
    id: '14',
    postId: '1',
    content: 'Maiores magnam et sed nulla ipsam.',
    userName: 'Hermina Funk',
    createdAt: parseISO('2019-04-25T10:48:47.166Z')
  },
  {
    id: '15',
    postId: '1',
    content: 'Et laudantium accusamus pariatur.',
    userName: 'Flavie Bailey',
    createdAt: parseISO('2019-04-06T04:40:28.054Z')
  },
  {
    id: '16',
    postId: '1',
    content: 'Corporis in ad provident beatae saepe.',
    userName: 'Gaetano Marquardt',
    createdAt: parseISO('2019-03-16T16:57:44.706Z')
  },
  {
    id: '17',
    postId: '1',
    content:
      'Provident consequuntur sequi quisquam ea soluta sapiente aliquid voluptas.',
    userName: 'Boyd Hand',
    createdAt: parseISO('2019-02-24T07:23:25.621Z')
  },
  {
    id: '18',
    postId: '1',
    content: 'Tempore et harum et voluptatibus dolor id officiis.',
    userName: "Janis O'Connell",
    createdAt: parseISO('2019-06-26T18:26:55.020Z')
  },
  {
    id: '19',
    postId: '1',
    content: 'Fugit optio ut aut iusto magni eveniet et quae.',
    userName: 'Brendan Wiegand',
    createdAt: parseISO('2019-03-12T23:06:48.162Z')
  },
  {
    id: '20',
    postId: '1',
    content: 'Consectetur quasi voluptate et quaerat.',
    userName: 'Jacey Sawayn',
    createdAt: parseISO('2019-12-23T03:34:30.298Z')
  },
  {
    id: '21',
    postId: '1',
    content: 'Aut reiciendis odio deserunt aut.',
    userName: 'Leta Fritsch',
    createdAt: parseISO('2019-10-27T18:44:12.482Z')
  },
  {
    id: '22',
    postId: '1',
    content: 'Error officiis unde.',
    userName: 'Ashton Schneider',
    createdAt: parseISO('2019-05-05T03:57:32.489Z')
  },
  {
    id: '23',
    postId: '1',
    content: 'Sed labore fugiat.',
    userName: 'Gilbert Harvey',
    createdAt: parseISO('2019-06-28T22:31:32.507Z')
  },
  {
    id: '24',
    postId: '1',
    content:
      'Ad iste sed inventore voluptatem totam quos amet voluptatem quidem.',
    userName: 'Adolfo Schneider',
    createdAt: parseISO('2019-03-25T03:41:44.452Z')
  },
  {
    id: '25',
    postId: '1',
    content: 'Reprehenderit soluta sed et qui vel eos reiciendis.',
    userName: 'Halie Gerlach',
    createdAt: parseISO('2019-08-13T07:15:51.438Z')
  },
  {
    id: '26',
    postId: '1',
    content: 'Velit expedita exercitationem autem.',
    userName: 'Clarabelle Labadie',
    createdAt: parseISO('2019-06-07T01:41:56.139Z')
  },
  {
    id: '27',
    postId: '1',
    content:
      'Nesciunt dignissimos voluptatem nostrum mollitia doloremque aut nam blanditiis.',
    userName: 'Zoe Goldner',
    createdAt: parseISO('2019-10-18T22:04:16.868Z')
  },
  {
    id: '28',
    postId: '1',
    content: 'Magnam dolores cumque sit.',
    userName: 'Branson Bauch',
    createdAt: parseISO('2019-04-10T22:59:29.330Z')
  },
  {
    id: '29',
    postId: '1',
    content: 'Esse sit earum voluptatem assumenda necessitatibus.',
    userName: 'Ross Upton',
    createdAt: parseISO('2019-06-10T19:41:38.416Z')
  },
  {
    id: '30',
    postId: '1',
    content: 'Alias quis dolores illum aut reiciendis impedit ut magnam.',
    userName: 'Major Schinner',
    createdAt: parseISO('2019-12-13T15:29:08.126Z')
  },
  {
    id: '31',
    postId: '1',
    content: 'Culpa est praesentium sit.',
    userName: 'Jerald Huel',
    createdAt: parseISO('2019-03-05T13:08:54.978Z')
  },
  {
    id: '32',
    postId: '1',
    content: 'Rerum et qui.',
    userName: 'Arvid Labadie',
    createdAt: parseISO('2019-04-06T00:24:03.436Z')
  },
  {
    id: '33',
    postId: '1',
    content: 'Sit nisi ut dignissimos veniam amet consequatur ratione optio.',
    userName: 'Mauricio Wolff',
    createdAt: parseISO('2019-06-16T19:58:53.507Z')
  },
  {
    id: '34',
    postId: '1',
    content: 'Quos aspernatur ea dolor cum.',
    userName: 'Jena Reichel',
    createdAt: parseISO('2019-01-31T01:58:31.132Z')
  },
  {
    id: '35',
    postId: '1',
    content: 'Blanditiis saepe doloribus magnam non facilis quia.',
    userName: 'Chelsie Wolff',
    createdAt: parseISO('2019-06-20T19:11:22.291Z')
  },
  {
    id: '36',
    postId: '1',
    content: 'Est voluptatum molestiae consequatur deserunt itaque sed nihil.',
    userName: 'Norris Kling',
    createdAt: parseISO('2019-05-24T02:34:31.186Z')
  },
  {
    id: '37',
    postId: '1',
    content:
      'Eaque saepe reprehenderit beatae consectetur dicta sint reprehenderit animi.',
    userName: 'Bennie Cartwright',
    createdAt: parseISO('2019-10-18T20:32:34.099Z')
  },
  {
    id: '38',
    postId: '1',
    content: 'Ut aut totam deleniti quaerat est possimus officiis ipsam ea.',
    userName: 'Schuyler Turcotte',
    createdAt: parseISO('2019-01-30T10:14:30.857Z')
  },
  {
    id: '39',
    postId: '1',
    content: 'Repellendus in earum inventore.',
    userName: 'Kenya Carter',
    createdAt: parseISO('2019-12-29T20:40:28.366Z')
  },
  {
    id: '40',
    postId: '1',
    content: 'Eos vel sit voluptatem voluptatem voluptates molestiae sed.',
    userName: 'Raoul Franecki',
    createdAt: parseISO('2019-08-13T08:31:28.208Z')
  },
  {
    id: '41',
    postId: '1',
    content:
      'Qui est quod adipisci ad possimus natus placeat maxime molestiae.',
    userName: 'Mariano Gerlach',
    createdAt: parseISO('2019-04-03T10:42:18.220Z')
  },
  {
    id: '42',
    postId: '1',
    content: 'Est voluptas nam facilis enim eum blanditiis ad.',
    userName: 'Gianni Langosh',
    createdAt: parseISO('2019-09-27T02:08:25.201Z')
  },
  {
    id: '43',
    postId: '1',
    content: 'Voluptatem occaecati sit est saepe eum.',
    userName: 'Freeda Metz',
    createdAt: parseISO('2019-04-24T23:55:15.088Z')
  },
  {
    id: '44',
    postId: '1',
    content: 'Est omnis quia laboriosam eos nesciunt velit sunt.',
    userName: 'Aron Lesch',
    createdAt: parseISO('2019-08-29T03:09:16.552Z')
  },
  {
    id: '45',
    postId: '1',
    content: 'Et maiores minima cum.',
    userName: 'Berry Halvorson',
    createdAt: parseISO('2019-12-27T21:15:31.082Z')
  },
  {
    id: '46',
    postId: '1',
    content: 'A ipsam eum nihil alias tempore nostrum quo dicta.',
    userName: 'Charity Koss',
    createdAt: parseISO('2019-11-03T18:13:42.725Z')
  },
  {
    id: '47',
    postId: '1',
    content: 'Aspernatur et sit magnam.',
    userName: 'Dixie Hodkiewicz',
    createdAt: parseISO('2019-08-29T19:14:47.735Z')
  },
  {
    id: '48',
    postId: '1',
    content: 'Consectetur asperiores modi consequatur quia laboriosam.',
    userName: 'Chaim Pfannerstill',
    createdAt: parseISO('2019-11-24T03:45:20.884Z')
  },
  {
    id: '49',
    postId: '1',
    content: 'Quia est quasi quo dignissimos fugiat dolor aut.',
    userName: 'Pat Emmerich',
    createdAt: parseISO('2019-04-26T08:10:35.500Z')
  }
]
