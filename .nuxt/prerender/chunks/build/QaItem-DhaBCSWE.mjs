import __nuxt_component_1 from './Icon-B-P0FYQB.mjs';
import { defineComponent, unref, mergeProps, withCtx, createVNode, renderSlot, openBlock, createBlock, useSSRContext } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';
import { Disclosure, DisclosureButton, DisclosurePanel } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/@headlessui/vue/dist/headlessui.esm.js';
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
  __name: "QaItem",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(ssrRenderComponent(unref(Disclosure), mergeProps({
        as: "div",
        class: "pt-6"
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<dt${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left text-zinc-900 dark:text-zinc-200" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-base font-semibold leading-7"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "question", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</span><span class="ml-6 flex h-7 items-center"${_scopeId2}>`);
                  if (!open) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "heroicons:plus-small",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "heroicons:minus-small",
                      class: "h-6 w-6"
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-base font-semibold leading-7" }, [
                      renderSlot(_ctx.$slots, "question")
                    ]),
                    createVNode("span", { class: "ml-6 flex h-7 items-center" }, [
                      !open ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: "heroicons:plus-small",
                        class: "h-6 w-6"
                      })) : (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "heroicons:minus-small",
                        class: "h-6 w-6"
                      }))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</dt>`);
            _push2(ssrRenderComponent(unref(DisclosurePanel), {
              as: "dd",
              class: "mt-2 pr-12"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-base leading-7 text-zinc-600 dark:text-zinc-500"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "answer", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-base leading-7 text-zinc-600 dark:text-zinc-500" }, [
                      renderSlot(_ctx.$slots, "answer")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("dt", null, [
                createVNode(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left text-zinc-900 dark:text-zinc-200" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-base font-semibold leading-7" }, [
                      renderSlot(_ctx.$slots, "question")
                    ]),
                    createVNode("span", { class: "ml-6 flex h-7 items-center" }, [
                      !open ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: "heroicons:plus-small",
                        class: "h-6 w-6"
                      })) : (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "heroicons:minus-small",
                        class: "h-6 w-6"
                      }))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              createVNode(unref(DisclosurePanel), {
                as: "dd",
                class: "mt-2 pr-12"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-base leading-7 text-zinc-600 dark:text-zinc-500" }, [
                    renderSlot(_ctx.$slots, "answer")
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/QaItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=QaItem-DhaBCSWE.mjs.map
