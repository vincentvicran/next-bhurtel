import dynamic from 'next/dynamic'
import {Youtube} from '../../common/youtube'
import {CompWrapper} from '../../common/compWrapper'
import {ListComp} from 'components/listComp'

const MapWithNoSSR = dynamic(() => import('../../common/map/map.common'), {
  ssr: false
})

function Youtubes() {
  return (
    <CompWrapper>
      <Youtube videoId={'2g811Eo7K8U'} />
      <MapWithNoSSR location={[51.505, -0.09]} popupText="Attorney Bhurtel" />

      <ListComp />
    </CompWrapper>
  )
}

export default Youtubes
