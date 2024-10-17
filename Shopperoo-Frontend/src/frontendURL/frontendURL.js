export const frontendURL = (path) => {
  const protocol = window.location.protocol; // http: or https:
  const host = window.location.host; // domain:port
  const url = path ? `${protocol}//${host}/${path}` : `${protocol}//${host}`; // http://localhost:3000/path (if path is provided) or http://localhost:3000
  return url;
};
