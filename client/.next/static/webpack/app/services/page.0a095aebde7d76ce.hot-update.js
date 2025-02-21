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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/events-2895749c.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.core.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SPEED = 0.1;\nconst ROOM_BOUNDS = new three__WEBPACK_IMPORTED_MODULE_3__.Box3(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(-10, 0, -10), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(10, 5, 10)); // Define room bounds\n// Dynamically import the Joystick component to avoid SSR issues\nconst Joystick = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-joystick-component_build_lib_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-joystick-component */ \"(app-pages-browser)/./node_modules/react-joystick-component/build/lib/index.js\")).then((mod)=>mod.Joystick), {\n    loadableGenerated: {\n        modules: [\n            \"components/player.tsx -> \" + \"react-joystick-component\"\n        ]\n    },\n    ssr: false\n});\n_c = Joystick;\nfunction Player() {\n    _s();\n    const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [move, setMove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        forward: 0,\n        backward: 0,\n        left: 0,\n        right: 0\n    });\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { camera } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.A)();\n    // Detect if the user is on a mobile device\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Player.useEffect\": ()=>{\n            const checkIsMobile = {\n                \"Player.useEffect.checkIsMobile\": ()=>{\n                    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);\n                    setIsMobile(isMobileDevice);\n                }\n            }[\"Player.useEffect.checkIsMobile\"];\n            checkIsMobile();\n            window.addEventListener(\"resize\", checkIsMobile);\n            return ({\n                \"Player.useEffect\": ()=>{\n                    window.removeEventListener(\"resize\", checkIsMobile);\n                }\n            })[\"Player.useEffect\"];\n        }\n    }[\"Player.useEffect\"], []);\n    // Keyboard controls\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Player.useEffect\": ()=>{\n            const handleKeyDown = {\n                \"Player.useEffect.handleKeyDown\": (event)=>{\n                    switch(event.code){\n                        case \"KeyW\":\n                            setMove({\n                                \"Player.useEffect.handleKeyDown\": (m)=>({\n                                        ...m,\n                                        forward: 1\n                                    })\n                            }[\"Player.useEffect.handleKeyDown\"]);\n                            break;\n                        case \"KeyS\":\n                            setMove({\n                                \"Player.useEffect.handleKeyDown\": (m)=>({\n                                        ...m,\n                                        backward: 1\n                                    })\n                            }[\"Player.useEffect.handleKeyDown\"]);\n                            break;\n                        case \"KeyA\":\n                            setMove({\n                                \"Player.useEffect.handleKeyDown\": (m)=>({\n                                        ...m,\n                                        left: 1\n                                    })\n                            }[\"Player.useEffect.handleKeyDown\"]);\n                            break;\n                        case \"KeyD\":\n                            setMove({\n                                \"Player.useEffect.handleKeyDown\": (m)=>({\n                                        ...m,\n                                        right: 1\n                                    })\n                            }[\"Player.useEffect.handleKeyDown\"]);\n                            break;\n                    }\n                }\n            }[\"Player.useEffect.handleKeyDown\"];\n            const handleKeyUp = {\n                \"Player.useEffect.handleKeyUp\": (event)=>{\n                    switch(event.code){\n                        case \"KeyW\":\n                            setMove({\n                                \"Player.useEffect.handleKeyUp\": (m)=>({\n                                        ...m,\n                                        forward: 0\n                                    })\n                            }[\"Player.useEffect.handleKeyUp\"]);\n                            break;\n                        case \"KeyS\":\n                            setMove({\n                                \"Player.useEffect.handleKeyUp\": (m)=>({\n                                        ...m,\n                                        backward: 0\n                                    })\n                            }[\"Player.useEffect.handleKeyUp\"]);\n                            break;\n                        case \"KeyA\":\n                            setMove({\n                                \"Player.useEffect.handleKeyUp\": (m)=>({\n                                        ...m,\n                                        left: 0\n                                    })\n                            }[\"Player.useEffect.handleKeyUp\"]);\n                            break;\n                        case \"KeyD\":\n                            setMove({\n                                \"Player.useEffect.handleKeyUp\": (m)=>({\n                                        ...m,\n                                        right: 0\n                                    })\n                            }[\"Player.useEffect.handleKeyUp\"]);\n                            break;\n                    }\n                }\n            }[\"Player.useEffect.handleKeyUp\"];\n            window.addEventListener(\"keydown\", handleKeyDown);\n            window.addEventListener(\"keyup\", handleKeyUp);\n            return ({\n                \"Player.useEffect\": ()=>{\n                    window.removeEventListener(\"keydown\", handleKeyDown);\n                    window.removeEventListener(\"keyup\", handleKeyUp);\n                }\n            })[\"Player.useEffect\"];\n        }\n    }[\"Player.useEffect\"], []);\n    // Joystick movement handler\n    const handleJoystickMove = (event)=>{\n        if (!event || event.x === null || event.y === null) return;\n        setMove({\n            forward: event.y > 0 ? Math.abs(event.y) : 0,\n            backward: event.y < 0 ? Math.abs(event.y) : 0,\n            left: event.x < 0 ? Math.abs(event.x) : 0,\n            right: event.x > 0 ? Math.abs(event.x) : 0\n        });\n    };\n    // Reset movement when joystick stops\n    const handleJoystickStop = ()=>{\n        setMove({\n            forward: 0,\n            backward: 0,\n            left: 0,\n            right: 0\n        });\n    };\n    // Update player position based on movement\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C)({\n        \"Player.useFrame\": ()=>{\n            if (playerRef.current) {\n                const direction = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(move.left - move.right, 0, move.forward - move.backward).normalize();\n                // Calculate new position\n                const newPosition = playerRef.current.position.clone().addScaledVector(direction, SPEED);\n                // Check if new position is within room bounds\n                if (ROOM_BOUNDS.containsPoint(newPosition)) {\n                    playerRef.current.position.copy(newPosition);\n                }\n                // Update the camera position to follow the player\n                camera.position.copy(playerRef.current.position);\n            }\n        }\n    }[\"Player.useFrame\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                ref: playerRef,\n                position: [\n                    0,\n                    1,\n                    0\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                        args: [\n                            0.5,\n                            2,\n                            0.5\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        color: \"green\"\n                    }, void 0, false, {\n                        fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    bottom: \"20px\",\n                    left: \"20px\",\n                    zIndex: 1000\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Joystick, {\n                    size: 100,\n                    baseColor: \"gray\",\n                    stickColor: \"black\",\n                    move: handleJoystickMove,\n                    stop: handleJoystickStop\n                }, void 0, false, {\n                    fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/med/blockchain/client/components/player.tsx\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Player, \"agALkHUv1YCA6FQ7TmGFym8fIfc=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.A,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C\n    ];\n});\n_c1 = Player;\nvar _c, _c1;\n$RefreshReg$(_c, \"Joystick\");\n$RefreshReg$(_c1, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDSTtBQUNsQjtBQUNIO0FBRW5DLE1BQU1RLFFBQVE7QUFDZCxNQUFNQyxjQUFjLElBQUlILHVDQUFJQSxDQUFDLElBQUlELDBDQUFPQSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJQSwwQ0FBT0EsQ0FBQyxJQUFJLEdBQUcsTUFBTSxxQkFBcUI7QUFFckcsZ0VBQWdFO0FBQ2hFLE1BQU1LLFdBQVdILHdEQUFPQSxDQUFDLElBQU0sMFJBQWtDLENBQUNJLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJRixRQUFROzs7Ozs7SUFDMUZHLEtBQUs7O0tBRERIO0FBSVMsU0FBU0k7O0lBQ3RCLE1BQU1DLFlBQVlmLDZDQUFNQSxDQUFjO0lBQ3RDLE1BQU0sQ0FBQ2dCLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQUVpQixTQUFTO1FBQUdDLFVBQVU7UUFBR0MsTUFBTTtRQUFHQyxPQUFPO0lBQUU7SUFDOUUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLEVBQUV1QixNQUFNLEVBQUUsR0FBR3BCLHFEQUFRQTtJQUUzQiwyQ0FBMkM7SUFDM0NGLGdEQUFTQTs0QkFBQztZQUNSLE1BQU11QjtrREFBZ0I7b0JBQ3BCLE1BQU1DLGlCQUFpQixpRUFBaUVDLElBQUksQ0FDMUZDLFVBQVVDLFNBQVM7b0JBRXJCTixZQUFZRztnQkFDZDs7WUFFQUQ7WUFDQUssT0FBT0MsZ0JBQWdCLENBQUMsVUFBVU47WUFFbEM7b0NBQU87b0JBQ0xLLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVQO2dCQUN2Qzs7UUFDRjsyQkFBRyxFQUFFO0lBRUwsb0JBQW9CO0lBQ3BCdkIsZ0RBQVNBOzRCQUFDO1lBQ1IsTUFBTStCO2tEQUFnQixDQUFDQztvQkFDckIsT0FBUUEsTUFBTUMsSUFB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SSxDQUFDckMsVUFBVTZCLE9BQU8sQ0FBQ0ksUUFBUTtZQUNqRDtRQUNGOztJQUVBLHFCQUNFOzswQkFFRSw4REFBQ0s7Z0JBQUtDLEtBQUt2QztnQkFBV2lDLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUc7aUJBQUU7O2tDQUN2Qyw4REFBQ087d0JBQVlDLE1BQU07NEJBQUM7NEJBQUs7NEJBQUc7eUJBQUk7Ozs7OztrQ0FDaEMsOERBQUNDO3dCQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7O1lBSTdCcEMsMEJBQ0MsOERBQUNxQztnQkFDQ0MsT0FBTztvQkFDTFosVUFBVTtvQkFDVmEsUUFBUTtvQkFDUnpDLE1BQU07b0JBQ04wQyxRQUFRO2dCQUNWOzBCQUVBLDRFQUFDcEQ7b0JBQ0NxRCxNQUFNO29CQUNOQyxXQUFVO29CQUNWQyxZQUFXO29CQUNYakQsTUFBTXNCO29CQUNONEIsTUFBTXZCOzs7Ozs7Ozs7Ozs7O0FBTWxCO0dBeEl3QjdCOztRQUlIVixpREFBUUE7UUFrRjNCRCxpREFBUUE7OztNQXRGY1ciLCJzb3VyY2VzIjpbIi9ob21lL21lZC9ibG9ja2NoYWluL2NsaWVudC9jb21wb25lbnRzL3BsYXllci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IFZlY3RvcjMsIEJveDMgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgU1BFRUQgPSAwLjE7XG5jb25zdCBST09NX0JPVU5EUyA9IG5ldyBCb3gzKG5ldyBWZWN0b3IzKC0xMCwgMCwgLTEwKSwgbmV3IFZlY3RvcjMoMTAsIDUsIDEwKSk7IC8vIERlZmluZSByb29tIGJvdW5kc1xuXG4vLyBEeW5hbWljYWxseSBpbXBvcnQgdGhlIEpveXN0aWNrIGNvbXBvbmVudCB0byBhdm9pZCBTU1IgaXNzdWVzXG5jb25zdCBKb3lzdGljayA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3Qtam95c3RpY2stY29tcG9uZW50XCIpLnRoZW4oKG1vZCkgPT4gbW9kLkpveXN0aWNrKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcigpIHtcbiAgY29uc3QgcGxheWVyUmVmID0gdXNlUmVmPE1lc2ggfCBudWxsPihudWxsKTtcbiAgY29uc3QgW21vdmUsIHNldE1vdmVdID0gdXNlU3RhdGUoeyBmb3J3YXJkOiAwLCBiYWNrd2FyZDogMCwgbGVmdDogMCwgcmlnaHQ6IDAgfSk7XG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGNhbWVyYSB9ID0gdXNlVGhyZWUoKTtcblxuICAvLyBEZXRlY3QgaWYgdGhlIHVzZXIgaXMgb24gYSBtb2JpbGUgZGV2aWNlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tJc01vYmlsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlzTW9iaWxlRGV2aWNlID0gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICApO1xuICAgICAgc2V0SXNNb2JpbGUoaXNNb2JpbGVEZXZpY2UpO1xuICAgIH07XG5cbiAgICBjaGVja0lzTW9iaWxlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tJc01vYmlsZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tJc01vYmlsZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vIEtleWJvYXJkIGNvbnRyb2xzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgXCJLZXlXXCI6XG4gICAgICAgICAgc2V0TW92ZSgobSkgPT4gKHsgLi4ubSwgZm9yd2FyZDogMSB9KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJLZXlTXCI6XG4gICAgICAgICAgc2V0TW92ZSgobSkgPT4gKHsgLi4ubSwgYmFja3dhcmQ6IDEgfSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiS2V5QVwiOlxuICAgICAgICAgIHNldE1vdmUoKG0pID0+ICh7IC4uLm0sIGxlZnQ6IDEgfSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiS2V5RFwiOlxuICAgICAgICAgIHNldE1vdmUoKG0pID0+ICh7IC4uLm0sIHJpZ2h0OiAxIH0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlS2V5VXAgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlIFwiS2V5V1wiOlxuICAgICAgICAgIHNldE1vdmUoKG0pID0+ICh7IC4uLm0sIGZvcndhcmQ6IDAgfSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiS2V5U1wiOlxuICAgICAgICAgIHNldE1vdmUoKG0pID0+ICh7IC4uLm0sIGJhY2t3YXJkOiAwIH0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIktleUFcIjpcbiAgICAgICAgICBzZXRNb3ZlKChtKSA9PiAoeyAuLi5tLCBsZWZ0OiAwIH0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIktleURcIjpcbiAgICAgICAgICBzZXRNb3ZlKChtKSA9PiAoeyAuLi5tLCByaWdodDogMCB9KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gSm95c3RpY2sgbW92ZW1lbnQgaGFuZGxlclxuICBjb25zdCBoYW5kbGVKb3lzdGlja01vdmUgPSAoZXZlbnQ6IHsgeDogbnVtYmVyIHwgbnVsbDsgeTogbnVtYmVyIHwgbnVsbCB9KSA9PiB7XG4gICAgaWYgKCFldmVudCB8fCBldmVudC54ID09PSBudWxsIHx8IGV2ZW50LnkgPT09IG51bGwpIHJldHVybjtcblxuICAgIHNldE1vdmUoe1xuICAgICAgZm9yd2FyZDogZXZlbnQueSA+IDAgPyBNYXRoLmFicyhldmVudC55KSA6IDAsXG4gICAgICBiYWNrd2FyZDogZXZlbnQueSA8IDAgPyBNYXRoLmFicyhldmVudC55KSA6IDAsXG4gICAgICBsZWZ0OiBldmVudC54IDwgMCA/IE1hdGguYWJzKGV2ZW50LngpIDogMCxcbiAgICAgIHJpZ2h0OiBldmVudC54ID4gMCA/IE1hdGguYWJzKGV2ZW50LngpIDogMCxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBSZXNldCBtb3ZlbWVudCB3aGVuIGpveXN0aWNrIHN0b3BzXG4gIGNvbnN0IGhhbmRsZUpveXN0aWNrU3RvcCA9ICgpID0+IHtcbiAgICBzZXRNb3ZlKHsgZm9yd2FyZDogMCwgYmFja3dhcmQ6IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwIH0pO1xuICB9O1xuXG4gIC8vIFVwZGF0ZSBwbGF5ZXIgcG9zaXRpb24gYmFzZWQgb24gbW92ZW1lbnRcbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoXG4gICAgICAgIG1vdmUubGVmdCAtIG1vdmUucmlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIG1vdmUuZm9yd2FyZCAtIG1vdmUuYmFja3dhcmRcbiAgICAgICkubm9ybWFsaXplKCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBuZXcgcG9zaXRpb25cbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gcGxheWVyUmVmLmN1cnJlbnQucG9zaXRpb24uY2xvbmUoKS5hZGRTY2FsZWRWZWN0b3IoZGlyZWN0aW9uLCBTUEVFRCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIG5ldyBwb3NpdGlvbiBpcyB3aXRoaW4gcm9vbSBib3VuZHNcbiAgICAgIGlmIChST09NX0JPVU5EUy5jb250YWluc1BvaW50KG5ld1Bvc2l0aW9uKSkge1xuICAgICAgICBwbGF5ZXJSZWYuY3VycmVudC5wb3NpdGlvbi5jb3B5KG5ld1Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHRoZSBjYW1lcmEgcG9zaXRpb24gdG8gZm9sbG93IHRoZSBwbGF5ZXJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KHBsYXllclJlZi5jdXJyZW50LnBvc2l0aW9uKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBQbGF5ZXIgcmVwcmVzZW50YXRpb24gKG9wdGlvbmFsKSAqL31cbiAgICAgIDxtZXNoIHJlZj17cGxheWVyUmVmfSBwb3NpdGlvbj17WzAsIDEsIDBdfT5cbiAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1swLjUsIDIsIDAuNV19IC8+XG4gICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBjb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgIDwvbWVzaD5cblxuICAgICAgey8qIEpveXN0aWNrIGZvciBtb2JpbGUgZGV2aWNlcyAqL31cbiAgICAgIHtpc01vYmlsZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIGJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjIwcHhcIixcbiAgICAgICAgICAgIHpJbmRleDogMTAwMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEpveXN0aWNrXG4gICAgICAgICAgICBzaXplPXsxMDB9XG4gICAgICAgICAgICBiYXNlQ29sb3I9XCJncmF5XCJcbiAgICAgICAgICAgIHN0aWNrQ29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICBtb3ZlPXtoYW5kbGVKb3lzdGlja01vdmV9XG4gICAgICAgICAgICBzdG9wPXtoYW5kbGVKb3lzdGlja1N0b3B9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUZyYW1lIiwidXNlVGhyZWUiLCJWZWN0b3IzIiwiQm94MyIsImR5bmFtaWMiLCJTUEVFRCIsIlJPT01fQk9VTkRTIiwiSm95c3RpY2siLCJ0aGVuIiwibW9kIiwic3NyIiwiUGxheWVyIiwicGxheWVyUmVmIiwibW92ZSIsInNldE1vdmUiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJsZWZ0IiwicmlnaHQiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiY2FtZXJhIiwiY2hlY2tJc01vYmlsZSIsImlzTW9iaWxlRGV2aWNlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiY29kZSIsIm0iLCJoYW5kbGVLZXlVcCIsImhhbmRsZUpveXN0aWNrTW92ZSIsIngiLCJ5IiwiTWF0aCIsImFicyIsImhhbmRsZUpveXN0aWNrU3RvcCIsImN1cnJlbnQiLCJkaXJlY3Rpb24iLCJub3JtYWxpemUiLCJuZXdQb3NpdGlvbiIsInBvc2l0aW9uIiwiY2xvbmUiLCJhZGRTY2FsZWRWZWN0b3IiLCJjb250YWluc1BvaW50IiwiY29weSIsIm1lc2giLCJyZWYiLCJib3hHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIiwiZGl2Iiwic3R5bGUiLCJib3R0b20iLCJ6SW5kZXgiLCJzaXplIiwiYmFzZUNvbG9yIiwic3RpY2tDb2xvciIsInN0b3AiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/player.tsx\n"));

/***/ })

});