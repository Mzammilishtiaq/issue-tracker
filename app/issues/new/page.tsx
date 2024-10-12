'use client'
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import dynamic from 'next/dynamic'
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Dynamically import SimpleMDE
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });
import "easymde/dist/easymde.min.css";

interface issuesFormProps {
  title: string,
  description: string
}

const NewIssues = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<issuesFormProps>();
const[error,setError]=useState('')
  return (
    <div className='max-w-xl '>
    {error&&<Callout.Root color='red' className='mb-5'>
         <Callout.Text>
          {error}
         </Callout.Text>
    </Callout.Root>}
    <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
     try{
      await axios.post('/api/issues', data);
      router.push('/issues');
      console.log(data);
     }catch(err:any){
      console.log(err)
      setError('An unexpected error occurred.')
     }
    })}>
      <TextField.Root placeholder="Title..." type='text' {...register('title')} />
      <Controller name='description' control={control} render={({ field }) => <SimpleMDE placeholder='Description...' {...field} />} />
      <Button className='btn btn-primary' type='submit'>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssues;
