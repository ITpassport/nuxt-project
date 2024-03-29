import { defineComponent, watch, useSlots, h, useSSRContext } from 'file:///workspaces/nuxt-project/node_modules/vue/index.mjs';
import _sfc_main$1 from './ContentRendererMarkdown.bb27e272.mjs';
import 'file:///workspaces/nuxt-project/node_modules/destr/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/scule/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/property-information/index.js';
import 'file:///workspaces/nuxt-project/node_modules/html-tags/index.js';
import '../server.mjs';
import 'file:///workspaces/nuxt-project/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///workspaces/nuxt-project/node_modules/hookable/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/unctx/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/ufo/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/h3/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///workspaces/nuxt-project/node_modules/vue/server-renderer/index.mjs';
import 'file:///workspaces/nuxt-project/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///workspaces/nuxt-project/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///workspaces/nuxt-project/node_modules/unenv/runtime/fetch/index.mjs';
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

const _sfc_main = defineComponent({
  name: "ContentRenderer",
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    watch(
      () => props.excerpt,
      (newExcerpt) => {
        var _a, _b, _c;
        if (newExcerpt && !((_a = props.value) == null ? void 0 : _a.excerpt)) {
          console.warn(`No excerpt found for document content/${(_b = props == null ? void 0 : props.value) == null ? void 0 : _b._path}.${(_c = props == null ? void 0 : props.value) == null ? void 0 : _c._extension}!`);
          console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
        }
      },
      {
        immediate: true
      }
    );
  },
  render(ctx) {
    var _a, _b;
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    if (!value && (slots == null ? void 0 : slots.empty)) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    if (value && (value == null ? void 0 : value._type) === "markdown" && ((_b = (_a = value == null ? void 0 : value.body) == null ? void 0 : _a.children) == null ? void 0 : _b.length)) {
      return h(
        _sfc_main$1,
        {
          value,
          excerpt,
          tag,
          ...this.$attrs
        }
      );
    }
    return h(
      "pre",
      null,
      JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2)
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentRenderer.ca7e6a9f.mjs.map
