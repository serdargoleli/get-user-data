<template>
  <div class="card">
    <template v-if="loading"> <skeletor /> </template>
    <template v-else>
      <div class="cs-card-header relative">
        <h3 class="subtitle">{{ $t('CardSubtitle') }}</h3>
        <h1 class="title">{{ user.name.first }} {{ user.name.last }}</h1>
        <div class="cs-img-box img-box-content" :style="`background-image: url('${user.picture.large}')`"></div>
      </div>
      <div class="content-box">
        <span class="label"> {{ $t('Email') }}: </span>
        <span>{{ user.email }}</span>
      </div>
      <div class="cs-content-box">
        <div class="pr-1">
          <div class="content-box">
            <span class="label">{{ $t('Phone') }}:</span>
            <span>{{ user.phone }}</span>
          </div>
        </div>
        <div class="pl-1">
          <div class="content-box">
            <span class="label">{{ $t('Gender') }}:</span>
            <span>{{ user.gender }}</span>
          </div>
        </div>
      </div>

      <div class="cs-content-box">
        <div class="pr-1">
          <div class="content-box">
            <span class="label">{{ $t('Nationality') }}:</span>
            <span>{{ user.nat }}</span>
          </div>
        </div>
        <div class="pl-1">
          <div class="content-box">
            <span class="label">{{ $t('Country') }}:</span>
            <span>{{ user.location.country }}</span>
          </div>
        </div>
      </div>
      <div class="cs-content-box">
        <div class="pr-1">
          <div class="content-box">
            <span class="label">{{ $t('City') }}:</span>
            <span>{{ user.location.city }}</span>
          </div>
        </div>
        <div class="pl-1">
          <div class="content-box">
            <span class="label">{{ $t('State') }}:</span>
            <span>{{ user.location.state }}</span>
          </div>
        </div>
      </div>
      <div class="cs-content-box">
        <div class="pr-1">
          <div class="content-box">
            <span class="label">{{ $t('Street') }}:</span>
            <span>{{ user.location.street.name }}</span>
          </div>
        </div>
        <div class="pl-1">
          <div class="content-box">
            <span class="label">{{ $t('Code') }}:</span>
            <span>{{ user.location.postcode }}</span>
          </div>
        </div>
      </div>
    </template>
    <button class="btn-yellow" @click="getData">{{ $t('GetNewPerson') }}</button>
  </div>
</template>
<script>
import skeletor from '@/components/skeleton.vue'
export default {
  name: 'Card',
  props: ['getData', 'user', 'loading'],
  components: {
    skeletor,
  },
}
</script>
<style lang="postcss">
.card {
  @apply relative z-10 w-full md:w-3/4 p-7 mt-28 md:mt-0 rounded-lg shadow-md  bg-gray-200 dark:bg-gray-900;
}
.subtitle {
  @apply text-xs font-normal mb-1 text-gray-600 dark:text-gray-200;
}
.title {
  @apply text-2xl font-bold mb-4 text-gray-700 dark:text-gray-50;
}
.content-box {
  @apply p-3  bg-gray-300 dark:bg-gray-800 mb-3 rounded-lg dark:text-gray-400;
}
.cs-content-box {
  @apply flex;
}
.cs-content-box > div {
  @apply w-full md:w-1/2;
}

.content-box .label {
  @apply text-gray-500 dark:text-gray-500 font-normal text-xs;
}
.content-box .label + span {
  @apply text-gray-900 dark:text-gray-200 font-medium text-sm;
}
.btn-yellow {
  @apply bg-yellow-500 p-2 rounded-lg dark:text-gray-100 w-full hover:bg-yellow-600 font-medium;
}
.cs-content-box .content-box {
  @apply flex flex-col;
}
.cs-img-box {
  @apply absolute rounded-xl z-10 bg-cover right-0 m-auto 
   w-24 h-24 md:w-32 md:h-32
    -top-16  md:-top-20 shadow-md;
}
</style>
