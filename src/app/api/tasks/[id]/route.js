import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

// Getting data for a single task

export async function GET(request, { params }) {
  const { id } = params;

  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(task);
}

// Updating data for a single task

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description } = await request.json();

  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(taskUpdated);
}

// Deleting data for a single task

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
