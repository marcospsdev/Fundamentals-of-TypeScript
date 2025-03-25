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
/* harmony export */   User: () => (/* binding */ User),
/* harmony export */   accessOptions: () => (/* binding */ accessOptions)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcion\u00E1rio";
    accessOptions["undefined"] = "N\u00E3o Definido";
})(accessOptions || (accessOptions = {}));
var Person = /** @class */ (function () {
    function Person(fullName) {
        this.fullName = fullName;
    }
    return Person;
}());
//Implementar interface em classe e ter um contrato
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(fullName, register) {
        var _this = _super.call(this, fullName) || this;
        _this.fullName = fullName;
        _this.register = register;
        return _this;
    }
    return User;
}(Person));

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


/***/ }),

/***/ "./src/output.ts":
/*!***********************!*\
  !*** ./src/output.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

var UserController = /** @class */ (function () {
    //Construtor
    function UserController() {
        var _this = this;
        //propriedades
        this.content = this.getElement("#content");
        this.accessRadio = this.getElement("#accessRadio");
        this.accessOptionsValues = Object.values(_models__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
        this.button = this.getFormElement("#insert");
        this.button.addEventListener("click", function () { return _this.addEmployee(); });
        this.userLayout();
    }
    UserController.prototype.getElement = function (selector) {
        return document.querySelector(selector);
    };
    UserController.prototype.getFormElement = function (selector) {
        return document.querySelector(selector);
    };
    //funcionalidades
    UserController.prototype.userLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUser()];
                    case 1:
                        users = _a.sent();
                        users.map(function (user) {
                            _this.content.innerHTML += _this.createLine(user);
                        });
                        this.accessOptionsValues.forEach(function (value, i) {
                            _this.accessRadio.innerHTML += "\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n    <label class=\"form-check-label capitalLetter\" for=\"no\">\n      ").concat(value, "\n    </label>\n  </div>\n  ");
                        });
                        this.getFormElement("#accessRadio0").checked = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
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
        });
    };
    UserController.prototype.addEmployee = function () {
        var formFields = [
            this.getFormElement("#fullName"),
            this.getFormElement("#register"),
            this.getFormElement('input[name="access"]:checked'),
            this.getFormElement("#active"),
            this.getFormElement("#addressHome"),
            this.getFormElement("#addressWork"),
        ];
        var fullName = formFields[0], register = formFields[1], admin = formFields[2], active = formFields[3], addressHome = formFields[4], addressWork = formFields[5];
        var user = {
            fullName: fullName.value,
            register: register.value != "" ? register.value : undefined,
            active: active.checked,
            access: admin.value,
        };
        this.content.innerHTML += (this.createLine(user, addressHome.value, addressWork.value));
    };
    UserController.prototype.createLine = function (_a) {
        var fullName = _a.fullName, _b = _a.register, register = _b === void 0 ? Math.random().toString(36).substring(7).toUpperCase() : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.access, access = _d === void 0 ? _models__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined : _d;
        var address = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            address[_i - 1] = arguments[_i];
        }
        return "\n    <div class=\"card mb-1\">\n      <div class=\"card-header\">\n        ".concat(register, "\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(fullName, "</h5>\n        <a href=\"#\" class=\"btn btn-primary\">").concat(active ? "Ativo" : "Inativo", "</a>\n      </div>\n      ").concat(address.length > 0
            ? "<div class=\"card-body\">\n          <h6 class=\"card-title\">".concat(address.join("<br/>"), "</h6>\n        </div>")
            : "", "\n      <div class=\"card-footer bg-transparent border-success\">\n        Acesso: ").concat(access, "\n      </div>\n    </div>");
    };
    return UserController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserController());


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
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output */ "./src/output.ts");

