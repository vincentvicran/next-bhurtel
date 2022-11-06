interface Assets {
  commonDescription: string
  banner: string
  profile: string
  testimonial: string
  textEditor: string
}

export const assets: Assets = {
  commonDescription: 'assets/common-description',
  banner: 'assets/banner',
  profile: 'assets/profile',
  testimonial: 'assets/testimonial',
  textEditor: 'assets/text-editor'
}

type AssetsKeys = keyof typeof assets

export const getImageUrl = (assetsType: AssetsKeys, imageSrc: string) => {
  return `${
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_DEV_URL?.replace('/api', '')
      : process.env.NEXT_PUBLIC_PROD_URL?.replace('/api', '')
  }${assets[assetsType]}/${imageSrc}`
}
