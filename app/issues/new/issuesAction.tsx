import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const issuesAction = () => {
  return (
    <div>
            <div className="mb-5">
        <Button><Link href={'/issues/new'}>New Issues</Link> </Button>
      </div>
    </div>
  )
}

export default issuesAction
