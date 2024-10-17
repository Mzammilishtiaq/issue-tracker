import { IssuesStatusBadge } from '@/app/components'
import prisma from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import delay from 'delay'
import Link from 'next/link'
import IssuesAction from './new/issuesAction'
const Page = async () => {
  const issues = await prisma.issues.findMany()
  await delay(5000);
  return (
    <div>
<IssuesAction/>
      <Table.Root variant='surface'>
        <Table.Header>
          {/* <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell> */}
          <Table.ColumnHeaderCell>TITLE</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>STATUS</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>DATE</Table.ColumnHeaderCell>
        </Table.Header>

        {
          issues?.map((item: any) => (
            <Table.Body>
              {/* <Table.Cell>{item?.id}</Table.Cell> */}
              <Table.Cell>
               <Link href={`/issues/${item?.id}`}> {item?.title}</Link>
                <div className='hidden'>
                  <IssuesStatusBadge status={item?.status} />
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><IssuesStatusBadge status={item?.status} /></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{item?.createdAt.toDateString()}</Table.Cell>

            </Table.Body>
          ))
        }

      </Table.Root>
    </div>
  )
}

export default Page
