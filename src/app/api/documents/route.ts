import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const docs = await prisma.documentation.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(docs);
    } catch (error) {
        console.error('Error fetching documents:', error);
        return NextResponse.json(
            { error: 'Failed to fetch documents' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, fileUrl, category } = body;

        if (!title || !fileUrl) {
            return NextResponse.json(
                { error: 'Title and File URL are required' },
                { status: 400 }
            );
        }

        const doc = await prisma.documentation.create({
            data: {
                title,
                description,
                fileUrl,
                category,
            },
        });

        return NextResponse.json({ success: true, doc }, { status: 201 });
    } catch (error) {
        console.error('Error creating document:', error);
        return NextResponse.json(
            { error: 'Failed to create document' },
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

        await prisma.documentation.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting document:', error);
        return NextResponse.json({ error: 'Failed to delete document' }, { status: 500 });
    }
}
