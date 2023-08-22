/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./hyptiotes.js":
/*!**********************!*\
  !*** ./hyptiotes.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Working copy while I test it out\n\n// Hyptiotes (the triangle weaver) is known for using a spring loaded triangular web\n// Like the weaver, Hyptiotes.js aims to spring load basic web technologies by bridging their interfaces\n//\n// Goal: Rework building web with little magic and little inconvenience\n//\n// Means: Leverage the best of vanilla, bridging only the least smooth interfaces. particularly:\n//  - the separation of view, logic, and style\n//  - abstract handling ƒor basic events (like click and hover)\n//\n// Concepts:\n//  - Flip the paradigm of logic powered markup to be markup powered logic\n//  - Web has quirks, don't hide them with more quirks. Keep it simple. Keep it vanilla.\n//  - This is a web framework, not a logic framework. It should not be \"smart\" or stateful.\n//\n\nhyptiotes = {\n\tmount: function (target, model) {\n    let dom = null;\n    try {\n      dom = spinWeb(model, target);\n    } catch (e) {\n      console.error('Error encountered rendering', e.model, ' inside of ', e.parent);\n      throw e;\n    }\n\t\ttarget.innerHTML = \"\";\n\t\tif (dom) target.appendChild(dom);\n\t},\n  style\n};\nwindow.hyptiotes = hyptiotes;\n\n// Convert hyptiotes model to DOM\nfunction spinWeb(model, parent) {\n  try {\n    return spinWebInternal(model, parent);\n  } catch (e) {\n    e.model = e.model || model;\n    e.parent = e.parent || parent;\n    throw e;\n  }\n}\n\nfunction spinWebInternal(model, parent) {\n\n\tconst [tag, ...children] = model;\n\n  if (tag === \"style\") {\n    style(children[0]);\n    return null;\n  }\n\n\tconst element = document.createElement(tag);\n\tchildren.forEach((item) => {\n\t\tif (Array.isArray(item)) {\n\t\t\tconst nested = spinWeb(item, parent);\n      if (nested) element.appendChild(nested);\n\t\t} else if (item === null || item === undefined) {\n\t\t\t// skip\n\t\t} else if (typeof item === \"object\") {\n\t\t\t// process attributes\n\t\t\tapplyAttributes(element, item);\n\t\t} else if (typeof item === \"function\") {\n\t\t\t// mount generator element\n\t\t\tconst generator = generatorContent(item, parent);\n\t\t\telement.appendChild(generator.pendingUpdate || generator);\n\t\t} else {\n\t\t\t// content\n\t\t\tconst textNode = document.createTextNode(item);\n\t\t\telement.appendChild(textNode);\n\t\t}\n\t});\n\n\treturn element;\n}\n\n// Set attributes, handling special properties like style and handlers correctly\nfunction applyAttributes(element, attributes) {\n\tfor (const [attribute, value] of Object.entries(attributes)) {\n\t\tif (attribute === \"style\") {\n\t\t\t// stringify styles\n\t\t\telement.setAttribute(attribute, stringifyStyleObject(value));\n\t\t} else if (typeof value === \"function\") {\n\t\t\t// hook up handler\n\t\t\telement[attribute] = value;\n\t\t} else {\n\t\t\t// non-special property\n\t\t\telement.setAttribute(attribute, value);\n\t\t}\n\t}\n}\n\nfunction stringifyStyleObject(styleObject) {\n\treturn Object.entries(styleObject).reduce((s, [property, value]) => {\n\t\treturn s + `${property}: ${value}; `;\n\t}, \"\");\n}\n\nfunction generatorContent(fn, parent) {\n\tlet onUpdate = () => {\n\t\tthrow new Error(\"Called update inside render\");\n\t};\n\tlet ref = null;\n\tconst hooks = {\n\t\tupdate: (v) => onUpdate(v),\n\t\tonRef: (cb) => {\n\t\t\tif (ref !== null) console.warn(\"Called ref twice, only last is called\");\n\t\t\tref = (element) => {\n\t\t\t\tcb(element);\n\t\t\t\tref = null;\n\t\t\t};\n\t\t},\n\t};\n\n\tconst model = fn(hooks);\n\tlet element = spinWeb(model);\n\n\tlet calledByRef = false;\n\tonUpdate = function () {\n\t\tconst model = fn(hooks);\n\t\tconst updatedElement = spinWeb(model);\n\n\t\t// Swap in the updated element (or store if not mounted yet)\n\t\tconst elParent = element.parentNode;\n\t\tif (elParent) {\n\t\t\tconst next = element.nextSibling;\n\t\t\telParent.removeChild(element);\n\t\t\telParent.insertBefore(updatedElement, next);\n\t\t} else {\n\t\t\t// if no parent, we're being called from refs\n\t\t\t// if called twice before mounting we have a loop, abort\n\t\t\tif (calledByRef) {\n\t\t\t\treturn console.error(\"Cyclical update + onRef. Aborting.\");\n\t\t\t}\n\t\t\tcalledByRef = true;\n\t\t\telement.pendingUpdate = updatedElement;\n\t\t}\n\t\tif (ref) ref(updatedElement);\n\n\t\tlockUpdates = false;\n\t\tcalledByRef = false;\n\t\telement = updatedElement;\n\t};\n\n\tif (ref) ref(element);\n\n\treturn element;\n}\n\nfunction style(data) {\n  const element = document.createElement(\"style\");\n  element.innerHTML = cssify(data);\n  document.head.appendChild(element);\n}\n\nvar _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\nfunction cssify(obj, prefix) {\n\tif (!prefix) prefix = \"\";\n\tvar nested = \"\";\n\tvar current = _.map(obj, function (val, key) {\n\t\tif (_.isObject(val)) {\n\t\t\tif (key.startsWith(\"@media\")) {\n\t\t\t\tnested += [key, \"{\", cssify(val, \"\"), \"}\"].join(\"\");\n\t\t\t} else {\n\t\t\t\tnested += cssify(\n\t\t\t\t\tval,\n\t\t\t\t\tkey.startsWith(\"&\") ? prefix + key.slice(1) : prefix + \" \" + key\n\t\t\t\t);\n\t\t\t}\n\t\t\treturn \"\";\n\t\t}\n\t\treturn [key, \":\", val, \";\"].join(\"\");\n\t}).join(\"\");\n\tif (!current) return nested;\n\treturn [prefix, \"{\", current, \"}\", nested].join(\"\");\n}\n\nmodule.exports = hyptiotes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oeXB0aW90ZXMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h5cHRpb3Rlcy1yZXN1bWUvLi9oeXB0aW90ZXMuanM/N2NmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXb3JraW5nIGNvcHkgd2hpbGUgSSB0ZXN0IGl0IG91dFxuXG4vLyBIeXB0aW90ZXMgKHRoZSB0cmlhbmdsZSB3ZWF2ZXIpIGlzIGtub3duIGZvciB1c2luZyBhIHNwcmluZyBsb2FkZWQgdHJpYW5ndWxhciB3ZWJcbi8vIExpa2UgdGhlIHdlYXZlciwgSHlwdGlvdGVzLmpzIGFpbXMgdG8gc3ByaW5nIGxvYWQgYmFzaWMgd2ViIHRlY2hub2xvZ2llcyBieSBicmlkZ2luZyB0aGVpciBpbnRlcmZhY2VzXG4vL1xuLy8gR29hbDogUmV3b3JrIGJ1aWxkaW5nIHdlYiB3aXRoIGxpdHRsZSBtYWdpYyBhbmQgbGl0dGxlIGluY29udmVuaWVuY2Vcbi8vXG4vLyBNZWFuczogTGV2ZXJhZ2UgdGhlIGJlc3Qgb2YgdmFuaWxsYSwgYnJpZGdpbmcgb25seSB0aGUgbGVhc3Qgc21vb3RoIGludGVyZmFjZXMuIHBhcnRpY3VsYXJseTpcbi8vICAtIHRoZSBzZXBhcmF0aW9uIG9mIHZpZXcsIGxvZ2ljLCBhbmQgc3R5bGVcbi8vICAtIGFic3RyYWN0IGhhbmRsaW5nIMaSb3IgYmFzaWMgZXZlbnRzIChsaWtlIGNsaWNrIGFuZCBob3Zlcilcbi8vXG4vLyBDb25jZXB0czpcbi8vICAtIEZsaXAgdGhlIHBhcmFkaWdtIG9mIGxvZ2ljIHBvd2VyZWQgbWFya3VwIHRvIGJlIG1hcmt1cCBwb3dlcmVkIGxvZ2ljXG4vLyAgLSBXZWIgaGFzIHF1aXJrcywgZG9uJ3QgaGlkZSB0aGVtIHdpdGggbW9yZSBxdWlya3MuIEtlZXAgaXQgc2ltcGxlLiBLZWVwIGl0IHZhbmlsbGEuXG4vLyAgLSBUaGlzIGlzIGEgd2ViIGZyYW1ld29yaywgbm90IGEgbG9naWMgZnJhbWV3b3JrLiBJdCBzaG91bGQgbm90IGJlIFwic21hcnRcIiBvciBzdGF0ZWZ1bC5cbi8vXG5cbmh5cHRpb3RlcyA9IHtcblx0bW91bnQ6IGZ1bmN0aW9uICh0YXJnZXQsIG1vZGVsKSB7XG4gICAgbGV0IGRvbSA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGRvbSA9IHNwaW5XZWIobW9kZWwsIHRhcmdldCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZW5jb3VudGVyZWQgcmVuZGVyaW5nJywgZS5tb2RlbCwgJyBpbnNpZGUgb2YgJywgZS5wYXJlbnQpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cdFx0dGFyZ2V0LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0aWYgKGRvbSkgdGFyZ2V0LmFwcGVuZENoaWxkKGRvbSk7XG5cdH0sXG4gIHN0eWxlXG59O1xud2luZG93Lmh5cHRpb3RlcyA9IGh5cHRpb3RlcztcblxuLy8gQ29udmVydCBoeXB0aW90ZXMgbW9kZWwgdG8gRE9NXG5mdW5jdGlvbiBzcGluV2ViKG1vZGVsLCBwYXJlbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc3BpbldlYkludGVybmFsKG1vZGVsLCBwYXJlbnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5tb2RlbCA9IGUubW9kZWwgfHwgbW9kZWw7XG4gICAgZS5wYXJlbnQgPSBlLnBhcmVudCB8fCBwYXJlbnQ7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzcGluV2ViSW50ZXJuYWwobW9kZWwsIHBhcmVudCkge1xuXG5cdGNvbnN0IFt0YWcsIC4uLmNoaWxkcmVuXSA9IG1vZGVsO1xuXG4gIGlmICh0YWcgPT09IFwic3R5bGVcIikge1xuICAgIHN0eWxlKGNoaWxkcmVuWzBdKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdGNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuXHRcdFx0Y29uc3QgbmVzdGVkID0gc3BpbldlYihpdGVtLCBwYXJlbnQpO1xuICAgICAgaWYgKG5lc3RlZCkgZWxlbWVudC5hcHBlbmRDaGlsZChuZXN0ZWQpO1xuXHRcdH0gZWxzZSBpZiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIHNraXBcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHQvLyBwcm9jZXNzIGF0dHJpYnV0ZXNcblx0XHRcdGFwcGx5QXR0cmlidXRlcyhlbGVtZW50LCBpdGVtKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdC8vIG1vdW50IGdlbmVyYXRvciBlbGVtZW50XG5cdFx0XHRjb25zdCBnZW5lcmF0b3IgPSBnZW5lcmF0b3JDb250ZW50KGl0ZW0sIHBhcmVudCk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGdlbmVyYXRvci5wZW5kaW5nVXBkYXRlIHx8IGdlbmVyYXRvcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNvbnRlbnRcblx0XHRcdGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbSk7XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBTZXQgYXR0cmlidXRlcywgaGFuZGxpbmcgc3BlY2lhbCBwcm9wZXJ0aWVzIGxpa2Ugc3R5bGUgYW5kIGhhbmRsZXJzIGNvcnJlY3RseVxuZnVuY3Rpb24gYXBwbHlBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcblx0Zm9yIChjb25zdCBbYXR0cmlidXRlLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcblx0XHRpZiAoYXR0cmlidXRlID09PSBcInN0eWxlXCIpIHtcblx0XHRcdC8vIHN0cmluZ2lmeSBzdHlsZXNcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgc3RyaW5naWZ5U3R5bGVPYmplY3QodmFsdWUpKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHQvLyBob29rIHVwIGhhbmRsZXJcblx0XHRcdGVsZW1lbnRbYXR0cmlidXRlXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBub24tc3BlY2lhbCBwcm9wZXJ0eVxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVN0eWxlT2JqZWN0KHN0eWxlT2JqZWN0KSB7XG5cdHJldHVybiBPYmplY3QuZW50cmllcyhzdHlsZU9iamVjdCkucmVkdWNlKChzLCBbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuXHRcdHJldHVybiBzICsgYCR7cHJvcGVydHl9OiAke3ZhbHVlfTsgYDtcblx0fSwgXCJcIik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRvckNvbnRlbnQoZm4sIHBhcmVudCkge1xuXHRsZXQgb25VcGRhdGUgPSAoKSA9PiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FsbGVkIHVwZGF0ZSBpbnNpZGUgcmVuZGVyXCIpO1xuXHR9O1xuXHRsZXQgcmVmID0gbnVsbDtcblx0Y29uc3QgaG9va3MgPSB7XG5cdFx0dXBkYXRlOiAodikgPT4gb25VcGRhdGUodiksXG5cdFx0b25SZWY6IChjYikgPT4ge1xuXHRcdFx0aWYgKHJlZiAhPT0gbnVsbCkgY29uc29sZS53YXJuKFwiQ2FsbGVkIHJlZiB0d2ljZSwgb25seSBsYXN0IGlzIGNhbGxlZFwiKTtcblx0XHRcdHJlZiA9IChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdGNiKGVsZW1lbnQpO1xuXHRcdFx0XHRyZWYgPSBudWxsO1xuXHRcdFx0fTtcblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IG1vZGVsID0gZm4oaG9va3MpO1xuXHRsZXQgZWxlbWVudCA9IHNwaW5XZWIobW9kZWwpO1xuXG5cdGxldCBjYWxsZWRCeVJlZiA9IGZhbHNlO1xuXHRvblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtb2RlbCA9IGZuKGhvb2tzKTtcblx0XHRjb25zdCB1cGRhdGVkRWxlbWVudCA9IHNwaW5XZWIobW9kZWwpO1xuXG5cdFx0Ly8gU3dhcCBpbiB0aGUgdXBkYXRlZCBlbGVtZW50IChvciBzdG9yZSBpZiBub3QgbW91bnRlZCB5ZXQpXG5cdFx0Y29uc3QgZWxQYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0aWYgKGVsUGFyZW50KSB7XG5cdFx0XHRjb25zdCBuZXh0ID0gZWxlbWVudC5uZXh0U2libGluZztcblx0XHRcdGVsUGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuXHRcdFx0ZWxQYXJlbnQuaW5zZXJ0QmVmb3JlKHVwZGF0ZWRFbGVtZW50LCBuZXh0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaWYgbm8gcGFyZW50LCB3ZSdyZSBiZWluZyBjYWxsZWQgZnJvbSByZWZzXG5cdFx0XHQvLyBpZiBjYWxsZWQgdHdpY2UgYmVmb3JlIG1vdW50aW5nIHdlIGhhdmUgYSBsb29wLCBhYm9ydFxuXHRcdFx0aWYgKGNhbGxlZEJ5UmVmKSB7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKFwiQ3ljbGljYWwgdXBkYXRlICsgb25SZWYuIEFib3J0aW5nLlwiKTtcblx0XHRcdH1cblx0XHRcdGNhbGxlZEJ5UmVmID0gdHJ1ZTtcblx0XHRcdGVsZW1lbnQucGVuZGluZ1VwZGF0ZSA9IHVwZGF0ZWRFbGVtZW50O1xuXHRcdH1cblx0XHRpZiAocmVmKSByZWYodXBkYXRlZEVsZW1lbnQpO1xuXG5cdFx0bG9ja1VwZGF0ZXMgPSBmYWxzZTtcblx0XHRjYWxsZWRCeVJlZiA9IGZhbHNlO1xuXHRcdGVsZW1lbnQgPSB1cGRhdGVkRWxlbWVudDtcblx0fTtcblxuXHRpZiAocmVmKSByZWYoZWxlbWVudCk7XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0eWxlKGRhdGEpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBjc3NpZnkoZGF0YSk7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbnZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmZ1bmN0aW9uIGNzc2lmeShvYmosIHByZWZpeCkge1xuXHRpZiAoIXByZWZpeCkgcHJlZml4ID0gXCJcIjtcblx0dmFyIG5lc3RlZCA9IFwiXCI7XG5cdHZhciBjdXJyZW50ID0gXy5tYXAob2JqLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcblx0XHRpZiAoXy5pc09iamVjdCh2YWwpKSB7XG5cdFx0XHRpZiAoa2V5LnN0YXJ0c1dpdGgoXCJAbWVkaWFcIikpIHtcblx0XHRcdFx0bmVzdGVkICs9IFtrZXksIFwie1wiLCBjc3NpZnkodmFsLCBcIlwiKSwgXCJ9XCJdLmpvaW4oXCJcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXN0ZWQgKz0gY3NzaWZ5KFxuXHRcdFx0XHRcdHZhbCxcblx0XHRcdFx0XHRrZXkuc3RhcnRzV2l0aChcIiZcIikgPyBwcmVmaXggKyBrZXkuc2xpY2UoMSkgOiBwcmVmaXggKyBcIiBcIiArIGtleVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXHRcdHJldHVybiBba2V5LCBcIjpcIiwgdmFsLCBcIjtcIl0uam9pbihcIlwiKTtcblx0fSkuam9pbihcIlwiKTtcblx0aWYgKCFjdXJyZW50KSByZXR1cm4gbmVzdGVkO1xuXHRyZXR1cm4gW3ByZWZpeCwgXCJ7XCIsIGN1cnJlbnQsIFwifVwiLCBuZXN0ZWRdLmpvaW4oXCJcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwdGlvdGVzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hyptiotes.js\n");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./hyptiotes.js");
/******/ 	
/******/ })()
;