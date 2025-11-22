import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arrival & Departure | Camp Adventure",
  description:
    "Information about arrival and departure procedures for our camps.",
};

export default function ArrivalDepartureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

