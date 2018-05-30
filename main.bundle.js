webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
    apiUrl: 'api'
};


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tree_tree_component__ = __webpack_require__("./src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_select_dropdown__ = __webpack_require__("./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__tree_tree_component__["a" /* TreeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_select_dropdown__["a" /* SelectDropDownModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_tree_component__ = __webpack_require__("./src/app/tree/tree.component.ts");


var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__tree_tree_component__["a" /* TreeComponent */] },
    //any wrong paths will redirect to TreeComponent as well
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/tree/tree.component.css":
/***/ (function(module, exports) {

module.exports = "img {\r\n    -webkit-filter:contrast(120%);\r\n            filter:contrast(120%);\r\n}\r\n.badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }"

/***/ }),

/***/ "./src/app/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">  </head>\n      <body>\n    <div class=\"container\" style=\"position:relative\">\n      <img src=\"assets/tree1.jpg\" style=\"width:100%;\" class=\"img-fluid\" alt=\"Responsive image\">\n<div style=\"position:absolute;width:100%;top:75%\">\n<table class=\"table table-hover table-dark\" style=\"width:75%;margin-left:11%;color:burlywood;text-align:center;cursor: pointer;\">\n  <thead *ngIf=\"nodeList.length>0\"  class=\"bg-success\" >\n    <tr>\n      <th scope=\"col\">Node</th>\n      <th scope=\"col\">Parent</th>\n    </tr>\n  </thead>\n  <tbody class=\"table-dark\" *ngFor=\"let node of nodeList;let k = index\">\n    <tr (click)=\"openVerticallyCentered(content);targetNodeToView(node.node_name);nodeParents(node._id);nodeChildren(node._id)\">\n      <td>{{node.node_name}}</td>\n      <td>{{node.direct_parent_name}}</td>\n    </tr>\n    <tr>\n  </tbody>\n</table>\n<button type=\"button\" class=\"btn btn-success\" (click)=\"openVerticallyCentered(createNode)\" style=\"margin-left:11%;margin-bottom:10px;\">Create Node</button>\n  <button type=\"button\" *ngIf=\"nodeList.length>0\" class=\"btn btn-danger\" (click)=\"clearTree()\"style=\"margin-bottom:10px;\">Clear Tree</button>\n \n</div>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" style=\"color:forestgreen;font-weight:bolder\">{{targetNode}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <!-- <p>One fine body&hellip;</p> -->\n      <p style=\"font-weight:bold\" >Parents</p><span *ngIf=\"targetNodeParents.length===0\" style=\"color:burlywood;font-style:italic\">No Parents for this Node.</span>\n      <div class=\"list-group\" *ngFor=\"let parent of targetNodeParents\">\n          <span class=\"list-group-item list-group-item-action\" style=\"text-align:center;font-weight:bold;width:auto;background-color:burlywood\">{{parent.node_name}}</span>\n          <br>\n        </div>\n        <br>\n        <p style=\"font-weight:bold\" >Children</p><span *ngIf=\"targetNodeChildren.length===0\" style=\"color:burlywood;font-style:italic\">No Children for this Node.</span>\n        <div class=\"list-group\" *ngFor=\"let child of targetNodeChildren\">\n            <span class=\"list-group-item list-group-item-action\" style=\"text-align:center;font-weight:bold;width:auto;background-color:burlywood\">{{child.node_name}}</span>\n            <br>\n          </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>\n\n  <ng-template #createNode let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" style=\"color:forestgreen;font-weight:bolder\">Create New Node</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <!-- <p>One fine body&hellip;</p> -->\n      <p style=\"font-weight:bold\" >Name:<input type=\"text\" class=\"form-control\" placeholder=\"Node Name\" [(ngModel)]=\"newNodeName\"></p>\n\n        <br>\n        <p style=\"font-weight:bold\" >Parent<ngx-select-dropdown [config]=\"config\" [options]=\"nodeList\" \n          [(value)]=\"newNodeParent\" [multiple]=\"false\" ></ngx-select-dropdown></p>\n          <br>\n        <p style=\"font-weight:bold\" >Child<ngx-select-dropdown [config]=\"config\" [options]=\"nodeListButRoot\" \n            [(value)]=\"newNodeChild\" [multiple]=\"false\" ></ngx-select-dropdown></p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"c('Close click'); createNewNode()\">Create</button>\n    </div>\n  </ng-template>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeComponent = /** @class */ (function () {
    function TreeComponent(httpClient, modalService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.nodeList = [];
        this.nodeListButRoot = [];
        this.targetNodeParents = [];
        this.targetNodeChildren = [];
        this.config = {
            displayKey: "node_name",
            search: true //enables the search plugin to search in the list
        };
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + '/TreeNodes').subscribe(function (res) {
            _this.nodeList = res.data;
        }, function (err) {
            console.log(err.error.msg);
        });
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + '/TreeNodesButRoot').subscribe(function (res) {
            _this.nodeListButRoot = res.data;
        }, function (err) {
            console.log(err.error.msg);
        });
    };
    TreeComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true, windowClass: 'dark-modal' });
    };
    TreeComponent.prototype.targetNodeToView = function (nodename) {
        this.targetNode = nodename;
    };
    TreeComponent.prototype.nodeParents = function (nodeId) {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + '/Parents/' + nodeId).subscribe(function (res) {
            _this.targetNodeParents = res.data;
        }, function (err) {
            console.log(err.error.msg);
        });
    };
    TreeComponent.prototype.nodeChildren = function (nodeId) {
        var _this = this;
        this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + '/Children/' + nodeId).subscribe(function (res) {
            _this.targetNodeChildren = res.data;
        }, function (err) {
            console.log(err.error.msg);
        });
    };
    //the function name can't be the same as the form name!
    TreeComponent.prototype.createNewNode = function () {
        var _this = this;
        if (this.nodeList.length > 0) {
            if (this.newNodeParent && this.newNodeName) {
                console.log("newNodeName:", this.newNodeName);
                console.log("newNodeParent", this.newNodeParent[0]._id);
                if (this.newNodeChild) {
                    var newNode = {
                        node_name: this.newNodeName,
                        direct_parent: this.newNodeParent[0]._id,
                        direct_parent_name: this.newNodeParent[0].node_name,
                        child: this.newNodeChild[0]._id
                    };
                    this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + '/createNode', newNode).subscribe(function (res) {
                        _this.newNodeName = undefined;
                        _this.newNodeParent = undefined;
                        _this.newNodeChild = undefined;
                        _this.ngOnInit();
                    }, function (err) {
                        _this.newNodeName = undefined;
                        _this.newNodeParent = undefined;
                        _this.newNodeChild = undefined;
                        console.log(err.error.msg);
                    });
                }
                else {
                    var newNode = {
                        node_name: this.newNodeName,
                        direct_parent: this.newNodeParent[0]._id,
                        direct_parent_name: this.newNodeParent[0].node_name,
                    };
                    this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + '/createNode', newNode).subscribe(function (res) {
                        _this.newNodeName = undefined;
                        _this.newNodeParent = undefined;
                        _this.newNodeChild = undefined;
                        _this.ngOnInit();
                    }, function (err) {
                        _this.newNodeName = undefined;
                        _this.newNodeParent = undefined;
                        _this.newNodeChild = undefined;
                        console.log(err.error.msg);
                    });
                }
            }
            else
                console.log("please Choose a name & parent");
        }
        else {
            //Root Creation
            if (this.newNodeName) {
                var newNode = {
                    node_name: this.newNodeName
                };
                this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + '/createNode', newNode).subscribe(function (res) {
                    _this.newNodeName = undefined;
                    _this.newNodeParent = undefined;
                    _this.newNodeChild = undefined;
                    _this.ngOnInit();
                }, function (err) {
                    _this.newNodeName = undefined;
                    _this.newNodeParent = undefined;
                    _this.newNodeChild = undefined;
                    console.log(err.error.msg);
                });
            }
            else
                console.log("please Choose a name");
        }
    };
    TreeComponent.prototype.clearTree = function () {
        var _this = this;
        this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + '/clearTree').subscribe(function (res) {
            _this.ngOnInit();
        }, function (err) {
            console.log(err.error.msg);
        });
    };
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree',
            template: __webpack_require__("./src/app/tree/tree.component.html"),
            styles: [__webpack_require__("./src/app/tree/tree.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map