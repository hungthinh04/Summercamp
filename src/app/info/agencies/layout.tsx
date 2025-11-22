import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencies | Your cooperation with Camp Adventure",
  description:
    "Are you an agency interested in cooperation and/or do you already have clients who would like to participate in our sports & language camps in England, Germany or Northern Ireland? On this page you will find suitable offers and our contact persons.",
};

export default function AgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


