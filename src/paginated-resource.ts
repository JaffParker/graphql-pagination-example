export interface PaginatedResource<T> {
  totalCount: number
  pageInfo: {
    start: string
    end: string

    totalPages: number

    hasNextPage: boolean
    hasPrevPage: boolean
  }
  nodes: T[]
}

export interface PaginatedResourceQueryOptions {
  count: number
  currentPage?: number
  after?: string
  goToPage?: number
}
