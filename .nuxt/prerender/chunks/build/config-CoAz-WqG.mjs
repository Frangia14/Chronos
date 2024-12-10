import { klona } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/klona/dist/index.mjs';
import { a as useNuxtApp } from './server.mjs';
import { defuFn } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/defu/dist/defu.mjs';

const inlineConfig = {
  "nuxt": {}
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}

export { useAppConfig as u };
//# sourceMappingURL=config-CoAz-WqG.mjs.map
