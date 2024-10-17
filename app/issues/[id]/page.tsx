import IssuesStatusBadge from '@/app/components/issuesStatusBadge'
import prisma from '@/prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react';
import ReactMarkdown from 'react-markdown';
interface Props {
    params: { id: string }
}
const IssuesDetailPage = async ({ params: { id } }: Props) => {
    // if (typeof id !== 'number') notFound();
    const issues = await prisma.issues.findUnique({
        where: { id: parseInt(id) }
    })
    if (!issues) return notFound()
    return (
        <div>
            <Heading as='h2'>{issues?.title}</Heading>
            <Flex className='space-x-3' my='2'>
                <IssuesStatusBadge status={issues?.status} />
                <Text as='p'>{issues?.updatedAt.toDateString()}</Text>
            </Flex>
            <Card className='prose mt-5'>
                <ReactMarkdown>{issues?.description}</ReactMarkdown>
            </Card>
        </div>
    )
}

export default IssuesDetailPage