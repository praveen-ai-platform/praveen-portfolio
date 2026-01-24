import "./globals.css";

export const metadata = {
  title: "Praveen Naga | SRE • AIOps • GenAI",
  description:
    "Senior SRE / DevOps Engineer specializing in Observability, AIOps, AWS, Kubernetes, and GenAI-driven monitoring automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
