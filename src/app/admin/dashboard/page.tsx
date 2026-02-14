import { prisma } from '@/lib/prisma'; // Safe absolute import using alias

export const dynamic = 'force-dynamic'; // Ensure data is always fresh

export default async function DashboardPage() {
    // Parallel fetching for performance
    const [
        contactCount,
        careerCount,
        donationCount,
        institutionCount,
        trainerCount,
        studentCount,
        submissions
    ] = await Promise.all([
        prisma.contactSubmission.count(),
        prisma.jobApplication.count(),
        prisma.donationSubmission.count(),
        prisma.instiRegister.count(),
        prisma.traiRegister.count(),
        prisma.studentAdmission.count(),
        prisma.contactSubmission.findMany({
            orderBy: { createdAt: 'desc' },
            take: 10
        })
    ]);

    const stats = [
        { label: 'Contact Inquiries', value: contactCount, color: 'text-blue-600' },
        { label: 'Donations Received', value: donationCount, color: 'text-green-600' },
        { label: 'Institutions', value: institutionCount, color: 'text-orange-600' },
        { label: 'Trainer Registrations', value: trainerCount, color: 'text-purple-600' },
        { label: 'Student Admissions', value: studentCount, color: 'text-indigo-600' },
        { label: 'Career Applications', value: careerCount, color: 'text-slate-600' },
    ];

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                    <p className="text-sm font-medium text-slate-500 mt-1">Real-time system monitoring & management</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-8 border border-slate-200 rounded-none shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-xs font-bold text-slate-400 mb-2">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <span className={`text-4xl font-bold ${stat.color}`}>{stat.value}</span>
                            <span className="text-[10px] font-bold text-slate-300">SYSTEM TOTAL</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-none shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-8 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                    <div>
                        <h2 className="text-sm font-bold text-slate-900">Recent Contact Inquiries</h2>
                        <p className="text-xs font-medium text-slate-400 mt-1">Active data from public admission channels</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#000080] text-white text-[11px] font-bold">
                            <tr>
                                <th className="px-8 py-5">Registrant Name</th>
                                <th className="px-8 py-5">Email Address</th>
                                <th className="px-8 py-5">Message Snippet</th>
                                <th className="px-8 py-5">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {submissions.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-16 text-center text-slate-400 font-bold text-xs bg-white">
                                        No active submissions detected in system.
                                    </td>
                                </tr>
                            ) : (
                                submissions.map((sub) => (
                                    <tr key={sub.id} className="hover:bg-slate-50/80 transition-all group">
                                        <td className="px-8 py-5 text-sm font-bold text-slate-900">{sub.name}</td>
                                        <td className="px-8 py-5 text-xs text-slate-500 group-hover:text-[#000080] transition-colors">{sub.email}</td>
                                        <td className="px-8 py-5 text-xs text-slate-600 max-w-xs truncate">{sub.message}</td>
                                        <td className="px-8 py-5 text-[11px] font-bold text-slate-400">
                                            {new Date(sub.createdAt).toLocaleString()}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
