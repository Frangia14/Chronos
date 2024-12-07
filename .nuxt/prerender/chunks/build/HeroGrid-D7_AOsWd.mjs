import { _ as __nuxt_component_1 } from './nuxt-img-BZEIDBuL.mjs';
import { defineComponent, resolveDirective, mergeProps, useSSRContext } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';
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

const defaultImage = "img/placeholder.jpg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeroGrid",
  __ssrInlineRender: true,
  props: {
    image1: {
      type: Object,
      required: false
    },
    image2: {
      type: Object,
      required: false
    },
    image3: {
      type: Object,
      required: false
    },
    image4: {
      type: Object,
      required: false
    },
    image5: {
      type: Object,
      required: false
    },
    image6: {
      type: Object,
      required: false
    },
    image7: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
      const _component_NuxtImg = __nuxt_component_1;
      const _directive_parallax = resolveDirective("parallax");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose mt-16 sm:mt-24 content-visibility-visible contain-intrinsic-size-[auto_600px]" }, _attrs))}><div class="flex items-center justify-center gap-5 py-4 sm:gap-6 relative z-20"><div${ssrRenderAttrs(mergeProps({
        class: "hidden lg:flex flex-col gap-5 sm:gap-6",
        "data-rellax-speed": "3"
      }, ssrGetDirectiveProps(_ctx, _directive_parallax)))}><div class="relative aspect-[2/3] w-36 lg:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        placeholder: "",
        sizes: "sm:100vw md:50vw lg:220px",
        class: "absolute inset-0 h-full w-full object-cover",
        src: ((_a = __props.image1) == null ? void 0 : _a.src) ? __props.image1.src : defaultImage,
        alt: ((_b = __props.image1) == null ? void 0 : _b.alt) ? __props.image1.alt : "No alt text",
        width: ((_c = __props.image1) == null ? void 0 : _c.width) ? __props.image1.width : 1,
        height: ((_d = __props.image1) == null ? void 0 : _d.height) ? __props.image1.height : 1,
        format: "webp",
        loading: "lazy"
      }, null, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col gap-5 sm:gap-6",
        "data-rellax-speed": "1"
      }, ssrGetDirectiveProps(_ctx, _directive_parallax)))}><div class="relative aspect-[4/3] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        placeholder: "",
        sizes: "sm:100vw md:50vw lg:220px",
        class: "absolute inset-0 h-full w-full object-cover",
        src: ((_e = __props.image2) == null ? void 0 : _e.src) ? __props.image2.src : defaultImage,
        alt: ((_f = __props.image2) == null ? void 0 : _f.alt) ? __props.image2.alt : "No alt text",
        width: ((_g = __props.image2) == null ? void 0 : _g.width) ? __props.image2.width : 1,
        height: ((_h = __props.image2) == null ? void 0 : _h.height) ? __props.image2.height : 1,
        format: "webp",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="relative aspect-[3/4] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        placeholder: "",
        sizes: "sm:100vw md:50vw lg:220px",
        class: "absolute inset-0 h-full w-full object-cover",
        src: ((_i = __props.image3) == null ? void 0 : _i.src) ? __props.image3.src : defaultImage,
        alt: ((_j = __props.image3) == null ? void 0 : _j.alt) ? __props.image3.alt : "No alt text",
        width: ((_k = __props.image3) == null ? void 0 : _k.width) ? __props.image3.width : 1,
        height: ((_l = __props.image3) == null ? void 0 : _l.height) ? __props.image3.height : 1,
        format: "webp",
        loading: "lazy"
      }, null, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col gap-5 sm:gap-6",
        "data-rellax-speed": "0"
      }, ssrGetDirectiveProps(_ctx, _directive_parallax)))}><div class="relative aspect-[2/3] w-72 md:w-80 lg:w-96 flex-none overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        placeholder: "",
        sizes: "sm:100vw md:50vw lg:380px",
        class: "absolute inset-0 h-full w-full object-cover",
        src: ((_m = __props.image4) == null ? void 0 : _m.src) ? __props.image4.src : defaultImage,
        alt: ((_n = __props.image4) == null ? void 0 : _n.alt) ? __props.image4.alt : "No alt text",
        width: ((_o = __props.image4) == null ? void 0 : _o.width) ? __props.image4.width : 1,
        height: ((_p = __props.image4) == null ? void 0 : _p.height) ? __props.image4.height : 1,
        format: "webp",
        loading: "lazy"
      }, null, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col gap-5 sm:gap-6",
        "data-rellax-speed": "1"
      }, ssrGetDirectiveProps(_ctx, _directive_parallax)))}><div class="relative aspect-[3/4] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        placeholder: "",
        sizes: "sm:100vw md:50vw lg:220px",
        class: "absolute inset-0 h-full w-full object-cover",
        src: ((_q = __props.image5) == null ? void 0 : _q.src) ? __props.image5.src : defaultImage,
        alt: ((_r = __props.image5) == null ? void 0 : _r.alt) ? __props.image5.alt : "No alt text",
        width: ((_s = __props.image5) == null ? void 0 : _s.width) ? __props.image5.width : 1,
        height: ((_t = __props.image5) == null ? void 0 : _t.height) ? __props.image5.height : 1,
        format: "webp",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="relative aspect-[4/3] w-44 md:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        placeholder: "",
        sizes: "sm:100vw md:50vw lg:220px",
        class: "absolute inset-0 h-full w-full object-cover",
        src: ((_u = __props.image6) == null ? void 0 : _u.src) ? __props.image6.src : defaultImage,
        alt: ((_v = __props.image6) == null ? void 0 : _v.alt) ? __props.image6.alt : "No alt text",
        width: ((_w = __props.image6) == null ? void 0 : _w.width) ? __props.image6.width : 1,
        height: ((_x = __props.image6) == null ? void 0 : _x.height) ? __props.image6.height : 1,
        format: "webp",
        loading: "lazy"
      }, null, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({
        class: "hidden lg:flex flex-col gap-5 sm:gap-6",
        "data-rellax-speed": "3"
      }, ssrGetDirectiveProps(_ctx, _directive_parallax)))}><div class="relative aspect-[2/3] w-44 lg:w-52 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        placeholder: "",
        sizes: "sm:100vw md:50vw lg:220px",
        class: "absolute inset-0 h-full w-full object-cover",
        src: ((_y = __props.image7) == null ? void 0 : _y.src) ? __props.image7.src : defaultImage,
        alt: ((_z = __props.image7) == null ? void 0 : _z.alt) ? __props.image7.alt : "No alt text",
        width: ((_A = __props.image7) == null ? void 0 : _A.width) ? __props.image7.width : 1,
        height: ((_B = __props.image7) == null ? void 0 : _B.height) ? __props.image7.height : 1,
        format: "webp",
        loading: "lazy"
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/HeroGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HeroGrid-D7_AOsWd.mjs.map
