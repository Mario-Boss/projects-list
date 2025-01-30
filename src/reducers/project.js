export const projectReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { projects: [...state.projects, action.project] };
    case "edit":
      return { projects: state.projects.map(project => (project.id === action.projectId ? { ...project, ...action.project } : project)) };
    case "like":
      return { projects: state.projects.map(project => (project.id === action.projectId ? { ...project, favorite: true } : project)) };
    case "unlike":
      return { projects: state.projects.map(project => (project.id === action.projectId ? { ...project, favorite: false } : project)) };
    default:
      return state;
  }
};
