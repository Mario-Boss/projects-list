export default async function NewProject({ params }) {
  const projectId = (await params).projectId;

  return (
    <>
      <div>Edit Project: {projectId} </div>
    </>
  );
}
