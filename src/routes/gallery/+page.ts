export async function load({ fetch }) {
  const res = await fetch(`/assets/menu/files.json`);
  const fileList = await res.json();
  return { fileList };
}