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
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/service */ "./src/service/service.ts");
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
            var service, users;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = new _service_service__WEBPACK_IMPORTED_MODULE_1__.UserService();
                        return [4 /*yield*/, service.getItems()];
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


/***/ }),

/***/ "./src/service/service.ts":
/*!********************************!*\
  !*** ./src/service/service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericService: () => (/* binding */ GenericService),
/* harmony export */   UserService: () => (/* binding */ UserService)
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
var GenericService = /** @class */ (function () {
    function GenericService() {
    }
    GenericService.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.URL)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        list = _a.sent();
                        this.items = list;
                        return [2 /*return*/, list];
                }
            });
        });
    };
    return GenericService;
}());

var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.URL = "http://localhost:5011/users";
        return _this;
    }
    UserService.prototype.getItemByName = function (name) {
        return this.items
            ? this.items.find(function (item) { return (item.fullName = name); })
            : undefined;
    };
    UserService.prototype.getItemById = function (id) {
        return this.items
            ? this.items.find(function (item) { return (item.register = id); })
            : undefined;
    };
    return UserService;
}(GenericService));



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3JFOzs7Ozs7OztVQ3BDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDO0FBRXRDLCtDQUFjLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9vdXRwdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2Uvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gYWNjZXNzT3B0aW9ucyB7XG4gIGFkbWluaXN0cmF0b3IgPSBcImFkbWluaXN0cmFkb3JcIixcbiAgbWFuYWdlciA9IFwiZ2VyZW50ZVwiLFxuICBlbXBsb3llZSA9IFwiZnVuY2lvbsOhcmlvXCIsXG4gIHVuZGVmaW5lZCA9IFwiTsOjbyBEZWZpbmlkb1wiLFxufVxuXG5jbGFzcyBQZXJzb24ge1xuICBhZGRyZXNzPzogc3RyaW5nW107XG4gIGFnZT86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZnVsbE5hbWU6IHN0cmluZykge31cbn1cblxuLy9JbXBsZW1lbnRhciBpbnRlcmZhY2UgZW0gY2xhc3NlIGUgdGVyIHVtIGNvbnRyYXRvXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIFBlcnNvbiB7XG4gIGFjY2Vzcz86IGFjY2Vzc09wdGlvbnM7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZ1bGxOYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIHJlZ2lzdGVyPzogc3RyaW5nIHwgbnVtYmVyLFxuICApIHtcbiAgICBzdXBlcihmdWxsTmFtZSk7XG4gIH1cbn1cblxuLy8gY29uc3QgdXNlcjogSVVzZXIgPSB7XG4vLyAgIGZ1bGxOYW1lOiBcIlwiLFxuLy8gICBhZGRyZXNzOiBbXSxcbi8vICAgYWNjZXNzOiBhY2Nlc3NPcHRpb25zLmVtcGxveWVlLFxuLy8gICBhY3RpdmU6IHRydWUsXG4vLyB9O1xuXG4vLyBleHBvcnQgaW50ZXJmYWNlIElTcGVha2VyIGV4dGVuZHMgSVBlcnNvbiB7XG4vLyAgIGV2ZW50QXNTcGVha2VyOiBzdHJpbmdbXTtcbi8vICAgZGVzY3JpcHRpb246IHN0cmluZztcbi8vICAgbGlua2VkSW5VUkw6IHN0cmluZztcbi8vIH1cbi8vXG4vLyBleHBvcnQgaW50ZXJmYWNlIElQYXJ0aWNpcGFudCBleHRlbmRzIElVc2VyLCBJUGVyc29uIHtcbi8vICAgZXZlbnRBc1BhcnRpY2lwYW50OiBzdHJpbmdbXTtcbi8vIH1cbi8vXG4vLyBjb25zdCB1c2VyOiBJUGFydGljaXBhbnQgPSB7XG4vLyAgIGZ1bGxOYW1lOiBcIk1hcmNvc1wiLFxuLy8gICBhZ2U6IDI1LFxuLy8gICBhZGRyZXNzOiBbXCJDYXNhXCIsIFwiVHJhYmFsaG9cIl0sXG4vLyAgIGV2ZW50QXNQYXJ0aWNpcGFudDogW1wiQW5ndWxhclwiLCBcIlR5cGVTY2lwdFwiLCBcIlJlYWN0XCJdLFxuLy8gICBhZGRQZXJzb24oKTogdm9pZCB7fSxcbi8vIH07XG5cbi8vIGludGVyZmFjZSBJQ2FyIHtcbi8vICAgcmVhZG9ubHkgbmlja25hbWU6IHN0cmluZztcbi8vICAgY29sb3I6IHN0cmluZztcbi8vICAgdGlyZXM/OiBudW1iZXI7XG4vLyAgIHNwZWVkVmFsdWU6IG51bWJlcjtcbi8vICAgYnJlYWtWYWx1ZT86IG51bWJlcjtcbi8vICAgLy9GdW7Dp8O1ZXMgY29tIG91IHNlbSBhcnJvd1xuLy8gICBzcGVlZCh4OiBudW1iZXIpOiBudW1iZXI7XG4vLyAgIGJyZWFrOiAoeTogbnVtYmVyKSA9PiBudW1iZXI7XG4vLyB9XG4vL1xuLy8gY29uc3QgY2FyQmVhcjogSUNhciA9IHtcbi8vICAgbmlja25hbWU6IFwiVGhlIEJlYXJcIixcbi8vICAgY29sb3I6IFwiQmxhY2sgUGlhbm9cIixcbi8vICAgc3BlZWRWYWx1ZTogNSxcbi8vICAgc3BlZWQoYTogbnVtYmVyKTogbnVtYmVyIHtcbi8vICAgICByZXR1cm4gdGhpcy5zcGVlZFZhbHVlO1xuLy8gICB9LFxuLy8gICBicmVhazogKGI6IG51bWJlcik6IG51bWJlciA9PiB7XG4vLyAgICAgcmV0dXJuIDI7XG4vLyAgIH0sXG4vLyB9O1xuLy9cbi8vIGNvbnN0IGNhck9yYW5nZTogSUNhciA9IHtcbi8vICAgbmlja25hbWU6IFwiVGhlIE9yYW5nZVwiLFxuLy8gICBjb2xvcjogXCJPcmFuZ2VcIixcbi8vICAgc3BlZWRWYWx1ZTogNCxcbi8vICAgYnJlYWtWYWx1ZTogMyxcbi8vICAgLy9GdW7Dp8OjbyBkZWNsYXJhdGl2YSBwb2RlIHVzYXIgbyB0aGlzXG4vLyAgIHNwZWVkKCk6IG51bWJlciB7XG4vLyAgICAgcmV0dXJuIHRoaXMuc3BlZWRWYWx1ZTtcbi8vICAgfSxcbi8vICAgLy9GdW7Dp8OjbyBhbm9uaW1hIHBvZGUgdXNhciBvIHRoaXNcbi8vICAgLy9BcnJvdyBuw6NvIHBvZGUgdXNhciBvIHRoaXNcbi8vICAgYnJlYWs6IGZ1bmN0aW9uICgpOiBudW1iZXIge1xuLy8gICAgIHJldHVybiB0aGlzLmJyZWFrVmFsdWU7XG4vLyAgIH0sXG4vLyB9O1xuIiwiaW1wb3J0IHsgYWNjZXNzT3B0aW9ucywgVXNlciB9IGZyb20gXCIuL21vZGVsc1wiO1xuaW1wb3J0IHsgSVNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9zZXJ2aWNlXCI7XG5cbmNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgLy9wcm9wcmllZGFkZXNcbiAgY29udGVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoXCIjY29udGVudFwiKTtcbiAgYWNjZXNzUmFkaW86IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KFwiI2FjY2Vzc1JhZGlvXCIpO1xuICBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKTtcbiAgYnV0dG9uOiBIVE1MRm9ybUVsZW1lbnQgPSB0aGlzLmdldEZvcm1FbGVtZW50KFwiI2luc2VydFwiKTtcblxuICAvL0NvbnN0cnV0b3JcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuYWRkRW1wbG95ZWUoKSk7XG4gICAgdGhpcy51c2VyTGF5b3V0KCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGdldEZvcm1FbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gIH1cblxuICAvL2Z1bmNpb25hbGlkYWRlc1xuICBhc3luYyB1c2VyTGF5b3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlcnZpY2U6IElTZXJ2aWNlPFVzZXI+ID0gbmV3IFVzZXJTZXJ2aWNlPFVzZXI+KCk7XG4gICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IGF3YWl0IHNlcnZpY2UuZ2V0SXRlbXMoKTtcblxuICAgIHVzZXJzLm1hcCgodXNlcjogVXNlcikgPT4ge1xuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPnRoaXMuY3JlYXRlTGluZSh1c2VyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWNjZXNzT3B0aW9uc1ZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuYWNjZXNzUmFkaW8uaW5uZXJIVE1MICs9IGBcbiAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFjY2Vzc1wiIGlkPVwiYWNjZXNzUmFkaW8ke2l9XCIgdmFsdWU9XCIke3ZhbHVlfVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgY2FwaXRhbExldHRlclwiIGZvcj1cIm5vXCI+XG4gICAgICAke3ZhbHVlfVxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICBgO1xuICAgIH0pO1xuICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoXCIjYWNjZXNzUmFkaW8wXCIpLmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgYWRkRW1wbG95ZWUoKTogdm9pZCB7XG4gICAgbGV0IGZvcm1GaWVsZHMgPSBbXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KFwiI2Z1bGxOYW1lXCIpLFxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudChcIiNyZWdpc3RlclwiKSxcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJ2lucHV0W25hbWU9XCJhY2Nlc3NcIl06Y2hlY2tlZCcpLFxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudChcIiNhY3RpdmVcIiksXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KFwiI2FkZHJlc3NIb21lXCIpLFxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudChcIiNhZGRyZXNzV29ya1wiKSxcbiAgICBdO1xuXG4gICAgY29uc3QgW2Z1bGxOYW1lLCByZWdpc3RlciwgYWRtaW4sIGFjdGl2ZSwgYWRkcmVzc0hvbWUsIGFkZHJlc3NXb3JrXSA9XG4gICAgICBmb3JtRmllbGRzO1xuXG4gICAgbGV0IHVzZXI6IFVzZXIgPSB7XG4gICAgICBmdWxsTmFtZTogZnVsbE5hbWUhLnZhbHVlLFxuICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLnZhbHVlICE9IFwiXCIgPyByZWdpc3Rlci52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGl2ZTogYWN0aXZlLmNoZWNrZWQsXG4gICAgICBhY2Nlc3M6IDxhY2Nlc3NPcHRpb25zPmFkbWluLnZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+KFxuICAgICAgdGhpcy5jcmVhdGVMaW5lKHVzZXIsIGFkZHJlc3NIb21lLnZhbHVlLCBhZGRyZXNzV29yay52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlTGluZShcbiAgICB7XG4gICAgICBmdWxsTmFtZSxcbiAgICAgIHJlZ2lzdGVyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnRvVXBwZXJDYXNlKCksXG4gICAgICBhY3RpdmUgPSBmYWxzZSxcbiAgICAgIGFjY2VzcyA9IGFjY2Vzc09wdGlvbnMudW5kZWZpbmVkLFxuICAgIH06IFVzZXIsXG4gICAgLi4uYWRkcmVzczogc3RyaW5nW11cbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAke3JlZ2lzdGVyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2Z1bGxOYW1lfTwvaDU+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/IFwiQXRpdm9cIiA6IFwiSW5hdGl2b1wifTwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgJHtcbiAgICAgICAgYWRkcmVzcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxoNiBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2FkZHJlc3Muam9pbihcIjxici8+XCIpfTwvaDY+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgICA6IFwiXCJcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2Vzc1wiPlxuICAgICAgICBBY2Vzc286ICR7YWNjZXNzfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXIoKTtcbiIsImludGVyZmFjZSBnZW5lcmljSXRlbSB7XG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIHJlZ2lzdGVyPzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlPFQ+IHtcbiAgaXRlbXM6IFRbXTtcbiAgZ2V0SXRlbXM6ICgpID0+IFByb21pc2U8VFtdPjtcbn1cblxuZXhwb3J0IGNsYXNzIEdlbmVyaWNTZXJ2aWNlPFQ+IGltcGxlbWVudHMgSVNlcnZpY2U8VD4ge1xuICBwdWJsaWMgaXRlbXM6IFRbXTtcbiAgcHJvdGVjdGVkIFVSTDogc3RyaW5nO1xuXG4gIGFzeW5jIGdldEl0ZW1zKCk6IFByb21pc2U8VFtdPiB7XG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5VUkwpO1xuICAgIGNvbnN0IGxpc3Q6IFRbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB0aGlzLml0ZW1zID0gbGlzdDtcbiAgICByZXR1cm4gbGlzdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2U8VCBleHRlbmRzIGdlbmVyaWNJdGVtPiBleHRlbmRzIEdlbmVyaWNTZXJ2aWNlPFQ+IHtcbiAgVVJMOiBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAxMS91c2Vyc1wiO1xuXG4gIGdldEl0ZW1CeU5hbWUobmFtZTogc3RyaW5nKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICAgID8gdGhpcy5pdGVtcy5maW5kKChpdGVtKSA9PiAoaXRlbS5mdWxsTmFtZSA9IG5hbWUpKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRJdGVtQnlJZChpZDogbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICAgID8gdGhpcy5pdGVtcy5maW5kKChpdGVtKSA9PiAoaXRlbS5yZWdpc3RlciA9IGlkKSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVc2VyQ29udHJvbGxlciBmcm9tIFwiLi9vdXRwdXRcIjtcblxuVXNlckNvbnRyb2xsZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=