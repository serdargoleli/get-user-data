<template>
  <div class="card w-3/12" v-if="user">
    <div class="cs-card-header relative">
      <h3 class="subtitle">My Name is</h3>
      <h1 class="title">{{ user.name.first }} {{ user.name.last }}</h1>
      <div class="cs-img-box img-box-content" :style="`background-image: url('${user.picture.large}')`"></div>
    </div>
    <div class="content-box">
      <span class="label">Email:</span>
      <span>{{ user.email }}</span>
    </div>
    <div class="content-box">
      <span class="label">Phone:</span>
      <span>{{ user.phone }}</span>
    </div>
    <div class="flex cs-content-box">
      <div class="w-1/2 pr-1">
        <div class="content-box">
          <span class="label">Nationality:</span>
          <span>{{ user.nat }}</span>
        </div>
      </div>
      <div class="w-1/2 pl-1">
        <div class="content-box">
          <span class="label">Country:</span>
          <span>{{ user.location.country }}</span>
        </div>
      </div>
    </div>
    <div class="flex cs-content-box">
      <div class="w-1/2 pr-1">
        <div class="content-box">
          <span class="label">City:</span>
          <span>{{ user.location.city }}</span>
        </div>
      </div>
      <div class="w-1/2 pl-1">
        <div class="content-box">
          <span class="label">State:</span>
          <span>{{ user.location.state }}</span>
        </div>
      </div>
    </div>
    <div class="flex cs-content-box">
      <div class="w-1/2 pr-1">
        <div class="content-box">
          <span class="label">Street:</span>
          <span>{{ user.location.street.name }}</span>
        </div>
      </div>
      <div class="w-1/2 pl-1">
        <div class="content-box">
          <span class="label">Code:</span>
          <span>{{ user.location.postcode }}</span>
        </div>
      </div>
    </div>

    <button class="btn-yellow" @click="getData">Get New Person</button>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['getData', 'user'],
}
</script>
<style lang="postcss">
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 13%);
  @apply w-3/4 p-7 rounded-lg  shadow-md dark:bg-gray-900;
}
.subtitle {
  @apply text-base font-normal text-gray-400 mb-1;
}
.title {
  @apply text-2xl font-bold text-gray-50 mb-4;
}
.content-box {
  transition: 0.3s all;
  @apply p-3 dark:bg-gray-800 mb-3 rounded-lg dark:text-gray-400;
}
.content-box .label {
  @apply dark:text-gray-500 font-normal text-xs;
}
.content-box .label + span {
  transition: 0.3s all;
  @apply dark:text-gray-100 font-normal text-sm;
}
.btn-yellow {
  @apply bg-yellow-500 p-2 rounded-lg dark:text-gray-100 w-full hover:bg-yellow-600;
}
.cs-content-box .content-box {
  @apply flex flex-col;
}
.cs-img-box {
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: -59px;
  background-size: cover;
  margin: auto;
  width: 120px;
  height: 120px;
  transition: 0.3s all;
  z-index: 99;
}
</style>
