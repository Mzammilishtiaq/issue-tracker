'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
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

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data) => {
      await axios.post('/api/issues', data);
      router.push('/issues');
      console.log(data);
    })}>
      <TextField.Root placeholder="Title..." type='text' {...register('title')} />
      <Controller name='description' control={control} render={({ field }) => <SimpleMDE placeholder='Description...' {...field} />} />
      <Button className='btn btn-primary' type='submit'>Submit New Issue</Button>
    </form>
  )
}

export default NewIssues;
