import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { jobId, applicantName, email, phone, resumeUrl, coverLetter } = body;

        if (!jobId || !applicantName || !email || !phone || !resumeUrl) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const application = await prisma.jobApplication.create({
            data: {
                jobId,
                applicantName,
                email,
                phone,
                resumeUrl,
                coverLetter,
            },
        });

        return NextResponse.json({ success: true, application }, { status: 201 });
    } catch (error) {
        console.error('Error submitting job application:', error);
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const jobId = searchParams.get('jobId');

        const where = jobId ? { jobId } : {};

        const applications = await prisma.jobApplication.findMany({
            where,
            orderBy: { createdAt: 'desc' }
        });

        // Fetch job details for each application manually since relation is missing
        const applicationsWithJob = await Promise.all(applications.map(async (app) => {
            const job = await prisma.jobPosting.findUnique({ where: { id: app.jobId } });
            return { ...app, jobTitle: job?.title };
        }));

        return NextResponse.json(applicationsWithJob);
    } catch (error) {
        console.error('Error fetching applications:', error);
        return NextResponse.json(
            { error: 'Failed to fetch applications' },
            { status: 500 }
        );
    }
}
