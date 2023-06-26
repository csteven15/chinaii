<script lang="ts">
  import { page } from "$app/stores";
  // $: path = $page.url.pathname === undefined ? "" : $page.url.pathname;
  $: rawCrumbs = $page.url.pathname?.split("/");
  $: nameCrumbs = rawCrumbs
    .map((crumb) => crumb.replace("ii", "II"))
    .map((crumb) => crumb.replaceAll("_", " "))
    // .map((crumb) => crumb.length === 0 ? "/" : crumb)
    .map((crumb) => crumb.replace(/\b\w/g, (l) => l.toUpperCase()));

  function getBreadcrumbURL(part: string) {
    const stopIndex = rawCrumbs.indexOf(part);
    if (!stopIndex) return "/";
    // starts out as /
    let path = "";
    for (let i = 1; i <= stopIndex; i++) {
      path += `/${rawCrumbs[i]}`;
    }
    return path;
  }
</script>

<div>
  {#each rawCrumbs as crumb, i}
    {#if i == rawCrumbs.length - 1}
      {nameCrumbs[i]}
    {:else}
      <a class="font-bold underline" href={getBreadcrumbURL(crumb)}
        >{nameCrumbs[i]}</a
      >
      {#if i > 0 && i < rawCrumbs.length}
        <span class="font-bold">&gt; &nbsp;</span>
      {/if}
    {/if}
  {/each}
</div>
