import { h as __nuxt_component_0$1 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'file:///workspaces/nuxt-project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file:///workspaces/nuxt-project/node_modules/vue/server-renderer/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///workspaces/nuxt-project/node_modules/hookable/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/unctx/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/ufo/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/h3/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///workspaces/nuxt-project/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///workspaces/nuxt-project/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///workspaces/nuxt-project/node_modules/destr/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/scule/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/ohash/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/unstorage/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///workspaces/nuxt-project/node_modules/radix3/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/pathe/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/unified/index.js';
import 'file:///workspaces/nuxt-project/node_modules/mdast-util-to-string/index.js';
import 'file:///workspaces/nuxt-project/node_modules/micromark/lib/preprocess.js';
import 'file:///workspaces/nuxt-project/node_modules/micromark/lib/postprocess.js';
import 'file:///workspaces/nuxt-project/node_modules/unist-util-stringify-position/index.js';
import 'file:///workspaces/nuxt-project/node_modules/micromark-util-character/index.js';
import 'file:///workspaces/nuxt-project/node_modules/micromark-util-chunked/index.js';
import 'file:///workspaces/nuxt-project/node_modules/micromark-util-resolve-all/index.js';
import 'file:///workspaces/nuxt-project/node_modules/remark-emoji/index.js';
import 'file:///workspaces/nuxt-project/node_modules/rehype-slug/index.js';
import 'file:///workspaces/nuxt-project/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///workspaces/nuxt-project/node_modules/rehype-external-links/index.js';
import 'file:///workspaces/nuxt-project/node_modules/remark-gfm/index.js';
import 'file:///workspaces/nuxt-project/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///workspaces/nuxt-project/node_modules/rehype-sort-attributes/index.js';
import 'file:///workspaces/nuxt-project/node_modules/rehype-raw/index.js';
import 'file:///workspaces/nuxt-project/node_modules/remark-mdc/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/remark-parse/index.js';
import 'file:///workspaces/nuxt-project/node_modules/remark-rehype/index.js';
import 'file:///workspaces/nuxt-project/node_modules/mdast-util-to-hast/index.js';
import 'file:///workspaces/nuxt-project/node_modules/detab/index.js';
import 'file:///workspaces/nuxt-project/node_modules/unist-builder/index.js';
import 'file:///workspaces/nuxt-project/node_modules/mdurl/index.js';
import 'file:///workspaces/nuxt-project/node_modules/slugify/slugify.js';
import 'file:///workspaces/nuxt-project/node_modules/unist-util-position/index.js';
import 'file:///workspaces/nuxt-project/node_modules/html-tags/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseA",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ href: __props.href }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseA.42ebdc59.mjs.map
