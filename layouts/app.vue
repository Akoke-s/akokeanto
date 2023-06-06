<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script>
import { shallowRef } from '@vue/reactivity';
import { defineComponent } from 'vue';
import defaultLayout from './default.vue';
export default defineComponent({
  data: () => ({
    layout: shallowRef(defaultLayout)
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`)
          this.layout = shallowRef(component?.default) || shallowRef(defaultLayout)
        } catch (e) {
          this.layout = shallowRef(defaultLayout)
        }
      }
    }
  }
});
</script>