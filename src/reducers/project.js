export const projectReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { projects: [...state.projects, action.project] };
    case "edit":
      delete action.project.data.id;
      return { projects: state.projects.map(project => (project.id === action.project.id ? { ...project, ...action.project.data } : project)) };
    case "switchFavorite":
      return { projects: state.projects.map(project => (project.id === action.projectId ? { ...project, favorite: !project.favorite } : project)) };
    default:
      return state;
  }
};
