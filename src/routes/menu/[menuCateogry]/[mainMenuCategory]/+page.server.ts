export async function load({ params: { mainMenuCategory }, fetch }) {
  const res = await fetch(`/assets/menu/main/${mainMenuCategory}.json`);
  const { data: menu } = await res.json();
  return { menu };
}
