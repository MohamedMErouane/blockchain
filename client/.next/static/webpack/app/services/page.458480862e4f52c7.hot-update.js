"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/services/page",{

/***/ "(app-pages-browser)/./components/player.tsx":
/*!*******************************!*\
  !*** ./components/player.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/events-2895749c.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.core.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SPEED = 0.1;\n// Dynamically import the Joystick component to avoid SSR issues\nconst Joystick = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-joystick-component_build_lib_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-joystick-component */ \"(app-pages-browser)/./node_modules/react-joystick-component/build/lib/index.js\")).then((mod)=>mod.Joystick), {\n    loadableGenerated: {\n        modules: [\n            \"components/player.tsx -> \" + \"react-joystick-component\"\n        ]\n    },\n    ssr: false\n});\n_c = Joystick;\nfunction Player() {\n    _s();\n    const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [move, setMove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        forward: 0,\n        backward: 0,\n        left: 0,\n        right: 0\n    });\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { camera } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.A)();\n    // Detect if the user is on a mobile device\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Player.useEffect\": ()=>{\n            const checkIsMobile = {\n                \"Player.useEffect.checkIsMobile\": ()=>{\n                    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);\n                    setIsMobile(isMobileDevice);\n                }\n            }[\"Player.useEffect.checkIsMobile\"];\n            checkIsMobile();\n            window.addEventListener(\"resize\", checkIsMobile);\n            return ({\n                \"Player.useEffect\": ()=>{\n                    window.removeEventListener(\"resize\", checkIsMobile);\n                }\n            })[\"Player.useEffect\"];\n        }\n    }[\"Player.useEffect\"], []);\n    // Keyboard controls\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Player.useEffect\": ()=>{\n            const handleKeyDown = {\n                \"Player.useEffect.handleKeyDown\": (event)=>{\n                    switch(event.code){\n                        case \"KeyW\":\n                            setMove({\n                                \"Player.useEffect.handleKeyDown\": (m)=>({\n                                        ...m,\n                                        forward: 1\n                                    })\n                            }[\"Player.useEffect.handleKeyDown\"]);\n                            break;\n                        case \"KeyS\":\n                            setMove({\n                                \"Player.useEffect.handleKeyDown\": (m)=>({\n                                        ...m,\n                                        backward: 1\n                                    })\n                            }[\"Player.useEffect.handleKeyDown\"]);\n                            break;\n                        case \"KeyA\":\n                            setMove({\n                                \"Player.useEffect.handleKeyDown\": (m)=>({\n                                        ...m,\n                                        left: 1\n                                    })\n                            }[\"Player.useEffect.handleKeyDown\"]);\n                            break;\n                        case \"KeyD\":\n                            setMove({\n                                \"Player.useEffect.handleKeyDown\": (m)=>({\n                                        ...m,\n                                        right: 1\n                                    })\n                            }[\"Player.useEffect.handleKeyDown\"]);\n                            break;\n                    }\n                }\n            }[\"Player.useEffect.handleKeyDown\"];\n            const handleKeyUp = {\n                \"Player.useEffect.handleKeyUp\": (event)=>{\n                    switch(event.code){\n                        case \"KeyW\":\n                            setMove({\n                                \"Player.useEffect.handleKeyUp\": (m)=>({\n                                        ...m,\n                                        forward: 0\n                                    })\n                            }[\"Player.useEffect.handleKeyUp\"]);\n                            break;\n                        case \"KeyS\":\n                            setMove({\n                                \"Player.useEffect.handleKeyUp\": (m)=>({\n                                        ...m,\n                                        backward: 0\n                                    })\n                            }[\"Player.useEffect.handleKeyUp\"]);\n                            break;\n                        case \"KeyA\":\n                            setMove({\n                                \"Player.useEffect.handleKeyUp\": (m)=>({\n                                        ...m,\n                                        left: 0\n                                    })\n                            }[\"Player.useEffect.handleKeyUp\"]);\n                            break;\n                        case \"KeyD\":\n                            setMove({\n                                \"Player.useEffect.handleKeyUp\": (m)=>({\n                                        ...m,\n                                        right: 0\n                                    })\n                            }[\"Player.useEffect.handleKeyUp\"]);\n                            break;\n                    }\n                }\n            }[\"Player.useEffect.handleKeyUp\"];\n            window.addEventListener(\"keydown\", handleKeyDown);\n            window.addEventListener(\"keyup\", handleKeyUp);\n            return ({\n                \"Player.useEffect\": ()=>{\n                    window.removeEventListener(\"keydown\", handleKeyDown);\n                    window.removeEventListener(\"keyup\", handleKeyUp);\n                }\n            })[\"Player.useEffect\"];\n        }\n    }[\"Player.useEffect\"], []);\n    // Joystick movement handler\n    const handleJoystickMove = (event)=>{\n        if (!event || event.x === null || event.y === null) return;\n        setMove({\n            forward: event.y > 0 ? Math.abs(event.y) : 0,\n            backward: event.y < 0 ? Math.abs(event.y) : 0,\n            left: event.x < 0 ? Math.abs(event.x) : 0,\n            right: event.x > 0 ? Math.abs(event.x) : 0\n        });\n    };\n    // Reset movement when joystick stops\n    const handleJoystickStop = ()=>{\n        setMove({\n            forward: 0,\n            backward: 0,\n            left: 0,\n            right: 0\n        });\n    };\n    // Update player position based on movement\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.C)({\n        \"Player.useFrame\": ()=>{\n            if (playerRef.current) {\n                const direction = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(move.left - move.right, 0, move.forward - move.backward).normalize();\n                // Move the player\n                playerRef.current.position.addScaledVector(direction, SPEED);\n                // Update the camera position to follow the player\n                camera.position.copy(playerRef.current.position);\n                camera.lookAt(playerRef.current.position);\n            }\n        }\n    }[\"Player.useFrame\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                ref: playerRef,\n                position: [\n                    0,\n                    1,\n                    0\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                        args: [\n                            0.5,\n                            2,\n                            0.5\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        color: \"green\"\n                    }, void 0, false, {\n                        fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    bottom: \"20px\",\n                    left: \"20px\",\n                    zIndex: 1000\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Joystick, {\n                    size: 100,\n                    baseColor: \"gray\",\n                    stickColor: \"black\",\n                    move: handleJoystickMove,\n                    stop: handleJoystickStop\n                }, void 0, false, {\n                    fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Player, \"agALkHUv1YCA6FQ7TmGFym8fIfc=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.A,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.C\n    ];\n});\n_c1 = Player;\nvar _c, _c1;\n$RefreshReg$(_c, \"Joystick\");\n$RefreshReg$(_c1, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDSTtBQUN4QjtBQUNHO0FBRW5DLE1BQU1PLFFBQVE7QUFFZCxnRUFBZ0U7QUFDaEUsTUFBTUMsV0FBV0Ysd0RBQU9BLENBQUMsSUFBTSwwUkFBa0MsQ0FBQ0csSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlGLFFBQVE7Ozs7OztJQUMxRkcsS0FBSzs7S0FEREg7QUFJUyxTQUFTSTs7SUFDdEIsTUFBTUMsWUFBWWIsNkNBQU1BLENBQWM7SUFDdEMsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO1FBQUVlLFNBQVM7UUFBR0MsVUFBVTtRQUFHQyxNQUFNO1FBQUdDLE9BQU87SUFBRTtJQUM5RSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sRUFBRXFCLE1BQU0sRUFBRSxHQUFHbEIscURBQVFBO0lBRTNCLDJDQUEyQztJQUMzQ0YsZ0RBQVNBOzRCQUFDO1lBQ1IsTUFBTXFCO2tEQUFnQjtvQkFDcEIsTUFBTUMsaUJBQWlCLGlFQUFpRUMsSUFBSSxDQUMxRkMsVUFBVUMsU0FBUztvQkFFckJOLFlBQVlHO2dCQUNkOztZQUVBRDtZQUNBSyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVTjtZQUVsQztvQ0FBTztvQkFDTEssT0FBT0UsbUJBQW1CLENBQUMsVUFBVVA7Z0JBQ3ZDOztRQUNGOzJCQUFHLEVBQUU7SUFFTCxvQkFBb0I7SUFDcEJyQixnREFBU0E7NEJBQUM7WUFDUixNQUFNNkI7a0RBQWdCLENBQUNDO29CQUNyQixPQUFRQSxNQUFNQyxJQUFJO3dCQUNoQixLQUFLOzRCQUNIbEI7a0VBQVEsQ0FBQ21CLElBQU87d0NBQUUsR0FBR0EsQ0FBQzt3Q0FBRWxCLFNBQVM7b0NBQUU7OzRCQUNuQzt3QkFDRixLQUFLOzRCQUNIRDtrRUFBUSxDQUFDbUIsSUFBTzt3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T0FBTTs7Ozs7Ozs7Ozs7O1lBSTdCbEMsMEJBQ0MsOERBQUNtQztnQkFDQ0MsT0FBTztvQkFDTFgsVUFBVTtvQkFDVlksUUFBUTtvQkFDUnZDLE1BQU07b0JBQ053QyxRQUFRO2dCQUNWOzBCQUVBLDRFQUFDbEQ7b0JBQ0NtRCxNQUFNO29CQUNOQyxXQUFVO29CQUNWQyxZQUFXO29CQUNYL0MsTUFBTXNCO29CQUNOMEIsTUFBTXJCOzs7Ozs7Ozs7Ozs7O0FBTWxCO0dBcEl3QjdCOztRQUlIUixpREFBUUE7UUFrRjNCRCxpREFBUUE7OztNQXRGY1MiLCJzb3VyY2VzIjpbIi9ob21lL21lZC9ibG9ja2NoYWluL2NsaWVudC9jb21wb25lbnRzL3BsYXllci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgU1BFRUQgPSAwLjE7XG5cbi8vIER5bmFtaWNhbGx5IGltcG9ydCB0aGUgSm95c3RpY2sgY29tcG9uZW50IHRvIGF2b2lkIFNTUiBpc3N1ZXNcbmNvbnN0IEpveXN0aWNrID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1qb3lzdGljay1jb21wb25lbnRcIikudGhlbigobW9kKSA9PiBtb2QuSm95c3RpY2spLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKCkge1xuICBjb25zdCBwbGF5ZXJSZWYgPSB1c2VSZWY8TWVzaCB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbW92ZSwgc2V0TW92ZV0gPSB1c2VTdGF0ZSh7IGZvcndhcmQ6IDAsIGJhY2t3YXJkOiAwLCBsZWZ0OiAwLCByaWdodDogMCB9KTtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgY2FtZXJhIH0gPSB1c2VUaHJlZSgpO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgdXNlciBpcyBvbiBhIG1vYmlsZSBkZXZpY2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja0lzTW9iaWxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaXNNb2JpbGVEZXZpY2UgPSAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICk7XG4gICAgICBzZXRJc01vYmlsZShpc01vYmlsZURldmljZSk7XG4gICAgfTtcblxuICAgIGNoZWNrSXNNb2JpbGUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja0lzTW9iaWxlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja0lzTW9iaWxlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gS2V5Ym9hcmQgY29udHJvbHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSBcIktleVdcIjpcbiAgICAgICAgICBzZXRNb3ZlKChtKSA9PiAoeyAuLi5tLCBmb3J3YXJkOiAxIH0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICBzZXRNb3ZlKChtKSA9PiAoeyAuLi5tLCBiYWNrd2FyZDogMSB9KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJLZXlBXCI6XG4gICAgICAgICAgc2V0TW92ZSgobSkgPT4gKHsgLi4ubSwgbGVmdDogMSB9KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJLZXlEXCI6XG4gICAgICAgICAgc2V0TW92ZSgobSkgPT4gKHsgLi4ubSwgcmlnaHQ6IDEgfSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlVcCA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgXCJLZXlXXCI6XG4gICAgICAgICAgc2V0TW92ZSgobSkgPT4gKHsgLi4ubSwgZm9yd2FyZDogMCB9KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJLZXlTXCI6XG4gICAgICAgICAgc2V0TW92ZSgobSkgPT4gKHsgLi4ubSwgYmFja3dhcmQ6IDAgfSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiS2V5QVwiOlxuICAgICAgICAgIHNldE1vdmUoKG0pID0+ICh7IC4uLm0sIGxlZnQ6IDAgfSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiS2V5RFwiOlxuICAgICAgICAgIHNldE1vdmUoKG0pID0+ICh7IC4uLm0sIHJpZ2h0OiAwIH0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlS2V5VXApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlS2V5VXApO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBKb3lzdGljayBtb3ZlbWVudCBoYW5kbGVyXG4gIGNvbnN0IGhhbmRsZUpveXN0aWNrTW92ZSA9IChldmVudDogeyB4OiBudW1iZXIgfCBudWxsOyB5OiBudW1iZXIgfCBudWxsIH0pID0+IHtcbiAgICBpZiAoIWV2ZW50IHx8IGV2ZW50LnggPT09IG51bGwgfHwgZXZlbnQueSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgc2V0TW92ZSh7XG4gICAgICBmb3J3YXJkOiBldmVudC55ID4gMCA/IE1hdGguYWJzKGV2ZW50LnkpIDogMCxcbiAgICAgIGJhY2t3YXJkOiBldmVudC55IDwgMCA/IE1hdGguYWJzKGV2ZW50LnkpIDogMCxcbiAgICAgIGxlZnQ6IGV2ZW50LnggPCAwID8gTWF0aC5hYnMoZXZlbnQueCkgOiAwLFxuICAgICAgcmlnaHQ6IGV2ZW50LnggPiAwID8gTWF0aC5hYnMoZXZlbnQueCkgOiAwLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFJlc2V0IG1vdmVtZW50IHdoZW4gam95c3RpY2sgc3RvcHNcbiAgY29uc3QgaGFuZGxlSm95c3RpY2tTdG9wID0gKCkgPT4ge1xuICAgIHNldE1vdmUoeyBmb3J3YXJkOiAwLCBiYWNrd2FyZDogMCwgbGVmdDogMCwgcmlnaHQ6IDAgfSk7XG4gIH07XG5cbiAgLy8gVXBkYXRlIHBsYXllciBwb3NpdGlvbiBiYXNlZCBvbiBtb3ZlbWVudFxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgaWYgKHBsYXllclJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMyhcbiAgICAgICAgbW92ZS5sZWZ0IC0gbW92ZS5yaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgbW92ZS5mb3J3YXJkIC0gbW92ZS5iYWNrd2FyZFxuICAgICAgKS5ub3JtYWxpemUoKTtcblxuICAgICAgLy8gTW92ZSB0aGUgcGxheWVyXG4gICAgICBwbGF5ZXJSZWYuY3VycmVudC5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoZGlyZWN0aW9uLCBTUEVFRCk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgY2FtZXJhIHBvc2l0aW9uIHRvIGZvbGxvdyB0aGUgcGxheWVyXG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShwbGF5ZXJSZWYuY3VycmVudC5wb3NpdGlvbik7XG4gICAgICBjYW1lcmEubG9va0F0KHBsYXllclJlZi5jdXJyZW50LnBvc2l0aW9uKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBQbGF5ZXIgcmVwcmVzZW50YXRpb24gKG9wdGlvbmFsKSAqL31cbiAgICAgIDxtZXNoIHJlZj17cGxheWVyUmVmfSBwb3NpdGlvbj17WzAsIDEsIDBdfT5cbiAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1swLjUsIDIsIDAuNV19IC8+XG4gICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBjb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgIDwvbWVzaD5cblxuICAgICAgey8qIEpveXN0aWNrIGZvciBtb2JpbGUgZGV2aWNlcyAqL31cbiAgICAgIHtpc01vYmlsZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIGJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjIwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogMTAwMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEpveXN0aWNrXG4gICAgICAgICAgICBzaXplPXsxMDB9XG4gICAgICAgICAgICBiYXNlQ29sb3I9XCJncmF5XCJcbiAgICAgICAgICAgIHN0aWNrQ29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICBtb3ZlPXtoYW5kbGVKb3lzdGlja01vdmV9XG4gICAgICAgICAgICBzdG9wPXtoYW5kbGVKb3lzdGlja1N0b3B9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUZyYW1lIiwidXNlVGhyZWUiLCJWZWN0b3IzIiwiZHluYW1pYyIsIlNQRUVEIiwiSm95c3RpY2siLCJ0aGVuIiwibW9kIiwic3NyIiwiUGxheWVyIiwicGxheWVyUmVmIiwibW92ZSIsInNldE1vdmUiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJsZWZ0IiwicmlnaHQiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiY2FtZXJhIiwiY2hlY2tJc01vYmlsZSIsImlzTW9iaWxlRGV2aWNlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiY29kZSIsIm0iLCJoYW5kbGVLZXlVcCIsImhhbmRsZUpveXN0aWNrTW92ZSIsIngiLCJ5IiwiTWF0aCIsImFicyIsImhhbmRsZUpveXN0aWNrU3RvcCIsImN1cnJlbnQiLCJkaXJlY3Rpb24iLCJub3JtYWxpemUiLCJwb3NpdGlvbiIsImFkZFNjYWxlZFZlY3RvciIsImNvcHkiLCJsb29rQXQiLCJtZXNoIiwicmVmIiwiYm94R2VvbWV0cnkiLCJhcmdzIiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciIsImRpdiIsInN0eWxlIiwiYm90dG9tIiwiekluZGV4Iiwic2l6ZSIsImJhc2VDb2xvciIsInN0aWNrQ29sb3IiLCJzdG9wIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/player.tsx\n"));

/***/ })

});