import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, amount, pan, address, phone } = body;

        if (!name || !email || !amount) {
            return NextResponse.json(
                { error: 'Name, email, and amount are required' },
                { status: 400 }
            );
        }

        const submission = await prisma.donationSubmission.create({
            data: {
                name,
                email,
                amount,
                pan,
                address,
                phone,
            },
        });

        return NextResponse.json({ success: true, submission }, { status: 201 });
    } catch (error) {
        console.error('Error submitting donation form:', error);
        return NextResponse.json(
            { error: 'Failed to submit donation form' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const submissions = await prisma.donationSubmission.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(submissions);
    } catch (error) {
        console.error('Error fetching donation submissions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch submissions' },
            { status: 500 }
        );
    }
}
