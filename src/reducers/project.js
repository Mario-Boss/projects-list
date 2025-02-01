export const projectReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { projects: [...state.projects, action.project] };
    case "edit":
      delete action.project.data.id;
      return { projects: state.projects.map(project => (project.id === action.project.id ? { ...project, ...action.project.data } : project)) };
    case "like":
      return { projects: state.projects.map(project => (project.id === action.projectId ? { ...project, favorite: true } : project)) };
    case "unlike":
      return { projects: state.projects.map(project => (project.id === action.projectId ? { ...project, favorite: false } : project)) };
    default:
      return state;
  }
};
