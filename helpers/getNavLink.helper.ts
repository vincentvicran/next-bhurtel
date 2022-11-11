type ValueObjType = {
  label: string
  value: string
  link?: string
}

export interface HeaderMenuType {
  personal_injury: ValueObjType
  practice_areas: ValueObjType
  contacts: ValueObjType
  case_results: ValueObjType
  attorney_profile: ValueObjType
  news: ValueObjType
}

export type MenuType = keyof typeof headerMenu

export const getMenuLink = (
  menuType: MenuType,
  menuList: Api.AllCategories['rows'] | undefined
) => {
  let linkId: number = 0

  const link = `${headerMenu[menuType].link}`

  if (menuType === 'personal_injury' || menuType === 'practice_areas') {
    return null
  }

  if (menuType === 'news') {
    return link + `?id=${linkId}`
  }

  if (menuType === 'attorney_profile') {
    menuList?.map((menu, id) => {
      if (id === 0) {
        linkId = menu.category_details.id
      }
      return
    })

    return link + `/article/${linkId}`
  }

  return link
}

export const getCategoryLink = (
  menuType: MenuType,
  menuId: number,
  isDescription: boolean
) => {
  if (isDescription) {
    const link = `${headerMenu[menuType].link}/article`

    return link + `/${menuId}`
  }

  const link = `${headerMenu[menuType].link}/list`

  if (menuType === 'news') {
    return link + `?id=${menuId}`
  }
  return link + `/${menuId}`
}

export const getSubCategoryLink = (
  menuType: MenuType,
  menuList: Api.AllCategories['rows'] | undefined
) => {
  let linkId: number = 0

  menuList?.map((menu, id) => {
    if (id === 0) {
      linkId = menu.category_details.id
    }
    return
  })

  const link = `${headerMenu[menuType].link}`

  if (linkId === 0) {
    return link
  }

  if (menuType === 'practice_areas') {
    menuList?.map((menu) => {
      console.log(
        'menu title: ',
        menu.category_details.title,
        menu.category_details.title.toLowerCase().includes('practice areas')
      )
      if (
        menu.category_details.title.toLowerCase().includes('practice areas')
      ) {
        linkId = menu.category_details.id
      }
      return
    })
    return link + `/article/${linkId}`
  }

  if (menuType === 'news') {
    return link + `?id=${linkId}`
  }
  return link + `/${linkId}`
}

export const headerMenu: HeaderMenuType = {
  personal_injury: {
    label: 'Personal Injury',
    value: 'personal-injury',
    link: '/personal-injury'
  },
  practice_areas: {
    label: 'Practice Areas',
    value: 'practice-areas',
    link: '/practice-areas'
  },
  contacts: {
    label: 'Contacts',
    value: 'contacts',
    link: '/contact-us'
  },
  case_results: {
    label: 'Case Results',
    value: 'case-results',
    link: '/case-results'
  },
  attorney_profile: {
    label: 'Attorney Profile',
    value: 'attorney-profile',
    link: '/attorney-profile'
  },
  news: {
    label: 'News',
    value: 'news',
    link: '/news'
  }
}
