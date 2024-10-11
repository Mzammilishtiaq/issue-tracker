import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssues = () => {
  return (
<div className='max-w-xl space-y-3'>
<TextField.Root  placeholder="Title" type='text'/>
<TextArea rows={3} placeholder='Description'/>
<Button className='btn btn-primary'>Submit New Issue</Button>
</div>
  )
}
 
export default NewIssues
