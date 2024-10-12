'use client'
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import dynamic from 'next/dynamic'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/createIssueSchema'
// Dynamically import SimpleMDE
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });
import "easymde/dist/easymde.min.css";
import { z } from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage'
type issuesFormProps = z.infer<typeof createIssueSchema>

const NewIssues = () => {
  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<issuesFormProps>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, setError] = useState('')
  return (
    <div className='max-w-xl '>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>
          {error}
        </Callout.Text>
      </Callout.Root>}
      <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/issues', data);
          router.push('/issues');
          console.log(data);
        } catch (err: any) {
          console.log(err)
          setError('An unexpected error occurred.')
        }
      })}>
        <TextField.Root placeholder="Title..." type='text' {...register('title')} />
        <ErrorMessage >{errors?.title?.message}</ErrorMessage>
        <Controller name='description' control={control} render={({ field }) => <SimpleMDE placeholder='Description...' {...field} />} />
        <ErrorMessage>{errors?.description?.message}</ErrorMessage>
        <Button className='btn btn-primary' type='submit'>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default NewIssues;
