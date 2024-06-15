export function isDynamicPathname(pathname: string): boolean {
  return /\[.*\]/.test(pathname);
}

export function formatPathname(pathname: string): string {
  // Remove leading slash and split by slashes
  const parts = pathname.slice(1).split("/");
  // Capitalize each part and join with space
  return parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function formatDynamicPathname(pathname: string): string {
  // Extract the ID from the pathname
  const id = pathname.split("/").pop();
  if (!id) {
    return "";
  }
  // Replace dashes with spaces and capitalize words
  return id.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
