export const copyToClipboard = (text: string | number) => {
  if (typeof window === undefined) return false;
  const input = document.createElement("input");
  input.setAttribute("value", text.toString());
  document.body.appendChild(input);
  input.select();
  const result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
};
