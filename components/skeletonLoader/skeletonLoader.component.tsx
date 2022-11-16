import {Skeleton} from 'common/skeleton'
import {CompWrapper} from 'common/compWrapper'
import {HStack, ResponsiveStack, VStack} from 'common/stack'

export const SkeletonLoader = () => {
  return (
    <CompWrapper>
      <div style={{marginTop: 40}}>
        <Skeleton height={300} />
      </div>
      <ResponsiveStack
        justify="space-around"
        align="center"
        style={{margin: 40}}
        gap="$10"
      >
        <VStack justify="center" align="center">
          <HStack justify="center" align="center">
            <Skeleton circle height={40} width={40} />{' '}
            <Skeleton height={30} width={200} />
          </HStack>
          <HStack justify="center" align="center">
            <Skeleton circle height={40} width={40} />{' '}
            <Skeleton height={30} width={200} />
          </HStack>
          <HStack justify="center" align="center">
            <Skeleton circle height={40} width={40} />{' '}
            <Skeleton height={30} width={200} />
          </HStack>
        </VStack>
        <HStack justify="center" align="center">
          <Skeleton height={200} width={300} />
        </HStack>
      </ResponsiveStack>
    </CompWrapper>
  )
}
