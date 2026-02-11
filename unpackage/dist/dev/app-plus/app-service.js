if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {};
  function _sfc_render$4(_ctx, _cache) {
    return null;
  }
  const PagesCalculatorCalculator = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/calculator/calculator.vue"]]);
  const _sfc_main$4 = {};
  function _sfc_render$3(_ctx, _cache) {
    return null;
  }
  const PagesCollectionCollection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/collection/collection.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return null;
  }
  const PagesHistoryHistory = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/history/history.vue"]]);
  const ON_SHOW = "onShow";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createLifeCycleHook(
    ON_SHOW,
    1 | 2
    /* HookFlags.PAGE */
  );
  const _imports_0$1 = "/static/me_arrow.png";
  const _sfc_main$2 = {
    __name: "MeButton",
    props: {
      imageColor: { type: String, default: "#eee" },
      imageName: { type: String, default: "" },
      title: { type: String, default: "" },
      showArrow: { type: Boolean, default: true },
      cacheSize: { type: String, default: "0" }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "me-btn",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    }, [
      vue.createElementVNode("view", { class: "left" }, [
        vue.createElementVNode(
          "view",
          {
            class: "icon",
            style: vue.normalizeStyle({ backgroundColor: $props.imageColor })
          },
          [
            $props.imageName ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              src: `/static/${$props.imageName}.png`,
              mode: "aspectFit"
            }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode(
          "text",
          { class: "title" },
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        )
      ]),
      $props.showArrow ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "arrow",
        src: _imports_0$1,
        mode: "aspectFit"
      })) : (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 1,
          class: "subtitle"
        },
        vue.toDisplayString($props.cacheSize) + "MB",
        1
        /* TEXT */
      ))
    ]);
  }
  const MeButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-0d2226e7"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/components/MeButton.vue"]]);
  const _imports_0 = "/static/logo.png";
  const _sfc_main$1 = {
    __name: "me",
    setup(__props, { expose: __expose }) {
      __expose();
      const cacheSize = vue.ref("0.00");
      function getCacheSize() {
        const info = uni.getStorageInfoSync();
        cacheSize.value = (info.currentSize / 1024).toFixed(2);
      }
      onShow(() => {
        getCacheSize();
      });
      function goLogin() {
        uni.navigateTo({ url: "/pages/login/login" });
      }
      function goTab(index) {
        uni.switchTab({ url: index === 1 ? "/pages/tab1/tab1" : "/pages/tab2/tab2" });
      }
      function openWeb(title) {
        uni.navigateTo({
          url: "/pages/web/web?title=" + title
        });
      }
      function clearCache() {
        uni.showModal({
          title: "提示",
          content: "确定清除缓存？",
          success: (res) => {
            if (res.confirm) {
              uni.clearStorageSync();
              cacheSize.value = "0.00";
            }
          }
        });
      }
      const __returned__ = { cacheSize, getCacheSize, goLogin, goTab, openWeb, clearCache, ref: vue.ref, get onShow() {
        return onShow;
      }, MeButton };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      "scroll-y": "",
      class: "page"
    }, [
      vue.createElementVNode("view", { class: "container" }, [
        vue.createElementVNode("view", { class: "login-card" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: _imports_0
          }),
          vue.createElementVNode("text", { class: "login-title" }, "未登录"),
          vue.createElementVNode("text", { class: "login-sub" }, "登录后可同步计算记录"),
          vue.createElementVNode("button", {
            class: "login-btn",
            onClick: $setup.goLogin
          }, "立即登录")
        ]),
        vue.createElementVNode("view", { class: "card" }, [
          vue.createElementVNode("text", { class: "card-title" }, "功能导航"),
          vue.createVNode($setup["MeButton"], {
            imageColor: "#FEF9C3",
            title: "收藏记录",
            imageName: "me_collection",
            showArrow: true,
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.goTab(1))
          }),
          vue.createVNode($setup["MeButton"], {
            imageColor: "#DBEAFE",
            title: "历史计算",
            imageName: "me_history",
            showArrow: true,
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.goTab(2))
          }),
          vue.createVNode($setup["MeButton"], {
            imageColor: "#DCFCE7",
            title: "最新利率",
            imageName: "me_interestRate",
            showArrow: true,
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.openWeb("最新利率"))
          }),
          vue.createVNode($setup["MeButton"], {
            imageColor: "#F3E8FF",
            title: "房产知识",
            imageName: "me_knowledge",
            showArrow: true,
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.openWeb("房贷知识"))
          })
        ]),
        vue.createElementVNode("view", { class: "card" }, [
          vue.createElementVNode("view", { class: "card-title" }, "系统设置"),
          vue.createVNode($setup["MeButton"], {
            imageColor: "#F3F4F6",
            title: "关于我们",
            imageName: "me_our",
            showArrow: true,
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.openWeb("关于我们"))
          }),
          vue.createVNode($setup["MeButton"], {
            imageColor: "#F3F4F6",
            title: "帮助中心",
            imageName: "me_help",
            showArrow: true,
            onClick: _cache[5] || (_cache[5] = ($event) => $setup.openWeb("帮助中心"))
          }),
          vue.createVNode($setup["MeButton"], {
            imageColor: "#F3F4F6",
            title: "隐私政策",
            imageName: "me_policy",
            showArrow: true,
            onClick: _cache[6] || (_cache[6] = ($event) => $setup.openWeb("隐私政策"))
          }),
          vue.createVNode($setup["MeButton"], {
            imageColor: "#F3F4F6",
            title: "清除缓存",
            imageName: "me_cache",
            showArrow: false,
            cacheSize: $setup.cacheSize,
            onClick: $setup.clearCache
          }, null, 8, ["cacheSize"])
        ])
      ])
    ]);
  }
  const PagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-19c123a7"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/me/me.vue"]]);
  __definePage("pages/calculator/calculator", PagesCalculatorCalculator);
  __definePage("pages/collection/collection", PagesCollectionCollection);
  __definePage("pages/history/history", PagesHistoryHistory);
  __definePage("pages/me/me", PagesMeMe);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
