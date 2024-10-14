import React from 'react'
import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import prisma from '@/prisma/client'
const Page = async () => {
  const issues = await prisma.issues.findMany()
  return (
    <div>
      <div className="mb-5">
      <Button><Link href={'/issues/new'}>New Issues</Link> </Button>
      </div>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>TITLE</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>STATUS</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>DATE</Table.ColumnHeaderCell>
        </Table.Header>

        {
          issues?.map((item: any) => (
            <Table.Body>
              <Table.Cell>{item?.id}</Table.Cell>
              <Table.Cell>{item?.title}</Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{item?.status}</Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{item?.createdAt.toDateString()}</Table.Cell>

            </Table.Body>
          ))
        }

      </Table.Root>
    </div>
  )
}

export default Page
