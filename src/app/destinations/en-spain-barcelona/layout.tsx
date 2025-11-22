import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barcelona Beach Camp, Spain | Camp Adventure",
  description:
    "Barcelona Beach Camp at BISC Sailing Center for children & teenagers from 10-16 years. Sailing, water sports & adventure!",
};

export default function SpainBarcelonaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

