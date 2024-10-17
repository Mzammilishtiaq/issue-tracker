import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap: Record<Status,{label:string, color:'red'| 'violet'|'green'}>={
    OPEN:{label:'Open',color:'red'},
    IN_PROCESS:{label:'In Progress',color:'violet'},
    CLOSED:{label:'Closed',color:'green'},
}
interface Props{
    status:Status
}
const issuesStatusBadge = ({status}:Props) => {

  return (
    <div>
      <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    </div>
  )
}

export default issuesStatusBadge
