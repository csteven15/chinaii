<script lang="ts">
  import { page } from "$app/stores";
  import { menuCategories } from "$lib/shared/links";

  let mobileMenuOpen = false;
</script>

<!-- Nav -->
<nav class="bg-gray-700">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between"
      >
        <!-- Mobile menu button-->
        <button
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="group sm:hidden w-full inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          Show Menu
          {#if mobileMenuOpen}
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"
              /></svg
            >
            &nbsp;
          {:else}
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
              /></svg
            >
            &nbsp;
          {/if}
        </button>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {#each menuCategories as { href, name }}
              <div class="flex space-x-4">
                {#if $page.url.pathname.includes(href)}
                  <a
                    {href}
                    class="text-gray-300 bg-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {name}
                  </a>
                {:else}
                  <a
                    {href}
                    class="text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {name}
                  </a>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu, show/hide based on menu state. -->
  <div class={mobileMenuOpen ? "" : "hidden"}>
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      {#each menuCategories as { href, name }}
        {#if $page.url.pathname.includes(href)}
          <a
            {href}
            class="bg-gray-900 text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {name}
          </a>
        {:else}
          <a
            {href}
            class="text-gray-300 hover:bg-gray-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {name}
          </a>
        {/if}
      {/each}
    </div>
  </div>
</nav>
<div class="mx-7">
  <slot />
</div>
