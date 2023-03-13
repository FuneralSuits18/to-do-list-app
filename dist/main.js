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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoItem\": () => (/* binding */ addTodoItem),\n/* harmony export */   \"projectsDOM\": () => (/* binding */ projectsDOM),\n/* harmony export */   \"todoContainerDOM\": () => (/* binding */ todoContainerDOM)\n/* harmony export */ });\nconst projectsDOM = document.querySelector('.projects');\nconst todoContainerDOM = document.querySelector('.todo__container');\n\nfunction addTodoItem(title, description, duedate = 0, priority = 0) {\n  const todoItemDOM = document.createElement('div');\n  todoItemDOM.classList.add('todo');\n  const todoItemTitleDOM = document.createElement('div');\n  todoItemTitleDOM.classList.add('todo__title');\n  todoItemTitleDOM.textContent = title;\n  const todoItemDescriptionDOM = document.createElement('div');\n  todoItemDescriptionDOM.classList.add('todo__description');\n  todoItemDescriptionDOM.textContent = description;\n  const todoItemDuedateDOM = document.createElement('div');\n  todoItemDuedateDOM.classList.add('duedate');\n  todoItemDuedateDOM.textContent = duedate;\n  const todoItemPriorityDOM = document.createElement('div');\n  todoItemPriorityDOM.classList.add('priority');\n  todoItemPriorityDOM.textContent = priority;\n  todoItemDOM.appendChild(todoItemTitleDOM);\n  todoItemDOM.appendChild(todoItemDescriptionDOM);\n  todoItemDOM.appendChild(todoItemDuedateDOM);\n  todoItemDOM.appendChild(todoItemPriorityDOM);\n  todoContainerDOM.appendChild(todoItemDOM);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\nconst todo0 = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('A new todo', 'desc', 6, 56);\nconst project0 = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Project 0');\nconst todo1 = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('2nd', 'desc', 9, 2);\n\nproject0.addTodo(todo0);\nproject0.addTodo(todo1);\n\nproject0.todoList.forEach((element) => {\n  // if (!element.duedate && !element.priority) {\n  //   addTodoItem(element.title, element.description);\n  // } else if (!element.priority) {\n  //   addTodoItem(element.title, element.description, element.duedate);\n  // } else if (!element.duedate) {\n  //   addTodoItem(element.title, element.description, null, element.priority);\n  // } else {\n  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.addTodoItem)(element.title, element.description, element.duedate, element.priority);\n  // }\n});\n\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.todoList = [];\n  }\n\n  addTodo(todo) {\n    this.todoList.push(todo);\n  }\n\n  remove(todo) {\n    const index = this.todoList.indexOf(todo);\n    if (index > -1) {\n      this.todoList.splice(index, 1);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n  constructor(title, description, duedate, priority) {\n    this.title = title;\n    this.description = description;\n    this.duedate = duedate;\n    this.priority = priority;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/todo.js?");

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