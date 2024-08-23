import { mainMenuCategories } from "$lib/shared/links";

export async function load({ params: { menuCateogry }, fetch }) {
  let menu = {};
  if (menuCateogry === "main") {
    let mainMenu = await Promise.all(mainMenuCategories.map(async menu => {
      const res = await fetch(`/assets/${menu.href}.json`);
      let json = await res.json();
      return json.data;
    }));

    menu = {
      data: {
        mainMenu
      },
    };
  } else {
    const res = await fetch(`/assets/menu/${menuCateogry}.json`);
    menu = await res.json();
  }
  return { menu, slug: menuCateogry };
}
