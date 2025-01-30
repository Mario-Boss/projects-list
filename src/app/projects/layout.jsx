export default async function ProjectsLayout({ children }) {
  return (
    <>
      <div className="flex-none pr-8 w-auto border-r-2 border-silver">Favorite Projects</div>
      <div className="grow pl-8">{children}</div>
    </>
  );
}
