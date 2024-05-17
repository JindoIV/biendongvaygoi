import Menu from "@/components/Audio/Menu";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu></Menu>
      <section>{children}</section>
    </>
  );
}
