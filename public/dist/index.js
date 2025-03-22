/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models.ts":
/*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessOptions: () => (/* binding */ accessOptions)
/* harmony export */ });
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcion\u00E1rio";
    accessOptions["undefined"] = "N\u00E3o Definido";
})(accessOptions || (accessOptions = {}));


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/models.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var content = document.getElementById("content");
var button = document.querySelector('button[id="add"]');
var accessRadio = document.getElementById("accessRadio");
button.addEventListener("click", addEmployee);
var accessOptionsValues = Object.values(_models__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("http://localhost:5011/users")];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                users = _a.sent();
                return [2 /*return*/, users];
        }
    });
}); };
var updateUserLayout = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getUser()];
            case 1:
                users = _a.sent();
                users.map(function (user) {
                    content.innerHTML += createLine(user);
                });
                return [2 /*return*/];
        }
    });
}); };
updateUserLayout();
function addEmployee() {
    var formFields = [
        document.querySelector("#fullName"),
        document.querySelector("#register"),
        document.querySelector('input[name="access"]:checked'),
        document.querySelector("#active"),
        document.querySelector("#addressHome"),
        document.querySelector("#addressWork"),
    ];
    var fullName = formFields[0], register = formFields[1], admin = formFields[2], active = formFields[3], addressHome = formFields[4], addressWork = formFields[5];
    var user = {
        fullName: fullName.value,
        register: register.value != "" ? register.value : undefined,
        active: active.checked,
        access: admin.value,
    };
    content.innerHTML += (createLine(user, addressHome.value, addressWork.value));
}
accessOptionsValues.forEach(function (value, i) {
    accessRadio.innerHTML += "\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n    <label class=\"form-check-label capitalLetter\" for=\"no\">\n      ").concat(value, "\n    </label>\n  </div>\n  ");
});
document.getElementById("accessRadio0").checked = true;
function createLine(_a) {
    var fullName = _a.fullName, _b = _a.register, register = _b === void 0 ? Math.random().toString(36).substring(7).toUpperCase() : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.access, access = _d === void 0 ? _models__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined : _d;
    var address = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        address[_i - 1] = arguments[_i];
    }
    return "\n    <div class=\"card mb-1\">\n      <div class=\"card-header\">\n        ".concat(register, "\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(fullName, "</h5>\n        <a href=\"#\" class=\"btn btn-primary\">").concat(active ? "Ativo" : "Inativo", "</a>\n      </div>\n      ").concat(address.length > 0
        ? "<div class=\"card-body\">\n          <h6 class=\"card-title\">".concat(address.join("<br/>"), "</h6>\n        </div>")
        : "", "\n      <div class=\"card-footer bg-transparent border-success\">\n        Acesso: ").concat(access, "\n      </div>\n    </div>");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVGLE9BQU8sQ0FBQyxTQUFTLElBQVksQ0FDM0IsVUFBVSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FDdkQsQ0FBQztBQUNKLENBQUM7QUFFRCxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhLEVBQUUsQ0FBUztJQUNuRCxXQUFXLENBQUMsU0FBUyxJQUFJLCtIQUVxRCxDQUFDLHdCQUFZLEtBQUsseUZBRTFGLEtBQUssaUNBR1YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ2dCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUUzRSxTQUFTLFVBQVUsQ0FDakIsRUFLVztRQUpULFFBQVEsZ0JBQ1IsZ0JBQWdFLEVBQWhFLFFBQVEsbUJBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQ2hFLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssT0FDZCxjQUFnQyxFQUFoQyxNQUFNLG1CQUFHLGtEQUFhLENBQUMsU0FBUztJQUVsQyxpQkFBb0I7U0FBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1FBQXBCLGdDQUFvQjs7SUFFcEIsT0FBTyxzRkFHQyxRQUFRLCtGQUdlLFFBQVEsb0VBQ0ssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsdUNBR2xFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNoQixDQUFDLENBQUMsd0VBQ3VCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUN6QztRQUNMLENBQUMsQ0FBQyxFQUFFLGdHQUdJLE1BQU0sK0JBRWIsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBhY2Nlc3NPcHRpb25zIHtcbiAgYWRtaW5pc3RyYXRvciA9IFwiYWRtaW5pc3RyYWRvclwiLFxuICBtYW5hZ2VyID0gXCJnZXJlbnRlXCIsXG4gIGVtcGxveWVlID0gXCJmdW5jaW9uw6FyaW9cIixcbiAgdW5kZWZpbmVkID0gXCJOw6NvIERlZmluaWRvXCIsXG59XG5cbmV4cG9ydCB0eXBlIHVzZXJUeXBlID0ge1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICByZWdpc3Rlcj86IHN0cmluZyB8IG51bWJlcjtcbiAgYWNjZXNzPzogYWNjZXNzT3B0aW9ucztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFjY2Vzc09wdGlvbnMsIHVzZXJUeXBlIH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBidXR0b24gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25baWQ9XCJhZGRcIl0nKTtcbmNvbnN0IGFjY2Vzc1JhZGlvID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXNzUmFkaW9cIik7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEVtcGxveWVlKTtcblxuY29uc3QgYWNjZXNzT3B0aW9uc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYWNjZXNzT3B0aW9ucyk7XG5cbmNvbnN0IGdldFVzZXIgPSBhc3luYyAoKTogUHJvbWlzZTx1c2VyVHlwZVtdPiA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDExL3VzZXJzXCIpO1xuICBjb25zdCB1c2VyczogdXNlclR5cGVbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHVzZXJzO1xufTtcblxuY29uc3QgdXBkYXRlVXNlckxheW91dCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgdXNlcnM6IHVzZXJUeXBlW10gPSBhd2FpdCBnZXRVc2VyKCk7XG5cbiAgdXNlcnMubWFwKCh1c2VyOiB1c2VyVHlwZSkgPT4ge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+Y3JlYXRlTGluZSh1c2VyKTtcbiAgfSk7XG59O1xuXG51cGRhdGVVc2VyTGF5b3V0KCk7XG5cbmZ1bmN0aW9uIGFkZEVtcGxveWVlKCk6IHZvaWQge1xuICBsZXQgZm9ybUZpZWxkcyA9IFtcbiAgICA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1bGxOYW1lXCIpLFxuICAgIDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVnaXN0ZXJcIiksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFjY2Vzc1wiXTpjaGVja2VkJykgYXMgSFRNTElucHV0RWxlbWVudCxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FjdGl2ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkcmVzc0hvbWVcIikgYXMgSFRNTElucHV0RWxlbWVudCxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHJlc3NXb3JrXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXG4gIF07XG5cbiAgY29uc3QgW2Z1bGxOYW1lLCByZWdpc3RlciwgYWRtaW4sIGFjdGl2ZSwgYWRkcmVzc0hvbWUsIGFkZHJlc3NXb3JrXSA9XG4gICAgZm9ybUZpZWxkcztcblxuICBsZXQgdXNlcjogdXNlclR5cGUgPSB7XG4gICAgZnVsbE5hbWU6IGZ1bGxOYW1lIS52YWx1ZSxcbiAgICByZWdpc3RlcjogcmVnaXN0ZXIudmFsdWUgIT0gXCJcIiA/IHJlZ2lzdGVyLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgIGFjdGl2ZTogYWN0aXZlLmNoZWNrZWQsXG4gICAgYWNjZXNzOiA8YWNjZXNzT3B0aW9ucz5hZG1pbi52YWx1ZSxcbiAgfTtcblxuICBjb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPihcbiAgICBjcmVhdGVMaW5lKHVzZXIsIGFkZHJlc3NIb21lLnZhbHVlLCBhZGRyZXNzV29yay52YWx1ZSlcbiAgKTtcbn1cblxuYWNjZXNzT3B0aW9uc1ZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgYWNjZXNzUmFkaW8uaW5uZXJIVE1MICs9IGBcbiAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFjY2Vzc1wiIGlkPVwiYWNjZXNzUmFkaW8ke2l9XCIgdmFsdWU9XCIke3ZhbHVlfVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgY2FwaXRhbExldHRlclwiIGZvcj1cIm5vXCI+XG4gICAgICAke3ZhbHVlfVxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICBgO1xufSk7XG4oPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2Nlc3NSYWRpbzBcIikpLmNoZWNrZWQgPSB0cnVlO1xuXG5mdW5jdGlvbiBjcmVhdGVMaW5lKFxuICB7XG4gICAgZnVsbE5hbWUsXG4gICAgcmVnaXN0ZXIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykudG9VcHBlckNhc2UoKSxcbiAgICBhY3RpdmUgPSBmYWxzZSxcbiAgICBhY2Nlc3MgPSBhY2Nlc3NPcHRpb25zLnVuZGVmaW5lZCxcbiAgfTogdXNlclR5cGUsXG4gIC4uLmFkZHJlc3M6IHN0cmluZ1tdXG4pOiBzdHJpbmcge1xuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAke3JlZ2lzdGVyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2Z1bGxOYW1lfTwvaDU+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/IFwiQXRpdm9cIiA6IFwiSW5hdGl2b1wifTwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgJHtcbiAgICAgICAgYWRkcmVzcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxoNiBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2FkZHJlc3Muam9pbihcIjxici8+XCIpfTwvaDY+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgICA6IFwiXCJcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2Vzc1wiPlxuICAgICAgICBBY2Vzc286ICR7YWNjZXNzfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==