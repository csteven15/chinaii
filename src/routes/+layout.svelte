<script>
  import { page } from "$app/stores";
  import { footerDays, mainNavigationPages } from "$lib/shared/links";
  import "../app.css";

  let mobileMenuOpen = false;
</script>

<!-- Nav -->
<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between"
      >
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex flex-shrink-0 items-center">
          <a href="/" class="text-white font-bold"> New China II </a>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {#each mainNavigationPages as { href, name }}
              <div class="flex space-x-4">
                {#if $page.url.pathname.includes(href)}
                  <a
                    {href}
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    >{name}</a
                  >
                {:else}
                  <a
                    {href}
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
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
      {#each mainNavigationPages as { href, name }}
        {#if $page.url.pathname.includes(href)}
          <a
            {href}
            class="bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {name}
          </a>
        {:else}
          <a
            {href}
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            {name}
          </a>
        {/if}
      {/each}
    </div>
  </div>
</nav>
<slot />
<!-- Footer -->
<div class="grid grid-cols-2 mx-auto max-w px-2 bg-gray-800 text-white">
  <div class="justify-self-end mx-2">Day</div>
  <div class="justify-self-start mx-2">Hours</div>
  {#each footerDays as day}
    <div class="justify-self-end mx-2">{day.days}</div>
    <div class="justify-self-start mx-2">{day.hours}</div>
  {/each}
</div>
<div class="flex flex-1 text-center bg-gray-800 justify-center text-white">
  &copy; 2023 New China II
</div>
