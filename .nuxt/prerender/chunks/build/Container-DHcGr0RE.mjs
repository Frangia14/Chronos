import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'file:///Users/kairos/Documents/GitHub/Chronos/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    innerClass: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:px-8" }, _attrs))}><div class="mx-auto max-w-7xl lg:px-8"><div class="${ssrRenderClass([_ctx.innerClass, "relative px-4 sm:px-8 lg:px-12"])}"><div class="mx-auto max-w-2xl lg:max-w-5xl">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Container.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Container-DHcGr0RE.mjs.map
