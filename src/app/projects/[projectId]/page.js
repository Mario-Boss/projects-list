export default async function NewProject({ params }) {
  const projectId = (await params).projectId;

  return (
    <>
      <div>Project page: {projectId} </div>
    </>
  );
}
