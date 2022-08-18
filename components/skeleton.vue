<template>
  <!-- <loader " /> -->
  <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8">
    <div class="w-full">
      <div class="skeleton-subtitle h-6 w-1/3"></div>
      <div class="skeleton-title h-8 w-2/4"></div>
      <div class="content-box">
        <div class="skeleton-content max-w-[480px]"></div>
      </div>
      <div class="cs-content-box" v-for="(x, index) in 4" :key="index">
        <div class="pr-1">
          <div class="content-box">
            <div class="skeleton-content max-w-[480px]"></div>
          </div>
        </div>
        <div class="pl-1">
          <div class="content-box">
            <div class="skeleton-content max-w-[480px]"></div>
          </div>
        </div>
      </div>
      <!-- <div class="skeleton-content max-w-[480px]" v-for="(x, index) in 15" :key="index"></div> -->
    </div>
  </div>
</template>

<style lang="postcss">
.skeleton-subtitle,
.skeleton-title {
  @apply bg-gray-200 rounded-full dark:bg-gray-700  mb-4;
}
.skeleton-content {
  @apply h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-3;
}
</style>
