import { mainMenuCategories } from "$lib/shared/links";

export async function load({ params: { menuCateogry }, fetch }) {
  let menu = {};
  if (menuCateogry === "main") {
    const main = mainMenuCategories;
    menu = {
      data: main,
    };
  } else {
    const res = await fetch(`/assets/menu/${menuCateogry}.json`);
    menu = await res.json();
  }
  return { menu, slug: menuCateogry };
}
