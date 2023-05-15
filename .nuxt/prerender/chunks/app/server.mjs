import { getCurrentInstance, toRef, isRef, inject, defineAsyncComponent, version, defineComponent, h, Suspense, nextTick, Transition, computed, provide, reactive, ref, resolveComponent, shallowRef, useSSRContext, createApp, onErrorCaptured, unref } from 'file:///workspaces/nuxt-project/node_modules/vue/index.mjs';
import { $fetch } from 'file:///workspaces/nuxt-project/node_modules/ohmyfetch/dist/node.mjs';
import { createHooks } from 'file:///workspaces/nuxt-project/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///workspaces/nuxt-project/node_modules/unctx/dist/index.mjs';
import { hasProtocol, isEqual, parseURL, joinURL } from 'file:///workspaces/nuxt-project/node_modules/ufo/dist/index.mjs';
import { createError as createError$1, sendRedirect } from 'file:///workspaces/nuxt-project/node_modules/h3/dist/index.mjs';
import { createHead as createHead$1, useHead as useHead$1 } from 'file:///workspaces/nuxt-project/node_modules/@unhead/vue/dist/index.mjs';
import { renderDOMHead, debouncedRenderDOMHead } from 'file:///workspaces/nuxt-project/node_modules/@unhead/dom/dist/index.mjs';
import { renderSSRHead } from 'file:///workspaces/nuxt-project/node_modules/@unhead/ssr/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter } from 'file:///workspaces/nuxt-project/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderAttrs } from 'file:///workspaces/nuxt-project/node_modules/vue/server-renderer/index.mjs';
import { defu } from 'file:///workspaces/nuxt-project/node_modules/defu/dist/defu.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
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

var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a2;
      if (prop === "public") {
        return target.public;
      }
      return (_a2 = target[prop]) != null ? _a2 : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a2, _b2, _c2;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b2 = (_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) != null ? _b2 : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_c2 = slots.default) == null ? void 0 : _c2.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = defineNuxtLink({ componentName: "NuxtLink" });
