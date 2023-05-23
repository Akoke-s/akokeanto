<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script>
import { shallowRef } from '@vue/reactivity';
import { defineComponent } from 'vue';
import AppDefaultLayout from './AppDefaultLayout.vue';
export default defineComponent({
  name: "AppLayout",
  data: () => ({
    layout: shallowRef(AppDefaultLayout)
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`)
          this.layout = shallowRef(component?.default) || shallowRef(AppDefaultLayout)
        } catch (e) {
          this.layout = shallowRef(AppDefaultLayout)
        }
      }
    }
  }
});
</script>