_output__WEBPACK_IMPORTED_MODULE_0__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLHVDQUdsRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDaEIsQ0FBQyxDQUFDLHdFQUN1QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFDekM7WUFDTCxDQUFDLENBQUMsRUFBRSxnR0FHSSxNQUFNLCtCQUViLENBQUM7SUFDVixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDO0FBRUQsaUVBQWUsSUFBSSxjQUFjLEVBQUUsRUFBQzs7Ozs7OztVQzNHcEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQztBQUV0QywrQ0FBYyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0cHV0LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBhY2Nlc3NPcHRpb25zIHtcbiAgYWRtaW5pc3RyYXRvciA9IFwiYWRtaW5pc3RyYWRvclwiLFxuICBtYW5hZ2VyID0gXCJnZXJlbnRlXCIsXG4gIGVtcGxveWVlID0gXCJmdW5jaW9uw6FyaW9cIixcbiAgdW5kZWZpbmVkID0gXCJOw6NvIERlZmluaWRvXCIsXG59XG5cbmNsYXNzIFBlcnNvbiB7XG4gIGFkZHJlc3M/OiBzdHJpbmdbXTtcbiAgYWdlPzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmdWxsTmFtZTogc3RyaW5nKSB7fVxufVxuXG4vL0ltcGxlbWVudGFyIGludGVyZmFjZSBlbSBjbGFzc2UgZSB0ZXIgdW0gY29udHJhdG9cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgUGVyc29uIHtcbiAgYWNjZXNzPzogYWNjZXNzT3B0aW9ucztcbiAgYWN0aXZlPzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZnVsbE5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVnaXN0ZXI/OiBzdHJpbmcgfCBudW1iZXIsXG4gICkge1xuICAgIHN1cGVyKGZ1bGxOYW1lKTtcbiAgfVxufVxuXG4vLyBjb25zdCB1c2VyOiBJVXNlciA9IHtcbi8vICAgZnVsbE5hbWU6IFwiXCIsXG4vLyAgIGFkZHJlc3M6IFtdLFxuLy8gICBhY2Nlc3M6IGFjY2Vzc09wdGlvbnMuZW1wbG95ZWUsXG4vLyAgIGFjdGl2ZTogdHJ1ZSxcbi8vIH07XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgSVNwZWFrZXIgZXh0ZW5kcyBJUGVyc29uIHtcbi8vICAgZXZlbnRBc1NwZWFrZXI6IHN0cmluZ1tdO1xuLy8gICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuLy8gICBsaW5rZWRJblVSTDogc3RyaW5nO1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBpbnRlcmZhY2UgSVBhcnRpY2lwYW50IGV4dGVuZHMgSVVzZXIsIElQZXJzb24ge1xuLy8gICBldmVudEFzUGFydGljaXBhbnQ6IHN0cmluZ1tdO1xuLy8gfVxuLy9cbi8vIGNvbnN0IHVzZXI6IElQYXJ0aWNpcGFudCA9IHtcbi8vICAgZnVsbE5hbWU6IFwiTWFyY29zXCIsXG4vLyAgIGFnZTogMjUsXG4vLyAgIGFkZHJlc3M6IFtcIkNhc2FcIiwgXCJUcmFiYWxob1wiXSxcbi8vICAgZXZlbnRBc1BhcnRpY2lwYW50OiBbXCJBbmd1bGFyXCIsIFwiVHlwZVNjaXB0XCIsIFwiUmVhY3RcIl0sXG4vLyAgIGFkZFBlcnNvbigpOiB2b2lkIHt9LFxuLy8gfTtcblxuLy8gaW50ZXJmYWNlIElDYXIge1xuLy8gICByZWFkb25seSBuaWNrbmFtZTogc3RyaW5nO1xuLy8gICBjb2xvcjogc3RyaW5nO1xuLy8gICB0aXJlcz86IG51bWJlcjtcbi8vICAgc3BlZWRWYWx1ZTogbnVtYmVyO1xuLy8gICBicmVha1ZhbHVlPzogbnVtYmVyO1xuLy8gICAvL0Z1bsOnw7VlcyBjb20gb3Ugc2VtIGFycm93XG4vLyAgIHNwZWVkKHg6IG51bWJlcik6IG51bWJlcjtcbi8vICAgYnJlYWs6ICh5OiBudW1iZXIpID0+IG51bWJlcjtcbi8vIH1cbi8vXG4vLyBjb25zdCBjYXJCZWFyOiBJQ2FyID0ge1xuLy8gICBuaWNrbmFtZTogXCJUaGUgQmVhclwiLFxuLy8gICBjb2xvcjogXCJCbGFjayBQaWFub1wiLFxuLy8gICBzcGVlZFZhbHVlOiA1LFxuLy8gICBzcGVlZChhOiBudW1iZXIpOiBudW1iZXIge1xuLy8gICAgIHJldHVybiB0aGlzLnNwZWVkVmFsdWU7XG4vLyAgIH0sXG4vLyAgIGJyZWFrOiAoYjogbnVtYmVyKTogbnVtYmVyID0+IHtcbi8vICAgICByZXR1cm4gMjtcbi8vICAgfSxcbi8vIH07XG4vL1xuLy8gY29uc3QgY2FyT3JhbmdlOiBJQ2FyID0ge1xuLy8gICBuaWNrbmFtZTogXCJUaGUgT3JhbmdlXCIsXG4vLyAgIGNvbG9yOiBcIk9yYW5nZVwiLFxuLy8gICBzcGVlZFZhbHVlOiA0LFxuLy8gICBicmVha1ZhbHVlOiAzLFxuLy8gICAvL0Z1bsOnw6NvIGRlY2xhcmF0aXZhIHBvZGUgdXNhciBvIHRoaXNcbi8vICAgc3BlZWQoKTogbnVtYmVyIHtcbi8vICAgICByZXR1cm4gdGhpcy5zcGVlZFZhbHVlO1xuLy8gICB9LFxuLy8gICAvL0Z1bsOnw6NvIGFub25pbWEgcG9kZSB1c2FyIG8gdGhpc1xuLy8gICAvL0Fycm93IG7Do28gcG9kZSB1c2FyIG8gdGhpc1xuLy8gICBicmVhazogZnVuY3Rpb24gKCk6IG51bWJlciB7XG4vLyAgICAgcmV0dXJuIHRoaXMuYnJlYWtWYWx1ZTtcbi8vICAgfSxcbi8vIH07XG4iLCJpbXBvcnQgeyBhY2Nlc3NPcHRpb25zLCBVc2VyIH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgLy9wcm9wcmllZGFkZXNcbiAgY29udGVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoXCIjY29udGVudFwiKTtcbiAgYWNjZXNzUmFkaW86IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KFwiI2FjY2Vzc1JhZGlvXCIpO1xuICBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKTtcbiAgYnV0dG9uOiBIVE1MRm9ybUVsZW1lbnQgPSB0aGlzLmdldEZvcm1FbGVtZW50KFwiI2luc2VydFwiKTtcblxuICAvL0NvbnN0cnV0b3JcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYWRkRW1wbG95ZWUoKSk7XG4gICAgdGhpcy51c2VyTGF5b3V0KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGdldEZvcm1FbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gIH1cblxuICAvL2Z1bmNpb25hbGlkYWRlc1xuICBhc3luYyB1c2VyTGF5b3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBhd2FpdCB0aGlzLmdldFVzZXIoKTtcblxuICAgIHVzZXJzLm1hcCgodXNlcjogVXNlcikgPT4ge1xuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPnRoaXMuY3JlYXRlTGluZSh1c2VyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWNjZXNzT3B0aW9uc1ZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuYWNjZXNzUmFkaW8uaW5uZXJIVE1MICs9IGBcbiAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFjY2Vzc1wiIGlkPVwiYWNjZXNzUmFkaW8ke2l9XCIgdmFsdWU9XCIke3ZhbHVlfVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgY2FwaXRhbExldHRlclwiIGZvcj1cIm5vXCI+XG4gICAgICAke3ZhbHVlfVxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICBgO1xuICAgIH0pO1xuICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoXCIjYWNjZXNzUmFkaW8wXCIpLmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgZ2V0VXNlcigpOiBQcm9taXNlPFVzZXJbXT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDExL3VzZXJzXCIpO1xuICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHVzZXJzO1xuICB9XG5cbiAgYWRkRW1wbG95ZWUoKTogdm9pZCB7XG4gICAgbGV0IGZvcm1GaWVsZHMgPSBbXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KFwiI2Z1bGxOYW1lXCIpLFxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudChcIiNyZWdpc3RlclwiKSxcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJ2lucHV0W25hbWU9XCJhY2Nlc3NcIl06Y2hlY2tlZCcpLFxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudChcIiNhY3RpdmVcIiksXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KFwiI2FkZHJlc3NIb21lXCIpLFxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudChcIiNhZGRyZXNzV29ya1wiKSxcbiAgICBdO1xuXG4gICAgY29uc3QgW2Z1bGxOYW1lLCByZWdpc3RlciwgYWRtaW4sIGFjdGl2ZSwgYWRkcmVzc0hvbWUsIGFkZHJlc3NXb3JrXSA9XG4gICAgICBmb3JtRmllbGRzO1xuXG4gICAgbGV0IHVzZXI6IFVzZXIgPSB7XG4gICAgICBmdWxsTmFtZTogZnVsbE5hbWUhLnZhbHVlLFxuICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLnZhbHVlICE9IFwiXCIgPyByZWdpc3Rlci52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGl2ZTogYWN0aXZlLmNoZWNrZWQsXG4gICAgICBhY2Nlc3M6IDxhY2Nlc3NPcHRpb25zPmFkbWluLnZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+KFxuICAgICAgdGhpcy5jcmVhdGVMaW5lKHVzZXIsIGFkZHJlc3NIb21lLnZhbHVlLCBhZGRyZXNzV29yay52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlTGluZShcbiAgICB7XG4gICAgICBmdWxsTmFtZSxcbiAgICAgIHJlZ2lzdGVyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnRvVXBwZXJDYXNlKCksXG4gICAgICBhY3RpdmUgPSBmYWxzZSxcbiAgICAgIGFjY2VzcyA9IGFjY2Vzc09wdGlvbnMudW5kZWZpbmVkLFxuICAgIH06IFVzZXIsXG4gICAgLi4uYWRkcmVzczogc3RyaW5nW11cbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAke3JlZ2lzdGVyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2Z1bGxOYW1lfTwvaDU+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/IFwiQXRpdm9cIiA6IFwiSW5hdGl2b1wifTwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgJHtcbiAgICAgICAgYWRkcmVzcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxoNiBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2FkZHJlc3Muam9pbihcIjxici8+XCIpfTwvaDY+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgICA6IFwiXCJcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2Vzc1wiPlxuICAgICAgICBBY2Vzc286ICR7YWNjZXNzfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXIoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gXCIuL291dHB1dFwiO1xuXG5Vc2VyQ29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==