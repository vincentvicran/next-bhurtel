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
    sub_categories: Array<SubCategoriesInCatId> | null
    common_category_id: number | null
    is_description_only: boolean
  }

  interface SubCategoriesInCatId {
    id: number
    type: string
    title: string
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

  interface CaseResultsById {
    case_result_details: {
      id: number
      title: string
      created_at: Date
      description: string
    }
    testimonial_details: Testimonial[]
  }

  interface Testimonial {
    total_count: string
    id: number
    name: string
    image: string
    quote: string
    created_at: Date
    case_result_id: number | null
  }

  interface AllTestimonials extends PaginatedData<Testimonial> {}

  interface Banner {
    id: number
    link: string
    image: string
    is_main: boolean
  }

  interface AllBanners extends PaginatedData<Banner> {}

  interface Profile {
    id: number
    name: string
    image: string
    title: string
    video_link: string | null
    description: string
    short_description: string | null
    alternate_title: string | null
  }

  interface AllProfiles
    extends PaginatedData<{total_count: string; profile_details: Profile}> {}
}
