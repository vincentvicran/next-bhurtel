import {CompWrapper} from 'common/compWrapper'
import {ListComp} from 'components/listComp'
import {SearchInput} from 'components/searchInput'
import {useState} from 'react'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'

const SearchPage = () => {
  const [articleList, setArticleList] = useState<
    Api.PaginatedCommonDescriptionIndividual[]
  >([])

  const onSearchHandler = async (value: string) => {
    //    dispatch(getAllCaseResults({page: 1, limit: TABLE_LIMIT, search: value}))
    if (value.length > 0) {
      const articles = await commonDescriptionServices.getAllCommonDescription({
        page: 1,
        limit: 20,
        search: value
      })

      setArticleList(articles.rows)
    } else {
      setArticleList([])
    }
  }

  return (
    <CompWrapper>
      <SearchInput title="articles" onChangeHandler={onSearchHandler} />
      <div style={{margin: `60px 0`}}>
        <ListComp articleList={articleList} disablePagination />
      </div>
    </CompWrapper>
  )
}

export default SearchPage
