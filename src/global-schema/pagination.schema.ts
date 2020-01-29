import {
  InterfaceType,
  ObjectType,
  Field,
  ClassType,
  Int,
  InputType
} from 'type-graphql'

@InterfaceType()
abstract class Edge<T> {
  @Field()
  cursor: string
  node: T
}

@ObjectType()
class PageInfo {
  @Field()
  start: string
  @Field()
  end: string

  @Field(type => Int)
  totalPages: number

  @Field()
  hasNextPage: boolean
  @Field()
  hasPrevPage: boolean
}

@InterfaceType()
export abstract class IPaginatedResource<T> {
  @Field(type => Int)
  totalCount: number

  @Field()
  pageInfo: PageInfo

  nodes: T[]

  @Field(type => [Edge])
  edges: Edge<T>[]
}

function makeEdge<T>(Type: ClassType<T>): Edge<T> {
  @ObjectType(`${Type.name}Edge`, { implements: Edge })
  class EdgeBuilder implements Edge<T> {
    @Field()
    cursor: string
    @Field(type => Type)
    node: T
  }
  //@ts-ignore
  return EdgeBuilder
}

export function Feed<T>(Type: ClassType<T>): IPaginatedResource<T> {
  const TypeEdge = makeEdge(Type)
  @ObjectType(`${Type.name}Feed`, { implements: IPaginatedResource })
  class PaginatedResourceBuild implements IPaginatedResource<T> {
    @Field(type => Int)
    totalCount: number

    @Field()
    pageInfo: PageInfo

    @Field(type => [Type])
    nodes: T[]

    @Field(type => [TypeEdge])
    edges: Edge<T>[]
  }
  //@ts-ignore
  return PaginatedResourceBuild
}

@InputType()
export class PageParams {
  @Field(type => Int)
  count: number

  @Field(type => Int, { nullable: true })
  currentPage?: number

  @Field({ nullable: true })
  after?: string

  @Field(type => Int, { nullable: true })
  goToPage?: number
}
