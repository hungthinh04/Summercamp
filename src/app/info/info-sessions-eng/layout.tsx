import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info Sesions for our 2026 Camps",
  description:
    "Take part in our information sessions and find out more about staying at any of our camp locations. Sign up here!",
};

export default function InfoSessionsEngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


