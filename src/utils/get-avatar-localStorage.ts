export const setLocalStorageavatarPath = (avatarPath: {
  avatarPath?: string;
}) => {
  localStorage.setItem("avatarPath", JSON.stringify(avatarPath));
};

export const getLocalStorageavatarPath = () => {
  const avatarPath = localStorage.getItem("avatarPath");
  return avatarPath ? JSON.parse(avatarPath) : null;
};
