import {CompWrapper} from 'common/compWrapper'
import {HStack, VStack} from 'common/stack'
import {ListComp} from 'components/listComp'
import {SearchInput} from 'components/searchInput'
import {useState} from 'react'
import {MdSearch} from 'react-icons/md'

import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import Theme from 'theme'

const SearchPage = () => {
  const [articleList, setArticleList] = useState<
    Api.PaginatedCommonDescriptionIndividual[]
  >([])

  const [loading, setLoading] = useState<boolean>(false)

  const onSearchHandler = async (value: string) => {
    //    dispatch(getAllCaseResults({page: 1, limit: TABLE_LIMIT, search: value}))

    setLoading(true)
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
    setLoading(false)
  }

  return (
    <CompWrapper>
      <SearchInput
        title="articles"
        onChangeHandler={onSearchHandler}
        loading={loading}
      />
      {articleList && articleList.length > 0 ? (
        <div style={{margin: `60px 0`}}>
          <ListComp articleList={articleList} disablePagination />
        </div>
      ) : (
        <VStack
          style={{margin: `${Theme.space.$16} 0`, color: Theme.colors.$gray400}}
          justify="center"
          align="center"
        >
          <HStack>
            <MdSearch size={100} />
          </HStack>
          <div style={{fontSize: Theme.fontSizes.$3}}>
            Your search results...
          </div>
        </VStack>
      )}
    </CompWrapper>
  )
}

export default SearchPage
