<script>
  import { page } from "$app/stores";
  import { footerDays, mainNavigationPages } from "$lib/shared/links";
  import "../app.css";

  console.log($page.url.pathname)

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
                {#if $page.url.pathname === href}
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
        {#if $page.url.pathname === href}
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
<div id="sticky-banner" class="flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
  <div class="flex items-center mx-auto">
      <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <a href="tel:4076888998">
            <button>
              <span class="inline-flex p-1 me-3 bg-white rounded-full w-6 h-6 items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-slate-600">
                  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Phone</span>
              </span> 
            </button>
          </a>
          <span class="text-lg text-white">Call us now to place a pick up order: <a href="tel:4076888998" class="inline no-underline font-bold text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">(407) 688-8998</a> or <a href="tel:4076888997" class="inline no-underline font-bold text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">(407) 688-8997</a></span>
      </p>
  </div>
  <div class="flex items-center">
      <button data-dismiss-target="#sticky-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">X</span>
      </button>
  </div>
</div>
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
