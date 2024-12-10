import { _ as __nuxt_component_1 } from './nuxt-img-BZEIDBuL.mjs';
import { defineComponent, resolveDirective, mergeProps, useSSRContext } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrGetDirectiveProps } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';
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
  __name: "SectionAboutMe",
  __ssrInlineRender: true,
  props: {
    firstname: {
      type: String,
      required: false
    },
    lastname: {
      type: String,
      required: false
    },
    photo: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtImg = __nuxt_component_1;
      const _directive_parallax = resolveDirective("parallax");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose mt-16 lg:mt-48 content-visibility-visible contain-intrinsic-size-[auto_750px]" }, _attrs))}><div class="grid grid-cols-1 lg:grid-cols-7 gap-8"><div class="col-span-4 flex flex-col gap-8 order-2 lg:order-1"><h2 class="text-4xl lg:text-6xl font-display text-zinc-800 dark:text-zinc-200">${ssrInterpolate(__props.firstname)} <br> ${ssrInterpolate(__props.lastname)}</h2><div class="dark:text-zinc-400 flex flex-col gap-4">`);
      ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/home/sign.png",
        alt: "signature",
        class: "h-8 mr-auto"
      }, null, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({
        "data-rellax-xs-speed": "0",
        "data-rellax-mobile-speed": "0",
        "data-rellax-tablet-speed": "0",
        "data-parallax-speed": "-1",
        "data-rellax-percentage": "0.5",
        class: "col-span-3 order-1 lg:order-2 pl-2 pt-2"
      }, ssrGetDirectiveProps(_ctx, _directive_parallax)))}><div class="lg:absolute aspect-square lg:aspect-[2/3] flex-none overflow-hidden bg-zinc-100 dark:bg-zinc-800 w-32 lg:w-72 rounded-2xl rotate-3">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        placeholder: "",
        src: ((_a = __props.photo) == null ? void 0 : _a.src) ? __props.photo.src : "img/placeholder.jpg",
        alt: ((_b = __props.photo) == null ? void 0 : _b.alt) ? __props.photo.alt : "Oscar Mattern",
        width: ((_c = __props.photo) == null ? void 0 : _c.width) ? __props.photo.width : 1,
        height: ((_d = __props.photo) == null ? void 0 : _d.height) ? __props.photo.height : 1,
        format: "webp",
        loading: "lazy",
        class: "h-full w-full object-cover",
        sizes: "sm:50vw md:50vw lg:30vw"
      }, null, _parent));
      _push(`</div></div></div><hr class="my-10 h-px border-0 bg-zinc-200 dark:bg-zinc-800">`);
      ssrRenderSlot(_ctx.$slots, "extra", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/SectionAboutMe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SectionAboutMe-Di0vFpvt.mjs.map
