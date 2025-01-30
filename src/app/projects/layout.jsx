import FavoriteProjects from "@/components/FavoriteProjects";

export default async function ProjectsLayout({ children }) {
  return (
    <>
      <div className="flex-none pr-8 w-auto border-r-2 border-silver">
        <h2 className="font-bold uppercase text-lg">Favorite Projects</h2>
        <FavoriteProjects />
      </div>
      <div className="grow pl-8">{children}</div>
    </>
  );
}
