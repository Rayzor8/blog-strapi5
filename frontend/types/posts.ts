export interface Posts {
  data: Post[]
  meta: Meta
}

export interface Post {
  id: number
  documentId: string
  title: string
  slug: string
  content: Content[]
  headline: string
  featured: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  thumbnail: Thumbnail
  category: Category
  author: Author
}

export interface Content {
  type: string
  children: Children[]
}

export interface Children {
  text: string
  type: string
}

export interface Thumbnail {
  id: number
  documentId: string
  name: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  provider: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Formats {
  small: Small
  thumbnail: Thumbnail2
}

export interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Thumbnail2 {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Category {
  id: number
  documentId: string
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Author {
  id: number
  documentId: string
  name: string
  job: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
