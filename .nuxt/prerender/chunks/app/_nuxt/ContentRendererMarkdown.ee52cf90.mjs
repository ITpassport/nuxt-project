import { defineComponent, h, Text, resolveComponent, useSSRContext } from 'file:///workspaces/restrartnuixt3/node_modules/vue/index.mjs';
import destr from 'file:///workspaces/restrartnuixt3/node_modules/destr/dist/index.mjs';
import { pascalCase } from 'file:///workspaces/restrartnuixt3/node_modules/scule/dist/index.mjs';
import { find, html } from 'file:///workspaces/restrartnuixt3/node_modules/property-information/index.js';
import htmlTags from 'file:///workspaces/restrartnuixt3/node_modules/html-tags/index.js';
import { d as useRuntimeConfig, u as useRoute } from '../server.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/hookable/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/unctx/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/ufo/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/h3/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/vue/server-renderer/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/ohash/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/unstorage/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/radix3/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/pathe/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/unified/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/mdast-util-to-string/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/micromark/lib/preprocess.js';
import 'file:///workspaces/restrartnuixt3/node_modules/micromark/lib/postprocess.js';
import 'file:///workspaces/restrartnuixt3/node_modules/unist-util-stringify-position/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/micromark-util-character/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/micromark-util-chunked/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/micromark-util-resolve-all/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/remark-emoji/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/rehype-slug/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/rehype-external-links/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/remark-gfm/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/rehype-sort-attributes/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/rehype-raw/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/remark-mdc/dist/index.mjs';
import 'file:///workspaces/restrartnuixt3/node_modules/remark-parse/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/remark-rehype/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/mdast-util-to-hast/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/detab/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/unist-builder/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/mdurl/index.js';
import 'file:///workspaces/restrartnuixt3/node_modules/slugify/slugify.js';
import 'file:///workspaces/restrartnuixt3/node_modules/unist-util-position/index.js';

const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const _sfc_main = defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    },
    components: {
      type: Object,
      default: () => ({})
    }
  },
  async setup(props) {
    var _a;
    const { content: { tags = {} } } = useRuntimeConfig().public;
    await resolveContentComponents(props.value.body, {
      tags: {
        ...tags,
        ...((_a = props.value) == null ? void 0 : _a._components) || {},
        ...props.components
      }
    });
    return { tags };
  },
  render(ctx) {
    var _a;
    const { tags, tag, value, components } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (ctx.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta = {
      ...value,
      tags: {
        ...tags,
        ...(value == null ? void 0 : value._components) || {},
        ...components
      }
    };
    let component = meta.component || tag;
    if (typeof meta.component === "object") {
      component = meta.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, h, meta));
    return h(
      component,
      {
        ...(_a = meta.component) == null ? void 0 : _a.props,
        ...this.$attrs
      },
      {
        default: createSlotFunction(children)
      }
    );
  }
});
function renderNode(node, h2, documentMeta, parentScope = {}) {
  var _a;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  const originalTag = node.tag;
  const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[originalTag] || originalTag;
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  return h2(
    component,
    props,
    renderSlots(node, h2, documentMeta, { ...parentScope, ...props })
  );
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  var _a;
  const data = {
    ...parentScope,
    $route: () => useRoute(),
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = (_a = node.props) == null ? void 0 : _a.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return {};
  }, data);
  return h2(Text, value);
}
function renderSlots(node, h2, documentMeta, parentProps) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta, parentProps));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...(node2.children || []).map((child) => renderNode(child, h2, documentMeta, parentProps)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = (node2.children || []).map((child) => renderNode(child, h2, documentMeta, parentProps));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  const slotEntries = Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]);
  return Object.fromEntries(slotEntries);
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!htmlTags.includes(component)) {
    const componentFn = resolveComponent(pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => mergeTextNodes(nodes) : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && (previousNode == null ? void 0 : previousNode.type) === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta) {
  const components = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components.map(async (c) => {
    const resolvedComponent = resolveComponent(c);
    if ((resolvedComponent == null ? void 0 : resolvedComponent.__asyncLoader) && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    var _a;
    if (node.type === "text" || node.tag === "binding") {
      return [];
    }
    const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[node.tag] || node.tag;
    const components2 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components2.push(renderTag);
    }
    for (const child of node.children || []) {
      components2.push(...loadComponents(child, documentMeta));
    }
    return components2;
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentRendererMarkdown.ee52cf90.mjs.map
