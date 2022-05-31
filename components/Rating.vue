<template>
  <div class="rating">
    <span>
      <fa v-if="rating >= 1" :icon="['fas', 'star']" class="full-star" />
      <template v-else>
        <fa v-if="rating >= 0.5" :icon="['fas', 'star-half-stroke']" />
        <fa v-else :icon="['far', 'star']" />
      </template>
    </span>
    <span>
      <fa v-if="rating >= 2" :icon="['fas', 'star']" class="full-star" />
      <template v-else>
        <fa v-if="rating >= 1.5" :icon="['fas', 'star-half-stroke']" />
        <fa v-else :icon="['far', 'star']" />
      </template>
    </span>
    <span>
      <fa v-if="rating >= 3" :icon="['fas', 'star']" class="full-star" />
      <template v-else>
        <fa v-if="rating >= 2.5" :icon="['fas', 'star-half-stroke']" />
        <fa v-else :icon="['far', 'star']" />
      </template>
    </span>
    <span>
      <fa v-if="rating >= 4" :icon="['fas', 'star']" class="full-star" />
      <template v-else>
        <fa v-if="rating >= 3.5" :icon="['fas', 'star-half-stroke']" />
        <fa v-else :icon="['far', 'star']" />
      </template>
    </span>
    <span>
      <fa v-if="rating >= 5" :icon="['fas', 'star']" class="full-star" />
      <template v-else>
        <fa v-if="rating >= 4.5" :icon="['fas', 'star-half-stroke']" />
        <fa v-else :icon="['far', 'star']" />
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  // eslint-disable-next-line vue/require-prop-types
  props: ['rating'],
}
</script>
