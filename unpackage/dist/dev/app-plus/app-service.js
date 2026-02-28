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
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
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
  const onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  const _imports_0$5 = "/static/logo.png";
  const _imports_0$4 = "/static/login_phone.png";
  const _imports_0$3 = "/static/login_passworld.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$f = {
    __name: "login",
    setup(__props, { expose: __expose }) {
      __expose();
      const phone = vue.ref("");
      const password = vue.ref("");
      const onPhoneInput = (e) => {
        formatAppLog("log", "at pages/login/login.vue:68", "手机号输入:", phone.value);
      };
      const onPasswordInput = (e) => {
        formatAppLog("log", "at pages/login/login.vue:72", "密码输入:", password.value);
      };
      const goReset = () => {
        uni.navigateTo({
          url: "/pages/reset/reset"
        });
      };
      const goRegister = () => {
        uni.navigateTo({
          url: "/pages/register/register"
        });
      };
      const handleLogin = () => {
        uni.reLaunch({
          url: "/pages/calculator/calculator"
        });
      };
      const __returned__ = { phone, password, onPhoneInput, onPasswordInput, goReset, goRegister, handleLogin, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("image", {
        class: "logo",
        src: _imports_0$5,
        mode: "aspectFill"
      }),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "title" }, "欢迎登录"),
        vue.createElementVNode("view", { class: "subtitle" }, "请输入账号登录您的账户"),
        vue.createElementVNode("view", { class: "label" }, "手机号"),
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.createElementVNode("image", {
            class: "icon",
            src: _imports_0$4,
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.phone = $event),
              type: "number",
              placeholder: "请输入手机号码",
              class: "input",
              onInput: $setup.onPhoneInput
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.phone]
          ])
        ]),
        vue.createElementVNode("view", { class: "label" }, "密码"),
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.createElementVNode("image", {
            class: "icon",
            src: _imports_0$3,
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.password = $event),
              password: "",
              placeholder: "请输入手机密码",
              class: "input",
              onInput: $setup.onPasswordInput
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.password]
          ])
        ]),
        vue.createElementVNode("view", { class: "forget-wrapper" }, [
          vue.createElementVNode("text", {
            class: "forget",
            onClick: $setup.goReset
          }, "忘记密码?")
        ]),
        vue.createElementVNode("button", {
          class: "login-btn",
          onClick: $setup.handleLogin
        }, " 登录 ")
      ]),
      vue.createElementVNode("view", { class: "register-wrapper" }, [
        vue.createElementVNode("text", { class: "normal" }, "还没有账号?"),
        vue.createElementVNode("text", {
          class: "register",
          onClick: $setup.goRegister
        }, "立即注册")
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-e4e4508d"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/login/login.vue"]]);
  const _sfc_main$e = {
    __name: "calculator",
    setup(__props, { expose: __expose }) {
      __expose();
      const loanMethods = ["商业贷款", "公积金贷款", "组合贷款"];
      const loanMethodIndex = vue.ref(0);
      const calculateMethods = ["等额本息", "等额本金", "提前还款"];
      const calculateIndex = vue.ref(0);
      const loanAmount = vue.ref(50);
      const loanTerm = vue.ref(20);
      const loanRate = vue.ref(3.25);
      const rateList = [2.81, 3, 3.61, 4.26];
      const goDetail = () => {
        uni.navigateTo({
          url: "/pages/calculatorDetail/calculatorDetail"
        });
      };
      const __returned__ = { loanMethods, loanMethodIndex, calculateMethods, calculateIndex, loanAmount, loanTerm, loanRate, rateList, goDetail, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      "scroll-y": "",
      class: "page"
    }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "card-title" }, "贷款方式"),
        vue.createElementVNode("view", { class: "row" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.loanMethods, (item, index) => {
              return vue.createElementVNode("view", {
                key: index,
                class: vue.normalizeClass(["btn", { active: $setup.loanMethodIndex === index }]),
                onClick: ($event) => $setup.loanMethodIndex = index
              }, vue.toDisplayString(item), 11, ["onClick"]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "card-title" }, "计算方式"),
        vue.createElementVNode("view", { class: "row" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.calculateMethods, (item, index) => {
              return vue.createElementVNode("view", {
                key: index,
                class: vue.normalizeClass(["btn", { active: $setup.calculateIndex === index }]),
                onClick: ($event) => $setup.calculateIndex = index
              }, vue.toDisplayString(item), 11, ["onClick"]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "card-title" }, "贷款信息"),
        vue.createElementVNode("view", { class: "form-group" }, [
          vue.createElementVNode("view", { class: "label-row" }, [
            vue.createElementVNode("text", null, "贷款金额"),
            vue.createElementVNode("text", { class: "unit" }, "万元")
          ]),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "input",
              type: "number",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.loanAmount = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loanAmount]
          ]),
          vue.createElementVNode("slider", {
            activeColor: "#3CB371",
            value: $setup.loanAmount,
            min: "1",
            max: "100",
            onChange: _cache[1] || (_cache[1] = (e) => $setup.loanAmount = e.detail.value)
          }, null, 40, ["value"]),
          vue.createElementVNode("view", { class: "slider-label" }, [
            vue.createElementVNode("text", null, "1万元"),
            vue.createElementVNode("text", null, "100万元")
          ])
        ]),
        vue.createElementVNode("view", { class: "form-group" }, [
          vue.createElementVNode("view", { class: "label-row" }, [
            vue.createElementVNode("text", null, "贷款期限"),
            vue.createElementVNode("text", { class: "unit" }, "年")
          ]),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "input",
              type: "number",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.loanTerm = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loanTerm]
          ]),
          vue.createElementVNode("slider", {
            activeColor: "#3CB371",
            value: $setup.loanTerm,
            min: "1",
            max: "30",
            onChange: _cache[3] || (_cache[3] = (e) => $setup.loanTerm = e.detail.value)
          }, null, 40, ["value"]),
          vue.createElementVNode("view", { class: "slider-label" }, [
            vue.createElementVNode("text", null, "1年"),
            vue.createElementVNode("text", null, "30年")
          ])
        ]),
        vue.createElementVNode("view", { class: "form-group" }, [
          vue.createElementVNode("view", { class: "label-row" }, [
            vue.createElementVNode("text", null, "贷款利率"),
            vue.createElementVNode("text", { class: "unit" }, "%")
          ]),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "input",
              type: "digit",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.loanRate = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.loanRate]
          ]),
          vue.createElementVNode("view", { class: "rate-row" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.rateList, (item) => {
                return vue.createElementVNode("view", {
                  key: item,
                  class: "rate-btn",
                  onClick: ($event) => $setup.loanRate = item
                }, vue.toDisplayString(item) + "% ", 9, ["onClick"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "submit",
        onClick: $setup.goDetail
      }, " 开始计算 ")
    ]);
  }
  const PagesCalculatorCalculator = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-0492adce"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/calculator/calculator.vue"]]);
  const _imports_2 = "/static/collection_detail.png";
  const _sfc_main$d = {
    __name: "CollectViewCell",
    props: {
      data: Object
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const isCollected = vue.ref(true);
      const toggleCollect = () => {
        isCollected.value = !isCollected.value;
      };
      const formatNumber = (num) => {
        return Number(num).toLocaleString();
      };
      const __returned__ = { props, isCollected, toggleCollect, formatNumber, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "cell",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "row space" }, [
          vue.createElementVNode(
            "text",
            { class: "title" },
            vue.toDisplayString($props.data.title),
            1
            /* TEXT */
          ),
          vue.createElementVNode("image", {
            src: $setup.isCollected ? "/static/history_collection_select.png" : "/static/history_collection_normal.png",
            class: "icon",
            onClick: vue.withModifiers($setup.toggleCollect, ["stop"])
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode(
          "text",
          { class: "time" },
          vue.toDisplayString($props.data.time),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "info-row" }, [
          vue.createElementVNode("view", { class: "info-item" }, [
            vue.createElementVNode("text", { class: "info-title" }, "贷款金额"),
            vue.createElementVNode(
              "text",
              { class: "info-value" },
              vue.toDisplayString($props.data.amount),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "info-item" }, [
            vue.createElementVNode("text", { class: "info-title" }, "贷款期限"),
            vue.createElementVNode(
              "text",
              { class: "info-value" },
              vue.toDisplayString($props.data.term),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "info-item" }, [
            vue.createElementVNode("text", { class: "info-title" }, "贷款利率"),
            vue.createElementVNode(
              "text",
              { class: "info-value" },
              vue.toDisplayString($props.data.rate),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "row space bottom" }, [
          vue.createElementVNode("text", null, [
            vue.createElementVNode(
              "text",
              { class: "money" },
              vue.toDisplayString($setup.formatNumber($props.data.monthly)),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "unit" }, " 元/月")
          ]),
          vue.createElementVNode("view", { class: "detail" }, [
            vue.createElementVNode("text", { class: "detail-text" }, "查看详情"),
            vue.createElementVNode("image", {
              src: _imports_2,
              class: "detail-icon"
            })
          ])
        ])
      ])
    ]);
  }
  const CollectViewCell = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-872aa212"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/components/CollectViewCell.vue"]]);
  const _sfc_main$c = {
    __name: "collection",
    setup(__props, { expose: __expose }) {
      __expose();
      const tabs = ["全部收藏", "商业贷款", "公积金贷款", "组合贷款"];
      const activeIndex = vue.ref(0);
      const rawList = vue.ref([
        { type: 1, title: "商业贷款 - 等额本息", time: "2023-10-11 14:30", amount: "100万", term: "30年", rate: "4.9%", monthly: "5320" },
        { type: 2, title: "公积金贷款 - 等额本金", time: "2023-10-12 10:20", amount: "80万", term: "20年", rate: "3.25%", monthly: "4100" }
      ]);
      const list = vue.computed(() => {
        if (activeIndex.value === 0)
          return rawList.value;
        return rawList.value.filter((item) => item.type === activeIndex.value);
      });
      const changeTab = (index) => {
        activeIndex.value = index;
      };
      const handleClick = (index) => {
        uni.navigateTo({
          url: "/pages/calculatorDetail/calculatorDetail"
        });
      };
      const __returned__ = { tabs, activeIndex, rawList, list, changeTab, handleClick, ref: vue.ref, computed: vue.computed, CollectViewCell };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-x": "",
        class: "tab-scroll"
      }, [
        vue.createElementVNode("view", { class: "tab-container" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.tabs, (item, index) => {
              return vue.createElementVNode("view", {
                key: index,
                class: vue.normalizeClass(["tab", { active: $setup.activeIndex === index }]),
                onClick: ($event) => $setup.changeTab(index)
              }, vue.toDisplayString(item), 11, ["onClick"]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        class: "list"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.list, (item, index) => {
            return vue.openBlock(), vue.createBlock($setup["CollectViewCell"], {
              key: index,
              data: item,
              onClick: ($event) => $setup.handleClick(index)
            }, null, 8, ["data", "onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesCollectionCollection = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-cd17183b"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/collection/collection.vue"]]);
  const _imports_0$2 = "/static/history_collection_normal.png";
  const _imports_1 = "/static/history_delect.png";
  const _sfc_main$b = {
    __name: "HistoryCell",
    props: {
      data: Object
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const formatNumber = (num) => {
        return Number(num).toLocaleString();
      };
      const __returned__ = { props, formatNumber };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "cell",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "row space" }, [
          vue.createElementVNode(
            "text",
            { class: "title" },
            vue.toDisplayString($props.data.title),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "right-icons" }, [
            vue.createElementVNode("image", {
              src: _imports_0$2,
              class: "icon"
            }),
            vue.createElementVNode("image", {
              src: _imports_1,
              class: "icon"
            })
          ])
        ]),
        vue.createElementVNode(
          "text",
          { class: "time" },
          vue.toDisplayString($props.data.time),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "info-row" }, [
          vue.createElementVNode("view", { class: "info-item" }, [
            vue.createElementVNode("text", { class: "info-title" }, "贷款金额"),
            vue.createElementVNode(
              "text",
              { class: "info-value" },
              vue.toDisplayString($props.data.amount),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "info-item" }, [
            vue.createElementVNode("text", { class: "info-title" }, "贷款期限"),
            vue.createElementVNode(
              "text",
              { class: "info-value" },
              vue.toDisplayString($props.data.term),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "info-item" }, [
            vue.createElementVNode("text", { class: "info-title" }, "贷款利率"),
            vue.createElementVNode(
              "text",
              { class: "info-value" },
              vue.toDisplayString($props.data.rate),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "row space bottom" }, [
          vue.createElementVNode("text", { class: "monthly" }, [
            vue.createElementVNode(
              "text",
              { class: "money" },
              vue.toDisplayString($setup.formatNumber($props.data.monthly)),
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "unit" }, " 元/月")
          ]),
          vue.createElementVNode("view", { class: "detail" }, [
            vue.createElementVNode("text", { class: "detail-text" }, "查看详情"),
            vue.createElementVNode("image", {
              src: _imports_2,
              class: "detail-icon"
            })
          ])
        ])
      ])
    ]);
  }
  const HistoryCell = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-5c67d339"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/components/HistoryCell.vue"]]);
  const _imports_0$1 = "/static/search_history.png";
  const _sfc_main$a = {
    __name: "HistoryHeaderView",
    emits: ["search"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const keyword = vue.ref("");
      const onInput = () => {
        emit("search", keyword.value);
      };
      const __returned__ = { emit, keyword, onInput, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "header" }, [
      vue.createElementVNode("view", { class: "search-box" }, [
        vue.createElementVNode("image", {
          src: _imports_0$1,
          class: "search-icon"
        }),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.keyword = $event),
            placeholder: "请输入搜索内容",
            class: "input",
            onInput: $setup.onInput
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $setup.keyword]
        ])
      ])
    ]);
  }
  const HistoryHeaderView = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-d537e88b"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/components/HistoryHeaderView.vue"]]);
  const _sfc_main$9 = {
    __name: "history",
    setup(__props, { expose: __expose }) {
      __expose();
      const list = vue.ref([
        {
          title: "商业贷款 - 等额本息",
          time: "2023-10-11 14:30",
          amount: "100万",
          term: "30年",
          rate: "4.9%",
          monthly: "5320"
        },
        {
          title: "公积金贷款 - 等额本金",
          time: "2023-10-12 10:20",
          amount: "80万",
          term: "20年",
          rate: "3.25%",
          monthly: "4100"
        }
      ]);
      const handleClick = (index) => {
        uni.navigateTo({
          url: "/pages/calculatorDetail/calculatorDetail"
        });
      };
      const handleSearch = (value) => {
        formatAppLog("log", "at pages/history/history.vue:51", "搜索内容：", value);
      };
      const __returned__ = { list, handleClick, handleSearch, ref: vue.ref, HistoryCell, HistoryHeaderView };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createVNode($setup["HistoryHeaderView"], { onSearch: $setup.handleSearch }),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "",
        class: "list"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.list, (item, index) => {
            return vue.openBlock(), vue.createBlock($setup["HistoryCell"], {
              key: index,
              data: item,
              onClick: ($event) => $setup.handleClick(index)
            }, null, 8, ["data", "onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesHistoryHistory = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-b2d018fa"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/history/history.vue"]]);
  const _imports_0 = "/static/me_arrow.png";
  const _sfc_main$8 = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
        src: _imports_0,
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
  const MeButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-0d2226e7"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/components/MeButton.vue"]]);
  const _sfc_main$7 = {
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
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      "scroll-y": "",
      class: "page"
    }, [
      vue.createElementVNode("view", { class: "container" }, [
        vue.createElementVNode("view", { class: "login-card" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: _imports_0$5
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
  const PagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-19c123a7"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/me/me.vue"]]);
  const _sfc_main$6 = {};
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "header" }, [
      vue.createElementVNode("text", { class: "col period" }, "期数"),
      vue.createElementVNode("text", { class: "col" }, "月供(元)"),
      vue.createElementVNode("text", { class: "col" }, "本金(元)"),
      vue.createElementVNode("text", { class: "col" }, "利息(元)")
    ]);
  }
  const CalculatorDetailHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-a2de4d60"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/components/CalculatorDetailHeader.vue"]]);
  const _sfc_main$5 = {
    __name: "RepaymentDetailRow",
    props: {
      data: Object
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const format = (num) => {
        return Number(num).toLocaleString();
      };
      const __returned__ = { props, format };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "row" }, [
      vue.createElementVNode(
        "text",
        { class: "col period" },
        vue.toDisplayString($props.data.period),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        { class: "col" },
        vue.toDisplayString($setup.format($props.data.monthly)),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        { class: "col" },
        vue.toDisplayString($setup.format($props.data.principal)),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        { class: "col" },
        vue.toDisplayString($setup.format($props.data.interest)),
        1
        /* TEXT */
      )
    ]);
  }
  const RepaymentDetailRow = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-81b0b21a"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/components/RepaymentDetailRow.vue"]]);
  const _sfc_main$4 = {
    __name: "calculatorDetail",
    setup(__props, { expose: __expose }) {
      __expose();
      const repaymentList = vue.ref(
        Array.from({ length: 5 }, (_, i) => ({
          period: `第${i + 1}期`,
          monthly: 5307,
          principal: 1224,
          interest: 4083
        }))
      );
      const loanInfo = vue.ref([
        { label: "贷款金额", value: "100万" },
        { label: "贷款期限", value: "30年(360期)" },
        { label: "贷款利率", value: "4.90%" },
        { label: "贷款方式", value: "等额本息" }
      ]);
      const formatNumber = (num) => {
        return Number(num).toLocaleString();
      };
      const __returned__ = { repaymentList, loanInfo, formatNumber, ref: vue.ref, CalculatorDetailHeader, RepaymentDetailRow };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      "scroll-y": "",
      class: "page"
    }, [
      vue.createElementVNode("view", { class: "result-card" }, [
        vue.createElementVNode("view", { class: "result-title" }, "等额本息还款"),
        vue.createElementVNode("view", { class: "result-sub" }, "每月还款"),
        vue.createElementVNode("view", { class: "repayment" }, [
          vue.createElementVNode(
            "text",
            { class: "repayment-money" },
            vue.toDisplayString($setup.formatNumber(5320)),
            1
            /* TEXT */
          ),
          vue.createElementVNode("text", { class: "repayment-unit" }, " 元/月")
        ]),
        vue.createElementVNode("view", { class: "result-bottom" }, [
          vue.createElementVNode("view", { class: "bottom-item" }, [
            vue.createElementVNode("view", { class: "bottom-label" }, "总利息"),
            vue.createElementVNode("view", { class: "bottom-value" }, "91.05万")
          ]),
          vue.createElementVNode("view", { class: "bottom-item" }, [
            vue.createElementVNode("view", { class: "bottom-label" }, "还款总额"),
            vue.createElementVNode("view", { class: "bottom-value" }, "191.05万")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "card-title" }, "贷款信息"),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.loanInfo, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "info-row",
              key: item.label
            }, [
              vue.createElementVNode(
                "text",
                { class: "info-label" },
                vue.toDisplayString(item.label),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "info-value" },
                vue.toDisplayString(item.value),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "card-title" }, "还款明细"),
        vue.createVNode($setup["CalculatorDetailHeader"]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.repaymentList, (item, index) => {
            return vue.openBlock(), vue.createBlock($setup["RepaymentDetailRow"], {
              key: index,
              data: item
            }, null, 8, ["data"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesCalculatorDetailCalculatorDetail = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-88eb0a2d"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/calculatorDetail/calculatorDetail.vue"]]);
  const _sfc_main$3 = {
    __name: "register",
    setup(__props, { expose: __expose }) {
      __expose();
      const phone = vue.ref("");
      const password = vue.ref("");
      const confirmPassword = vue.ref("");
      const agree = vue.ref(false);
      const handleInput = (e) => {
        formatAppLog("log", "at pages/register/register.vue:91", e.detail.value);
      };
      const goProtocol = (title) => {
        uni.navigateTo({
          url: `/pages/webview/webview?title=${title}`
        });
      };
      const register = () => {
        if (!phone.value) {
          return uni.showToast({ title: "请输入手机号", icon: "none" });
        }
        if (password.value.length < 6) {
          return uni.showToast({ title: "密码至少6位", icon: "none" });
        }
        if (password.value !== confirmPassword.value) {
          return uni.showToast({ title: "两次密码不一致", icon: "none" });
        }
        if (!agree.value) {
          return uni.showToast({ title: "请先同意协议", icon: "none" });
        }
        uni.showToast({
          title: "注册成功",
          icon: "success"
        });
      };
      const __returned__ = { phone, password, confirmPassword, agree, handleInput, goProtocol, register, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "title" }, "创建账号"),
      vue.createElementVNode("view", { class: "subtitle" }, "编写以下信息完成注册"),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "label" }, "手机号"),
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.createElementVNode("image", {
            src: _imports_0$4,
            class: "icon",
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.phone = $event),
              type: "number",
              placeholder: "请输入手机号码",
              class: "input",
              onInput: $setup.handleInput
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.phone]
          ])
        ]),
        vue.createElementVNode("view", { class: "label" }, "设置密码"),
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.createElementVNode("image", {
            src: _imports_0$3,
            class: "icon",
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.password = $event),
              password: "",
              placeholder: "请输入6-18位密码",
              class: "input",
              onInput: $setup.handleInput
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.password]
          ])
        ]),
        vue.createElementVNode("view", { class: "label" }, "确认密码"),
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.createElementVNode("image", {
            src: _imports_0$3,
            class: "icon",
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.confirmPassword = $event),
              password: "",
              placeholder: "请再次输入6-18位密码",
              class: "input",
              onInput: $setup.handleInput
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.confirmPassword]
          ])
        ]),
        vue.createElementVNode("view", { class: "agreement" }, [
          vue.createElementVNode("view", {
            class: "checkbox",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.agree = !$setup.agree)
          }, [
            vue.createElementVNode("image", {
              src: $setup.agree ? "/static/selectionbox_choose.png" : "/static/selectionbox_nochoose.png",
              class: "check-icon"
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("text", { class: "gray" }, "注册即表示同意"),
          vue.createElementVNode("text", {
            class: "link",
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.goProtocol("用户服务协议"))
          }, " 《用户服务协议》 "),
          vue.createElementVNode("text", { class: "gray" }, "和"),
          vue.createElementVNode("text", {
            class: "link",
            onClick: _cache[5] || (_cache[5] = ($event) => $setup.goProtocol("隐私政策"))
          }, " 《隐私政策》 ")
        ]),
        vue.createElementVNode("button", {
          class: "register-btn",
          onClick: $setup.register
        }, " 注册账号 ")
      ])
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-bac4a35d"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/register/register.vue"]]);
  const _sfc_main$2 = {
    __name: "webview",
    setup(__props, { expose: __expose }) {
      __expose();
      const url = vue.ref("https://example.com");
      onLoad((options) => {
        if (options.title === "用户服务协议") {
          url.value = "/pages/webview/Data/用户服务协议.html";
        } else {
          url.value = "/pages/webview/Data/隐私政策.html";
        }
      });
      const __returned__ = { url, get onLoad() {
        return onLoad;
      }, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("web-view", { src: $setup.url }, null, 8, ["src"]);
  }
  const PagesWebviewWebview = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/webview/webview.vue"]]);
  const _sfc_main$1 = {
    __name: "reset",
    setup(__props, { expose: __expose }) {
      __expose();
      const password = vue.ref("");
      const confirmPassword = vue.ref("");
      const isMatch = vue.computed(() => {
        return password.value.length >= 6 && confirmPassword.value.length >= 6 && password.value === confirmPassword.value;
      });
      const handleInput = (e) => {
        formatAppLog("log", "at pages/reset/reset.vue:86", e.detail.value);
      };
      const submit = () => {
        if (!isMatch.value) {
          uni.showToast({
            title: "密码不匹配",
            icon: "none"
          });
          return;
        }
        uni.showToast({
          title: "修改成功",
          icon: "success"
        });
      };
      const __returned__ = { password, confirmPassword, isMatch, handleInput, submit, ref: vue.ref, computed: vue.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "title" }, "重置密码"),
      vue.createElementVNode("view", { class: "subtitle" }, "请设置您的新密码以继续使用账户"),
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("view", { class: "label-row" }, [
          vue.createElementVNode("text", { class: "label" }, "设置密码"),
          vue.createElementVNode("text", { class: "label-sub" }, "至少8个字符")
        ]),
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.createElementVNode("image", {
            class: "icon",
            src: _imports_0$3,
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.password = $event),
              class: "input",
              type: "number",
              password: "",
              maxlength: "18",
              placeholder: "请输入6-18位密码",
              onInput: $setup.handleInput
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.password]
          ])
        ]),
        vue.createElementVNode("view", { class: "label-row confirm-top" }, [
          vue.createElementVNode("text", { class: "label" }, "确认密码"),
          vue.createElementVNode("view", { class: "match-status" }, [
            vue.createElementVNode("image", {
              class: "match-icon",
              src: $setup.isMatch ? "/static/resetPassword_check.png" : "/static/resetPassword_uncheck.png",
              mode: "aspectFit"
            }, null, 8, ["src"]),
            vue.createElementVNode(
              "text",
              { class: "match-text" },
              vue.toDisplayString($setup.isMatch ? "密码匹配" : "密码不匹配"),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "input-box" }, [
          vue.createElementVNode("image", {
            class: "icon",
            src: _imports_0$3,
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.confirmPassword = $event),
              class: "input",
              type: "number",
              password: "",
              maxlength: "18",
              placeholder: "请再次输入6-18位密码",
              onInput: $setup.handleInput
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.confirmPassword]
          ])
        ])
      ]),
      vue.createElementVNode("button", {
        class: "confirm-btn",
        onClick: $setup.submit
      }, " 确认 ")
    ]);
  }
  const PagesResetReset = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-76af0740"], ["__file", "/Users/fenghanxu/Desktop/UniApp-MortgageCalculator/pages/reset/reset.vue"]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/calculator/calculator", PagesCalculatorCalculator);
  __definePage("pages/collection/collection", PagesCollectionCollection);
  __definePage("pages/history/history", PagesHistoryHistory);
  __definePage("pages/me/me", PagesMeMe);
  __definePage("pages/calculatorDetail/calculatorDetail", PagesCalculatorDetailCalculatorDetail);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/webview/webview", PagesWebviewWebview);
  __definePage("pages/reset/reset", PagesResetReset);
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
