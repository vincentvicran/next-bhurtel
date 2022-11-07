import {Youtube} from '../../common/youtube'
import {CompWrapper} from '../../common/compWrapper'
import {Map} from '../../common/map'
function Youtubes() {
  return (
    <CompWrapper>
      <Youtube />
      <Map location={[51.505, -0.09]} />
    </CompWrapper>
  )
}

export default Youtubes
