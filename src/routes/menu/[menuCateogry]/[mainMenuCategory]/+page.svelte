<script lang="ts">
  import Breadcrumb from "$lib/client/components/breadcrumb.svelte";

  export let data;
  $: items = data.menu.items;
</script>

<Breadcrumb />
<div class="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3">
  {#each items as { name, isHot, prices }}
    <div>
      <div class="flex flex-1">
        <p>{name}</p>
        {#if isHot}
          &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            color="red"
            ><path
              fill="currentColor"
              d="M16.5 8c0 1.5-.5 3.5-2.9 4.3c.7-1.7.8-3.4.3-5c-.7-2.1-3-3.7-4.6-4.6c-.4-.3-1.1.1-1 .7c0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5C3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5c.8 5.9 5 7.5 7 7.5c1.7 0 5-1.2 5-6.4c0-3.1-1.3-5.5-2.4-6.9c-.3-.5-1-.2-1.1.3"
            /></svg
          >
        {/if}
      </div>
      {#each prices as { label, price }}
        <p>
          {#if label}
            {label}:
          {/if}
          ${Number(price).toFixed(2)}
        </p>
      {/each}
    </div>
  {/each}
</div>
