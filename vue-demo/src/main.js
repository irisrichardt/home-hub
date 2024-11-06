import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";

import RootParcel from "./App.vue";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(RootParcel, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        size: this.size,
        rooms: this.rooms,
        bathrooms: this.bathrooms,
        parkingSpaces: this.parkingSpaces,
      });
    },
  },
});

export const name = "vue-demo";
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
