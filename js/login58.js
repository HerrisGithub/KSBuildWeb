/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkascend"] = self["webpackChunkascend"] || []).push([["login58"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-vue/form */ \"./node_modules/devextreme-vue/form.js\");\n/* harmony import */ var devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var devextreme_vue_load_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-vue/load-indicator */ \"./node_modules/devextreme-vue/load-indicator.js\");\n/* harmony import */ var devextreme_vue_load_indicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_vue_load_indicator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/ui/notify */ \"./node_modules/devextreme/esm/ui/notify.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth */ \"./src/auth.js\");\n\n\n\n\n\n\n\nconst notificationText = 'We\\'ve sent a link to reset your password. Check your inbox.';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    DxForm: (devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1___default()),\n    DxItem: devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1__.DxItem,\n    DxLabel: devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1__.DxLabel,\n    DxButtonItem: devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1__.DxButtonItem,\n    DxButtonOptions: devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1__.DxButtonOptions,\n    DxRequiredRule: devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1__.DxRequiredRule,\n    DxEmailRule: devextreme_vue_form__WEBPACK_IMPORTED_MODULE_1__.DxEmailRule,\n    DxLoadIndicator: (devextreme_vue_load_indicator__WEBPACK_IMPORTED_MODULE_2___default())\n  },\n  setup() {\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const loading = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(false);\n    const formData = (0,vue__WEBPACK_IMPORTED_MODULE_4__.reactive)({\n      email: \"\"\n    });\n    async function onSubmit() {\n      const {\n        email\n      } = formData;\n      loading.value = true;\n      const result = await _auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"].resetPassword(email);\n      loading.value = false;\n      if (result.isOk) {\n        router.push(\"/login-form\");\n        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(notificationText, \"success\", 2500);\n      } else {\n        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(result.message, \"error\", 2000);\n      }\n    }\n    return {\n      loading,\n      formData,\n      onSubmit\n    };\n  }\n});\n\n//# sourceURL=webpack://ascend/./src/views/reset-password-form.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=template&id=8d08cae4":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=template&id=8d08cae4 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"login-link\"\n};\nconst _hoisted_2 = {\n  class: \"dx-button-text\"\n};\nconst _hoisted_3 = {\n  key: 1\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_dx_required_rule = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dx-required-rule\");\n  const _component_dx_email_rule = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dx-email-rule\");\n  const _component_dx_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dx-label\");\n  const _component_dx_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dx-item\");\n  const _component_dx_button_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dx-button-options\");\n  const _component_dx_button_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dx-button-item\");\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  const _component_dx_load_indicator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dx-load-indicator\");\n  const _component_dx_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dx-form\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"form\", {\n    class: \"reset-password-form\",\n    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $setup.onSubmit && $setup.onSubmit(...args), [\"prevent\"]))\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dx_form, {\n    \"form-data\": $setup.formData,\n    disabled: $setup.loading\n  }, {\n    resetTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_2, [$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_dx_load_indicator, {\n      key: 0,\n      width: \"24px\",\n      height: \"24px\",\n      visible: true\n    })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), !$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", _hoisted_3, \"Reset my password\")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])])]),\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dx_item, {\n      \"data-field\": \"email\",\n      \"editor-type\": \"dxTextBox\",\n      \"editor-options\": {\n        stylingMode: 'filled',\n        placeholder: 'Email',\n        mode: 'email'\n      }\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dx_required_rule, {\n        message: \"Email is required\"\n      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dx_email_rule, {\n        message: \"Email is invalid\"\n      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dx_label, {\n        visible: false\n      })]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dx_button_item, null, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dx_button_options, {\n        \"element-attr\": {\n          class: 'submit-button'\n        },\n        width: \"100%\",\n        type: \"default\",\n        template: \"resetTemplate\",\n        \"use-submit-behavior\": true\n      })]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dx_item, null, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Return to \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n        to: \"/login-form\"\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Sign In\")]),\n        _: 1 /* STABLE */\n      })])]),\n\n      _: 1 /* STABLE */\n    })]),\n\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"form-data\", \"disabled\"])], 32 /* HYDRATE_EVENTS */);\n}\n\n//# sourceURL=webpack://ascend/./src/views/reset-password-form.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".reset-password-form .submit-button {\\n  margin-top: 10px;\\n}\\n.reset-password-form .login-link {\\n  color: #9c27b0;\\n  font-size: 16px;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ascend/./src/views/reset-password-form.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/devextreme-vue/load-indicator.js":
/*!*******************************************************!*\
  !*** ./node_modules/devextreme-vue/load-indicator.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * devextreme-vue\n * Version: 22.1.5\n * Build date: Fri Sep 02 2022\n *\n * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED\n *\n * This software may be modified and distributed under the terms\n * of the MIT license. See the LICENSE file in the root of the project for details.\n *\n * https://github.com/DevExpress/devextreme-vue\n */\n\n\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DxLoadIndicator = void 0;\nvar load_indicator_1 = __importDefault(__webpack_require__(/*! devextreme/ui/load_indicator */ \"./node_modules/devextreme/esm/ui/load_indicator.js\"));\nvar index_1 = __webpack_require__(/*! ./core/index */ \"./node_modules/devextreme-vue/core/index.js\");\nvar DxLoadIndicator = index_1.createComponent({\n    props: {\n        elementAttr: Object,\n        height: [Function, Number, String],\n        hint: String,\n        indicatorSrc: String,\n        onContentReady: Function,\n        onDisposing: Function,\n        onInitialized: Function,\n        onOptionChanged: Function,\n        rtlEnabled: Boolean,\n        visible: Boolean,\n        width: [Function, Number, String]\n    },\n    emits: {\n        \"update:isActive\": null,\n        \"update:hoveredElement\": null,\n        \"update:elementAttr\": null,\n        \"update:height\": null,\n        \"update:hint\": null,\n        \"update:indicatorSrc\": null,\n        \"update:onContentReady\": null,\n        \"update:onDisposing\": null,\n        \"update:onInitialized\": null,\n        \"update:onOptionChanged\": null,\n        \"update:rtlEnabled\": null,\n        \"update:visible\": null,\n        \"update:width\": null,\n    },\n    computed: {\n        instance: function () {\n            return this.$_instance;\n        }\n    },\n    beforeCreate: function () {\n        this.$_WidgetClass = load_indicator_1.default;\n        this.$_hasAsyncTemplate = true;\n    }\n});\nexports.DxLoadIndicator = DxLoadIndicator;\nexports[\"default\"] = DxLoadIndicator;\n\n\n//# sourceURL=webpack://ascend/./node_modules/devextreme-vue/load-indicator.js?");

/***/ }),

/***/ "./src/views/reset-password-form.vue":
/*!*******************************************!*\
  !*** ./src/views/reset-password-form.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_password_form_vue_vue_type_template_id_8d08cae4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-form.vue?vue&type=template&id=8d08cae4 */ \"./src/views/reset-password-form.vue?vue&type=template&id=8d08cae4\");\n/* harmony import */ var _reset_password_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password-form.vue?vue&type=script&lang=js */ \"./src/views/reset-password-form.vue?vue&type=script&lang=js\");\n/* harmony import */ var _reset_password_form_vue_vue_type_style_index_0_id_8d08cae4_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss */ \"./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss\");\n/* harmony import */ var C_Files_Development_KilatService_Ascend_PreCheckACWeb_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,C_Files_Development_KilatService_Ascend_PreCheckACWeb_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_reset_password_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_reset_password_form_vue_vue_type_template_id_8d08cae4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/reset-password-form.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://ascend/./src/views/reset-password-form.vue?");

/***/ }),

/***/ "./src/views/reset-password-form.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/views/reset-password-form.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./reset-password-form.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ascend/./src/views/reset-password-form.vue?");

/***/ }),

/***/ "./src/views/reset-password-form.vue?vue&type=template&id=8d08cae4":
/*!*************************************************************************!*\
  !*** ./src/views/reset-password-form.vue?vue&type=template&id=8d08cae4 ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_template_id_8d08cae4__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_template_id_8d08cae4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./reset-password-form.vue?vue&type=template&id=8d08cae4 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=template&id=8d08cae4\");\n\n\n//# sourceURL=webpack://ascend/./src/views/reset-password-form.vue?");

/***/ }),

/***/ "./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss":
/*!****************************************************************************************!*\
  !*** ./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_style_index_0_id_8d08cae4_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_style_index_0_id_8d08cae4_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_style_index_0_id_8d08cae4_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_style_index_0_id_8d08cae4_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_reset_password_form_vue_vue_type_style_index_0_id_8d08cae4_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ascend/./src/views/reset-password-form.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/reset-password-form.vue?vue&type=style&index=0&id=8d08cae4&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"3a6c65fa\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ascend/./src/views/reset-password-form.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ })

}]);