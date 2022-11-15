import {CompWrapper} from 'common/compWrapper'
import {useState} from 'react'

const SearchPage = () => {
  const [articleList, setArticleList] = useState([])

  return (
    <CompWrapper>
      <div>search component</div>
    </CompWrapper>
  )
}

export default SearchPage
