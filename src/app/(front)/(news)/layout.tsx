export const revalidate = 30;

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
