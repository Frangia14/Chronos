import __nuxt_component_1 from './Icon-B-P0FYQB.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-img-BZEIDBuL.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/@iconify/vue/dist/iconify.mjs';
import './server.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/h3/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/ufo/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unified/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/remark-parse/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/remark-rehype/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/defu/dist/defu.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/remark-gfm/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/rehype-external-links/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/rehype-raw/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/detab/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/scule/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/hast-util-to-string/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/github-slugger/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/destr/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/hookable/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/klona/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/radix3/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unctx/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/pathe/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/ipx/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/ohash/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unhead/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/rellax/rellax.js';
import './config-CoAz-WqG.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PackagePrice",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: { default: "" },
    includedFeatures: {},
    price: {},
    currency: { default: "USD" },
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtImg = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose" }, _attrs))}><div class="mx-auto max-w-2xl rounded-3xl ring-1 ring-zinc-200 dark:ring-zinc-50/5 lg:mx-0 lg:flex lg:max-w-none lg:items-stretch"><div class="p-8 sm:p-10 lg:flex-auto"><h3 class="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">${ssrInterpolate(_ctx.title)}</h3>`);
      if (_ctx.description) {
        _push(`<p class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-500">${ssrInterpolate(_ctx.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400"><!--[-->`);
      ssrRenderList(_ctx.includedFeatures, (feature) => {
        _push(`<li class="flex gap-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:check",
          class: "h-6 w-5 flex-none text-yellow-600"
        }, null, _parent));
        _push(` ${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0"><div class="${ssrRenderClass([[_ctx.image ? "bg-zinc-200 dark:bg-zinc-800" : "bg-zinc-100 dark:bg-zinc-800/30"], "relative overflow-hidden rounded-2xl py-10 text-center ring-1 ring-inset ring-zinc-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:h-full"])}">`);
      if (_ctx.image) {
        _push(`<div class="absolute inset-0 mix-blend-overlay">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: _ctx.image.src,
          alt: _ctx.image.alt,
          width: _ctx.image.width,
          height: _ctx.image.height,
          class: "w-full h-full object-cover"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mx-auto max-w-xs px-8 z-10"><p class="flex items-baseline justify-center gap-x-2"><span class="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">${ssrInterpolate(_ctx.price)}</span><span class="text-sm font-semibold leading-6 tracking-wide text-zinc-800 dark:text-zinc-200">${ssrInterpolate(_ctx.currency)}</span></p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/PackagePrice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PackagePrice-B5_mep-I.mjs.map
