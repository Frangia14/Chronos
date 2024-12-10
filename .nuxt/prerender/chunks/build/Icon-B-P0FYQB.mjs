import { useSSRContext, defineComponent, ref, computed, watch, withAsyncContext, unref, mergeProps, createVNode, resolveDynamicComponent } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/@iconify/vue/dist/offline.mjs';
import { loadIcon } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/@iconify/vue/dist/iconify.mjs';
import { a as useNuxtApp, m as useState } from './server.mjs';
import { u as useAppConfig } from './config-CoAz-WqG.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const props = __props;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const icon = computed(() => {
      var _a2;
      return (_a2 = state.value) == null ? void 0 : _a2[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a2, _b, _c;
      if (!props.size && typeof ((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a3;
      var _a2;
      return (_a3 = (_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.class) != null ? _a3 : "icon";
    });
    async function loadIconComponent() {
      var _a2;
      if (component.value) {
        return;
      }
      if (!((_a2 = state.value) == null ? void 0 : _a2[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-cf1ec82f></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon), mergeProps({
          icon: unref(icon),
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-cf1ec82f>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf1ec82f"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=Icon-B-P0FYQB.mjs.map
