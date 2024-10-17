import { Table } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IssuesAction from '../issues/new/issuesAction'

const LoadingIssuesPage = () => {
    const issues = [1,2,3,4,5]
  return (
<>
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
          <Skeleton/>
          <div className='hidden'>
            <Skeleton/>
          </div>
          </Table.Cell>
          <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
           <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
        </Table.Body>
      ))
    }

  </Table.Root>
</>
  )
}

export default LoadingIssuesPage
