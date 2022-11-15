export function modifyCarousalArray(data: any[]) {
  const firstItem = data.filter((el) => el.banner_details.is_main === true)
  const remainingItems = data.filter(
    (el) => el.banner_details.is_main === false
  )

  return [...firstItem, ...remainingItems]
}
