export const validateBug = (bug) => {
    if (!bug.title || bug.title.trim() === "") return "Title is required";
    if (bug.description && bug.description.length > 300)
      return "Description too long";
    return null;
  };
  