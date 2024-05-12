export const isNameValid = (name?: string) => {
  if (!name?.match(/^[a-zA-Z0-9_-]*$/) || name.length < 3 || name.length > 16) {
    return false;
  }

  return true;
};
