type ValueObjType = {
  label: string
  value: string
  link: string
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
    let newLink: string = link
    menuList?.map((menu, id) => {
      if (id === 0) {
        newLink = getCategoryLink(
          menuType,
          menu.category_details.id,
          menu.category_details.is_description_only
        )
      }
      return newLink
    })

    return newLink
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

  const link = `${headerMenu[menuType].link}`

  if (menuType === 'news') {
    return link + `?id=${menuId}`
  }
  return link + `/list/${menuId}`
}

export const getSubCategoryLink = (
  menuType: MenuType,
  menuId: number,
  isDescription: boolean
) => {
  if (isDescription) {
    const link = `${headerMenu[menuType].link}/article`

    return link + `/${menuId}`
  }

  const link = `${headerMenu[menuType].link}`

  return link + `/list/${menuId}`
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
