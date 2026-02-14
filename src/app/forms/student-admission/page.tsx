'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

export default function StudentAdmissionForm() {
    const [formData, setFormData] = useState({
        district: '',
        schoolName: '',
        studentName: '',
        fatherName: '',
        dob: '',
        className: '',
        aadharNo: '',
        address: '',
        phoneNo: '',
        studentSignature: '',
        principalSignature: '',
        seal: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const [agreements, setAgreements] = useState({
        student: false,
        principal: false
    });

    // Regex Patterns
    const patterns = {
        text: /^[a-zA-Z\s\.]+$/, // Only letters, spaces, dots
        phone: /^[6-9]\d{9}$/, // Indian phone numbers (10 digits, starts with 6-9)
        aadhar: /^\d{12}$/, // 12 digit numeric
        alphanumeric: /^[a-zA-Z0-9\s\-\/]+$/, // Class name can have numbers, slashes
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Real-time Validation (Optional: prevent invalid input)
        if (name === 'phoneNo' || name === 'aadharNo') {
            if (!/^\d*$/.test(value)) return; // Only allow numbers
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];

            if (file.size > 1024 * 1024) { // 1MB limit
                alert('File size must be less than 1MB');
                e.target.value = ''; // Reset input
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, [name]: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        if (!patterns.text.test(formData.district)) return "District Name should contain only letters.";
        if (!patterns.text.test(formData.schoolName)) return "School Name should contain only letters/dots.";
        if (!patterns.text.test(formData.studentName)) return "Student Name should contain only letters.";
        if (!patterns.text.test(formData.fatherName)) return "Father Name should contain only letters.";
        if (!patterns.alphanumeric.test(formData.className)) return "Class Name contains invalid characters.";
        if (!patterns.aadhar.test(formData.aadharNo)) return "Aadhar Number must be exactly 12 digits.";
        if (!patterns.phone.test(formData.phoneNo)) return "Phone Number must be a valid 10-digit Indian number.";
        if (formData.address.length < 10) return "Address is too short.";

        if (!agreements.student) return "Student must agree to the declaration.";
        if (!agreements.principal) return "Principal/Coordinator must agree to the declaration.";

        return null; // No errors
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setLoading(false);
            window.scrollTo(0, 0); // Scroll to error
            return;
        }

        try {
            const res = await fetch('/api/forms/student-admission', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess(true);
                window.scrollTo(0, 0);
            } else {
                const data = await res.json();
                setError(data.error || 'Submission failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-white flex flex-col font-sans">
                <Navbar />
                <div className="flex-grow flex items-center justify-center p-6 bg-slate-50">
                    <div className="bg-white p-12 rounded-none border border-green-500 shadow-xl text-center max-w-md w-full">
                        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-none border border-green-200 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-widest">Submission Successful!</h2>
                        <p className="text-slate-500 mb-8 font-medium leading-relaxed">Your admission form has been submitted successfully to the administration.</p>
                        <button onClick={() => window.location.reload()} className="w-full py-4 bg-[#000080] text-white rounded-none hover:bg-orange-600 font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-900/10">Submit Another</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* Simple Hero Section */}
            <section className="bg-[#000080] pt-10 pb-10 md:pt-15 md:pb-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(circle, #fff 0.8px, transparent 0.8px)`, backgroundSize: '24px 24px' }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl text-left"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight leading-tight">
                            Student <span className="text-orange-400">Admission.</span>
                        </h1>
                        <p className="text-blue-50/80 text-sm md:text-base font-normal max-w-lg">
                            Apply to join the Hindustan Scouts and Guides Association today.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="max-w-4xl mx-auto px-6 py-12 w-full">
                <div className="bg-white rounded-none shadow-xl overflow-hidden border border-orange-500">

                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">

                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-none border border-red-200 text-sm font-bold">
                                {error}
                            </div>
                        )}

                        {/* Section 1: Student Details */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Student Details</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">District <span className="text-red-500">*</span></label>
                                    <input name="district" required type="text" onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300" placeholder="Enter District" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">School/College Name <span className="text-red-500">*</span></label>
                                    <input name="schoolName" required type="text" onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300" placeholder="Enter Institution Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Student Name <span className="text-red-500">*</span></label>
                                    <input name="studentName" required type="text" onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300" placeholder="As per Aadhar" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Father Name <span className="text-red-500">*</span></label>
                                    <input name="fatherName" required type="text" onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300" placeholder="Father's Full Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Date of Birth <span className="text-red-500">*</span></label>
                                    <input name="dob" required type="date" onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Class/Grade <span className="text-red-500">*</span></label>
                                    <input name="className" required type="text" onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300" placeholder="e.g. 10th Standard" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Student Aadhar No. <span className="text-red-500">*</span></label>
                                    <input name="aadharNo" required type="text" maxLength={12} onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300" placeholder="12-digit Number" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Phone No. <span className="text-red-500">*</span></label>
                                    <input name="phoneNo" required type="tel" maxLength={10} onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-300" placeholder="10-digit Mobile" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Residential Address <span className="text-red-500">*</span></label>
                                    <textarea name="address" required onChange={handleInputChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-none focus:ring-2 focus:ring-orange-500 outline-none transition-all h-24 resize-none text-slate-900 font-medium placeholder:text-slate-300" placeholder="Enter Full Address"></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Declarations */}
                        <div className="space-y-8 pt-6">
                            <h2 className="text-xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Student Declaration</h2>
                            <div className="bg-orange-50 p-6 border border-orange-100 flex gap-4 items-start">
                                <input
                                    type="checkbox"
                                    id="studentAgreement"
                                    checked={agreements.student}
                                    onChange={(e) => setAgreements(prev => ({ ...prev, student: e.target.checked }))}
                                    className="mt-1 w-5 h-5 text-orange-600 rounded-none border-slate-300 focus:ring-orange-500 cursor-pointer"
                                />
                                <label htmlFor="studentAgreement" className="text-sm text-slate-700 italic leading-relaxed cursor-pointer font-medium">
                                    "I, Mr./Ms. <strong className="text-orange-600">{formData.studentName || '_________'}</strong>, voluntarily wish to join the Hindustan Scouting/Guiding Program in my School/College. I understand and agree to actively participate in all indoor and outdoor activities conducted as part of the program." <span className="text-red-500 font-bold">*</span>
                                </label>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Student Signature (Image &lt; 1MB) <span className="text-red-500">*</span></label>
                                <div className="p-4 border border-dashed border-slate-200 bg-slate-50">
                                    <input name="studentSignature" required type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-6 file:rounded-none file:border file:border-slate-200 file:text-xs file:font-bold file:bg-white file:text-[#000080] hover:file:bg-slate-50 file:cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 pt-6">
                            <h2 className="text-xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">Co-Ordinator / Principal</h2>
                            <div className="bg-slate-50 p-6 border border-slate-200 flex gap-4 items-start">
                                <input
                                    type="checkbox"
                                    id="principalAgreement"
                                    checked={agreements.principal}
                                    onChange={(e) => setAgreements(prev => ({ ...prev, principal: e.target.checked }))}
                                    className="mt-1 w-5 h-5 text-orange-600 rounded-none border-slate-300 focus:ring-orange-500 cursor-pointer"
                                />
                                <label htmlFor="principalAgreement" className="text-sm text-slate-700 italic leading-relaxed cursor-pointer font-medium">
                                    "We have gone through the contents of this Scouting/Guiding programmed by our authorities and we support to conduct both the indoor and outdoor Scouting /Guiding program by our students, we have no objectionable contents in implementing this program in our school/College." <span className="text-red-500 font-bold">*</span>
                                </label>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Principal Signature <span className="text-red-500">*</span></label>
                                    <div className="p-4 border border-dashed border-slate-200 bg-slate-50">
                                        <input name="principalSignature" required type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-6 file:rounded-none file:border file:border-slate-200 file:text-xs file:font-bold file:bg-white file:text-[#000080] hover:file:bg-slate-50 file:cursor-pointer" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">School Seal <span className="text-red-500">*</span></label>
                                    <div className="p-4 border border-dashed border-slate-200 bg-slate-50">
                                        <input name="seal" required type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-6 file:rounded-none file:border file:border-slate-200 file:text-xs file:font-bold file:bg-white file:text-[#000080] hover:file:bg-slate-50 file:cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-5 bg-[#000080] text-white font-bold rounded-none shadow-xl hover:bg-orange-600 transition-all disabled:opacity-50 text-lg uppercase tracking-widest active:scale-[0.99] shadow-blue-900/10"
                            >
                                {loading ? 'Submitting Application...' : 'Submit Application'}
                            </button>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    );
}
