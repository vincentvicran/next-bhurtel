declare namespace Api {
  // Base Response for all API request
  // TODO: - remove base interface ( from both backend + frontend )
  interface Base<T> {
    success: boolean
    data: {
      type: string
      message: string
      data: T
    }
  }

  // TODO: - Add API types down here
  interface Session {
    user: {
      id: number
      email: string
      role: string
    }
    token: string
  }

  interface PaginatedData<T> {
    total: string
    rows: Array<T>
    isLast: boolean
  }

  interface User {
    id: number
    email: string
  }

  interface CommonCategory {
    id: number
    type: string
    title: string
    sub_categories: null
    common_category_id: number
    is_description_only: boolean
  }
  interface AllCategories
    extends PaginatedData<{
      total_count: string
      category_details: CommonCategory
    }> {}

  interface CommonDescription {
    title: string
    posted_at: Date
    common_category_id: number
    short_description: string
    main_description: string
    video_link?: string
    posted_by: number
    slug: string
    id: number
    created_at: Date
    updated_at: Date
    thumbnail: string | null
  }

  interface AllCommonDescription
    extends PaginatedData<{
      total_count: string
      description_details: CommonDescription
      category_details: CommonCategory
      user_details: User
    }> {}

  interface CaseResult {
    total_count: string
    id: number
    created_at: Date
    updated_at: Date
    title: string
    description: string
  }

  interface AllCaseResults extends PaginatedData<CaseResult> {}
}
