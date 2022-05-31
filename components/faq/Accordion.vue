<template>
  <div>
    <!-- vue accordion start -->
    <vsa-list>
      <!-- Here you can use v-for to loop through items  -->
      <vsa-item :init-active="true">
        <vsa-heading> When will the project be handed over? </vsa-heading>
        <vsa-icon>
          <span class="open"> <fa :icon="['fas', 'plus']" /> </span>
          <span class="close"> <fa :icon="['fas', 'minus']" /> </span>
        </vsa-icon>
        <vsa-content>
          Ans: Mentioned hand over time of individuals Project.
        </vsa-content>
      </vsa-item>
      <vsa-item>
        <vsa-heading> What is the price? </vsa-heading>
        <vsa-icon>
          <span class="open"> <fa :icon="['fas', 'plus']" /> </span>
          <span class="close"> <fa :icon="['fas', 'minus']" /> </span>
        </vsa-icon>

        <vsa-content>
          Ans: Mentioned price of individuals Project.
        </vsa-content>
      </vsa-item>
      <vsa-item>
        <vsa-heading> How much money have to pay for Booking? </vsa-heading>
        <vsa-icon>
          <span class="open"> <fa :icon="['fas', 'plus']" /> </span>
          <span class="close"> <fa :icon="['fas', 'minus']" /> </span>
        </vsa-icon>
        <vsa-content> One lac. </vsa-content>
      </vsa-item>
      <vsa-item>
        <vsa-heading>
          How much money have to pay for down payment?
        </vsa-heading>
        <vsa-icon>
          <span class="open"> <fa :icon="['fas', 'plus']" /> </span>
          <span class="close"> <fa :icon="['fas', 'minus']" /> </span>
        </vsa-icon>
        <vsa-content> 40% of property total rate </vsa-content>
      </vsa-item>
      <vsa-item>
        <vsa-heading> Can we get bank loan? </vsa-heading>
        <vsa-icon>
          <span class="open"> <fa :icon="['fas', 'plus']" /> </span>
          <span class="close"> <fa :icon="['fas', 'minus']" /> </span>
        </vsa-icon>
        <vsa-content> Yes, maximum 70% of property value. </vsa-content>
      </vsa-item>
    </vsa-list>
    <!-- vue accordion end -->
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
}
</script>

<style lang="scss" scoped>
.vsa-list {
  --vsa-max-width: 100%;
  --vsa-border-style: none;
  --vsa-default-icon-size: 0.35;
  border: none;
}

.vsa-item {
  &--is-active {
    .vsa-item__trigger__icon {
      .open {
        display: none;
      }

      .close {
        display: block;
      }
    }
  }
  &__trigger__icon {
    padding-left: 3rem !important;
    .open {
      display: block;
      font-size: 0.9rem;
    }

    .close {
      display: none;
      font-size: 0.9rem;
    }
  }
}
</style>
