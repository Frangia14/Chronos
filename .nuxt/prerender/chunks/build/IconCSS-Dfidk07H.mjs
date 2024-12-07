import { useSSRContext, defineComponent, computed, unref, mergeProps } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';
import { u as useAppConfig } from './config-CoAz-WqG.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/klona/dist/index.mjs';
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
  __name: "IconCSS",
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
  setup(__props) {
    var _a;
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const props = __props;
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const iconUrl = computed(() => `url('https://api.iconify.design/${iconName.value.replace(":", "/")}.svg')`);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--71ded496": unref(iconUrl)
      } };
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: { width: unref(sSize), height: unref(sSize) }
      }, _attrs, _cssVars))} data-v-11604bcf></span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/IconCSS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconCSS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11604bcf"]]);

export { IconCSS as default };
//# sourceMappingURL=IconCSS-Dfidk07H.mjs.map
