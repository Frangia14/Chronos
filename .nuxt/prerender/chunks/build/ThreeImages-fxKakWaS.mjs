import { _ as __nuxt_component_1 } from './nuxt-img-BZEIDBuL.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/defu/dist/defu.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/ufo/dist/index.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/h3/dist/index.mjs';
import './server.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/unified/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/remark-parse/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/remark-rehype/index.js';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/remark-mdc/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThreeImages",
  __ssrInlineRender: true,
  props: {
    src1: {},
    alt1: {},
    src2: {},
    alt2: {},
    src3: {},
    alt3: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose pb-8 grid lg:grid-cols-3 gap-3 lg:gap-6 aspect-[1] sm:aspect-[4/3] lg:aspect-[4/3] lg:-mr-12 lg:-ml-12" }, _attrs))}><div class="col-span-2 row-span-2 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.src1,
        alt: _ctx.alt1,
        loading: "lazy",
        class: "h-full w-full object-cover object-center",
        sizes: "sm:100vw md:50vw"
      }, null, _parent));
      _push(`</div><div class="col-span-1 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.src2,
        alt: _ctx.alt2,
        loading: "lazy",
        class: "h-full w-full object-cover object-center",
        sizes: "sm:100vw md:30vw"
      }, null, _parent));
      _push(`</div><div class="col-span-1 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.src3,
        alt: _ctx.alt3,
        loading: "lazy",
        class: "h-full w-full object-cover object-center",
        sizes: "sm:100vw md:30vw"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ThreeImages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ThreeImages-fxKakWaS.mjs.map
