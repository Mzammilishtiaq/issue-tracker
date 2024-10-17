import { Skeleton } from '@/app/components'
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes'

const Loading = () => {
  return (
    <Box className='max-w-xl'>
      <Heading as='h2'><Skeleton/></Heading>
            <Flex className='space-x-3' my='2'>
               <Skeleton width={'5rem'}/>
                <Text as='p'><Skeleton width={'8rem'}/></Text>
            </Flex>
            <Card className='prose mt-5'>
                <Skeleton count={3} />
            </Card>
    </Box>
  )
}

export default Loading
