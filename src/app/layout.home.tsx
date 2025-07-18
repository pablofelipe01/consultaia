import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Lab IA - Inicio",
  description: "Soluciones avanzadas de inteligencia artificial para el sector sanitario y de investigación",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
