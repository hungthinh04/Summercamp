import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting for hotels, resorts & amusement parks",
  description:
    "We would like to contribute to giving even more people the opportunity to experience unforgettable moments and adventures. Find out more about our consulting packages here.",
};

export default function InnovationConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


