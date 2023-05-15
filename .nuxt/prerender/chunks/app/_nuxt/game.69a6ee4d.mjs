import { g as useState } from '../server.mjs';
import { useSSRContext } from 'file:///workspaces/nuxt-project/node_modules/vue/index.mjs';
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

const useGame = () => useState("game", () => {
  return {
    title: "\u7F8E\u5473\u3057\u3055No.1\uFF01KFC\u98A8\u30D5\u30E9\u30A4\u30C9\u30C1\u30AD\u30F3",
    description: "KFC\u4EBA\u6C17\u30EC\u30B7\u30D41\u4F4D\uFF01\u6570\u3042\u308BKFC\u30EC\u30B7\u30D4\u2500\u3069\u308C\u3082\u4F55\u304B\u4E00\u5473\u8DB3\u308A\u306A\u3044\u6C17\u304C\u3002\u8A66\u884C\u932F\u8AA4\u306E\u672B\u306E\u4E3B\u4EBA\u3082\u7D76\u8CDB\u2606\u518D\u73FE\u7387\u306E\u9AD8\u3044\u30EC\u30B7\u30D4\u3067\u3059\u2606",
    material: [
      { text: "\u9D8F\u8089(\u304A\u597D\u304D\u306A\u90E8\u4F4D)\u3000\uFF12\u301C\uFF13\u679A\u4F4D" },
      { text: "\u2606\u725B\u4E73\u30001/2\u30AB\u30C3\u30D7" },
      { text: "\u2606\u5375\u3000\uFF11\u500B" },
      { text: "\u2606\u306B\u3093\u306B\u304F\u30C1\u30E5\u30FC\u30D6\u3000\uFF12\u30BB\u30F3\u30C1\u4F4D" },
      { text: "\u2605\u8584\u529B\u7C89\u3000\uFF11\u30AB\u30C3\u30D7" },
      { text: "\u2605\u30AA\u30FC\u30EB\u30B9\u30D1\u30A4\u30B9\u3000\u5C0F\u3055\u3058\uFF11\u5F31" },
      { text: "\u2605\u9846\u7C92\u30B3\u30F3\u30BD\u30E1\u3000\u5927\u3055\u30581/2" },
      { text: "\u2605\u5869\u3000\u5927\u3055\u30581/2" },
      { text: "\u3042\u308C\u3070\u2605\u30D1\u30D7\u30EA\u30AB\u30D1\u30A6\u30C0\u30FC\u3000\u5C0F\u3055\u3058\uFF11" }
    ],
    zairyo: "\u6750\u6599"
  };
});
const _sfc_main = {
  __name: "game",
  __ssrInlineRender: true,
  setup(__props) {
    useGame();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container"><div class="row"><div class="col"> Column </div><div class="col"> Column </div><div class="col"> Column </div></div></div><div class="container"><div class="row"><div class="col"> Column </div><div class="col"> Column </div><div class="col"> Column </div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/game.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=game.69a6ee4d.mjs.map
