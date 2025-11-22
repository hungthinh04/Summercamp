import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News from Camp Adventure | Don't miss any special offer",
  description:
    "Under this rubric we keep you up to date about our camps, offers and what's currently important to know.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


