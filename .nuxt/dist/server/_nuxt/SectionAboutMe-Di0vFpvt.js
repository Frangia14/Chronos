import { _ as __nuxt_component_1 } from "./nuxt-img-BZEIDBuL.js";
import { defineComponent, resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import "defu";
import "ufo";
import "h3";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ohash";
import "destr";
import "klona";
import "cookie-es";
import "rellax";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=SectionAboutMe-Di0vFpvt.js.map
