<template>
  <div class="Alerts">
    <TransitionGroup
      name="AlertsTransition"
      tag="ul"
      v-for="alertLocation in Object.keys(grouped)"
      :key="alertLocation"
      :class="`Alerts_list list--${alertLocation}`"
    >
      <AppAlert
        v-for="alert in grouped[alertLocation]"
        :key="alert.id"
        v-bind="alert"
      />
    </TransitionGroup>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useAlertStore } from '../store/alert';

  const alertStore = useAlertStore();

  const { getAlerts } = storeToRefs(alertStore);

  const alerts = computed(() => getAlerts.value);

  const grouped = computed(() => {
    return alerts.value.reduce(
      (grouped, alert) => {
        grouped[alert.location].push(alert);
        return grouped;
      },
      {
        'top-left': [],
        'top-right': [],
        'bottom-left': [],
        'bottom-right': [],
      },
    );
  })
</script>

<style lang="scss">
  .Alerts {
    width: 0;
    height: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    .AlertsTransition {
      &-enter-active, &-leave-active {
        transition: opacity .32s;
      }

      &-leave, &-enter-to {
        opacity: 1;
      }

      &-leave-to, &-enter-from {
        opacity: 0;
      }

      &-move {
        transition: transform .32s;
      }
    }

    .Alerts_list {
      position: fixed;
      list-style: none;

      &.list--top-left {
        top: 0;
        left: 0;
        
        & > li {
          margin: 0.6rem 0 0 1rem;
          &:last-child { margin-top: 1rem; }
        }
      }
      
      &.list--top-right {
        top: 0;
        right: 0;

        & > li {
          margin: 0.6rem 1rem 0 0;
          &:last-child { margin-top: 1rem; }
        }
      }

      &.list--bottom-left {
        bottom: 0;
        left: 0;
        
        & > li {
          margin: 0 0 0.6rem 1rem;
          &:last-child { margin-bottom: 1rem; }
        }
      }
      
      &.list--bottom-right {
        bottom: 0;
        right: 0;
        
        & > li {
          margin: 0 1rem 0.6rem 0;
          &:last-child { margin-bottom: 1rem; }
        }
      }
    }
  }
</style>
