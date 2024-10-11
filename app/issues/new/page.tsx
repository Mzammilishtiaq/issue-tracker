'use client'
import { Button, TextArea, TextField,Slottable } from '@radix-ui/themes'
import React from 'react'
import {useForm} from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
interface issuesFormProps{
  title:string,
  description:string
}
const NewIssues = () => {
  const {register} = useForm<issuesFormProps>();
  return (
<div className='max-w-xl space-y-3'>
<TextField.Root  placeholder="Title..." type='text'/>
<SimpleMDE placeholder='Description...'/>
<Button className='btn btn-primary'>Submit New Issue</Button>
</div>
  )
}
 
export default NewIssues
