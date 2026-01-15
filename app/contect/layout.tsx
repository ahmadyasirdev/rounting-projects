

export const metadata = {
  title: "contect page",
  description: "this is services page",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}