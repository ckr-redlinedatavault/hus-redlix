import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const jobs = await prisma.jobPosting.findMany({
            where: { active: true },
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json(
            { error: 'Failed to fetch jobs' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, role, type, location, description, deadline } = body;

        if (!title || !role || !type || !description) {
            return NextResponse.json(
                { error: 'Title, role, type, and description are required' },
                { status: 400 }
            );
        }

        const job = await prisma.jobPosting.create({
            data: {
                title,
                role,
                type,
                location,
                description,
                deadline,
            },
        });

        return NextResponse.json({ success: true, job }, { status: 201 });
    } catch (error) {
        console.error('Error creating job posting:', error);
        return NextResponse.json(
            { error: 'Failed to create job posting' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        await prisma.jobPosting.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting job:', error);
        return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
    }
}
