import { Injectable } from '@nestjs/common'
import { Comment, CommentsService } from './comments/comments.service'
import { parseISO } from 'date-fns'
import {
  PaginatedResource,
  PaginatedResourceQueryOptions
} from '../paginated-resource'

@Injectable()
export class BlogService {
  constructor(private comments: CommentsService) {}

  async getAllPosts(): Promise<BlogPost[]> {
    return posts
  }

  async getPaginatedPosts({
    count,
    currentPage,
    after,
    goToPage
  }: PaginatedResourceQueryOptions): Promise<PaginatedResource<BlogPost>> {
    const totalCount = posts.length
    const totalPages = Math.ceil(posts.length / count)
    let nodes = []

    if (goToPage) {
    } else {
      nodes = posts
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

  async getCommentsForPost(id: string): Promise<Comment[]> {
    return await this.comments.getForPost(id)
  }

  async getPaginatedCommentsForPost(
    id: string,
    pageParams: PaginatedResourceQueryOptions
  ): Promise<PaginatedResource<Comment>> {
    return this.comments.getPaginatedCommentsForPost(id, pageParams)
  }
}

interface BlogPost {
  id: string
  title: string
  content: string
  createdAt: Date
}

const posts: BlogPost[] = [
  {
    id: '0',
    title: 'Consequatur beatae asperiores cum nam.',
    content: 'qui',
    createdAt: parseISO('2019-04-14T18:46:37.207Z')
  },
  {
    id: '1',
    title: 'Quia enim nulla dolorum repudiandae aut.',
    content:
      'Veniam accusantium ea accusantium aut autem voluptatem voluptates. Rerum enim molestiae velit. Qui dolor voluptate nisi odit et voluptas voluptatem laborum. Molestiae rerum non aut distinctio aperiam.\n \rAperiam excepturi in voluptates qui recusandae et laudantium et a. Nostrum quaerat ut odit. Laudantium repellat eum reprehenderit. Autem voluptate aut quo beatae rerum ut sed possimus. Qui ducimus ut et nulla ut voluptatem repellendus.\n \rError itaque id repudiandae quas. Repudiandae rem reprehenderit dolores voluptatibus possimus consequatur et officiis aut. Ut id beatae. Reprehenderit non alias vero odio doloribus repellat quod a. Soluta a magnam ea ut necessitatibus sit quo. Veritatis odio dolorum dolorem vitae quam quam totam delectus repudiandae.',
    createdAt: parseISO('2019-06-15T12:29:31.430Z')
  },
  {
    id: '2',
    title: 'Adipisci ad quia dolores qui maxime veritatis iste.',
    content:
      'Mollitia ipsum dolorum hic est ratione et. Itaque non error praesentium molestiae distinctio nobis.',
    createdAt: parseISO('2019-09-15T15:59:41.171Z')
  },
  {
    id: '3',
    title: 'Consequuntur quis eum animi deleniti esse.',
    content: 'Maxime deleniti et culpa eum sed veritatis.',
    createdAt: parseISO('2019-06-28T19:51:22.872Z')
  },
  {
    id: '4',
    title: 'Non autem magni sit qui eum tenetur tempora dolor.',
    content:
      'Dolor vero sunt commodi aut vitae enim.\nQuam cum libero.\nConsequuntur fugit et doloremque vel aut ea amet aut sequi.\nVel atque tenetur voluptatem qui.\nAdipisci aut a ratione possimus et rerum enim perferendis aut.',
    createdAt: parseISO('2019-07-28T01:34:48.286Z')
  },
  {
    id: '5',
    title: 'Nisi voluptas id distinctio repudiandae et quia.',
    content:
      'Nulla et qui in ut velit assumenda. Et qui et eum sit sunt optio. Fugiat dicta velit alias facilis libero laudantium. Molestias et dolore sint quisquam modi ea ut. In odio et aut qui maiores omnis.',
    createdAt: parseISO('2020-01-04T14:31:20.471Z')
  },
  {
    id: '6',
    title: 'Cumque eos aliquid temporibus.',
    content:
      'Ducimus nihil exercitationem modi fuga est. Sed eos rerum quae eum dicta modi qui nulla. Cupiditate molestias qui architecto. Cumque quod vel tempora numquam impedit ut natus veritatis animi. Ipsam dignissimos labore inventore eaque aliquam quo.',
    createdAt: parseISO('2019-05-27T22:13:40.499Z')
  },
  {
    id: '7',
    title: 'Dolore sit ut ut laboriosam.',
    content:
      'At cumque atque corrupti quia quo quibusdam. Suscipit voluptatum voluptas quasi aut rerum doloremque.',
    createdAt: parseISO('2019-11-22T16:56:21.386Z')
  },
  {
    id: '8',
    title: 'Quia consectetur nobis veniam commodi velit.',
    content: 'et',
    createdAt: parseISO('2019-09-06T20:57:34.006Z')
  },
  {
    id: '9',
    title: 'Autem voluptatibus atque at nemo.',
    content: 'Inventore id cumque qui.',
    createdAt: parseISO('2019-02-28T06:24:15.539Z')
  },
  {
    id: '10',
    title: 'Et aliquid culpa vel cum dolorum quod id mollitia et.',
    content: 'Autem qui perspiciatis inventore sit eos.',
    createdAt: parseISO('2019-12-03T13:45:27.206Z')
  },
  {
    id: '11',
    title: 'Quo voluptatibus repellat delectus rerum.',
    content:
      'Dolores nobis tempora consectetur porro delectus id officia voluptas aperiam. Voluptas cumque ducimus aut ut eveniet nihil. Ut reiciendis ut voluptas. Saepe et saepe velit deleniti quaerat asperiores ad.\n \rPossimus est non. Consequatur quasi ea ipsum architecto numquam et. Quis non sequi et cumque sed blanditiis repellat architecto. Similique iure beatae dignissimos cumque alias. Eum saepe consequatur repudiandae labore nulla. Quasi error nostrum consequatur voluptatem quaerat nihil dolorum consequatur.\n \rMaxime est consequuntur. Et mollitia esse vel nostrum illo. Voluptatibus eos ipsa molestiae magni consequatur placeat. Omnis quis facere adipisci. Dolore numquam accusamus et delectus natus tenetur ipsum. Nesciunt id atque molestiae amet rerum suscipit ut dignissimos.',
    createdAt: parseISO('2019-11-22T18:32:08.655Z')
  },
  {
    id: '12',
    title: 'Veritatis debitis sed ut libero earum ratione et cum.',
    content: 'laborum quo nisi',
    createdAt: parseISO('2019-05-02T02:08:51.381Z')
  },
  {
    id: '13',
    title: 'Animi eaque ipsa labore.',
    content: 'Ut ut similique animi.',
    createdAt: parseISO('2019-12-17T17:18:36.162Z')
  },
  {
    id: '14',
    title:
      'Culpa numquam delectus animi consequatur corporis nostrum minus et distinctio.',
    content:
      'Veniam hic nemo in placeat cupiditate similique harum praesentium aut. Modi deserunt itaque impedit. Aut quos in omnis recusandae fugit aspernatur. Commodi deserunt delectus officia est deleniti. Minus voluptatem voluptate eligendi quae quia dolore est a animi.',
    createdAt: parseISO('2019-12-13T16:19:17.299Z')
  },
  {
    id: '15',
    title: 'Inventore voluptatem officiis est.',
    content:
      'Ut delectus aut laboriosam inventore occaecati. Dolores dolorem voluptas assumenda nemo. Nobis similique velit nemo similique eligendi adipisci. Sed necessitatibus minima beatae temporibus qui ab adipisci illum.\n \rQuia est aut blanditiis blanditiis natus rem provident possimus modi. Sapiente eum et. Quos quia et adipisci reiciendis et.\n \rMolestiae corporis provident quia qui asperiores eligendi est. Inventore quisquam soluta dolorum molestiae unde ex rerum rem quia. Omnis assumenda quaerat dolor ex molestias perspiciatis ea sit. Officia ipsa cumque aut. Reprehenderit quod sit distinctio sapiente ea ipsam. Molestiae officiis recusandae non dolor doloribus officiis neque nemo.',
    createdAt: parseISO('2019-04-15T23:50:53.306Z')
  },
  {
    id: '16',
    title: 'Quidem id eligendi aut quia culpa mollitia debitis nobis cum.',
    content: 'Sint magni quo sit necessitatibus natus illum neque quaerat.',
    createdAt: parseISO('2019-02-09T01:09:11.684Z')
  },
  {
    id: '17',
    title: 'Repellat qui sequi.',
    content: 'Eum cumque eos iste.',
    createdAt: parseISO('2019-03-06T15:55:54.109Z')
  },
  {
    id: '18',
    title: 'Consequuntur debitis veritatis necessitatibus maxime saepe.',
    content:
      'Velit vero perspiciatis eum est ipsam itaque quis facere et. Et quos deleniti quo. Doloremque architecto cupiditate autem quidem.\n \rConsequatur eum corrupti sit aut ea accusamus iste. Voluptate maiores ut fuga amet. Nesciunt explicabo sed earum consectetur. Excepturi consequatur eos deleniti deserunt aut praesentium. Eos quia unde autem impedit et excepturi. Iste voluptatem repellat.\n \rQui reprehenderit sint saepe recusandae praesentium hic est voluptate. Cumque laborum rerum quisquam eos est enim. Enim totam est enim doloribus repellendus. Nemo quibusdam delectus eum omnis velit omnis officiis qui earum. Distinctio quia cum quibusdam qui ad nisi animi et. Beatae rerum veniam.',
    createdAt: parseISO('2019-03-16T21:40:26.854Z')
  },
  {
    id: '19',
    title:
      'Consequuntur rerum reprehenderit adipisci quia sequi aut accusantium aut pariatur.',
    content:
      'Delectus laborum impedit voluptatem.\nQuo quos ipsa pariatur voluptatibus.',
    createdAt: parseISO('2019-06-30T22:21:00.832Z')
  },
  {
    id: '20',
    title: 'Et eaque sit.',
    content: 'Architecto in placeat accusantium.',
    createdAt: parseISO('2019-07-11T01:48:45.249Z')
  },
  {
    id: '21',
    title: 'Nemo facilis impedit ut ullam labore porro esse.',
    content:
      'Id sint accusantium corporis et voluptas molestiae. Labore sed sequi doloribus. Quis harum error. Non magni quae consequatur asperiores iste odit. Omnis et necessitatibus qui quaerat nam saepe ab itaque.',
    createdAt: parseISO('2019-05-09T12:26:24.697Z')
  },
  {
    id: '22',
    title:
      'Adipisci facere molestiae ad mollitia odio beatae magnam repudiandae qui.',
    content:
      'Ut sed reiciendis illum animi quos aut dolores. Omnis voluptatem unde aut et voluptatem voluptates vero. Iusto quam maiores non mollitia excepturi. Qui ut aut voluptas. Tenetur ea molestiae sit.',
    createdAt: parseISO('2019-03-25T20:36:26.904Z')
  },
  {
    id: '23',
    title: 'Dolorem veritatis nostrum mollitia.',
    content:
      'Cupiditate voluptas quibusdam. Eos cumque eum voluptatem similique est rerum distinctio et rerum. Deserunt fuga voluptatibus voluptatem molestiae.',
    createdAt: parseISO('2019-04-30T15:58:39.526Z')
  },
  {
    id: '24',
    title: 'Cumque totam nulla corrupti et voluptatum.',
    content:
      'Eos quos vel voluptatibus qui quibusdam illo deleniti.\nUt et ut distinctio quia molestias.\nOmnis perferendis voluptatibus enim nulla et.\nUt fugit voluptatibus.\nEarum dolores alias cupiditate.',
    createdAt: parseISO('2019-07-21T20:39:08.534Z')
  },
  {
    id: '25',
    title: 'Eveniet dolor et quos omnis soluta debitis eaque libero.',
    content:
      'Explicabo ab sunt blanditiis sed ut exercitationem. Minus unde sit nostrum quia repellat occaecati harum consectetur. Dolorum aliquid non nulla ut cum voluptatem. Molestiae officia ut quo dolorem et nisi magni. Cupiditate velit consequatur. Officiis dolore ut sunt et aliquam occaecati eaque et expedita.',
    createdAt: parseISO('2019-08-24T20:48:05.318Z')
  },
  {
    id: '26',
    title: 'Sit quaerat inventore nihil.',
    content: 'consectetur non non',
    createdAt: parseISO('2019-12-03T23:45:50.080Z')
  },
  {
    id: '27',
    title: 'Non vitae consectetur quisquam.',
    content: 'Molestiae magnam ipsam consequatur aliquam.',
    createdAt: parseISO('2019-12-22T04:07:02.394Z')
  },
  {
    id: '28',
    title: 'Possimus ut vitae ex a autem ea necessitatibus et.',
    content: 'laborum voluptatum suscipit',
    createdAt: parseISO('2019-12-01T02:54:04.681Z')
  },
  {
    id: '29',
    title: 'Error minima fugit occaecati omnis.',
    content: 'Deleniti tempora quia tenetur distinctio.',
    createdAt: parseISO('2019-11-11T12:47:14.507Z')
  },
  {
    id: '30',
    title: 'Occaecati praesentium non officia odio.',
    content:
      'Incidunt reprehenderit alias ratione libero fugiat. Quo vel autem neque harum ut voluptate autem. Magni consequatur pariatur exercitationem. Tempora tempore sed enim provident. Quisquam est ipsum. Sed voluptatem magni reprehenderit quis.',
    createdAt: parseISO('2019-06-28T16:53:27.427Z')
  },
  {
    id: '31',
    title: 'Suscipit perferendis aut ipsam et.',
    content: 'Corrupti magni culpa incidunt alias aperiam laudantium rerum.',
    createdAt: parseISO('2019-06-30T10:26:55.081Z')
  },
  {
    id: '32',
    title: 'Doloribus in laudantium dolorum doloremque.',
    content:
      'Amet voluptates labore quia quidem placeat repudiandae error mollitia quia.\nOccaecati sapiente et facere dolores ea.\nQuis laboriosam aut id sed similique velit.\nEius accusantium qui non consectetur aut quaerat voluptates.',
    createdAt: parseISO('2019-09-08T03:51:23.651Z')
  },
  {
    id: '33',
    title: 'Accusantium culpa tenetur veritatis ipsa voluptatem.',
    content:
      'Qui eos ad ea sed ipsum eligendi.\nNemo vero modi quis magni dolor officia recusandae.\nUt itaque sed autem ad quia minima suscipit quia.\nDelectus quaerat minima maiores id omnis veniam rerum nobis.',
    createdAt: parseISO('2019-05-31T20:46:48.377Z')
  },
  {
    id: '34',
    title: 'Fuga consequatur nihil est nemo delectus.',
    content:
      'Ipsa explicabo sapiente. Corporis ut vel omnis eos voluptatem veniam. Culpa aut et mollitia quo inventore aliquam perspiciatis.',
    createdAt: parseISO('2019-05-06T08:36:28.891Z')
  },
  {
    id: '35',
    title: 'Ipsum magni ea ea neque velit sit impedit vel fugit.',
    content: 'quas',
    createdAt: parseISO('2019-11-05T00:31:48.388Z')
  },
  {
    id: '36',
    title: 'Consectetur odio officia at.',
    content:
      'Doloremque itaque vitae alias qui animi sunt ab alias inventore. Doloremque voluptatem occaecati magni nihil. A dolorum eius. Et aut iusto odio necessitatibus voluptate. Non est amet dolorum accusamus dolore velit est. Voluptates nisi sint.',
    createdAt: parseISO('2019-02-04T21:23:05.171Z')
  },
  {
    id: '37',
    title: 'Similique velit neque vel et.',
    content:
      'Possimus ab quaerat ut reprehenderit. Accusantium saepe est modi. Hic provident esse a voluptatem doloremque natus asperiores repellendus culpa. Id nisi deserunt voluptatem quia provident ab mollitia qui. Sed aliquid dolorem laudantium.',
    createdAt: parseISO('2019-12-25T07:28:19.569Z')
  },
  {
    id: '38',
    title: 'Sed recusandae et eius eligendi et velit.',
    content:
      'Consectetur veniam dolorem ullam quos modi aut.\nCupiditate mollitia voluptatum deleniti at aut.',
    createdAt: parseISO('2019-12-19T17:47:22.447Z')
  },
  {
    id: '39',
    title: 'Nobis similique quam sequi et ducimus molestiae eum.',
    content:
      'Atque provident culpa. Dolore enim eos temporibus dolor est. Consectetur incidunt labore earum voluptatem atque natus culpa enim. Tempora veniam vel porro voluptas in et explicabo fugit nostrum. Temporibus ea dolor non veritatis voluptates sunt. Quia aut qui voluptatem.\n \rSuscipit rerum voluptas accusamus. Omnis facere accusamus quia distinctio. Dolor autem eum illo doloribus. Dolorem ut est autem ratione vel id iste porro.\n \rVoluptatum id molestiae molestiae dicta harum vitae optio sit provident. Nam nihil culpa quod eos sed. Reiciendis et nostrum totam.',
    createdAt: parseISO('2019-11-24T01:48:08.748Z')
  },
  {
    id: '40',
    title: 'Qui voluptates reprehenderit.',
    content:
      'Harum quisquam et mollitia quod et est suscipit.\nTenetur nobis illo sunt sed quo voluptatem sed.\nLabore laborum molestiae magnam molestias pariatur aut.\nMolestias eveniet quisquam repellendus sequi nobis.',
    createdAt: parseISO('2019-10-11T01:26:42.809Z')
  },
  {
    id: '41',
    title: 'Reprehenderit amet qui.',
    content: 'et',
    createdAt: parseISO('2019-03-17T23:08:27.776Z')
  },
  {
    id: '42',
    title: 'Velit voluptas tenetur.',
    content: 'consequatur',
    createdAt: parseISO('2019-04-01T04:10:51.012Z')
  },
  {
    id: '43',
    title: 'Inventore odio dolores incidunt occaecati.',
    content: 'Et ullam ea modi.',
    createdAt: parseISO('2019-11-24T18:26:06.404Z')
  },
  {
    id: '44',
    title: 'Amet sed autem quo.',
    content: 'qui',
    createdAt: parseISO('2019-07-11T18:53:11.377Z')
  },
  {
    id: '45',
    title:
      'Consequatur dolor temporibus maiores porro mollitia alias perspiciatis.',
    content:
      'Nesciunt iure quia eaque facere numquam impedit. Ut aspernatur soluta omnis ullam pariatur. Quibusdam aspernatur molestiae eum consequatur nihil consequatur est soluta. Repellendus qui illum. Itaque quibusdam ex rerum. Amet temporibus rerum omnis molestiae nostrum enim.',
    createdAt: parseISO('2019-08-19T08:40:36.141Z')
  },
  {
    id: '46',
    title: 'Ut et molestiae omnis nam voluptatem.',
    content:
      'Provident cum aut odio sed. Occaecati itaque ut atque doloribus expedita corporis porro iusto. Est blanditiis cum et aut. Unde accusantium placeat molestiae cum earum porro quod vero numquam.',
    createdAt: parseISO('2019-11-28T21:47:28.394Z')
  },
  {
    id: '47',
    title: 'Excepturi ipsa dolor voluptates est et rerum soluta impedit.',
    content:
      'Sint deserunt distinctio officia culpa aut consequatur ea quas.\nQuis animi sapiente beatae exercitationem.\nQuasi ut qui quia vero.\nId et aspernatur perferendis velit reprehenderit fuga.\nModi ab earum corporis maxime.',
    createdAt: parseISO('2019-11-20T10:42:59.153Z')
  },
  {
    id: '48',
    title: 'Molestias qui consectetur.',
    content:
      'Debitis corporis dolorem dolor repudiandae omnis. Autem accusamus doloribus quo inventore totam iste cumque. Aut provident officia voluptates.\n \rAut illum est velit qui non et corporis fugit provident. Non ad neque quisquam perspiciatis voluptatem earum quia perspiciatis. Sunt sequi quia mollitia aliquam rerum harum reiciendis. Natus eos est odio laborum. Delectus qui sunt omnis pariatur incidunt. Consequatur culpa libero itaque.\n \rNon voluptatibus sed et eligendi laborum soluta nesciunt quia pariatur. Sit qui dolorem soluta. Maiores porro minus voluptatum est sequi doloremque. Numquam et dicta.',
    createdAt: parseISO('2019-10-16T22:18:39.780Z')
  },
  {
    id: '49',
    title: 'Repudiandae ea omnis assumenda debitis adipisci.',
    content: 'Totam repudiandae enim.',
    createdAt: parseISO('2019-12-29T11:20:07.747Z')
  }
]
