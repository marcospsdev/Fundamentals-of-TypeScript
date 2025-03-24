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
// const user: IUser = {
//   fullName: "",
//   address: [],
//   access: accessOptions.employee,
//   active: true,
// };
// export interface ISpeaker extends IPerson {
//   eventAsSpeaker: string[];
//   description: string;
//   linkedInURL: string;
// }
//
// export interface IParticipant extends IUser, IPerson {
//   eventAsParticipant: string[];
// }
//
// const user: IParticipant = {
//   fullName: "Marcos",
//   age: 25,
//   address: ["Casa", "Trabalho"],
//   eventAsParticipant: ["Angular", "TypeScipt", "React"],
//   addPerson(): void {},
// };
// interface ICar {
//   readonly nickname: string;
//   color: string;
//   tires?: number;
//   speedValue: number;
//   breakValue?: number;
//   //Funções com ou sem arrow
//   speed(x: number): number;
//   break: (y: number) => number;
// }
//
// const carBear: ICar = {
//   nickname: "The Bear",
//   color: "Black Piano",
//   speedValue: 5,
//   speed(a: number): number {
//     return this.speedValue;
//   },
//   break: (b: number): number => {
//     return 2;
//   },
// };
//
// const carOrange: ICar = {
//   nickname: "The Orange",
//   color: "Orange",
//   speedValue: 4,
//   breakValue: 3,
//   //Função declarativa pode usar o this
//   speed(): number {
//     return this.speedValue;
//   },
//   //Função anonima pode usar o this
//   //Arrow não pode usar o this
//   break: function (): number {
//     return this.breakValue;
//   },
// };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBUztJQUNuRCxXQUFXLENBQUMsU0FBUyxJQUFJLCtIQUVxRCxDQUFDLHdCQUFZLEtBQUsseUZBRTFGLEtBQUssaUNBR1YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ2dCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUUzRSxTQUFTLFVBQVUsQ0FDakIsRUFLUTtRQUpOLFFBQVEsZ0JBQ1IsZ0JBQWdFLEVBQWhFLFFBQVEsbUJBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQ2hFLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssT0FDZCxjQUFnQyxFQUFoQyxNQUFNLG1CQUFHLGtEQUFhLENBQUMsU0FBUztJQUVsQyxpQkFBb0I7U0FBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1FBQXBCLGdDQUFvQjs7SUFFcEIsT0FBTyxzRkFHQyxRQUFRLCtGQUdlLFFBQVEsb0VBQ0ssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsdUNBR2xFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNoQixDQUFDLENBQUMsd0VBQ3VCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUN6QztRQUNMLENBQUMsQ0FBQyxFQUFFLGdHQUdJLE1BQU0sK0JBRWIsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBhY2Nlc3NPcHRpb25zIHtcbiAgYWRtaW5pc3RyYXRvciA9IFwiYWRtaW5pc3RyYWRvclwiLFxuICBtYW5hZ2VyID0gXCJnZXJlbnRlXCIsXG4gIGVtcGxveWVlID0gXCJmdW5jaW9uw6FyaW9cIixcbiAgdW5kZWZpbmVkID0gXCJOw6NvIERlZmluaWRvXCIsXG59XG5cbmludGVyZmFjZSBJUGVyc29uIHtcbiAgZnVsbE5hbWU6IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZ1tdO1xufVxuXG4vL1JlYWJyaXIgaW50ZXJmYWNlXG5pbnRlcmZhY2UgSVBlcnNvbiB7XG4gIGFnZT86IG51bWJlcjtcbn1cblxuLy9FeHRlbmRlciBpbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXIgZXh0ZW5kcyBJUGVyc29uIHtcbiAgcmVnaXN0ZXI/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFjY2Vzcz86IGFjY2Vzc09wdGlvbnM7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG59XG5cbi8vIGNvbnN0IHVzZXI6IElVc2VyID0ge1xuLy8gICBmdWxsTmFtZTogXCJcIixcbi8vICAgYWRkcmVzczogW10sXG4vLyAgIGFjY2VzczogYWNjZXNzT3B0aW9ucy5lbXBsb3llZSxcbi8vICAgYWN0aXZlOiB0cnVlLFxuLy8gfTtcblxuLy8gZXhwb3J0IGludGVyZmFjZSBJU3BlYWtlciBleHRlbmRzIElQZXJzb24ge1xuLy8gICBldmVudEFzU3BlYWtlcjogc3RyaW5nW107XG4vLyAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4vLyAgIGxpbmtlZEluVVJMOiBzdHJpbmc7XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGludGVyZmFjZSBJUGFydGljaXBhbnQgZXh0ZW5kcyBJVXNlciwgSVBlcnNvbiB7XG4vLyAgIGV2ZW50QXNQYXJ0aWNpcGFudDogc3RyaW5nW107XG4vLyB9XG4vL1xuLy8gY29uc3QgdXNlcjogSVBhcnRpY2lwYW50ID0ge1xuLy8gICBmdWxsTmFtZTogXCJNYXJjb3NcIixcbi8vICAgYWdlOiAyNSxcbi8vICAgYWRkcmVzczogW1wiQ2FzYVwiLCBcIlRyYWJhbGhvXCJdLFxuLy8gICBldmVudEFzUGFydGljaXBhbnQ6IFtcIkFuZ3VsYXJcIiwgXCJUeXBlU2NpcHRcIiwgXCJSZWFjdFwiXSxcbi8vICAgYWRkUGVyc29uKCk6IHZvaWQge30sXG4vLyB9O1xuXG4vLyBpbnRlcmZhY2UgSUNhciB7XG4vLyAgIHJlYWRvbmx5IG5pY2tuYW1lOiBzdHJpbmc7XG4vLyAgIGNvbG9yOiBzdHJpbmc7XG4vLyAgIHRpcmVzPzogbnVtYmVyO1xuLy8gICBzcGVlZFZhbHVlOiBudW1iZXI7XG4vLyAgIGJyZWFrVmFsdWU/OiBudW1iZXI7XG4vLyAgIC8vRnVuw6fDtWVzIGNvbSBvdSBzZW0gYXJyb3dcbi8vICAgc3BlZWQoeDogbnVtYmVyKTogbnVtYmVyO1xuLy8gICBicmVhazogKHk6IG51bWJlcikgPT4gbnVtYmVyO1xuLy8gfVxuLy9cbi8vIGNvbnN0IGNhckJlYXI6IElDYXIgPSB7XG4vLyAgIG5pY2tuYW1lOiBcIlRoZSBCZWFyXCIsXG4vLyAgIGNvbG9yOiBcIkJsYWNrIFBpYW5vXCIsXG4vLyAgIHNwZWVkVmFsdWU6IDUsXG4vLyAgIHNwZWVkKGE6IG51bWJlcik6IG51bWJlciB7XG4vLyAgICAgcmV0dXJuIHRoaXMuc3BlZWRWYWx1ZTtcbi8vICAgfSxcbi8vICAgYnJlYWs6IChiOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuLy8gICAgIHJldHVybiAyO1xuLy8gICB9LFxuLy8gfTtcbi8vXG4vLyBjb25zdCBjYXJPcmFuZ2U6IElDYXIgPSB7XG4vLyAgIG5pY2tuYW1lOiBcIlRoZSBPcmFuZ2VcIixcbi8vICAgY29sb3I6IFwiT3JhbmdlXCIsXG4vLyAgIHNwZWVkVmFsdWU6IDQsXG4vLyAgIGJyZWFrVmFsdWU6IDMsXG4vLyAgIC8vRnVuw6fDo28gZGVjbGFyYXRpdmEgcG9kZSB1c2FyIG8gdGhpc1xuLy8gICBzcGVlZCgpOiBudW1iZXIge1xuLy8gICAgIHJldHVybiB0aGlzLnNwZWVkVmFsdWU7XG4vLyAgIH0sXG4vLyAgIC8vRnVuw6fDo28gYW5vbmltYSBwb2RlIHVzYXIgbyB0aGlzXG4vLyAgIC8vQXJyb3cgbsOjbyBwb2RlIHVzYXIgbyB0aGlzXG4vLyAgIGJyZWFrOiBmdW5jdGlvbiAoKTogbnVtYmVyIHtcbi8vICAgICByZXR1cm4gdGhpcy5icmVha1ZhbHVlO1xuLy8gICB9LFxuLy8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWNjZXNzT3B0aW9ucywgSVVzZXIgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGJ1dHRvbiA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpZD1cImFkZFwiXScpO1xuY29uc3QgYWNjZXNzUmFkaW8gPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2Nlc3NSYWRpb1wiKTtcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRW1wbG95ZWUpO1xuXG5jb25zdCBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKTtcblxuY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpOiBQcm9taXNlPElVc2VyW10+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMTEvdXNlcnNcIik7XG4gIGNvbnN0IHVzZXJzOiBJVXNlcltdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gdXNlcnM7XG59O1xuXG5jb25zdCB1cGRhdGVVc2VyTGF5b3V0ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCB1c2VyczogSVVzZXJbXSA9IGF3YWl0IGdldFVzZXIoKTtcblxuICB1c2Vycy5tYXAoKHVzZXI6IElVc2VyKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz5jcmVhdGVMaW5lKHVzZXIpO1xuICB9KTtcbn07XG5cbnVwZGF0ZVVzZXJMYXlvdXQoKTtcblxuZnVuY3Rpb24gYWRkRW1wbG95ZWUoKTogdm9pZCB7XG4gIGxldCBmb3JtRmllbGRzID0gW1xuICAgIDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnVsbE5hbWVcIiksXG4gICAgPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWdpc3RlclwiKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYWNjZXNzXCJdOmNoZWNrZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWN0aXZlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRyZXNzSG9tZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkcmVzc1dvcmtcIikgYXMgSFRNTElucHV0RWxlbWVudCxcbiAgXTtcblxuICBjb25zdCBbZnVsbE5hbWUsIHJlZ2lzdGVyLCBhZG1pbiwgYWN0aXZlLCBhZGRyZXNzSG9tZSwgYWRkcmVzc1dvcmtdID1cbiAgICBmb3JtRmllbGRzO1xuXG4gIGxldCB1c2VyOiBJVXNlciA9IHtcbiAgICBmdWxsTmFtZTogZnVsbE5hbWUhLnZhbHVlLFxuICAgIHJlZ2lzdGVyOiByZWdpc3Rlci52YWx1ZSAhPSBcIlwiID8gcmVnaXN0ZXIudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgYWN0aXZlOiBhY3RpdmUuY2hlY2tlZCxcbiAgICBhY2Nlc3M6IDxhY2Nlc3NPcHRpb25zPmFkbWluLnZhbHVlLFxuICB9O1xuXG4gIGNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+KFxuICAgIGNyZWF0ZUxpbmUodXNlciwgYWRkcmVzc0hvbWUudmFsdWUsIGFkZHJlc3NXb3JrLnZhbHVlKVxuICApO1xufVxuXG5hY2Nlc3NPcHRpb25zVmFsdWVzLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICBhY2Nlc3NSYWRpby5pbm5lckhUTUwgKz0gYFxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWNjZXNzXCIgaWQ9XCJhY2Nlc3NSYWRpbyR7aX1cIiB2YWx1ZT1cIiR7dmFsdWV9XCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbCBjYXBpdGFsTGV0dGVyXCIgZm9yPVwibm9cIj5cbiAgICAgICR7dmFsdWV9XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG4gIGA7XG59KTtcbig8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2Vzc1JhZGlvMFwiKSkuY2hlY2tlZCA9IHRydWU7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmUoXG4gIHtcbiAgICBmdWxsTmFtZSxcbiAgICByZWdpc3RlciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS50b1VwcGVyQ2FzZSgpLFxuICAgIGFjdGl2ZSA9IGZhbHNlLFxuICAgIGFjY2VzcyA9IGFjY2Vzc09wdGlvbnMudW5kZWZpbmVkLFxuICB9OiBJVXNlcixcbiAgLi4uYWRkcmVzczogc3RyaW5nW11cbik6IHN0cmluZyB7XG4gIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cImNhcmQgbWItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICR7cmVnaXN0ZXJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZnVsbE5hbWV9PC9oNT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiR7YWN0aXZlID8gXCJBdGl2b1wiIDogXCJJbmF0aXZvXCJ9PC9hPlxuICAgICAgPC9kaXY+XG4gICAgICAke1xuICAgICAgICBhZGRyZXNzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7YWRkcmVzcy5qb2luKFwiPGJyLz5cIil9PC9oNj5cbiAgICAgICAgPC9kaXY+YFxuICAgICAgICAgIDogXCJcIlxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1zdWNjZXNzXCI+XG4gICAgICAgIEFjZXNzbzogJHthY2Nlc3N9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9