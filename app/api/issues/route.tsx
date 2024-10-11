import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});  

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    
    // If validation fails, return a 400 response with validation errors
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    // Create a new issue in the database
    const newIssue = await prisma.issues.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    // Return the created issue with a 201 status
    return NextResponse.json(newIssue, { status: 201 });

  } catch (error) {
    console.error("Error creating issue:", error);
    
    // Return a 500 response in case of server error
    return NextResponse.json({ error: 'Failed to create issue' }, { status: 500 });
  }
}
