"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkascend"] = self["webpackChunkascend"] || []).push([["src_components_datagrid-component_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/datagrid-component.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/datagrid-component.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme-vue/data-grid */ \"./node_modules/devextreme-vue/data-grid.js\");\n/* harmony import */ var devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/notify */ \"./node_modules/devextreme/esm/ui/notify.js\");\n/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu */ \"./src/components/context-menu.js\");\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ \"./node_modules/jspdf/dist/jspdf.es.min.js\");\n/* harmony import */ var devextreme_pdf_exporter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/pdf_exporter */ \"./node_modules/devextreme/esm/pdf_exporter.js\");\n/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/excel_exporter */ \"./node_modules/devextreme/esm/excel_exporter.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! exceljs */ \"./node_modules/exceljs/dist/exceljs.min.js\");\n/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/data/data_source */ \"./node_modules/devextreme/esm/data/data_source.js\");\n/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme/data/custom_store */ \"./node_modules/devextreme/esm/data/custom_store.js\");\n/* harmony import */ var devextreme_vue_select_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-vue/select-box */ \"./node_modules/devextreme-vue/select-box.js\");\n/* harmony import */ var devextreme_vue_select_box__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_vue_select_box__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var devextreme_aspnet_data_nojquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-aspnet-data-nojquery */ \"./node_modules/devextreme-aspnet-data-nojquery/index.js\");\n/* harmony import */ var devextreme_aspnet_data_nojquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(devextreme_aspnet_data_nojquery__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/modules/index-all.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n// import DxTextBox from 'devextreme-vue/text-box';\n\nfunction isNotEmpty(value) {\n  return value !== undefined && value !== null && value !== '';\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    DxSorting: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxSorting,\n    DxDataGrid: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxDataGrid,\n    DxEditing: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxEditing,\n    DxFilterRow: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxFilterRow,\n    DxHeaderFilter: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxHeaderFilter,\n    DxGroupPanel: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxGroupPanel,\n    DxGrouping: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxGrouping,\n    DxExport: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxExport,\n    DxToolbar: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxToolbar,\n    DxItem: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxItem,\n    DxPager: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxPager,\n    DxPaging: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxPaging,\n    DxSearchPanel: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxSearchPanel,\n    DxSummary: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxSummary,\n    DxTotalItem: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxTotalItem,\n    DxGroupItem: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxGroupItem,\n    DxValueFormat: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxValueFormat,\n    DxSelectBox: devextreme_vue_select_box__WEBPACK_IMPORTED_MODULE_10__.DxSelectBox,\n    DxMasterDetail: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxMasterDetail,\n    DxSelection: devextreme_vue_data_grid__WEBPACK_IMPORTED_MODULE_0__.DxSelection\n    // DxTextBox\n  },\n\n  props: {\n    Key: {\n      type: String,\n      default: () => \"\"\n    },\n    ModuleName: {\n      type: String,\n      default: () => \"\"\n    },\n    LoadURL: {\n      type: String,\n      default: () => \"\"\n    },\n    CustomLoadURL: {\n      type: Boolean,\n      default: () => false\n    },\n    InsertURL: {\n      type: String,\n      default: () => \"\"\n    },\n    UpdateURL: {\n      type: String,\n      default: () => \"\"\n    },\n    RemoveURL: {\n      type: String,\n      default: () => \"\"\n    },\n    EnableMasterDetail: {\n      type: Boolean,\n      default: () => false\n    },\n    ExtendParams: {\n      type: String,\n      default: () => null\n    },\n    OrgSelection: {\n      type: Boolean,\n      default: () => false\n    },\n    OrgDefault: {\n      type: String,\n      default: () => ''\n    },\n    EnableGroup: {\n      type: Boolean,\n      default: () => false\n    },\n    EnableFilterHeader: {\n      type: Boolean,\n      default: () => false\n    },\n    EnableFilterRow: {\n      type: Boolean,\n      default: () => false\n    },\n    EnableSearch: {\n      type: Boolean,\n      default: () => false\n    },\n    EnableExport: {\n      type: Boolean,\n      default: () => false\n    },\n    Height: {\n      type: Number,\n      default: () => 600\n    },\n    EnableAdding: {\n      type: Boolean,\n      default: () => true\n    },\n    EnableUpdating: {\n      type: Boolean,\n      default: () => true\n    },\n    EnableDeleting: {\n      type: Boolean,\n      default: () => true\n    },\n    DatagridMode: {\n      type: String,\n      default: () => 'row'\n    },\n    CustomUpdateCallBack: {\n      type: Function,\n      default: () => null\n    },\n    CustomUpdate: {\n      type: Boolean,\n      default: () => false\n    },\n    CustomInsertCallBack: {\n      type: Function,\n      default: () => null\n    },\n    CustomInsert: {\n      type: Boolean,\n      default: () => false\n    },\n    CustomRemoveCallBack: {\n      type: Function,\n      default: () => null\n    },\n    CustomRemove: {\n      type: Boolean,\n      default: () => false\n    },\n    RefreshDataGrid: {\n      type: Function,\n      default: () => () => {}\n    },\n    MenuContextCallBack: {\n      type: Function,\n      default: () => {}\n    },\n    SelectionCallBack: {\n      type: Function,\n      default: () => {}\n    },\n    FilterFixed: {\n      type: Boolean,\n      default: () => false\n    },\n    OnInitNewRow: {\n      type: Function,\n      default: () => {}\n    },\n    OnStartEditing: {\n      type: Function,\n      default: () => {}\n    }\n  },\n  data() {\n    const _host = this.$appInfo.WebAPIHost;\n    const _loadURL = this.$props.CustomLoadURL ? this.$props.LoadURL : `${_host}/${this.$props.ModuleName}${this.$props.LoadURL}`;\n    const _removeURL = this.$props.CustomLoadURL ? this.$props.RemoveURL : `${_host}/${this.$props.ModuleName}${this.$props.RemoveURL}`;\n    const _updateURL = this.$props.CustomLoadURL ? this.$props.UpdateURL : `${_host}/${this.$props.ModuleName}${this.$props.UpdateURL}`;\n    const _insertURL = this.$props.CustomLoadURL ? this.$props.InsertURL : `${_host}/${this.$props.ModuleName}${this.$props.InsertURL}`;\n    return {\n      title: 'Ascend - Bank Account',\n      APIHost: this.$appInfo.WebAPIHost,\n      host: `${_host}/${this.$props.ModuleName}`,\n      baseHost: _host,\n      loadURL: _loadURL,\n      insertURL: _insertURL,\n      removeURL: _removeURL,\n      updateURL: _updateURL,\n      dataSource: null,\n      pageSizes: [5, 10, 20, 'all'],\n      showPageSizeSelector: true,\n      showInfo: true,\n      showNavButtons: true,\n      items: null,\n      dbName: this.$props.OrgDefault,\n      orgs: [],\n      Options: {\n        headers: {\n          Authorization: `Bearer ${localStorage.getItem(\"ASCEND-TOKEN\")}`,\n          'Content-Type': 'application/json'\n        }\n      },\n      Filter: '',\n      ContextMenuSelectedItem: null\n    };\n  },\n  methods: {\n    editingStart(e) {\n      console.log(e);\n      this.$props.OnStartEditing(e);\n    },\n    initNewRow(e) {\n      this.$props.OnInitNewRow(e);\n    },\n    valueChanged(data) {\n      this.handleSearch(data, this);\n    },\n    handleSearch: underscore__WEBPACK_IMPORTED_MODULE_12__[\"default\"].debounce((data, self) => {\n      if (data.name === 'text') {\n        console.log(data);\n        self.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n          store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n            key: self.$props.Key,\n            load: self.load,\n            insert: self.insert,\n            update: self.update,\n            remove: self.remove\n          })\n        });\n      }\n    }, 400),\n    refresh() {\n      const self = this;\n      this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n        store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n          key: self.$props.Key,\n          load: self.load,\n          insert: self.insert,\n          update: self.update,\n          remove: self.remove\n        })\n      });\n      this.$refs.grid.instance.refresh();\n    },\n    addMenuItems(e) {\n      if (e.target == 'content') {\n        const {\n          data\n        } = e.row;\n        this.ContextMenuSelectedItem = data;\n        if (!e.items) e.items = (0,_context_menu__WEBPACK_IMPORTED_MODULE_2__.GetContextMenu)('User', this.onClickMenuContext);\n      }\n    },\n    selectedItem(e) {\n      this.SelectionCallBack(e);\n    },\n    itemClick(e) {\n      if (!e.itemData.items) {\n        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`The \"${e.itemData.text}\" item was clicked`, 'success', 1500);\n      }\n    },\n    onExporting(e) {\n      if (e.format === 'xlsx') {\n        const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_6__.Workbook();\n        const worksheet = workbook.addWorksheet('Main Sheet');\n        (0,devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_5__.exportDataGrid)({\n          component: e.component,\n          worksheet: worksheet,\n          customizeCell: function (options) {\n            const excelCell = options;\n            excelCell.font = {\n              name: 'Arial',\n              size: 12\n            };\n            excelCell.alignment = {\n              horizontal: 'left'\n            };\n          }\n        }).then(() => {\n          workbook.xlsx.writeBuffer().then(buffer => {\n            file_saver__WEBPACK_IMPORTED_MODULE_7___default()(new Blob([buffer], {\n              type: 'application/octet-stream'\n            }), 'DataGrid.xlsx');\n          });\n        });\n        e.cancel = true;\n      } else if (e.format === 'pdf') {\n        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__.jsPDF();\n        (0,devextreme_pdf_exporter__WEBPACK_IMPORTED_MODULE_4__.exportDataGrid)({\n          jsPDFDocument: doc,\n          component: e.component\n        }).then(() => {\n          doc.save('DataGrid.pdf');\n        });\n      }\n    },\n    onChange(e) {\n      this.dbName = e.value;\n      this.$refs['grid'].instance.refresh();\n    },\n    load(loadOptions) {\n      let params = '?';\n      ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort', 'filter', 'totalSummary', 'group', 'groupSummary'].forEach(i => {\n        if (i in loadOptions && isNotEmpty(loadOptions[i])) {\n          if (i === 'filter') {\n            const [FilterBy, Type, Filter] = typeof loadOptions[i][0] === 'string' ? loadOptions[i] : loadOptions[i][0];\n            console.log(FilterBy);\n            params += `filterBy=all&filter=${Filter}&filterType=${Type}&`;\n          } else {\n            params += `${i}=${JSON.stringify(loadOptions[i])}&`;\n          }\n        }\n      });\n      if (this.$props.ExtendParams) {\n        params += this.$props.ExtendParams + '&';\n      }\n      params += `DBName=${this.dbName}&`;\n      params = params.slice(0, -1);\n      return fetch(`${this.loadURL}${params}`, this.Options).then(response => response.json()).then(data => ({\n        data: data.data,\n        totalCount: data.totalCount,\n        summary: data.summary,\n        groupCount: data.groupCount\n      })).catch(() => {\n        throw new Error('Data Loading Error');\n      });\n    },\n    insert(data) {\n      if (this.$props.CustomInsert) {\n        return this.$props.CustomInsertCallBack(data);\n      } else {\n        return fetch(`${this.insertURL}`, {\n          method: 'POST',\n          ...this.Options,\n          body: JSON.stringify(data)\n        }).catch(() => {\n          throw new Error('Data Loading Error');\n        });\n      }\n    },\n    update(key, data) {\n      if (this.$props.CustomUpdate) {\n        return this.$props.CustomUpdateCallBack(key, data);\n      } else {\n        return fetch(`${this.loadURL}/${key}`, {\n          method: 'PUT',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(data)\n        }).catch(() => {\n          throw new Error('Data Loading Error');\n        });\n      }\n    },\n    remove(key) {\n      if (this.$props.CustomRemove) {\n        return this.$props.CustomRemoveCallBack(key);\n      } else {\n        return fetch(`${this.removeURL}/${key}`, {\n          method: 'DELETE',\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        }).catch(() => {\n          throw new Error('Data Loading Error');\n        });\n      }\n    },\n    onClickMenuContext(e) {\n      this.$props.MenuContextCallBack(e, this.ContextMenuSelectedItem);\n    }\n  },\n  mounted() {\n    document.title = this.title;\n    const self = this;\n    console.log(this.$props.LoadURL);\n    this.orgs = (0,devextreme_aspnet_data_nojquery__WEBPACK_IMPORTED_MODULE_11__.createStore)({\n      key: 'Value',\n      loadUrl: `${self.APIHost}/setting/organization/dx`,\n      onBeforeSend: (method, ajaxOptions) => {\n        ajaxOptions.xhrFields = {\n          withCredentials: true\n        };\n      }\n    });\n    this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n      store: new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n        key: self.$props.Key,\n        load: self.load,\n        insert: self.insert,\n        update: self.update,\n        remove: self.remove\n      })\n    });\n  }\n});\n\n//# sourceURL=webpack://ascend/./src/components/datagrid-component.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/datagrid-component.vue?vue&type=template&id=0ad68f70":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/datagrid-component.vue?vue&type=template&id=0ad68f70 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  style: {\n    \"padding\": \"0!important\",\n    \"margin\": \"0!important\"\n  }\n};\nconst _hoisted_2 = {\n  style: {\n    \"padding-right\": \"20px\"\n  }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_DxSelection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxSelection\");\n  const _component_DxSorting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxSorting\");\n  const _component_DxSearchPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxSearchPanel\");\n  const _component_DxExport = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxExport\");\n  const _component_DxFilterRow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxFilterRow\");\n  const _component_DxHeaderFilter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxHeaderFilter\");\n  const _component_DxGroupPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxGroupPanel\");\n  const _component_DxPaging = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxPaging\");\n  const _component_DxPager = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxPager\");\n  const _component_DxEditing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxEditing\");\n  const _component_DxItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxItem\");\n  const _component_DxToolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxToolbar\");\n  const _component_DxSelectBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxSelectBox\");\n  const _component_DxMasterDetail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxMasterDetail\");\n  const _component_DxGrouping = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxGrouping\");\n  const _component_DxValueFormat = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxValueFormat\");\n  const _component_DxTotalItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxTotalItem\");\n  const _component_DxGroupItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxGroupItem\");\n  const _component_DxSummary = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxSummary\");\n  const _component_DxDataGrid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"DxDataGrid\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, \"Title\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxDataGrid, {\n    onInitNewRow: $options.initNewRow,\n    onEditingStart: $options.editingStart,\n    onSelectionChanged: $options.selectedItem,\n    \"column-auto-width\": true,\n    ref: \"grid\",\n    \"show-borders\": true,\n    \"data-source\": $data.dataSource,\n    \"remote-operations\": true,\n    height: $props.Height,\n    \"hover-state-enabled\": true,\n    onExporting: $options.onExporting,\n    onContextMenuPreparing: $options.addMenuItems\n  }, {\n    organization: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxSelectBox, {\n      searchEnabled: true,\n      width: \"300\",\n      \"data-source\": $data.orgs,\n      \"display-expr\": \"Name\",\n      \"value-expr\": \"Database\",\n      value: \"AS_WNS\",\n      onValueChanged: $options.onChange\n    }, null, 8 /* PROPS */, [\"data-source\", \"onValueChanged\"])])]),\n    MasterDetail: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({\n      data: response\n    }) => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, \"MasterDetail\", {\n      data: response\n    })]),\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, \"Columns\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxSelection, {\n      mode: \"single\"\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxSorting, {\n      mode: \"none\"\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxSearchPanel, {\n      width: 240,\n      visible: $props.EnableSearch\n    }, null, 8 /* PROPS */, [\"visible\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxExport, {\n      enabled: $props.EnableExport,\n      formats: ['xlsx', 'pdf']\n    }, null, 8 /* PROPS */, [\"enabled\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxFilterRow, {\n      visible: $props.EnableFilterRow\n    }, null, 8 /* PROPS */, [\"visible\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxHeaderFilter, {\n      visible: $props.EnableFilterHeader\n    }, null, 8 /* PROPS */, [\"visible\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxGroupPanel, {\n      visible: $props.EnableGroup\n    }, null, 8 /* PROPS */, [\"visible\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxPaging, {\n      \"page-size\": 20\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxPager, {\n      visible: true,\n      \"allowed-page-sizes\": $data.pageSizes,\n      \"display-mode\": \"full\",\n      \"show-page-size-selector\": $data.showPageSizeSelector,\n      \"show-info\": $data.showInfo,\n      \"show-navigation-buttons\": $data.showNavButtons\n    }, null, 8 /* PROPS */, [\"allowed-page-sizes\", \"show-page-size-selector\", \"show-info\", \"show-navigation-buttons\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxEditing, {\n      \"allow-adding\": $props.EnableAdding,\n      \"allow-updating\": $props.EnableUpdating,\n      \"allow-deleting\": $props.EnableDeleting,\n      mode: $props.DatagridMode\n    }, null, 8 /* PROPS */, [\"allow-adding\", \"allow-updating\", \"allow-deleting\", \"mode\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxToolbar, null, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [$props.OrgSelection ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DxItem, {\n        key: 0,\n        location: \"before\",\n        template: \"organization\"\n      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <DxItem location=\\\"before\\\" template=\\\"search\\\" v-if=\\\"EnableSearch\\\" /> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxItem, {\n        name: \"exportButton\"\n      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxItem, {\n        name: \"addRowButton\"\n      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxItem, {\n        name: \"searchPanel\"\n      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxItem, {\n        name: \"groupPanel\"\n      })]),\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxMasterDetail, {\n      enabled: _ctx.$props.EnableMasterDetail,\n      template: \"MasterDetail\"\n    }, null, 8 /* PROPS */, [\"enabled\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxGrouping, {\n      \"auto-expand-all\": false\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxSummary, null, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxTotalItem, {\n        column: \"Freight\",\n        \"summary-type\": \"sum\"\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxValueFormat, {\n          precision: 2,\n          type: \"decimal\"\n        })]),\n        _: 1 /* STABLE */\n      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxGroupItem, {\n        column: \"Freight\",\n        \"summary-type\": \"sum\"\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxValueFormat, {\n          precision: 2,\n          type: \"decimal\"\n        })]),\n        _: 1 /* STABLE */\n      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DxGroupItem, {\n        \"summary-type\": \"count\"\n      })]),\n      _: 1 /* STABLE */\n    })]),\n\n    _: 3 /* FORWARDED */\n  }, 8 /* PROPS */, [\"onInitNewRow\", \"onEditingStart\", \"onSelectionChanged\", \"data-source\", \"height\", \"onExporting\", \"onContextMenuPreparing\"])]);\n}\n\n//# sourceURL=webpack://ascend/./src/components/datagrid-component.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/datagrid-component.vue":
/*!***********************************************!*\
  !*** ./src/components/datagrid-component.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datagrid_component_vue_vue_type_template_id_0ad68f70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datagrid-component.vue?vue&type=template&id=0ad68f70 */ \"./src/components/datagrid-component.vue?vue&type=template&id=0ad68f70\");\n/* harmony import */ var _datagrid_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datagrid-component.vue?vue&type=script&lang=js */ \"./src/components/datagrid-component.vue?vue&type=script&lang=js\");\n/* harmony import */ var C_Files_Development_KilatService_Ascend_PreCheckACWeb_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,C_Files_Development_KilatService_Ascend_PreCheckACWeb_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_datagrid_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_datagrid_component_vue_vue_type_template_id_0ad68f70__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/datagrid-component.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://ascend/./src/components/datagrid-component.vue?");

/***/ }),

/***/ "./src/components/datagrid-component.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/datagrid-component.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datagrid_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datagrid_component_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./datagrid-component.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/datagrid-component.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ascend/./src/components/datagrid-component.vue?");

/***/ }),

/***/ "./src/components/datagrid-component.vue?vue&type=template&id=0ad68f70":
/*!*****************************************************************************!*\
  !*** ./src/components/datagrid-component.vue?vue&type=template&id=0ad68f70 ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datagrid_component_vue_vue_type_template_id_0ad68f70__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_datagrid_component_vue_vue_type_template_id_0ad68f70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./datagrid-component.vue?vue&type=template&id=0ad68f70 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/datagrid-component.vue?vue&type=template&id=0ad68f70\");\n\n\n//# sourceURL=webpack://ascend/./src/components/datagrid-component.vue?");

/***/ })

}]);