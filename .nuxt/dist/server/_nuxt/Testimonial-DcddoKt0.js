import { _ as __nuxt_component_1 } from "./nuxt-img-BZEIDBuL.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "Testimonial",
  __ssrInlineRender: true,
  props: {
    quote: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-8 sm:inline-block sm:w-full sm:px-4" }, _attrs))}><figure class="rounded-2xl bg-zinc-50 dark:bg-zinc-800/5 p-6 text-sm leading-6 dark:border dark:border-zinc-800/50"><blockquote class="text-zinc-900 dark:text-zinc-400"><p>“${ssrInterpolate(__props.quote)}”</p></blockquote><figcaption class="mt-6 flex items-center gap-x-4">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "h-10 w-10 rounded-full bg-zinc-50 dark:bg-zinc-800 object-cover",
        src: ((_a = __props.image) == null ? void 0 : _a.src) ? __props.image.src : "/img/placeholder.jpg",
        alt: ((_b = __props.image) == null ? void 0 : _b.alt) ? __props.image.alt : "Placeholder",
        width: ((_c = __props.image) == null ? void 0 : _c.width) ? __props.image.width : 80,
        height: ((_d = __props.image) == null ? void 0 : _d.height) ? __props.image.height : 80
      }, null, _parent));
      _push(`<div class="font-semibold text-zinc-900 dark:text-zinc-300">${ssrInterpolate(__props.name)}</div></figcaption></figure></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Testimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Testimonial-DcddoKt0.js.map
