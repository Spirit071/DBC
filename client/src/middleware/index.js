export const nameAndTitle = (user) => {
    const metadata = JSON.parse(user.metadata);
    const title = String(metadata.title || "");
    const cleanedTitle = title.replace(/[^a-zA-Z]/g, "");
    return cleanedTitle ? `${cleanedTitle}. ${user.name}` : user.name;
  };