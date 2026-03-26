
import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/niet/favicon.webp",
    shortcut: "/niet/favicon.webp",
    apple: "/niet/favicon.webp",
  },
};

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