const nuxtLink = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defineNuxtLink,
  default: __nuxt_component_0$1
}, Symbol.toStringTag, { value: "Module" }));
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defuFn = createDefu((object, key, currentValue, _namespace) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const inlineConfig = {};
defuFn(inlineConfig);
function useHead(meta) {
  useNuxtApp()._useHead(meta);
}
const components = {
  ContentDoc: defineAsyncComponent(() => import('./_nuxt/ContentDoc.2adf0206.mjs').then((c) => c.default || c)),
  ContentList: defineAsyncComponent(() => import('./_nuxt/ContentList.8a035ff9.mjs').then((c) => c.default || c)),
  ContentNavigation: defineAsyncComponent(() => import('./_nuxt/ContentNavigation.acac7002.mjs').then((c) => c.default || c)),
  ContentQuery: defineAsyncComponent(() => import('./_nuxt/ContentQuery.994e377b.mjs').then((n) => n.C).then((c) => c.default || c)),
  ContentRenderer: defineAsyncComponent(() => import('./_nuxt/ContentRenderer.ca7e6a9f.mjs').then((c) => c.default || c)),
  ContentRendererMarkdown: defineAsyncComponent(() => import('./_nuxt/ContentRendererMarkdown.bb27e272.mjs').then((c) => c.default || c)),
  ContentSlot: defineAsyncComponent(() => import('./_nuxt/ContentSlot.646f454d.mjs').then((c) => c.default || c)),
  DocumentDrivenEmpty: defineAsyncComponent(() => import('./_nuxt/DocumentDrivenEmpty.b1426f16.mjs').then((c) => c.default || c)),
  DocumentDrivenNotFound: defineAsyncComponent(() => import('./_nuxt/DocumentDrivenNotFound.b4d3af5a.mjs').then((c) => c.default || c)),
  Markdown: defineAsyncComponent(() => import('./_nuxt/Markdown.e76eddea.mjs').then((c) => c.default || c)),
  ProseA: defineAsyncComponent(() => import('./_nuxt/ProseA.42ebdc59.mjs').then((c) => c.default || c)),
  ProseBlockquote: defineAsyncComponent(() => import('./_nuxt/ProseBlockquote.1440ad15.mjs').then((c) => c.default || c)),
  ProseCode: defineAsyncComponent(() => import('./_nuxt/ProseCode.940cb6d6.mjs').then((c) => c.default || c)),
  ProseCodeInline: defineAsyncComponent(() => import('./_nuxt/ProseCodeInline.9296b85c.mjs').then((c) => c.default || c)),
  ProseEm: defineAsyncComponent(() => import('./_nuxt/ProseEm.a106cb15.mjs').then((c) => c.default || c)),
  ProseH1: defineAsyncComponent(() => import('./_nuxt/ProseH1.8b881b4b.mjs').then((c) => c.default || c)),
  ProseH2: defineAsyncComponent(() => import('./_nuxt/ProseH2.e00b9b3d.mjs').then((c) => c.default || c)),
  ProseH3: defineAsyncComponent(() => import('./_nuxt/ProseH3.784d5c49.mjs').then((c) => c.default || c)),
  ProseH4: defineAsyncComponent(() => import('./_nuxt/ProseH4.b6a92c0e.mjs').then((c) => c.default || c)),
  ProseH5: defineAsyncComponent(() => import('./_nuxt/ProseH5.d4026590.mjs').then((c) => c.default || c)),
  ProseH6: defineAsyncComponent(() => import('./_nuxt/ProseH6.e6db1df1.mjs').then((c) => c.default || c)),
  ProseHr: defineAsyncComponent(() => import('./_nuxt/ProseHr.7889b782.mjs').then((c) => c.default || c)),
  ProseImg: defineAsyncComponent(() => import('./_nuxt/ProseImg.4debdb73.mjs').then((c) => c.default || c)),
  ProseLi: defineAsyncComponent(() => import('./_nuxt/ProseLi.bbb4922e.mjs').then((c) => c.default || c)),
  ProseOl: defineAsyncComponent(() => import('./_nuxt/ProseOl.b9ab6b75.mjs').then((c) => c.default || c)),
  ProseP: defineAsyncComponent(() => import('./_nuxt/ProseP.46201d92.mjs').then((c) => c.default || c)),
  ProseStrong: defineAsyncComponent(() => import('./_nuxt/ProseStrong.9b7b03ff.mjs').then((c) => c.default || c)),
  ProseTable: defineAsyncComponent(() => import('./_nuxt/ProseTable.159c62c5.mjs').then((c) => c.default || c)),
  ProseTbody: defineAsyncComponent(() => import('./_nuxt/ProseTbody.ff52c88e.mjs').then((c) => c.default || c)),
  ProseTd: defineAsyncComponent(() => import('./_nuxt/ProseTd.74692da9.mjs').then((c) => c.default || c)),
  ProseTh: defineAsyncComponent(() => import('./_nuxt/ProseTh.eedf60c8.mjs').then((c) => c.default || c)),
  ProseThead: defineAsyncComponent(() => import('./_nuxt/ProseThead.7f84cb10.mjs').then((c) => c.default || c)),
  ProseTr: defineAsyncComponent(() => import('./_nuxt/ProseTr.8782a986.mjs').then((c) => c.default || c)),
  ProseUl: defineAsyncComponent(() => import('./_nuxt/ProseUl.e47c6b8d.mjs').then((c) => c.default || c))
};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
function createHead(initHeadObject) {
  const unhead = createHead$1();
  const legacyHead = {
    unhead,
    install(app) {
      if (app.config.globalProperties)
        app.config.globalProperties.$head = unhead;
      app.provide("usehead", unhead);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options) {
      return unhead.push(input, options);
    },
    addEntry(input, options) {
      return unhead.push(input, options);
    },
    addHeadObjs(input, options) {
      return unhead.push(input, options);
    },
    addReactiveEntry(input, options) {
      const api = useHead$1(input, options);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document2, force) {
      if (force)
        renderDOMHead(unhead, { document: document2 });
      else
        debouncedRenderDOMHead(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document: document2 });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
const renderHeadToString = (head) => renderSSRHead(head.unhead);
version.startsWith("2.");
const appHead = { "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }], "link": [{ "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" }, { "rel": "stylesheet", "href": "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" }], "style": [], "script": [{ "src": "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" }], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.addEntry(appHead, { resolved: true });
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = (_meta, options) => {
    {
      head.addEntry(_meta, options);
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const meta = await renderHeadToString(head);
      return {
        ...meta,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? () => options.head(nuxtApp) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_mixin_plugin_mjs_prWV5EzJWI = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin(metaMixin);
});
const _47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta = {};
const _47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta = {};
const _47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta = {};
const _47workspaces_47nuxt_45project_47pages_47game_46vueMeta = {};
const _47workspaces_47nuxt_45project_47pages_47grid_46vueMeta = {};
const _47workspaces_47nuxt_45project_47pages_47index_46vueMeta = {};
const _47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta = {};
const _47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta = {};
const _47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta = {};
const _routes = [
  {
    name: (_a = _47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta.name) != null ? _a : "slug",
    path: (_b = _47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta.path) != null ? _b : "/:slug(.*)*",
    file: "/workspaces/nuxt-project/pages/[...slug].vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47_91_46_46_46slug_93_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/_...slug_.aa772597.mjs').then((m) => m.default || m)
  },
  {
    name: (_c = _47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta.name) != null ? _c : "batikansikoku",
    path: (_d = _47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta.path) != null ? _d : "/batikansikoku",
    file: "/workspaces/nuxt-project/pages/batikansikoku.vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47batikansikoku_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/batikansikoku.1a76bc11.mjs').then((m) => m.default || m)
  },
  {
    name: (_e = _47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta.name) != null ? _e : "free-megami",
    path: (_f = _47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta.path) != null ? _f : "/free-megami",
    file: "/workspaces/nuxt-project/pages/free-megami.vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47free_45megami_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/free-megami.2f332f4a.mjs').then((m) => m.default || m)
  },
  {
    name: (_g = _47workspaces_47nuxt_45project_47pages_47game_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47game_46vueMeta.name) != null ? _g : "game",
    path: (_h = _47workspaces_47nuxt_45project_47pages_47game_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47game_46vueMeta.path) != null ? _h : "/game",
    file: "/workspaces/nuxt-project/pages/game.vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47game_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47game_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47game_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47game_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47game_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/game.69a6ee4d.mjs').then((m) => m.default || m)
  },
  {
    name: (_i = _47workspaces_47nuxt_45project_47pages_47grid_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47grid_46vueMeta.name) != null ? _i : "grid",
    path: (_j = _47workspaces_47nuxt_45project_47pages_47grid_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47grid_46vueMeta.path) != null ? _j : "/grid",
    file: "/workspaces/nuxt-project/pages/grid.vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47grid_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47grid_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47grid_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47grid_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47grid_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/grid.ec760197.mjs').then((m) => m.default || m)
  },
  {
    name: (_k = _47workspaces_47nuxt_45project_47pages_47index_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47index_46vueMeta.name) != null ? _k : "index",
    path: (_l = _47workspaces_47nuxt_45project_47pages_47index_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47index_46vueMeta.path) != null ? _l : "/",
    file: "/workspaces/nuxt-project/pages/index.vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47index_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47index_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47index_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47index_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47index_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/index.2763ceb2.mjs').then((m) => m.default || m)
  },
  {
    name: (_m = _47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta.name) != null ? _m : "kerun-daiseido",
    path: (_n = _47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta.path) != null ? _n : "/kerun-daiseido",
    file: "/workspaces/nuxt-project/pages/kerun-daiseido.vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47kerun_45daiseido_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/kerun-daiseido.8279c014.mjs').then((m) => m.default || m)
  },
  {
    name: (_o = _47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta.name) != null ? _o : "recipe",
    path: (_p = _47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta.path) != null ? _p : "/recipe",
    file: "/workspaces/nuxt-project/pages/recipe.vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47recipe_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/recipe.205d0ef9.mjs').then((m) => m.default || m)
  },
  {
    name: (_q = _47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta.name) != null ? _q : "ta-zimaharu",
    path: (_r = _47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta.path) != null ? _r : "/ta-zimaharu",
    file: "/workspaces/nuxt-project/pages/ta-zimaharu.vue",
    children: [],
    meta: _47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta,
    alias: (_47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta.alias) || [],
    redirect: (_47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta == null ? void 0 : _47workspaces_47nuxt_45project_47pages_47ta_45zimaharu_46vueMeta.redirect) || void 0,
    component: () => import('./_nuxt/ta-zimaharu.d466a39d.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = to.meta.pageTransition !== false && from.meta.pageTransition !== false;
    const hookToWait = hasTransition ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  const elem = document.querySelector(selector);
  if (elem) {
    return parseFloat(getComputedStyle(elem).scrollMarginTop);
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (typeof result === "boolean") {
    return result;
  }
  return createError(result);
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  var _a2, _b2, _c2, _d2;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b2 = (_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) != null ? _b2 : createMemoryHistory(routerBase);
  const routes = (_d2 = (_c2 = routerOptions.routes) == null ? void 0 : _c2.call(routerOptions, _routes)) != null ? _d2 : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a3, _b3, _c3, _d3;
    if (((_b3 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b3.default) === ((_d3 = (_c3 = from.matched[0]) == null ? void 0 : _c3.components) == null ? void 0 : _d3.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a3, _b3;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a3 = initialLayout.value) != null ? _a3 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? void 0 : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const node_modules__64nuxt_content_dist_runtime_plugins_ws_mjs_JuoSZH52OQ = defineNuxtPlugin(() => {
  useRuntimeConfig().public;
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_head_runtime_mixin_plugin_mjs_prWV5EzJWI,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  node_modules__64nuxt_content_dist_runtime_plugins_ws_mjs_JuoSZH52OQ
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.71fffb60.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a2;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a3;
    return ((_a3 = m.components) == null ? void 0 : _a3.default) === routeProps.Component.type;
  });
  const source = (_a2 = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a2 : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a2;
      return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a2, _b2, _c2, _d2;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!((_b2 = (_a2 = props.transition) != null ? _a2 : routeProps.route.meta.pageTransition) != null ? _b2 : appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              (_d2 = (_c2 = props.keepalive) != null ? _c2 : routeProps.route.meta.keepalive) != null ? _d2 : appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$1);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useHead as a, useNuxtApp as b, createError as c, useRuntimeConfig as d, entry$1 as default, appLayoutTransition as e, _wrapIf as f, useState as g, __nuxt_component_0$1 as h, nuxtLink as n, page as p, useRoute as u };
//# sourceMappingURL=server.mjs.map
