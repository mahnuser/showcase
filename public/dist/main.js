/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/make.css":
/*!**********************!*\
  !*** ./src/make.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://showcase-projects/./src/make.css?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet data = [\r\n    { \r\n        name: \"Love Meter\",\r\n        desc: \"Calculates similarity between words.Calculates similarity between words.\",\r\n        testLink: \"https://askolcer.mahnuser.dev\",\r\n        liveLink: \"\",\r\n        technologies: \"Firebase Hosting-Firestore, TailwindCSS, Webpack\",\r\n        date: \"02/08/2022\",\r\n        date2: \"2022\",\r\n        traffic: \"5\",\r\n        githubLink:\"https://www.github.com\",\r\n        gitlabLink: \"\",\r\n\r\n    },\r\n    { \r\n        name: \"Renamer\",\r\n        desc: \"Helps to rename your files quickly.\",\r\n        testLink: \"https://renamer.mahnuser.dev\",\r\n        liveLink: \"\",\r\n        technologies: \"Firebase Hosting, JQuery,JQueryUI, Webpack\",\r\n        date: \"02/20/2020\",\r\n        date2: \"2022\",\r\n        traffic: \"5\",\r\n        githubLink:\"https://www.github.com\",\r\n        gitlabLink: \"https://www.gitlab.com\",\r\n\r\n    },\r\n    { \r\n        name: \"Love Meter\",\r\n        desc: \"Calculates similarity between words.\",\r\n        testLink: \"https://askolcer.mahnuser.dev\",\r\n        liveLink: \"https://google.com\",\r\n        technologies: \"Firebase Hosting-Firestore, TailwindCSS, Webpack\",\r\n        date: \"02/20/2020\",\r\n        date2: \"2020\",\r\n        traffic: \"5\",\r\n        githubLink:\"https://www.github.com\",\r\n        gitlabLink: \"https://www.gitlab.com\",\r\n\r\n    },\r\n    { \r\n        name: \"Love Meter\",\r\n        desc: \"Calculates similarity between words.\",\r\n        testLink: \"https://askolcer.mahnuser.dev\",\r\n        liveLink: \"https://google.com\",\r\n        technologies: \"Firebase Hosting-Firestore, TailwindCSS, Webpack\",\r\n        date: \"02/20/2020\",\r\n        date2: \"2020\",\r\n        traffic: \"5\",\r\n        githubLink:\"https://www.github.com\",\r\n        gitlabLink: \"\",\r\n\r\n    },\r\n    { \r\n        name: \"Love Meter\",\r\n        desc: \"Calculates similarity between words.\",\r\n        testLink: \"\",\r\n        liveLink: \"https://google.com\",\r\n        technologies: \"Firebase Hosting-Firestore, TailwindCSS, Webpack\",\r\n        date: \"02/20/2020\",\r\n        date2: \"2020\",\r\n        traffic: \"5\",\r\n        githubLink:\"https://www.github.com\",\r\n        gitlabLink: \"\",\r\n\r\n    },\r\n    { \r\n        name: \"Love Meter\",\r\n        desc: \"Calculates similarity between words.\",\r\n        testLink: \"\",\r\n        liveLink: \"\",\r\n        technologies: \"Firebase Hosting-Firestore, TailwindCSS, Webpack\",\r\n        date: \"02/20/2020\",\r\n        date2: \"2020\",\r\n        traffic: \"5\",\r\n        githubLink:\"https://www.github.com\",\r\n        gitlabLink: \"https://www.gitlab.com\",\r\n\r\n    }\r\n]\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://showcase-projects/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _make_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make.css */ \"./src/make.css\");\n\r\n\r\n\r\n\r\nfunction copyEmail() {\r\n    let text = document.querySelector('#mail-input')\r\n    text.select()\r\n    text.setSelectionRange(0, 99999)\r\n    navigator.clipboard.writeText(text.value)\r\n    document.querySelector('#copy').classList.remove('fa-copy')\r\n    document.querySelector('#copy').classList.add('fa-check')\r\n    document.querySelector('#myTooltip').innerText = \"Copied!\"\r\n}\r\n\r\n\r\nlet main = document.querySelector('#main')\r\n\r\nfunction fillMain() {\r\n    let template = ``\r\n    _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((e) => {\r\n        let t = ` <section  class=\"bg-myLight-700 dark:bg-gradient-to-b dark:from-mySpace-200 dark:to-mySpace-400 dark:text-myDark-100 h-80 mt-4 relative mx-auto w-80  md:w-80 lg:max-w-xl hide mx-auto odd:delay-200 even:delay-500 border-solid border-2 rounded border-red-400 text-slate-900\">\r\n              <div class=\"mt-5\">\r\n  \r\n                <div class=\"bg-myLight-600 dark:bg-gradient-to-b dark:from-myDark-500 dark:to-myDark-900 dark:shadow-md dark:shadow-black rounded w-40 h-14 absolute -top-5 bg-slate-200 font-semibold mx-20 mb-3  text-center align-content-center align-middle\">              \r\n                  <div class=\"mt-3 text-lg\">\r\n                    ${e.name}\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"mt-5\"> \r\n  \r\n                  <div class=\"font-semibold mx-8 mt-12 mb-2 text-center\">\r\n                    <i class=\"fa-solid fa-circle-info text-mySpace-500\"></i>\r\n                    ${e.desc}\r\n                  </div>\r\n  \r\n                  <div class=\"mx-10  mb-2  text-center\">\r\n                    <i class=\"fa-solid fa-layer-group text-mySpace-500\"></i>\r\n                    ${e.technologies}\r\n                  </div>\r\n  \r\n                  <div class=\"mx-3 mt-0.5 flex absolute top-2 right-0.5 mb-2 text-center\">\r\n                    <div class=\"mr-2 ml-auto font-semibold proportional-nums\">\r\n                      ${e.traffic}\r\n                    </div>\r\n                    <div>\r\n                      <i class=\"fa-solid fa-users text-mySpace-500\"></i>\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\"mx-3 mt-0.5 flex absolute top-2 left-0.5 mb-2 text-center \">\r\n                    <div>\r\n                      <i class=\"fa-solid fa-calendar-days text-mySpace-500\"></i>\r\n                    </div>\r\n                    <div class=\"ml-2 mr-auto font-semibold proportional-nums\">\r\n                      ${e.date2}\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <div class=\"mx-10 mb-2  text-center grid grid-flow-cols\">\r\n                    <div> \r\n                      <i class=\"fa-brands fa-github text-mySpace-500\"></i>\r\n                      <a aria-label=\"github repository link\" class=\"link-hover ${e.githubLink != \"\" ? \"\" : \"disabled-link\"}\" target=\"_blank\" href=\"${e.githubLink != \"\" ? e.githubLink : \"#\"}\">GitHub</a>\r\n                    </div>\r\n                    <div> \r\n                      <i class=\"fa-brands fa-gitlab text-mySpace-500\"></i>\r\n                      <a aria-label=\"gitlab repository link\" class=\"link-hover ${e.gitlabLink != \"\" ? \"\" : \"disabled-link\"} \"  target=\"_blank\" href=\"${e.gitlabLink != \"\" ? e.gitlabLink : \"#\"}\">GitLab </a>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"\">\r\n                    <div class=\"absolute bottom-0 inset-x-0 text-center\">\r\n                      <button type=\"button\" class=\" transition-settings hover:-translate-y-2 bg-red-400 hover:-translate-x-2 hover:shadow-lg hover:shadow-rose-700 hover:bg-rose-400 duration-200 w-16 text-white p-2 mx-2 mx-auto mb-3 text-center hover:cursor-pointer ${e.testLink == \"\" ? \"disabled-gray\" : \"\"}\">    \r\n                        <a aria-label=\"test link to access project\" href=\"${e.testLink != \"\" ? e.testLink : \"#\"}\">Test</a>\r\n                      </button>\r\n                      <button type=\"button\"  class=\" bg-black transition-settings hover:translate-x-2 hover:-translate-y-2   hover:shadow-gray-700 hover:shadow-lg w-16 text-white p-2 mx-2 duration-200 mx-auto mb-3 text-center hover:cursor-pointer ${e.liveLink == \"\" ? \"disabled-gray\" : \"\"}\">    \r\n                        <a aria-label=\"public link to access project\" href=\"${e.liveLink != \"\" ? e.liveLink : \"#\"}\">Live</a>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n  \r\n                </div>\r\n              </div>\r\n            </section>`\r\n\r\n        main.innerHTML += t;\r\n    })\r\n\r\n}\r\n\r\n\r\nlet observer = new IntersectionObserver((entries) => {\r\n    entries.forEach((entry) => {\r\n        //console.log(entry)\r\n        if (entry.isIntersecting) {\r\n            entry.target.classList.add('show')\r\n        } else {\r\n            entry.target.classList.remove('show')\r\n        }\r\n    })\r\n})\r\n\r\n\r\n\r\nif (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\r\n    document.documentElement.classList.add('dark')\r\n} else {\r\n    document.documentElement.classList.remove('dark')\r\n}\r\n\r\n\r\n\r\nfunction toggleTheme() {\r\n    if (document.querySelector('#hide-checkbox').checked) {\r\n        document.documentElement.classList.remove('dark')\r\n        localStorage.theme = 'light'\r\n    } else {\r\n        document.documentElement.classList.add('dark')\r\n        localStorage.theme = 'dark'\r\n    }\r\n}\r\n\r\nfunction initTheme() {\r\n    if (!localStorage.theme) {\r\n        localStorage.theme = \"light\"\r\n    }\r\n    if (localStorage.theme == \"light\") {\r\n        document.querySelector('#hide-checkbox').checked = true\r\n        toggleTheme()\r\n    } else {\r\n        document.querySelector('#hide-checkbox').checked = false\r\n        toggleTheme()\r\n    }\r\n}\r\n\r\nfillMain()\r\ninitTheme()\r\ndocument.querySelector('#hide-checkbox').addEventListener('click', toggleTheme)\r\ndocument.querySelector(\"#copy-btn\").addEventListener('click', copyEmail)\r\nlet hiddenElements = document.querySelectorAll('.hide')\r\nhiddenElements.forEach((el) => observer.observe(el))\r\n\n\n//# sourceURL=webpack://showcase-projects/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;