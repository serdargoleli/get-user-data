<template>
  <div class="card w-3/12">
    <h3 class="subtitle">My Name is</h3>
    <h1 class="title">Blanche Hackett</h1>

    <div class="content-box">
      <span class="label">Email:</span>
      <span>johndoe@info.com</span>
    </div>
    <div class="content-box">
      <span class="label">Phone:</span>
      <span>1-902-890-0254</span>
    </div>
    <div class="flex">
      <div class="w-1/2 pr-1">
        <div class="content-box">
          <span class="label">Nationality:</span>
          <span>TR</span>
        </div>
      </div>
      <div class="w-1/2 pl-1">
        <div class="content-box">
          <span class="label">Country:</span>
          <span>Spain</span>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2 pr-1">
        <div class="content-box">
          <span class="label">City:</span>
          <span>Bilbao</span>
        </div>
      </div>
      <div class="w-1/2 pl-1">
        <div class="content-box">
          <span class="label">State:</span>
          <span>Ceuta</span>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2 pr-1">
        <div class="content-box">
          <span class="label">Street:</span>
          <span>Bilbao</span>
        </div>
      </div>
      <div class="w-1/2 pl-1">
        <div class="content-box">
          <span class="label">Code:</span>
          <span>71320</span>
        </div>
      </div>
    </div>
    <button class="btn-yellow">Get New Person</button>
  </div>
</template>
<script>
export default {
  name: 'Card',
}
</script>
<style lang="postcss">
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 24%);
  @apply w-3/4 p-7 rounded-lg  shadow-md dark:bg-gray-900;
}
.subtitle {
  @apply text-base font-normal text-gray-400 mb-1;
}
.title {
  @apply text-2xl font-bold text-gray-50 mb-4;
}
.content-box {
  @apply p-3 dark:bg-gray-800 mb-3 rounded-lg dark:text-gray-400;
}
.content-box .label {
  @apply dark:text-gray-500 font-normal;
}
.content-box .label + span {
  @apply dark:text-gray-100 font-medium;
}
.btn-yellow {
  @apply bg-yellow-500 p-2 rounded-lg dark:text-gray-100 w-full hover:bg-yellow-600;
}
</style>
