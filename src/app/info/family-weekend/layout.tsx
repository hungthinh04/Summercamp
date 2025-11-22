import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Weekend | Camp Adventure",
  description: "Information about our family weekend programs.",
};

export default function FamilyWeekendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

