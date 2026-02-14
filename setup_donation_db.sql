-- Create DonationSubmission table
CREATE TABLE "DonationSubmission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "pan" TEXT,
    "address" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DonationSubmission_pkey" PRIMARY KEY ("id")
);
