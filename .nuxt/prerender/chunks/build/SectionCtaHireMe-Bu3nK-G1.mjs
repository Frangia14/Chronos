import { _ as __nuxt_component_0 } from './nuxt-link-Bwq_z72L.mjs';
import __nuxt_component_1 from './Icon-B-P0FYQB.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/h3/dist/index.mjs';
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
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/@iconify/vue/dist/iconify.mjs';
import './config-CoAz-WqG.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose" }, _attrs))}><div class="relative px-4 py-12 lg:py-24 rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-yellow-100/5 shadow-sm dark:shadow-2xl"><div class=""><h2 class="font-display font-thin text-4xl max-w-2xl mx-auto text-center text-zinc-900 dark:text-gradient">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
    _push(`Questions or collaboration ideas?`);
  }, _push, _parent);
  _push(`</h2><div class="flex flex-col gap-4 mt-8 max-w-lg mx-auto text-center text-zinc-600 dark:text-zinc-400 text-sm">`);
  ssrRenderSlot(_ctx.$slots, "description", {}, () => {
    _push(`<p>I would love to hear from you! Whether you have questions about my work, have collaboration ideas, or are interested in hiring me for a project, don&#39;t hesitate to reach out.</p><p>I usually respond within hours!</p>`);
  }, _push, _parent);
  _push(`</div><ul class="mt-16 flex flex-col gap-4 lg:gap-12 lg:flex-row items-center justify-center max-w-2xl mx-auto"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "mailto:oscar@mattern.com",
    class: "flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "heroicons:envelope-20-solid",
          size: "1.8rem"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>oscar@mattern.com</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "heroicons:envelope-20-solid",
            size: "1.8rem"
          }),
          createVNode("span", null, "oscar@mattern.com")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://instagram.org",
    class: "flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fe:instagram",
          size: "1.8rem"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>oscarphotography</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "fe:instagram",
            size: "1.8rem"
          }),
          createVNode("span", null, "oscarphotography")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://instagram.org",
    class: "flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fe:twitter",
          size: "1.8rem"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>oscarphotography</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "fe:twitter",
            size: "1.8rem"
          }),
          createVNode("span", null, "oscarphotography")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><svg viewBox="0 0 1024 1024" class="hidden dark:block absolute top-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 pointer-events-none" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle><defs><radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)"><stop stop-color="#18181B"></stop><stop offset="1" stop-color="#333626" stop-opacity="0"></stop></radialGradient></defs></svg><svg viewBox="0 0 1024 1024" class="dark:hidden absolute top-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 pointer-events-none" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle><defs><radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)"><stop stop-color="#F0F0F0"></stop><stop offset="1" stop-color="#F3E0AD" stop-opacity="0"></stop></radialGradient></defs></svg></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/SectionCtaHireMe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionCtaHireMe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { SectionCtaHireMe as default };
//# sourceMappingURL=SectionCtaHireMe-Bu3nK-G1.mjs.map
