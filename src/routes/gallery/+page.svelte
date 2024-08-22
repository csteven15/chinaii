<script lang="ts">
  export let data;
</script>

<div class="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3 p-5">
  {#each data.fileList.data.items as { dishName, fileName }}
    <div class="flex flex-col text-center border-solid border-gray-500 border-2 rounded-2xl">
      <img class="rounded-2xl" src={`/assets/images/gallery/${fileName}`} alt={dishName} />
      <p>{dishName}</p>
    </div>
  {/each}
</div>