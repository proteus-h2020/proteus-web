webpackJsonp([3,15],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__(941);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Calendar = (function () {
    function Calendar(_calendarService) {
        var _this = this;
        this._calendarService = _calendarService;
        this.calendarConfiguration = this._calendarService.getData();
        this.calendarConfiguration.select = function (start, end) { return _this._onSelect(start, end); };
    }
    Calendar.prototype.onCalendarReady = function (calendar) {
        this._calendar = calendar;
    };
    Calendar.prototype._onSelect = function (start, end) {
        if (this._calendar != null) {
            var title = prompt('Event Title:');
            var eventData = void 0;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                __WEBPACK_IMPORTED_MODULE_1_jquery__(this._calendar).fullCalendar('renderEvent', eventData, true);
            }
            __WEBPACK_IMPORTED_MODULE_1_jquery__(this._calendar).fullCalendar('unselect');
        }
    };
    return Calendar;
}());
Calendar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calendar',
        template: __webpack_require__(1183),
        styles: [__webpack_require__(1096)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */]) === "function" && _a || Object])
], Calendar);

var _a;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_component__ = __webpack_require__(1005);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__calendar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__(942);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* Dashboard */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_service__ = __webpack_require__(943);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feed; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Feed = (function () {
    function Feed(_feedService) {
        this._feedService = _feedService;
    }
    Feed.prototype.ngOnInit = function () {
        this._loadFeed();
    };
    Feed.prototype.expandMessage = function (message) {
        message.expanded = !message.expanded;
    };
    Feed.prototype._loadFeed = function () {
        this.feed = this._feedService.getData();
    };
    return Feed;
}());
Feed = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'feed',
        template: __webpack_require__(1185),
        styles: [__webpack_require__(1098)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */]) === "function" && _a || Object])
], Feed);

var _a;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_component__ = __webpack_require__(1008);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__feed_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lineChart_component__ = __webpack_require__(1011);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lineChart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lineChart_service__ = __webpack_require__(944);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChart = (function () {
    function LineChart(_lineChartService) {
        this._lineChartService = _lineChartService;
        this.chartData = this._lineChartService.getData();
    }
    LineChart.prototype.initChart = function (chart) {
        var zoomChart = function () {
            chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
        };
        chart.addListener('rendered', zoomChart);
        zoomChart();
        if (chart.zoomChart) {
            chart.zoomChart();
        }
    };
    return LineChart;
}());
LineChart = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'line-chart',
        template: __webpack_require__(1186),
        styles: [__webpack_require__(1099)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lineChart_service__["a" /* LineChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lineChart_service__["a" /* LineChartService */]) === "function" && _a || Object])
], LineChart);

var _a;
//# sourceMappingURL=lineChart.component.js.map

/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pieChart_component__ = __webpack_require__(1013);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pieChart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pieChart_service__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PieChart = (function () {
    function PieChart(_pieChartService) {
        this._pieChartService = _pieChartService;
        this._init = false;
        this.charts = this._pieChartService.getData();
    }
    PieChart.prototype.ngAfterViewInit = function () {
        if (!this._init) {
            this._loadPieCharts();
            this._updatePieCharts();
            this._init = true;
        }
    };
    PieChart.prototype._loadPieCharts = function () {
        jQuery('.chart').each(function () {
            var chart = jQuery(this);
            chart.easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    jQuery(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: jQuery(this).attr('data-rel'),
                trackColor: 'rgba(0,0,0,0)',
                size: 84,
                scaleLength: 0,
                animation: 2000,
                lineWidth: 9,
                lineCap: 'round',
            });
        });
    };
    PieChart.prototype._updatePieCharts = function () {
        var getRandomArbitrary = function (min, max) { return Math.random() * (max - min) + min; };
        jQuery('.pie-charts .chart').each(function (index, chart) {
            jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
        });
    };
    return PieChart;
}());
PieChart = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pie-chart',
        template: __webpack_require__(1187),
        styles: [__webpack_require__(1100)]
    })
    // TODO: move easypiechart to component
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pieChart_service__["a" /* PieChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pieChart_service__["a" /* PieChartService */]) === "function" && _a || Object])
], PieChart);

var _a;
//# sourceMappingURL=pieChart.component.js.map

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popularApp_component__ = __webpack_require__(1015);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__popularApp_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularApp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PopularApp = (function () {
    function PopularApp() {
    }
    PopularApp.prototype.ngOnInit = function () {
    };
    return PopularApp;
}());
PopularApp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'popular-app',
        template: __webpack_require__(1188),
        styles: [__webpack_require__(1101)]
    })
], PopularApp);

//# sourceMappingURL=popularApp.component.js.map

/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_component__ = __webpack_require__(1017);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__(946);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Todo = (function () {
    function Todo(_baConfig, _todoService) {
        var _this = this;
        this._baConfig = _baConfig;
        this._todoService = _todoService;
        this.dashboardColors = this._baConfig.get().colors.dashboard;
        this.newTodoText = '';
        this.todoList = this._todoService.getTodoList();
        this.todoList.forEach(function (item) {
            item.color = _this._getRandomColor();
        });
    }
    Todo.prototype.getNotDeleted = function () {
        return this.todoList.filter(function (item) {
            return !item.deleted;
        });
    };
    Todo.prototype.addToDoItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText,
                color: this._getRandomColor(),
            });
            this.newTodoText = '';
        }
    };
    Todo.prototype._getRandomColor = function () {
        var _this = this;
        var colors = Object.keys(this.dashboardColors).map(function (key) { return _this.dashboardColors[key]; });
        var i = Math.floor(Math.random() * (colors.length - 1));
        return colors[i];
    };
    return Todo;
}());
Todo = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'todo',
        template: __webpack_require__(1189),
        styles: [__webpack_require__(1102)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */]) === "function" && _b || Object])
], Todo);

var _a, _b;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trafficChart_component__ = __webpack_require__(1019);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__trafficChart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trafficChart_service__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficChart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrafficChart = (function () {
    function TrafficChart(trafficChartService) {
        this.trafficChartService = trafficChartService;
        this.doughnutData = trafficChartService.getData();
    }
    TrafficChart.prototype.ngAfterViewInit = function () {
        this._loadDoughnutCharts();
    };
    TrafficChart.prototype._loadDoughnutCharts = function () {
        var el = jQuery('.chart-area').get(0);
        new __WEBPACK_IMPORTED_MODULE_2_chart_js__(el.getContext('2d')).Doughnut(this.doughnutData, {
            segmentShowStroke: false,
            percentageInnerCutout: 64,
            responsive: true
        });
    };
    return TrafficChart;
}());
TrafficChart = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'traffic-chart',
        template: __webpack_require__(1190),
        styles: [__webpack_require__(1103)]
    })
    // TODO: move chart.js to it's own component
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trafficChart_service__["a" /* TrafficChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trafficChart_service__["a" /* TrafficChartService */]) === "function" && _a || Object])
], TrafficChart);

var _a;
//# sourceMappingURL=trafficChart.component.js.map

/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usersMap_component__ = __webpack_require__(1021);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__usersMap_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usersMap_service__ = __webpack_require__(948);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersMap; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersMap = (function () {
    function UsersMap(_usersMapService) {
        this._usersMapService = _usersMapService;
        this.mapData = this._usersMapService.getData();
    }
    return UsersMap;
}());
UsersMap = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'users-map',
        template: __webpack_require__(1191),
        styles: [__webpack_require__(1104)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__usersMap_service__["a" /* UsersMapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__usersMap_service__["a" /* UsersMapService */]) === "function" && _a || Object])
], UsersMap);

var _a;
//# sourceMappingURL=usersMap.component.js.map

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.1.1
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */


(function(){

	"use strict";

	//Declare root variable - window in the browser, global on the server
	var root = this,
		previous = root.Chart;

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context){
		var chart = this;
		this.canvas = context.canvas;

		this.ctx = context;

		//Variables global to the chart
		var computeDimension = function(element,dimension)
		{
			if (element['offset'+dimension])
			{
				return element['offset'+dimension];
			}
			else
			{
				return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
			}
		};

		var width = this.width = computeDimension(context.canvas,'Width') || context.canvas.width;
		var height = this.height = computeDimension(context.canvas,'Height') || context.canvas.height;

		this.aspectRatio = this.width / this.height;
		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		helpers.retinaScale(this);

		return this;
	};
	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			// Boolean - Whether to animate the chart
			animation: true,

			// Number - Number of animation steps
			animationSteps: 60,

			// String - Animation easing effect
			animationEasing: "easeOutQuart",

			// Boolean - If we should show the scale at all
			showScale: true,

			// Boolean - If we want to override with a hard coded scale
			scaleOverride: false,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: null,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: null,
			// Number - The scale starting value
			scaleStartValue: null,

			// String - Colour of the scale line
			scaleLineColor: "rgba(0,0,0,.1)",

			// Number - Pixel width of the scale line
			scaleLineWidth: 1,

			// Boolean - Whether to show labels on the scale
			scaleShowLabels: true,

			// Interpolated JS string - can access value
			scaleLabel: "<%=value%>",

			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
			scaleIntegersOnly: true,

			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero: false,

			// String - Scale label font declaration for the scale label
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Scale label font size in pixels
			scaleFontSize: 12,

			// String - Scale label font weight style
			scaleFontStyle: "normal",

			// String - Scale label font colour
			scaleFontColor: "#666",

			// Boolean - whether or not the chart should be responsive and resize when the browser does.
			responsive: false,

			// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			maintainAspectRatio: true,

			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
			showTooltips: true,

			// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
			customTooltips: false,

			// Array - Array of string names to attach tooltip events
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

			// String - Tooltip background colour
			tooltipFillColor: "rgba(0,0,0,0.8)",

			// String - Tooltip label font declaration for the scale label
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip label font size in pixels
			tooltipFontSize: 14,

			// String - Tooltip font weight style
			tooltipFontStyle: "normal",

			// String - Tooltip label font colour
			tooltipFontColor: "#fff",

			// String - Tooltip title font declaration for the scale label
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip title font size in pixels
			tooltipTitleFontSize: 14,

			// String - Tooltip title font weight style
			tooltipTitleFontStyle: "bold",

			// String - Tooltip title font colour
			tooltipTitleFontColor: "#fff",

			// String - Tooltip title template
			tooltipTitleTemplate: "<%= label%>",

			// Number - pixel width of padding around tooltip text
			tooltipYPadding: 6,

			// Number - pixel width of padding around tooltip text
			tooltipXPadding: 6,

			// Number - Size of the caret on the tooltip
			tooltipCaretSize: 8,

			// Number - Pixel radius of the tooltip border
			tooltipCornerRadius: 6,

			// Number - Pixel offset from point x to tooltip edge
			tooltipXOffset: 10,

			// String - Template string for single tooltips
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

			// String - Template string for single tooltips
			multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>",

			// String - Colour behind the legend colour block
			multiTooltipKeyBackground: '#fff',

			// Array - A list of colors to use as the defaults
			segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928" ],

			// Array - A list of highlight colors to use as the defaults
			segmentHighlightColorDefaults: [ "#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150" ],

			// Function - Will fire on animation progression.
			onAnimationProgress: function(){},

			// Function - Will fire on animation completion.
			onAnimationComplete: function(){}

		}
	};

	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

		//-- Basic js utility methods
	var each = helpers.each = function(loopable,callback,self){
			var additionalArgs = Array.prototype.slice.call(arguments, 3);
			// Check to see if null or undefined firstly.
			if (loopable){
				if (loopable.length === +loopable.length){
					var i;
					for (i=0; i<loopable.length; i++){
						callback.apply(self,[loopable[i], i].concat(additionalArgs));
					}
				}
				else{
					for (var item in loopable){
						callback.apply(self,[loopable[item],item].concat(additionalArgs));
					}
				}
			}
		},
		clone = helpers.clone = function(obj){
			var objClone = {};
			each(obj,function(value,key){
				if (obj.hasOwnProperty(key)){
					objClone[key] = value;
				}
			});
			return objClone;
		},
		extend = helpers.extend = function(base){
			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
				each(extensionObject,function(value,key){
					if (extensionObject.hasOwnProperty(key)){
						base[key] = value;
					}
				});
			});
			return base;
		},
		merge = helpers.merge = function(base,master){
			//Merge properties in left object over to a shallow clone of object right.
			var args = Array.prototype.slice.call(arguments,0);
			args.unshift({});
			return extend.apply(null, args);
		},
		indexOf = helpers.indexOf = function(arrayToSearch, item){
			if (Array.prototype.indexOf) {
				return arrayToSearch.indexOf(item);
			}
			else{
				for (var i = 0; i < arrayToSearch.length; i++) {
					if (arrayToSearch[i] === item) return i;
				}
				return -1;
			}
		},
		where = helpers.where = function(collection, filterCallback){
			var filtered = [];

			helpers.each(collection, function(item){
				if (filterCallback(item)){
					filtered.push(item);
				}
			});

			return filtered;
		},
		findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to start of the array
			if (!startIndex){
				startIndex = -1;
			}
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to end of the array
			if (!startIndex){
				startIndex = arrayToSearch.length;
			}
			for (var i = startIndex - 1; i >= 0; i--) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		inherits = helpers.inherits = function(extensions){
			//Basic javascript inheritance based on the model created in Backbone.js
			var parent = this;
			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

			var Surrogate = function(){ this.constructor = ChartElement;};
			Surrogate.prototype = parent.prototype;
			ChartElement.prototype = new Surrogate();

			ChartElement.extend = inherits;

			if (extensions) extend(ChartElement.prototype, extensions);

			ChartElement.__super__ = parent.prototype;

			return ChartElement;
		},
		noop = helpers.noop = function(){},
		uid = helpers.uid = (function(){
			var id=0;
			return function(){
				return "chart-" + id++;
			};
		})(),
		warn = helpers.warn = function(str){
			//Method for warning of errors
			if (window.console && typeof window.console.warn === "function") console.warn(str);
		},
		amd = helpers.amd = ("function" === 'function' && __webpack_require__(1242)),
		//-- Math methods
		isNumber = helpers.isNumber = function(n){
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		max = helpers.max = function(array){
			return Math.max.apply( Math, array );
		},
		min = helpers.min = function(array){
			return Math.min.apply( Math, array );
		},
		cap = helpers.cap = function(valueToCap,maxValue,minValue){
			if(isNumber(maxValue)) {
				if( valueToCap > maxValue ) {
					return maxValue;
				}
			}
			else if(isNumber(minValue)){
				if ( valueToCap < minValue ){
					return minValue;
				}
			}
			return valueToCap;
		},
		getDecimalPlaces = helpers.getDecimalPlaces = function(num){
			if (num%1!==0 && isNumber(num)){
				var s = num.toString();
				if(s.indexOf("e-") < 0){
					// no exponent, e.g. 0.01
					return s.split(".")[1].length;
				}
				else if(s.indexOf(".") < 0) {
					// no decimal point, e.g. 1e-9
					return parseInt(s.split("e-")[1]);
				}
				else {
					// exponent and decimal point, e.g. 1.23e-9
					var parts = s.split(".")[1].split("e-");
					return parts[0].length + parseInt(parts[1]);
				}
			}
			else {
				return 0;
			}
		},
		toRadians = helpers.radians = function(degrees){
			return degrees * (Math.PI/180);
		},
		// Gets the angle from vertical upright to the point about a centre.
		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

			//If the segment is in the top left quadrant, we need to add another rotation to the angle
			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
				angle += Math.PI*2;
			}

			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		},
		aliasPixel = helpers.aliasPixel = function(pixelWidth){
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		},
		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
			//Props to Rob Spencer at scaled innovation for his post on splining between points
			//http://scaledinnovation.com/analytics/splines/aboutSplines.html
			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
				fa=t*d01/(d01+d12),// scaling factor for triangle Ta
				fb=t*d12/(d01+d12);
			return {
				inner : {
					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
				},
				outer : {
					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
				}
			};
		},
		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
			return Math.floor(Math.log(val) / Math.LN10);
		},
		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

			//Set a minimum step of two - a point at the top of the graph, and a point at the base
			var minSteps = 2,
				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
				skipFitting = (minSteps >= maxSteps);

			// Filter out null values since these would min() to zero
			var values = [];
			each(valuesArray, function( v ){
				v == null || values.push( v );
			});
			var minValue = min(values),
			    maxValue = max(values);

			// We need some degree of separation here to calculate the scales if all the values are the same
			// Adding/minusing 0.5 will give us a range of 1.
			if (maxValue === minValue){
				maxValue += 0.5;
				// So we don't end up with a graph with a negative start value if we've said always start from zero
				if (minValue >= 0.5 && !startFromZero){
					minValue -= 0.5;
				}
				else{
					// Make up a whole number above the values
					maxValue += 0.5;
				}
			}

			var	valueRange = Math.abs(maxValue - minValue),
				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphRange = graphMax - graphMin,
				stepValue = Math.pow(10, rangeOrderOfMagnitude),
				numberOfSteps = Math.round(graphRange / stepValue);

			//If we have more space on the graph we'll use it to give more definition to the data
			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
				if(numberOfSteps > maxSteps){
					stepValue *=2;
					numberOfSteps = Math.round(graphRange/stepValue);
					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
					if (numberOfSteps % 1 !== 0){
						skipFitting = true;
					}
				}
				//We can fit in double the amount of scale points on the scale
				else{
					//If user has declared ints only, and the step value isn't a decimal
					if (integersOnly && rangeOrderOfMagnitude >= 0){
						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
						if(stepValue/2 % 1 === 0){
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}
						//If it would make it a float break out of the loop
						else{
							break;
						}
					}
					//If the scale doesn't have to be an int, make the scale more granular anyway.
					else{
						stepValue /=2;
						numberOfSteps = Math.round(graphRange/stepValue);
					}

				}
			}

			if (skipFitting){
				numberOfSteps = minSteps;
				stepValue = graphRange / numberOfSteps;
			}

			return {
				steps : numberOfSteps,
				stepValue : stepValue,
				min : graphMin,
				max	: graphMin + (numberOfSteps * stepValue)
			};

		},
		/* jshint ignore:start */
		// Blows up jshint errors based on the new Function constructor
		//Templating methods
		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
		template = helpers.template = function(templateString, valuesObject){

			// If templateString is function rather than string-template - call the function for valuesObject

			if(templateString instanceof Function){
			 	return templateString(valuesObject);
		 	}

			var cache = {};
			function tmpl(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = !/\W/.test(str) ?
				cache[str] = cache[str] :

				// Generate a reusable function that will serve as a template
				// generator (and which will be cached).
				new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +

					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" +

					// Convert the template into pure JavaScript
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'") +
					"');}return p.join('');"
				);

				// Provide some basic currying to the user
				return data ? fn( data ) : fn;
			}
			return tmpl(templateString,valuesObject);
		},
		/* jshint ignore:end */
		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
			var labelsArray = new Array(numberOfSteps);
			if (templateString){
				each(labelsArray,function(val,index){
					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
				});
			}
			return labelsArray;
		},
		//--Animation methods
		//Easing functions adapted from Robert Penner's easing equations
		//http://www.robertpenner.com/easing/
		easingEffects = helpers.easingEffects = {
			linear: function (t) {
				return t;
			},
			easeInQuad: function (t) {
				return t * t;
			},
			easeOutQuad: function (t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t;
				}
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function (t) {
				return t * t * t;
			},
			easeOutCubic: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function (t) {
				return t * t * t * t;
			},
			easeOutQuart: function (t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t * t;
				}
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function (t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function (t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function (t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function (t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function (t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function (t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function (t) {
				if (t === 0){
					return 0;
				}
				if (t === 1){
					return 1;
				}
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * Math.pow(2, 10 * (t - 1));
				}
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function (t) {
				if (t >= 1){
					return t;
				}
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function (t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function (t) {
				if ((t /= 1 / 2) < 1){
					return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				}
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1) == 1){
					return 1;
				}
				if (!p){
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else{
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1) == 1){
					return 1;
				}
				if (!p){
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else{
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1 / 2) == 2){
					return 1;
				}
				if (!p){
					p = 1 * (0.3 * 1.5);
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				if (t < 1){
					return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));}
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function (t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function (t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function (t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				}
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function (t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function (t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				} else {
					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
				}
			},
			easeInOutBounce: function (t) {
				if (t < 1 / 2){
					return easingEffects.easeInBounce(t * 2) * 0.5;
				}
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		},
		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		requestAnimFrame = helpers.requestAnimFrame = (function(){
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		})(),
		cancelAnimFrame = helpers.cancelAnimFrame = (function(){
			return window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame ||
				function(callback) {
					return window.clearTimeout(callback, 1000 / 60);
				};
		})(),
		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

			var currentStep = 0,
				easingFunction = easingEffects[easingString] || easingEffects.linear;

			var animationFrame = function(){
				currentStep++;
				var stepDecimal = currentStep/totalSteps;
				var easeDecimal = easingFunction(stepDecimal);

				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
				onProgress.call(chartInstance,easeDecimal,stepDecimal);
				if (currentStep < totalSteps){
					chartInstance.animationFrame = requestAnimFrame(animationFrame);
				} else{
					onComplete.apply(chartInstance);
				}
			};
			requestAnimFrame(animationFrame);
		},
		//-- DOM methods
		getRelativePosition = helpers.getRelativePosition = function(evt){
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();

			if (e.touches){
				mouseX = e.touches[0].clientX - boundingRect.left;
				mouseY = e.touches[0].clientY - boundingRect.top;

			}
			else{
				mouseX = e.clientX - boundingRect.left;
				mouseY = e.clientY - boundingRect.top;
			}

			return {
				x : mouseX,
				y : mouseY
			};

		},
		addEvent = helpers.addEvent = function(node,eventType,method){
			if (node.addEventListener){
				node.addEventListener(eventType,method);
			} else if (node.attachEvent){
				node.attachEvent("on"+eventType, method);
			} else {
				node["on"+eventType] = method;
			}
		},
		removeEvent = helpers.removeEvent = function(node, eventType, handler){
			if (node.removeEventListener){
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent){
				node.detachEvent("on"+eventType,handler);
			} else{
				node["on" + eventType] = noop;
			}
		},
		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
			// Create the events object if it's not already present
			if (!chartInstance.events) chartInstance.events = {};

			each(arrayOfEvents,function(eventName){
				chartInstance.events[eventName] = function(){
					handler.apply(chartInstance, arguments);
				};
				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
			});
		},
		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
			each(arrayOfEvents, function(handler,eventName){
				removeEvent(chartInstance.chart.canvas, eventName, handler);
			});
		},
		getMaximumWidth = helpers.getMaximumWidth = function(domNode){
			var container = domNode.parentNode,
			    padding = parseInt(getStyle(container, 'padding-left')) + parseInt(getStyle(container, 'padding-right'));
			// TODO = check cross browser stuff with this.
			return container ? container.clientWidth - padding : 0;
		},
		getMaximumHeight = helpers.getMaximumHeight = function(domNode){
			var container = domNode.parentNode,
			    padding = parseInt(getStyle(container, 'padding-bottom')) + parseInt(getStyle(container, 'padding-top'));
			// TODO = check cross browser stuff with this.
			return container ? container.clientHeight - padding : 0;
		},
		getStyle = helpers.getStyle = function (el, property) {
			return el.currentStyle ?
				el.currentStyle[property] :
				document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
		},
		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
		retinaScale = helpers.retinaScale = function(chart){
			var ctx = chart.ctx,
				width = chart.canvas.width,
				height = chart.canvas.height;

			if (window.devicePixelRatio) {
				ctx.canvas.style.width = width + "px";
				ctx.canvas.style.height = height + "px";
				ctx.canvas.height = height * window.devicePixelRatio;
				ctx.canvas.width = width * window.devicePixelRatio;
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		},
		//-- Canvas methods
		clear = helpers.clear = function(chart){
			chart.ctx.clearRect(0,0,chart.width,chart.height);
		},
		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
			return fontStyle + " " + pixelSize+"px " + fontFamily;
		},
		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
			ctx.font = font;
			var longest = 0;
			each(arrayOfStrings,function(string){
				var textWidth = ctx.measureText(string).width;
				longest = (textWidth > longest) ? textWidth : longest;
			});
			return longest;
		},
		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};


	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	Chart.Type = function(data,options,chart){
		this.options = options;
		this.chart = chart;
		this.id = uid();
		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		// Initialize is always called when a chart type is created
		// By default it is a no op, but it should be extended
		if (options.responsive){
			this.resize();
		}
		this.initialize.call(this,data);
	};

	//Core methods that'll be a part of every chart type
	extend(Chart.Type.prototype,{
		initialize : function(){return this;},
		clear : function(){
			clear(this.chart);
			return this;
		},
		stop : function(){
			// Stops any current animation loop occuring
			Chart.animationService.cancelAnimation(this);
			return this;
		},
		resize : function(callback){
			this.stop();
			var canvas = this.chart.canvas,
				newWidth = getMaximumWidth(this.chart.canvas),
				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

			canvas.width = this.chart.width = newWidth;
			canvas.height = this.chart.height = newHeight;

			retinaScale(this.chart);

			if (typeof callback === "function"){
				callback.apply(this, Array.prototype.slice.call(arguments, 1));
			}
			return this;
		},
		reflow : noop,
		render : function(reflow){
			if (reflow){
				this.reflow();
			}
			
			if (this.options.animation && !reflow){
				var animation = new Chart.Animation();
				animation.numSteps = this.options.animationSteps;
				animation.easing = this.options.animationEasing;
				
				// render function
				animation.render = function(chartInstance, animationObject) {
					var easingFunction = helpers.easingEffects[animationObject.easing];
					var stepDecimal = animationObject.currentStep / animationObject.numSteps;
					var easeDecimal = easingFunction(stepDecimal);
					
					chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
				};
				
				// user events
				animation.onAnimationProgress = this.options.onAnimationProgress;
				animation.onAnimationComplete = this.options.onAnimationComplete;
				
				Chart.animationService.addAnimation(this, animation);
			}
			else{
				this.draw();
				this.options.onAnimationComplete.call(this);
			}
			return this;
		},
		generateLegend : function(){
			return helpers.template(this.options.legendTemplate, this);
		},
		destroy : function(){
			this.stop();
			this.clear();
			unbindEvents(this, this.events);
			var canvas = this.chart.canvas;

			// Reset canvas height/width attributes starts a fresh with the canvas context
			canvas.width = this.chart.width;
			canvas.height = this.chart.height;

			// < IE9 doesn't support removeProperty
			if (canvas.style.removeProperty) {
				canvas.style.removeProperty('width');
				canvas.style.removeProperty('height');
			} else {
				canvas.style.removeAttribute('width');
				canvas.style.removeAttribute('height');
			}

			delete Chart.instances[this.id];
		},
		showTooltip : function(ChartElements, forceRedraw){
			// Only redraw the chart if we've actually changed what we're hovering on.
			if (typeof this.activeElements === 'undefined') this.activeElements = [];

			var isChanged = (function(Elements){
				var changed = false;

				if (Elements.length !== this.activeElements.length){
					changed = true;
					return changed;
				}

				each(Elements, function(element, index){
					if (element !== this.activeElements[index]){
						changed = true;
					}
				}, this);
				return changed;
			}).call(this, ChartElements);

			if (!isChanged && !forceRedraw){
				return;
			}
			else{
				this.activeElements = ChartElements;
			}
			this.draw();
			if(this.options.customTooltips){
				this.options.customTooltips(false);
			}
			if (ChartElements.length > 0){
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
				if (this.datasets && this.datasets.length > 1) {
					var dataArray,
						dataIndex;

					for (var i = this.datasets.length - 1; i >= 0; i--) {
						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
						dataIndex = indexOf(dataArray, ChartElements[0]);
						if (dataIndex !== -1){
							break;
						}
					}
					var tooltipLabels = [],
						tooltipColors = [],
						medianPosition = (function(index) {

							// Get all the points at that particular index
							var Elements = [],
								dataCollection,
								xPositions = [],
								yPositions = [],
								xMax,
								yMax,
								xMin,
								yMin;
							helpers.each(this.datasets, function(dataset){
								dataCollection = dataset.points || dataset.bars || dataset.segments;
								if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
									Elements.push(dataCollection[dataIndex]);
								}
							});

							helpers.each(Elements, function(element) {
								xPositions.push(element.x);
								yPositions.push(element.y);


								//Include any colour information about the element
								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
								tooltipColors.push({
									fill: element._saved.fillColor || element.fillColor,
									stroke: element._saved.strokeColor || element.strokeColor
								});

							}, this);

							yMin = min(yPositions);
							yMax = max(yPositions);

							xMin = min(xPositions);
							xMax = max(xPositions);

							return {
								x: (xMin > this.chart.width/2) ? xMin : xMax,
								y: (yMin + yMax)/2
							};
						}).call(this, dataIndex);

					new Chart.MultiTooltip({
						x: medianPosition.x,
						y: medianPosition.y,
						xPadding: this.options.tooltipXPadding,
						yPadding: this.options.tooltipYPadding,
						xOffset: this.options.tooltipXOffset,
						fillColor: this.options.tooltipFillColor,
						textColor: this.options.tooltipFontColor,
						fontFamily: this.options.tooltipFontFamily,
						fontStyle: this.options.tooltipFontStyle,
						fontSize: this.options.tooltipFontSize,
						titleTextColor: this.options.tooltipTitleFontColor,
						titleFontFamily: this.options.tooltipTitleFontFamily,
						titleFontStyle: this.options.tooltipTitleFontStyle,
						titleFontSize: this.options.tooltipTitleFontSize,
						cornerRadius: this.options.tooltipCornerRadius,
						labels: tooltipLabels,
						legendColors: tooltipColors,
						legendColorBackground : this.options.multiTooltipKeyBackground,
						title: template(this.options.tooltipTitleTemplate,ChartElements[0]),
						chart: this.chart,
						ctx: this.chart.ctx,
						custom: this.options.customTooltips
					}).draw();

				} else {
					each(ChartElements, function(Element) {
						var tooltipPosition = Element.tooltipPosition();
						new Chart.Tooltip({
							x: Math.round(tooltipPosition.x),
							y: Math.round(tooltipPosition.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							text: template(this.options.tooltipTemplate, Element),
							chart: this.chart,
							custom: this.options.customTooltips
						}).draw();
					}, this);
				}
			}
			return this;
		},
		toBase64Image : function(){
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		}
	});

	Chart.Type.extend = function(extensions){

		var parent = this;

		var ChartType = function(){
			return parent.apply(this,arguments);
		};

		//Copy the prototype object of the this class
		ChartType.prototype = clone(parent.prototype);
		//Now overwrite some of the properties in the base class with the new extensions
		extend(ChartType.prototype, extensions);

		ChartType.extend = Chart.Type.extend;

		if (extensions.name || parent.prototype.name){

			var chartName = extensions.name || parent.prototype.name;
			//Assign any potential default values of the new chart type

			//If none are defined, we'll use a clone of the chart type this is being extended from.
			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
			//doesn't define some defaults of their own.

			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

			Chart.types[chartName] = ChartType;

			//Register this new chart type in the Chart prototype
			Chart.prototype[chartName] = function(data,options){
				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
				return new ChartType(data,config,this);
			};
		} else{
			warn("Name not provided for this chart, so it hasn't been registered");
		}
		return parent;
	};

	Chart.Element = function(configuration){
		extend(this,configuration);
		this.initialize.apply(this,arguments);
		this.save();
	};
	extend(Chart.Element.prototype,{
		initialize : function(){},
		restore : function(props){
			if (!props){
				extend(this,this._saved);
			} else {
				each(props,function(key){
					this[key] = this._saved[key];
				},this);
			}
			return this;
		},
		save : function(){
			this._saved = clone(this);
			delete this._saved._saved;
			return this;
		},
		update : function(newProps){
			each(newProps,function(value,key){
				this._saved[key] = this[key];
				this[key] = value;
			},this);
			return this;
		},
		transition : function(props,ease){
			each(props,function(value,key){
				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
			},this);
			return this;
		},
		tooltipPosition : function(){
			return {
				x : this.x,
				y : this.y
			};
		},
		hasValue: function(){
			return isNumber(this.value);
		}
	});

	Chart.Element.extend = inherits;


	Chart.Point = Chart.Element.extend({
		display: true,
		inRange: function(chartX,chartY){
			var hitDetectionRange = this.hitDetectionRadius + this.radius;
			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
		},
		draw : function(){
			if (this.display){
				var ctx = this.ctx;
				ctx.beginPath();

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				ctx.closePath();

				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.stroke();
			}


			//Quick debug for bezier curve splining
			//Highlights control points and the line between them.
			//Handy for dev - stripped in the min version.

			// ctx.save();
			// ctx.fillStyle = "black";
			// ctx.strokeStyle = "black"
			// ctx.beginPath();
			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.beginPath();
			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
			// ctx.lineTo(this.x, this.y);
			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
			// ctx.stroke();

			// ctx.restore();



		}
	});

	Chart.Arc = Chart.Element.extend({
		inRange : function(chartX,chartY){

			var pointRelativePosition = helpers.getAngleFromPoint(this, {
				x: chartX,
				y: chartY
			});

			// Normalize all angles to 0 - 2*PI (0 - 360°)
			var pointRelativeAngle = pointRelativePosition.angle % (Math.PI * 2),
			    startAngle = (Math.PI * 2 + this.startAngle) % (Math.PI * 2),
			    endAngle = (Math.PI * 2 + this.endAngle) % (Math.PI * 2) || 360;

			// Calculate wether the pointRelativeAngle is between the start and the end angle
			var betweenAngles = (endAngle < startAngle) ?
				pointRelativeAngle <= endAngle || pointRelativeAngle >= startAngle:
				pointRelativeAngle >= startAngle && pointRelativeAngle <= endAngle;

			//Check if within the range of the open/close angle
			var withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

			return (betweenAngles && withinRadius);
			//Ensure within the outside of the arc centre, but inside arc outer
		},
		tooltipPosition : function(){
			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
			return {
				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw : function(animationPercent){

			var easingDecimal = animationPercent || 1;

			var ctx = this.ctx;

			ctx.beginPath();

			ctx.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle);

            ctx.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, true);

			ctx.closePath();
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			ctx.fillStyle = this.fillColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (this.showStroke){
				ctx.stroke();
			}
		}
	});

	Chart.Rectangle = Chart.Element.extend({
		draw : function(){
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				top = this.base - (this.base - this.y),
				halfStroke = this.strokeWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (this.showStroke){
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();

			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			// It'd be nice to keep this class totally generic to any rectangle
			// and simply specify which border to miss out.
			ctx.moveTo(leftX, this.base);
			ctx.lineTo(leftX, top);
			ctx.lineTo(rightX, top);
			ctx.lineTo(rightX, this.base);
			ctx.fill();
			if (this.showStroke){
				ctx.stroke();
			}
		},
		height : function(){
			return this.base - this.y;
		},
		inRange : function(chartX,chartY){
			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
		}
	});

	Chart.Animation = Chart.Element.extend({
		currentStep: null, // the current animation step
		numSteps: 60, // default number of steps
		easing: "", // the easing to use for this animation
		render: null, // render function used by the animation service
		
		onAnimationProgress: null, // user specified callback to fire on each step of the animation 
		onAnimationComplete: null, // user specified callback to fire when the animation finishes
	});
	
	Chart.Tooltip = Chart.Element.extend({
		draw : function(){

			var ctx = this.chart.ctx;

			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.xAlign = "center";
			this.yAlign = "above";

			//Distance between the actual element.y position and the start of the tooltip caret
			var caretPadding = this.caretPadding = 2;

			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
				tooltipRectHeight = this.fontSize + 2*this.yPadding,
				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

			if (this.x + tooltipWidth/2 >this.chart.width){
				this.xAlign = "left";
			} else if (this.x - tooltipWidth/2 < 0){
				this.xAlign = "right";
			}

			if (this.y - tooltipHeight < 0){
				this.yAlign = "below";
			}


			var tooltipX = this.x - tooltipWidth/2,
				tooltipY = this.y - tooltipHeight;

			ctx.fillStyle = this.fillColor;

			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				switch(this.yAlign)
				{
				case "above":
					//Draw a caret above the x/y
					ctx.beginPath();
					ctx.moveTo(this.x,this.y - caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.closePath();
					ctx.fill();
					break;
				case "below":
					tooltipY = this.y + caretPadding + this.caretHeight;
					//Draw a caret below the x/y
					ctx.beginPath();
					ctx.moveTo(this.x, this.y + caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.closePath();
					ctx.fill();
					break;
				}

				switch(this.xAlign)
				{
				case "left":
					tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
					break;
				case "right":
					tooltipX = this.x - (this.cornerRadius + this.caretHeight);
					break;
				}

				drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

				ctx.fill();

				ctx.fillStyle = this.textColor;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
			}
		}
	});

	Chart.MultiTooltip = Chart.Element.extend({
		initialize : function(){
			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

			this.titleHeight = this.title ? this.titleFontSize * 1.5 : 0;
			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleHeight;

			this.ctx.font = this.titleFont;

			var titleWidth = this.ctx.measureText(this.title).width,
				//Label has a legend square as well so account for this.
				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
				longestTextWidth = max([labelWidth,titleWidth]);

			this.width = longestTextWidth + (this.xPadding*2);


			var halfHeight = this.height/2;

			//Check to ensure the height will fit on the canvas
			if (this.y - halfHeight < 0 ){
				this.y = halfHeight;
			} else if (this.y + halfHeight > this.chart.height){
				this.y = this.chart.height - halfHeight;
			}

			//Decide whether to align left or right based on position on canvas
			if (this.x > this.chart.width/2){
				this.x -= this.xOffset + this.width;
			} else {
				this.x += this.xOffset;
			}


		},
		getLineHeight : function(index){
			var baseLineHeight = this.y - (this.height/2) + this.yPadding,
				afterTitleIndex = index-1;

			//If the index is zero, we're getting the title
			if (index === 0){
				return baseLineHeight + this.titleHeight / 3;
			} else{
				return baseLineHeight + ((this.fontSize * 1.5 * afterTitleIndex) + this.fontSize / 2) + this.titleHeight;
			}

		},
		draw : function(){
			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
				var ctx = this.ctx;
				ctx.fillStyle = this.fillColor;
				ctx.fill();
				ctx.closePath();

				ctx.textAlign = "left";
				ctx.textBaseline = "middle";
				ctx.fillStyle = this.titleTextColor;
				ctx.font = this.titleFont;

				ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

				ctx.font = this.font;
				helpers.each(this.labels,function(label,index){
					ctx.fillStyle = this.textColor;
					ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

					//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
					//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
					//Instead we'll make a white filled block to put the legendColour palette over.

					ctx.fillStyle = this.legendColorBackground;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

					ctx.fillStyle = this.legendColors[index].fill;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


				},this);
			}
		}
	});

	Chart.Scale = Chart.Element.extend({
		initialize : function(){
			this.fit();
		},
		buildYLabels : function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) + 10 : 0;
		},
		addXLabel : function(label){
			this.xLabels.push(label);
			this.valuesCount++;
			this.fit();
		},
		removeXLabel : function(){
			this.xLabels.shift();
			this.valuesCount--;
			this.fit();
		},
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
		fit: function(){
			// First we need the width of the yLabels, assuming the xLabels aren't rotated

			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
			this.startPoint = (this.display) ? this.fontSize : 0;
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

			// Apply padding settings to the start and end point.
			this.startPoint += this.padding;
			this.endPoint -= this.padding;

			// Cache the starting endpoint, excluding the space for x labels
			var cachedEndPoint = this.endPoint;

			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
			var cachedHeight = this.endPoint - this.startPoint,
				cachedYLabelWidth;

			// Build the current yLabels so we have an idea of what size they'll be to start
			/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
			this.calculateYRange(cachedHeight);

			// With these properties set we can now build the array of yLabels
			// and also the width of the largest yLabel
			this.buildYLabels();

			this.calculateXLabelRotation();

			while((cachedHeight > this.endPoint - this.startPoint)){
				cachedHeight = this.endPoint - this.startPoint;
				cachedYLabelWidth = this.yLabelWidth;

				this.calculateYRange(cachedHeight);
				this.buildYLabels();

				// Only go through the xLabel loop again if the yLabel width has changed
				if (cachedYLabelWidth < this.yLabelWidth){
					this.endPoint = cachedEndPoint;
					this.calculateXLabelRotation();
				}
			}

		},
		calculateXLabelRotation : function(){
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.

			this.ctx.font = this.font;

			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
				firstRotated,
				lastRotated;


			this.xScalePaddingRight = lastWidth/2 + 3;
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth) ? firstWidth/2 : this.yLabelWidth;

			this.xLabelRotation = 0;
			if (this.display){
				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
					cosRotation,
					firstRotatedWidth;
				this.xLabelWidth = originalLabelWidth;
				//Allow 3 pixels x2 padding either side for label readability
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

				//Max label rotate should be 90 - also act as a loop counter
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(toRadians(this.xLabelRotation));

					firstRotated = cosRotation * firstWidth;
					lastRotated = cosRotation * lastWidth;

					// We're right aligning the text now.
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth){
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
					}
					this.xScalePaddingRight = this.fontSize/2;


					this.xLabelRotation++;
					this.xLabelWidth = cosRotation * originalLabelWidth;

				}
				if (this.xLabelRotation > 0){
					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
				}
			}
			else{
				this.xLabelWidth = 0;
				this.xScalePaddingRight = this.padding;
				this.xScalePaddingLeft = this.padding;
			}

		},
		// Needs to be overidden in each Chart type
		// Otherwise we need to pass all the data into the scale class
		calculateYRange: noop,
		drawingArea: function(){
			return this.startPoint - this.endPoint;
		},
		calculateY : function(value){
			var scalingFactor = this.drawingArea() / (this.min - this.max);
			return this.endPoint - (scalingFactor * (value - this.min));
		},
		calculateX : function(index){
			var isRotated = (this.xLabelRotation > 0),
				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
				valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

			if (this.offsetGridLines){
				valueOffset += (valueWidth/2);
			}

			return Math.round(valueOffset);
		},
		update : function(newProps){
			helpers.extend(this, newProps);
			this.fit();
		},
		draw : function(){
			var ctx = this.ctx,
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
				xStart = Math.round(this.xScalePaddingLeft);
			if (this.display){
				ctx.fillStyle = this.textColor;
				ctx.font = this.font;
				each(this.yLabels,function(labelString,index){
					var yLabelCenter = this.endPoint - (yLabelGap * index),
						linePositionY = Math.round(yLabelCenter),
						drawHorizontalLine = this.showHorizontalLines;

					ctx.textAlign = "right";
					ctx.textBaseline = "middle";
					if (this.showLabels){
						ctx.fillText(labelString,xStart - 10,yLabelCenter);
					}

					// This is X axis, so draw it
					if (index === 0 && !drawHorizontalLine){
						drawHorizontalLine = true;
					}

					if (drawHorizontalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					linePositionY += helpers.aliasPixel(ctx.lineWidth);

					if(drawHorizontalLine){
						ctx.moveTo(xStart, linePositionY);
						ctx.lineTo(this.width, linePositionY);
						ctx.stroke();
						ctx.closePath();
					}

					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;
					ctx.beginPath();
					ctx.moveTo(xStart - 5, linePositionY);
					ctx.lineTo(xStart, linePositionY);
					ctx.stroke();
					ctx.closePath();

				},this);

				each(this.xLabels,function(label,index){
					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
						// Check to see if line/bar here and decide where to place the line
						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
						isRotated = (this.xLabelRotation > 0),
						drawVerticalLine = this.showVerticalLines;

					// This is Y axis, so draw it
					if (index === 0 && !drawVerticalLine){
						drawVerticalLine = true;
					}

					if (drawVerticalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					if (drawVerticalLine){
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.startPoint - 3);
						ctx.stroke();
						ctx.closePath();
					}


					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;


					// Small lines at the bottom of the base grid line
					ctx.beginPath();
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.endPoint + 5);
					ctx.stroke();
					ctx.closePath();

					ctx.save();
					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
					ctx.rotate(toRadians(this.xLabelRotation)*-1);
					ctx.font = this.font;
					ctx.textAlign = (isRotated) ? "right" : "center";
					ctx.textBaseline = (isRotated) ? "middle" : "top";
					ctx.fillText(label, 0, 0);
					ctx.restore();
				},this);

			}
		}

	});

	Chart.RadialScale = Chart.Element.extend({
		initialize: function(){
			this.size = min([this.height, this.width]);
			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
		},
		calculateCenterOffset: function(value){
			// Take into account half font size + the yPadding of the top value
			var scalingFactor = this.drawingArea / (this.max - this.min);

			return (value - this.min) * scalingFactor;
		},
		update : function(){
			if (!this.lineArc){
				this.setScaleSize();
			} else {
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			}
			this.buildYLabels();
		},
		buildYLabels: function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
		},
		getCircumference : function(){
			return ((Math.PI*2) / this.valuesCount);
		},
		setScaleSize: function(){
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */


			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
			for (i=0;i<this.valuesCount;i++){
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
				if (i === 0 || i === this.valuesCount/2){
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth/2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				}
				else if (i < this.valuesCount/2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				}
				else if (i > this.valuesCount/2){
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;

			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);

			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

		},
		setCenterPoint: function(leftMovement, rightMovement){

			var maxRight = this.width - rightMovement - this.drawingArea,
				maxLeft = leftMovement + this.drawingArea;

			this.xCenter = (maxLeft + maxRight)/2;
			// Always vertically in the centre as the text height doesn't change
			this.yCenter = (this.height/2);
		},

		getIndexAngle : function(index){
			var angleMultiplier = (Math.PI * 2) / this.valuesCount;
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI/2);
		},
		getPointPosition : function(index, distanceFromCenter){
			var thisAngle = this.getIndexAngle(index);
			return {
				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
			};
		},
		draw: function(){
			if (this.display){
				var ctx = this.ctx;
				each(this.yLabels, function(label, index){
					// Don't draw a centre value
					if (index > 0){
						var yCenterOffset = index * (this.drawingArea/this.steps),
							yHeight = this.yCenter - yCenterOffset,
							pointPosition;

						// Draw circular lines around the scale
						if (this.lineWidth > 0){
							ctx.strokeStyle = this.lineColor;
							ctx.lineWidth = this.lineWidth;

							if(this.lineArc){
								ctx.beginPath();
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
								ctx.closePath();
								ctx.stroke();
							} else{
								ctx.beginPath();
								for (var i=0;i<this.valuesCount;i++)
								{
									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
									if (i === 0){
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}
						if(this.showLabels){
							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
							if (this.showLabelBackdrop){
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = this.backdropColor;
								ctx.fillRect(
									this.xCenter - labelWidth/2 - this.backdropPaddingX,
									yHeight - this.fontSize/2 - this.backdropPaddingY,
									labelWidth + this.backdropPaddingX*2,
									this.fontSize + this.backdropPaddingY*2
								);
							}
							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = this.fontColor;
							ctx.fillText(label, this.xCenter, yHeight);
						}
					}
				}, this);

				if (!this.lineArc){
					ctx.lineWidth = this.angleLineWidth;
					ctx.strokeStyle = this.angleLineColor;
					for (var i = this.valuesCount - 1; i >= 0; i--) {
						var centerOffset = null, outerPosition = null;

						if (this.angleLineWidth > 0 && (i % this.angleLineInterval === 0)){
							centerOffset = this.calculateCenterOffset(this.max);
							outerPosition = this.getPointPosition(i, centerOffset);
							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}

						if (this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
							if (centerOffset == null)
								centerOffset = this.calculateCenterOffset(this.max);

							if (outerPosition == null)
								outerPosition = this.getPointPosition(i, centerOffset);

							var previousOuterPosition = this.getPointPosition(i === 0 ? this.valuesCount - 1 : i - 1, centerOffset);
							var nextOuterPosition = this.getPointPosition(i === this.valuesCount - 1 ? 0 : i + 1, centerOffset);

							var previousOuterHalfway = { x: (previousOuterPosition.x + outerPosition.x) / 2, y: (previousOuterPosition.y + outerPosition.y) / 2 };
							var nextOuterHalfway = { x: (outerPosition.x + nextOuterPosition.x) / 2, y: (outerPosition.y + nextOuterPosition.y) / 2 };

							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(previousOuterHalfway.x, previousOuterHalfway.y);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.lineTo(nextOuterHalfway.x, nextOuterHalfway.y);
							ctx.fillStyle = this.backgroundColors[i];
							ctx.fill();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
						ctx.fillStyle = this.pointLabelFontColor;

						var labelsCount = this.labels.length,
							halfLabelsCount = this.labels.length/2,
							quarterLabelsCount = halfLabelsCount/2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0){
							ctx.textAlign = 'center';
						} else if(i === halfLabelsCount){
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount){
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter){
							ctx.textBaseline = 'middle';
						} else if (upperHalf){
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		addAnimation: function(chartInstance, animationObject) {
			for (var index = 0; index < this.animations.length; ++ index){
				if (this.animations[index].chartInstance === chartInstance){
					// replacing an in progress animation
					this.animations[index].animationObject = animationObject;
					return;
				}
			}
			
			this.animations.push({
				chartInstance: chartInstance,
				animationObject: animationObject
			});

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (this.animations.length == 1) {
				helpers.requestAnimFrame.call(window, this.digestWrapper);
			}
		},
		// Cancel the animation for a given chart instance
		cancelAnimation: function(chartInstance) {
			var index = helpers.findNextWhere(this.animations, function(animationWrapper) {
				return animationWrapper.chartInstance === chartInstance;
			});
			
			if (index)
			{
				this.animations.splice(index, 1);
			}
		},
		// calls startDigest with the proper context
		digestWrapper: function() {
			Chart.animationService.startDigest.call(Chart.animationService);
		},
		startDigest: function() {

			var startTime = Date.now();
			var framesToDrop = 0;

			if(this.dropFrames > 1){
				framesToDrop = Math.floor(this.dropFrames);
				this.dropFrames -= framesToDrop;
			}

			for (var i = 0; i < this.animations.length; i++) {

				if (this.animations[i].animationObject.currentStep === null){
					this.animations[i].animationObject.currentStep = 0;
				}

				this.animations[i].animationObject.currentStep += 1 + framesToDrop;
				if(this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps){
					this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps;
				}
				
				this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject);
				
				// Check if executed the last frame.
				if (this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps){
					// Call onAnimationComplete
					this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance);
					// Remove the animation.
					this.animations.splice(i, 1);
					// Keep the index in place to offset the splice
					i--;
				}
			}

			var endTime = Date.now();
			var delay = endTime - startTime - this.frameDuration;
			var frameDelay = delay / this.frameDuration;

			if(frameDelay > 1){
				this.dropFrames += frameDelay;
			}

			// Do we have more stuff to animate?
			if (this.animations.length > 0){
				helpers.requestAnimFrame.call(window, this.digestWrapper);
			}
		}
	};

	// Attach global event to resize each chart instance when the browser resizes
	helpers.addEvent(window, "resize", (function(){
		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
		var timeout;
		return function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				each(Chart.instances,function(instance){
					// If the responsive flag is set in the chart instance config
					// Cascade the resize event down to the chart.
					if (instance.options.responsive){
						instance.resize(instance.render, true);
					}
				});
			}, 50);
		};
	})());


	if (amd) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
			return Chart;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module === 'object' && module.exports) {
		module.exports = Chart;
	}

	root.Chart = Chart;

	Chart.noConflict = function(){
		root.Chart = previous;
		return Chart;
	};

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;


	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - If there is a stroke on each bar
		barShowStroke : true,

		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,

		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,

		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Bar",
		defaults : defaultConfig,
		initialize:  function(data){

			//Expose options as a scope variable here so we can access it in the ScaleClass
			var options = this.options;

			this.ScaleClass = Chart.Scale.extend({
				offsetGridLines : true,
				calculateBarX : function(datasetCount, datasetIndex, barIndex){
					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
					var xWidth = this.calculateBaseWidth(),
						xAbsolute = this.calculateX(barIndex) - (xWidth/2),
						barWidth = this.calculateBarWidth(datasetCount);

					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
				},
				calculateBaseWidth : function(){
					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
				},
				calculateBarWidth : function(datasetCount){
					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

					return (baseWidth / datasetCount);
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

					this.eachBars(function(bar){
						bar.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activeBars, function(activeBar){
						if (activeBar) {
							activeBar.fillColor = activeBar.highlightFill;
							activeBar.strokeColor = activeBar.highlightStroke;
						}
					});
					this.showTooltip(activeBars);
				});
			}

			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.BarClass = Chart.Rectangle.extend({
				strokeWidth : this.options.barStrokeWidth,
				showStroke : this.options.barShowStroke,
				ctx : this.chart.ctx
			});

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset,datasetIndex){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					bars : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.bars.push(new this.BarClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : (typeof dataset.strokeColor == 'object') ? dataset.strokeColor[index] : dataset.strokeColor,
						fillColor : (typeof dataset.fillColor == 'object') ? dataset.fillColor[index] : dataset.fillColor,
						highlightFill : (dataset.highlightFill) ? (typeof dataset.highlightFill == 'object') ? dataset.highlightFill[index] : dataset.highlightFill : (typeof dataset.fillColor == 'object') ? dataset.fillColor[index] : dataset.fillColor,
						highlightStroke : (dataset.highlightStroke) ? (typeof dataset.highlightStroke == 'object') ? dataset.highlightStroke[index] : dataset.highlightStroke : (typeof dataset.strokeColor == 'object') ? dataset.strokeColor[index] : dataset.strokeColor
					}));
				},this);

			},this);

			this.buildScale(data.labels);

			this.BarClass.prototype.base = this.scale.endPoint;

			this.eachBars(function(bar, index, datasetIndex){
				helpers.extend(bar, {
					width : this.scale.calculateBarWidth(this.datasets.length),
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
					y: this.scale.endPoint
				});
				bar.save();
			}, this);

			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});

			this.eachBars(function(bar){
				bar.save();
			});
			this.render();
		},
		eachBars : function(callback){
			helpers.each(this.datasets,function(dataset, datasetIndex){
				helpers.each(dataset.bars, callback, this, datasetIndex);
			},this);
		},
		getBarsAtEvent : function(e){
			var barsArray = [],
				eventPosition = helpers.getRelativePosition(e),
				datasetIterator = function(dataset){
					barsArray.push(dataset.bars[barIndex]);
				},
				barIndex;

			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
						helpers.each(this.datasets, datasetIterator);
						return barsArray;
					}
				}
			}

			return barsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachBars(function(bar){
					values.push(bar.value);
				});
				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange: function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}

			this.scale = new this.ScaleClass(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].bars.push(new this.BarClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
					y: this.scale.endPoint,
					width : this.scale.calculateBarWidth(this.datasets.length),
					base : this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].strokeColor,
					fillColor : this.datasets[datasetIndex].fillColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.bars.shift();
			},this);
			this.update();
		},
		reflow : function(){
			helpers.extend(this.BarClass.prototype,{
				y: this.scale.endPoint,
				base : this.scale.endPoint
			});
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			this.scale.draw(easingDecimal);

			//Draw all the bars for each dataset
			helpers.each(this.datasets,function(dataset,datasetIndex){
				helpers.each(dataset.bars,function(bar,index){
					if (bar.hasValue()){
						bar.base = this.scale.endPoint;
						//Transition then draw
						bar.transition({
							x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
							y : this.scale.calculateY(bar.value),
							width : this.scale.calculateBarWidth(this.datasets.length)
						}, easingDecimal).draw();
					}
				},this);

			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : "#fff",

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//The percentage of the chart that we cut out of the middle.
		percentageInnerCutout : 50,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : "easeOutBounce",

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=segments[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"

	};

	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "Doughnut",
		//Providing a defaults will also register the defaults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){

			//Declare segments as a static property to prevent inheriting across the Chart type prototype
			this.segments = [];
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

			this.SegmentArc = Chart.Arc.extend({
				ctx : this.chart.ctx,
				x : this.chart.width/2,
				y : this.chart.height/2
			});

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}
			this.calculateTotal(data);

			helpers.each(data,function(datapoint, index){
				if (!datapoint.color) {
					datapoint.color = 'hsl(' + (360 * index / data.length) + ', 100%, 50%)';
				}
				this.addData(datapoint, index, true);
			},this);

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex !== undefined ? atIndex : this.segments.length;
			if ( typeof(segment.color) === "undefined" ) {
				segment.color = Chart.defaults.global.segmentColorDefault[index % Chart.defaults.global.segmentColorDefault.length];
				segment.highlight = Chart.defaults.global.segmentHighlightColorDefaults[index % Chart.defaults.global.segmentHighlightColorDefaults.length];				
			}
			this.segments.splice(index, 0, new this.SegmentArc({
				value : segment.value,
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
				fillColor : segment.color,
				highlightColor : segment.highlight || segment.color,
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				startAngle : Math.PI * 1.5,
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
				label : segment.label
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		calculateCircumference : function(value) {
			if ( this.total > 0 ) {
				return (Math.PI*2)*(value / this.total);
			} else {
				return 0;
			}
		},
		calculateTotal : function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += Math.abs(segment.value);
			},this);
		},
		update : function(){
			this.calculateTotal(this.segments);

			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor']);
			});

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},

		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},

		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				});
			}, this);
		},
		draw : function(easeDecimal){
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();
			helpers.each(this.segments,function(segment,index){
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				},animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				segment.draw();
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
			},this);

		}
	});

	Chart.types.Doughnut.extend({
		name : "Pie",
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
	});

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;

	var defaultConfig = {

		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - Whether the line is curved between points
		bezierCurve : true,

		//Number - Tension of the bezier curve between points
		bezierCurveTension : 0.4,

		//Boolean - Whether to show a dot for each point
		pointDot : true,

		//Number - Radius of each point dot in pixels
		pointDotRadius : 4,

		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,

		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius : 20,

		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,

		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,

		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].strokeColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",

		//Boolean - Whether to horizontally center the label and point dot inside the grid
		offsetGridLines : false

	};


	Chart.Type.extend({
		name: "Line",
		defaults : defaultConfig,
		initialize:  function(data){
			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.PointClass = Chart.Point.extend({
				offsetGridLines : this.options.offsetGridLines,
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx,
				inRange : function(mouseX){
					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePoints, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});
					this.showTooltip(activePoints);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);


				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

				this.buildScale(data.labels);


				this.eachPoints(function(point, index){
					helpers.extend(point, {
						x: this.scale.calculateX(index),
						y: this.scale.endPoint
					});
					point.save();
				}, this);

			},this);


			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});
			this.eachPoints(function(point){
				point.save();
			});
			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},
		getPointsAtEvent : function(e){
			var pointsArray = [],
				eventPosition = helpers.getRelativePosition(e);
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,function(point){
					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
				});
			},this);
			return pointsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachPoints(function(point){
					values.push(point.value);
				});

				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				offsetGridLines : this.options.offsetGridLines,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange : function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}


			this.scale = new Chart.Scale(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets

			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: this.scale.calculateX(this.scale.valuesCount+1),
					y: this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.update();
		},
		reflow : function(){
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			// Some helper methods for getting the next/prev points
			var hasValue = function(item){
				return item.value !== null;
			},
			nextPoint = function(point, collection, index){
				return helpers.findNextWhere(collection, hasValue, index) || point;
			},
			previousPoint = function(point, collection, index){
				return helpers.findPreviousWhere(collection, hasValue, index) || point;
			};

			if (!this.scale) return;
			this.scale.draw(easingDecimal);


			helpers.each(this.datasets,function(dataset){
				var pointsWithValues = helpers.where(dataset.points, hasValue);

				//Transition each point first so that the line and point drawing isn't out of sync
				//We can use this extra loop to calculate the control points of this dataset also in this loop

				helpers.each(dataset.points, function(point, index){
					if (point.hasValue()){
						point.transition({
							y : this.scale.calculateY(point.value),
							x : this.scale.calculateX(index)
						}, easingDecimal);
					}
				},this);


				// Control points need to be calculated in a separate loop, because we need to know the current x/y of the point
				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
				if (this.options.bezierCurve){
					helpers.each(pointsWithValues, function(point, index){
						var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
						point.controlPoints = helpers.splineCurve(
							previousPoint(point, pointsWithValues, index),
							point,
							nextPoint(point, pointsWithValues, index),
							tension
						);

						// Prevent the bezier going outside of the bounds of the graph

						// Cap puter bezier handles to the upper/lower scale bounds
						if (point.controlPoints.outer.y > this.scale.endPoint){
							point.controlPoints.outer.y = this.scale.endPoint;
						}
						else if (point.controlPoints.outer.y < this.scale.startPoint){
							point.controlPoints.outer.y = this.scale.startPoint;
						}

						// Cap inner bezier handles to the upper/lower scale bounds
						if (point.controlPoints.inner.y > this.scale.endPoint){
							point.controlPoints.inner.y = this.scale.endPoint;
						}
						else if (point.controlPoints.inner.y < this.scale.startPoint){
							point.controlPoints.inner.y = this.scale.startPoint;
						}
					},this);
				}


				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();

				helpers.each(pointsWithValues, function(point, index){
					if (index === 0){
						ctx.moveTo(point.x, point.y);
					}
					else{
						if(this.options.bezierCurve){
							var previous = previousPoint(point, pointsWithValues, index);

							ctx.bezierCurveTo(
								previous.controlPoints.outer.x,
								previous.controlPoints.outer.y,
								point.controlPoints.inner.x,
								point.controlPoints.inner.y,
								point.x,
								point.y
							);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					}
				}, this);

				if (this.options.datasetStroke) {
					ctx.stroke();
				}

				if (this.options.datasetFill && pointsWithValues.length > 0){
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
					ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
					ctx.fillStyle = dataset.fillColor;
					ctx.closePath();
					ctx.fill();
				}

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(pointsWithValues,function(point){
					point.draw();
				});
			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Show a backdrop to the scale label
		scaleShowLabelBackdrop : true,

		//String - The colour of the label backdrop
		scaleBackdropColor : "rgba(255,255,255,0.75)",

		// Boolean - Whether the scale should begin at zero
		scaleBeginAtZero : true,

		//Number - The backdrop padding above & below the label in pixels
		scaleBackdropPaddingY : 2,

		//Number - The backdrop padding to the side of the label in pixels
		scaleBackdropPaddingX : 2,

		//Boolean - Show line for each value in the scale
		scaleShowLine : true,

		//Boolean - Stroke a line around each segment in the chart
		segmentShowStroke : true,

		//String - The colour of the stroke on each segment.
		segmentStrokeColor : "#fff",

		//Number - The width of the stroke value in pixels
		segmentStrokeWidth : 2,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect.
		animationEasing : "easeOutBounce",

		//Boolean - Whether to animate the rotation of the chart
		animateRotate : true,

		//Boolean - Whether to animate scaling the chart from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=segments[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "PolarArea",
		//Providing a defaults will also register the defaults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){
			this.segments = [];
			//Declare segment class as a chart instance specific class, so it can share props for this instance
			this.SegmentArc = Chart.Arc.extend({
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				ctx : this.chart.ctx,
				innerRadius : 0,
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				lineArc: true,
				width: this.chart.width,
				height: this.chart.height,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				valuesCount: data.length
			});

			this.updateScaleRange(data);

			this.scale.update();

			helpers.each(data,function(segment,index){
				this.addData(segment,index,true);
			},this);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;

			this.segments.splice(index, 0, new this.SegmentArc({
				fillColor: segment.color,
				highlightColor: segment.highlight || segment.color,
				label: segment.label,
				value: segment.value,
				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
				startAngle: Math.PI * 1.5
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},
		calculateTotal: function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
			this.scale.valuesCount = this.segments.length;
		},
		updateScaleRange: function(datapoints){
			var valuesArray = [];
			helpers.each(datapoints,function(segment){
				valuesArray.push(segment.value);
			});

			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes,
				{
					size: helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				}
			);

		},
		update : function(){
			this.calculateTotal(this.segments);

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			
			this.reflow();
			this.render();
		},
		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.updateScaleRange(this.segments);
			this.scale.update();

			helpers.extend(this.scale,{
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});

			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				});
			}, this);

		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			//Clear & draw the canvas
			this.clear();
			helpers.each(this.segments,function(segment, index){
				segment.transition({
					circumference : this.scale.getCircumference(),
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				},easingDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				// If we've removed the first segment we need to set the first one to
				// start at the top.
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}

				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length - 1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
				segment.draw();
			}, this);
			this.scale.draw();
		}
	});

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;



	Chart.Type.extend({
		name: "Radar",
		defaults:{
			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels : false,

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//String - Colour of the angle line
			angleLineColor : "rgba(0,0,0,.1)",

			//Number - Pixel width of the angle line
			angleLineWidth : 1,

			//Number - Interval at which to draw angle lines ("every Nth point")
			angleLineInterval: 1,

			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle : "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize : 10,

			//String - Point label font colour
			pointLabelFontColor : "#666",

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].strokeColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"

		},

		initialize: function(data){
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx
			});

			this.datasets = [];

			this.buildScale(data);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePointsCollection, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});

					this.showTooltip(activePointsCollection);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label: dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					var pointPosition;
					if (!this.scale.animation){
						pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
					}
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
						y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

			},this);

			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},

		getPointsAtEvent : function(evt){
			var mousePosition = helpers.getRelativePosition(evt),
				fromCenter = helpers.getAngleFromPoint({
					x: this.scale.xCenter,
					y: this.scale.yCenter
				}, mousePosition);

			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
				activePointsCollection = [];

			// If we're at the top, make the pointIndex 0 to get the first of the array.
			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
				pointIndex = 0;
			}

			if (fromCenter.distance <= this.scale.drawingArea){
				helpers.each(this.datasets, function(dataset){
					activePointsCollection.push(dataset.points[pointIndex]);
				});
			}

			return activePointsCollection;
		},

		buildScale : function(data){
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backgroundColors: this.options.scaleBackgroundColors,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				angleLineColor : this.options.angleLineColor,
				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
        angleLineInterval: (this.options.angleLineInterval) ? this.options.angleLineInterval : 1,
				// Point labels at the edge of each line
				pointLabelFontColor : this.options.pointLabelFontColor,
				pointLabelFontSize : this.options.pointLabelFontSize,
				pointLabelFontFamily : this.options.pointLabelFontFamily,
				pointLabelFontStyle : this.options.pointLabelFontStyle,
				height : this.chart.height,
				width: this.chart.width,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				labels: data.labels,
				valuesCount: data.datasets[0].data.length
			});

			this.scale.setScaleSize();
			this.updateScaleRange(data.datasets);
			this.scale.buildYLabels();
		},
		updateScaleRange: function(datasets){
			var valuesArray = (function(){
				var totalDataArray = [];
				helpers.each(datasets,function(dataset){
					if (dataset.data){
						totalDataArray = totalDataArray.concat(dataset.data);
					}
					else {
						helpers.each(dataset.points, function(point){
							totalDataArray.push(point.value);
						});
					}
				});
				return totalDataArray;
			})();


			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes
			);

		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			this.scale.valuesCount++;
			helpers.each(valuesArray,function(value,datasetIndex){
				var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: pointPosition.x,
					y: pointPosition.y,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.labels.push(label);

			this.reflow();

			this.update();
		},
		removeData : function(){
			this.scale.valuesCount--;
			this.scale.labels.shift();
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.reflow();
			this.update();
		},
		update : function(){
			this.eachPoints(function(point){
				point.save();
			});
			this.reflow();
			this.render();
		},
		reflow: function(){
			helpers.extend(this.scale, {
				width : this.chart.width,
				height: this.chart.height,
				size : helpers.min([this.chart.width, this.chart.height]),
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});
			this.updateScaleRange(this.datasets);
			this.scale.setScaleSize();
			this.scale.buildYLabels();
		},
		draw : function(ease){
			var easeDecimal = ease || 1,
				ctx = this.chart.ctx;
			this.clear();
			this.scale.draw();

			helpers.each(this.datasets,function(dataset){

				//Transition each point first so that the line and point drawing isn't out of sync
				helpers.each(dataset.points,function(point,index){
					if (point.hasValue()){
						point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
					}
				},this);



				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();
				helpers.each(dataset.points,function(point,index){
					if (index === 0){
						ctx.moveTo(point.x,point.y);
					}
					else{
						ctx.lineTo(point.x,point.y);
					}
				},this);
				ctx.closePath();
				ctx.stroke();

				ctx.fillStyle = dataset.fillColor;
				if(this.options.datasetFill){
					ctx.fill();
				}
				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(dataset.points,function(point){
					if (point.hasValue()){
						point.draw();
					}
				});

			},this);

		}

	});





}).call(this);


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(176)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a0) {
      return (factory(a0));
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');

	el.appendChild(canvas);

	if (typeof(G_vmlCanvasManager) === 'object') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	// canvas on retina devices
	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);

	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param {strong} color     Valid CSS color string
	 * @param {number} lineWidth Width of the line in px
	 * @param {number} percent   Percentage to draw (float between -1 and 1)
	 */
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(-1, percent || 0), 1);
		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	/**
	 * Draw the scale of the chart
	 */
	var drawScale = function() {
		var offset;
		var length;

		ctx.lineWidth = 1;
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i % 6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * 0.6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	/**
	 * Request animation frame wrapper with polyfill
	 * @return {function} Request animation frame method or timeout fallback
	 */
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	/**
	 * Draw the background of the plugin including the scale and the track
	 */
	var drawBackground = function() {
		if(options.scaleColor) drawScale();
		if(options.trackColor) drawCircle(options.trackColor, options.trackWidth || options.lineWidth, 1);
	};

  /**
    * Canvas accessor
   */
  this.getCanvas = function() {
    return canvas;
  };

  /**
    * Canvas 2D context 'ctx' accessor
   */
  this.getCtx = function() {
    return ctx;
  };

	/**
	 * Clear the complete canvas
	 */
	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};

	/**
	 * Draw the complete chart
	 * @param {number} percent Percent shown by the chart between -100 and 100
	 */
	this.draw = function(percent) {
		// do we need to render a background
		if (!!options.scaleColor || !!options.trackColor) {
			// getImageData and putImageData are supported
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value
		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		// draw bar
		drawCircle(color, options.lineWidth, percent / 100);
	}.bind(this);

	/**
	 * Animate from some percent to some other percentage
	 * @param {number} from Starting percentage
	 * @param {number} to   Final percentage
	 */
	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate.duration);
			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate.duration) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
};

var EasyPieChart = function(el, opts) {
	var defaultOptions = {
		barColor: '#ef1e25',
		trackColor: '#f9f9f9',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 3,
		trackWidth: undefined,
		size: 110,
		rotate: 0,
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};

	// detect present renderer
	if (typeof(CanvasRenderer) !== 'undefined') {
		defaultOptions.renderer = CanvasRenderer;
	} else if (typeof(SVGRenderer) !== 'undefined') {
		defaultOptions.renderer = SVGRenderer;
	} else {
		throw new Error('Please load either the SVG- or the CanvasRenderer');
	}

	var options = {};
	var currentValue = 0;

	/**
	 * Initialize the plugin by creating the options object and initialize rendering
	 */
	var init = function() {
		this.el = el;
		this.options = options;

		// merge user options into default options
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)) {
				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
				if (typeof(options[i]) === 'function') {
					options[i] = options[i].bind(this);
				}
			}
		}

		// check for jQuery easing
		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
			options.easing = jQuery.easing[options.easing];
		} else {
			options.easing = defaultOptions.easing;
		}

		// process earlier animate option to avoid bc breaks
		if (typeof(options.animate) === 'number') {
			options.animate = {
				duration: options.animate,
				enabled: true
			};
		}

		if (typeof(options.animate) === 'boolean' && !options.animate) {
			options.animate = {
				duration: 1000,
				enabled: options.animate
			};
		}

		// create renderer
		this.renderer = new options.renderer(el, options);

		// initial draw
		this.renderer.draw(currentValue);

		// initial update
		if (el.dataset && el.dataset.percent) {
			this.update(parseFloat(el.dataset.percent));
		} else if (el.getAttribute && el.getAttribute('data-percent')) {
			this.update(parseFloat(el.getAttribute('data-percent')));
		}
	}.bind(this);

	/**
	 * Update the value of the chart
	 * @param  {number} newValue Number between 0 and 100
	 * @return {object}          Instance of the plugin for method chaining
	 */
	this.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (options.animate.enabled) {
			this.renderer.animate(currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		currentValue = newValue;
		return this;
	}.bind(this);

	/**
	 * Disable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.disableAnimation = function() {
		options.animate.enabled = false;
		return this;
	};

	/**
	 * Enable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.enableAnimation = function() {
		options.animate.enabled = true;
		return this;
	};

	init();
};

$.fn.easyPieChart = function(options) {
	return this.each(function() {
		var instanceOptions;

		if (!$.data(this, 'easyPieChart')) {
			instanceOptions = $.extend({}, options, $(this).data());
			$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
		}
	});
};


}));


/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ ba-full-calendar div.blurCalendar {\n  font-size: 12px; }\n\n:host /deep/ ba-full-calendar .fc {\n  direction: ltr;\n  text-align: left; }\n  :host /deep/ ba-full-calendar .fc button {\n    box-sizing: border-box;\n    margin: 0;\n    height: 2.1em;\n    padding: 0 .6em;\n    font-size: 1em;\n    white-space: nowrap;\n    cursor: pointer; }\n    :host /deep/ ba-full-calendar .fc button::-moz-focus-inner {\n      margin: 0;\n      padding: 0; }\n    :host /deep/ ba-full-calendar .fc button .fc-icon {\n      position: relative;\n      top: 0; }\n  :host /deep/ ba-full-calendar .fc .fc-button-group > * {\n    float: left;\n    margin: 0 0 0 -1px; }\n  :host /deep/ ba-full-calendar .fc .fc-button-group > :first-child {\n    margin-left: 0; }\n  :host /deep/ ba-full-calendar .fc hr {\n    height: 0;\n    margin: 0;\n    padding: 0 0 2px;\n    border-style: solid;\n    border-width: 1px 0; }\n  :host /deep/ ba-full-calendar .fc table {\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; }\n  :host /deep/ ba-full-calendar .fc th {\n    text-align: center; }\n  :host /deep/ ba-full-calendar .fc th, :host /deep/ ba-full-calendar .fc td {\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    padding: 0;\n    vertical-align: top; }\n  :host /deep/ ba-full-calendar .fc td.fc-today {\n    border-style: double; }\n  :host /deep/ ba-full-calendar .fc .fc-row {\n    border: 0 solid; }\n  :host /deep/ ba-full-calendar .fc .fc-toolbar > * > * {\n    float: left;\n    margin-left: .75em; }\n  :host /deep/ ba-full-calendar .fc .fc-toolbar > * > :first-child {\n    margin-left: 0; }\n  :host /deep/ ba-full-calendar .fc .fc-axis {\n    vertical-align: middle;\n    padding: 0 4px;\n    white-space: nowrap; }\n\n:host /deep/ ba-full-calendar .fc-rtl {\n  text-align: right; }\n\n:host /deep/ ba-full-calendar .fc-unthemed th, :host /deep/ ba-full-calendar .fc-unthemed td, :host /deep/ ba-full-calendar .fc-unthemed hr, :host /deep/ ba-full-calendar .fc-unthemed thead, :host /deep/ ba-full-calendar .fc-unthemed tbody, :host /deep/ ba-full-calendar .fc-unthemed .fc-row, :host /deep/ ba-full-calendar .fc-unthemed .fc-popover {\n  border-color: rgba(255, 255, 255, 0.3); }\n\n:host /deep/ ba-full-calendar .fc-unthemed .fc-popover {\n  background-color: #ffffff;\n  border: 1px solid; }\n  :host /deep/ ba-full-calendar .fc-unthemed .fc-popover .fc-header {\n    background: #eee; }\n    :host /deep/ ba-full-calendar .fc-unthemed .fc-popover .fc-header .fc-close {\n      color: #666666;\n      font-size: 25px;\n      margin-top: 4px; }\n\n:host /deep/ ba-full-calendar .fc-unthemed hr {\n  background: #eee; }\n\n:host /deep/ ba-full-calendar .fc-unthemed .fc-today {\n  background: rgba(255, 255, 255, 0.15); }\n\n:host /deep/ ba-full-calendar .fc-highlight {\n  background: rgba(255, 255, 255, 0.25);\n  opacity: .3; }\n\n:host /deep/ ba-full-calendar .fc-icon {\n  display: inline-block;\n  font-size: 2em;\n  font-family: \"Courier New\", Courier, monospace; }\n\n:host /deep/ ba-full-calendar .fc-icon-left-single-arrow:after {\n  content: \"\\2039\";\n  font-weight: 700;\n  font-size: 100%; }\n\n:host /deep/ ba-full-calendar .fc-icon-right-single-arrow:after {\n  content: \"\\203A\";\n  font-weight: 700;\n  font-size: 100%; }\n\n:host /deep/ ba-full-calendar .fc-icon-left-double-arrow:after {\n  content: \"\\AB\"; }\n\n:host /deep/ ba-full-calendar .fc-icon-right-double-arrow:after {\n  content: \"\\BB\"; }\n\n:host /deep/ ba-full-calendar .fc-icon-x:after {\n  content: \"\\D7\"; }\n\n:host /deep/ ba-full-calendar .fc-state-default {\n  border: 1px solid;\n  outline: none;\n  background: #f5f5f5 repeat-x;\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1);\n  color: #333333; }\n  :host /deep/ ba-full-calendar .fc-state-default.fc-corner-left {\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px; }\n  :host /deep/ ba-full-calendar .fc-state-default.fc-corner-right {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px; }\n\n:host /deep/ ba-full-calendar .fc-state-hover,\n:host /deep/ ba-full-calendar .fc-state-down,\n:host /deep/ ba-full-calendar .fc-state-active,\n:host /deep/ ba-full-calendar .fc-state-disabled {\n  color: #333333;\n  background-color: rgba(255, 255, 255, 0.49); }\n\n:host /deep/ ba-full-calendar .fc-state-hover {\n  color: #333333;\n  text-decoration: none;\n  background-position: 0 -15px;\n  transition: background-position 0.1s linear; }\n\n:host /deep/ ba-full-calendar .fc-state-down,\n:host /deep/ ba-full-calendar .fc-state-active {\n  background: #cccccc none; }\n\n:host /deep/ ba-full-calendar .fc-state-disabled {\n  cursor: default;\n  background-image: none;\n  opacity: 0.65;\n  box-shadow: none; }\n\n:host /deep/ ba-full-calendar .fc-button-group {\n  display: inline-block; }\n\n:host /deep/ ba-full-calendar .fc-popover {\n  position: absolute; }\n  :host /deep/ ba-full-calendar .fc-popover .fc-header {\n    padding: 2px 4px; }\n  :host /deep/ ba-full-calendar .fc-popover .fc-header .fc-title {\n    margin: 0 2px; }\n  :host /deep/ ba-full-calendar .fc-popover .fc-header .fc-close {\n    cursor: pointer; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-popover .fc-header .fc-title,\n:host /deep/ ba-full-calendar .fc-rtl .fc-popover .fc-header .fc-close {\n  float: left; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-popover .fc-header .fc-title,\n:host /deep/ ba-full-calendar .fc-ltr .fc-popover .fc-header .fc-close {\n  float: right; }\n\n:host /deep/ ba-full-calendar .fc-popover > .ui-widget-header + .ui-widget-content {\n  border-top: 0; }\n\n:host /deep/ ba-full-calendar .fc-clear {\n  clear: both; }\n\n:host /deep/ ba-full-calendar .fc-bg,\n:host /deep/ ba-full-calendar .fc-highlight-skeleton,\n:host /deep/ ba-full-calendar .fc-helper-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n:host /deep/ ba-full-calendar .fc-bg {\n  bottom: 0; }\n\n:host /deep/ ba-full-calendar .fc-bg table {\n  height: 100%; }\n\n:host /deep/ ba-full-calendar .fc-row {\n  position: relative; }\n  :host /deep/ ba-full-calendar .fc-row table {\n    border-left: 0 hidden transparent;\n    border-right: 0 hidden transparent;\n    border-bottom: 0 hidden transparent; }\n  :host /deep/ ba-full-calendar .fc-row:first-child table {\n    border-top: 0 hidden transparent; }\n  :host /deep/ ba-full-calendar .fc-row .fc-bg {\n    z-index: 1; }\n  :host /deep/ ba-full-calendar .fc-row .fc-highlight-skeleton {\n    z-index: 2;\n    bottom: 0; }\n    :host /deep/ ba-full-calendar .fc-row .fc-highlight-skeleton table {\n      height: 100%; }\n    :host /deep/ ba-full-calendar .fc-row .fc-highlight-skeleton td {\n      border-color: transparent; }\n  :host /deep/ ba-full-calendar .fc-row .fc-content-skeleton {\n    position: relative;\n    z-index: 3;\n    padding-bottom: 2px; }\n  :host /deep/ ba-full-calendar .fc-row .fc-helper-skeleton {\n    z-index: 4; }\n  :host /deep/ ba-full-calendar .fc-row .fc-content-skeleton td,\n  :host /deep/ ba-full-calendar .fc-row .fc-helper-skeleton td {\n    background: none;\n    border-color: transparent;\n    border-bottom: 0; }\n  :host /deep/ ba-full-calendar .fc-row .fc-content-skeleton tbody td,\n  :host /deep/ ba-full-calendar .fc-row .fc-helper-skeleton tbody td {\n    border-top: 0; }\n\n:host /deep/ ba-full-calendar .fc-event {\n  position: relative;\n  display: block;\n  font-size: .85em;\n  line-height: 1.3;\n  border: 1px solid #00abff;\n  background-color: #00abff;\n  font-weight: 400; }\n\n:host /deep/ ba-full-calendar .fc-event,\n:host /deep/ ba-full-calendar .fc-event:hover,\n:host /deep/ ba-full-calendar .ui-widget .fc-event {\n  color: #ffffff;\n  text-decoration: none; }\n\n:host /deep/ ba-full-calendar .fc-event[href],\n:host /deep/ ba-full-calendar .fc-event.fc-draggable {\n  cursor: pointer; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-event {\n  margin: 1px 2px 0;\n  padding: 0 1px; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-day-grid-event.fc-not-start,\n:host /deep/ ba-full-calendar .fc-rtl .fc-day-grid-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-day-grid-event.fc-not-end,\n:host /deep/ ba-full-calendar .fc-rtl .fc-day-grid-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-event > .fc-content {\n  white-space: nowrap;\n  overflow: hidden; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-event .fc-time {\n  font-weight: 700; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-event .fc-resizer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 7px; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-day-grid-event .fc-resizer {\n  right: -3px;\n  cursor: e-resize; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-day-grid-event .fc-resizer {\n  left: -3px;\n  cursor: w-resize; }\n\n:host /deep/ ba-full-calendar a.fc-more {\n  margin: 1px 3px;\n  font-size: .85em;\n  cursor: pointer;\n  text-decoration: none; }\n  :host /deep/ ba-full-calendar a.fc-more:hover {\n    text-decoration: underline; }\n\n:host /deep/ ba-full-calendar .fc-limited {\n  display: none; }\n\n:host /deep/ ba-full-calendar .fc-day-grid .fc-row {\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-more-popover {\n  z-index: 2;\n  width: 220px; }\n  :host /deep/ ba-full-calendar .fc-more-popover .fc-event-container {\n    padding: 10px; }\n\n:host /deep/ ba-full-calendar .fc-toolbar {\n  text-align: center;\n  margin-bottom: 1em; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-left {\n    float: left; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-right {\n    float: right; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-center {\n    display: inline-block; }\n  :host /deep/ ba-full-calendar .fc-toolbar h2 {\n    margin: 0;\n    font-size: 24px;\n    width: 100%;\n    line-height: 26px; }\n  :host /deep/ ba-full-calendar .fc-toolbar button {\n    position: relative; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-state-hover, :host /deep/ ba-full-calendar .fc-toolbar .ui-state-hover {\n    z-index: 2; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-state-down {\n    z-index: 3; }\n  :host /deep/ ba-full-calendar .fc-toolbar .fc-state-active,\n  :host /deep/ ba-full-calendar .fc-toolbar .ui-state-active {\n    z-index: 4; }\n  :host /deep/ ba-full-calendar .fc-toolbar button:focus {\n    z-index: 5; }\n\n:host /deep/ ba-full-calendar .fc-view-container *,\n:host /deep/ ba-full-calendar .fc-view-container *:before,\n:host /deep/ ba-full-calendar .fc-view-container *:after {\n  box-sizing: content-box; }\n\n:host /deep/ ba-full-calendar .fc-view,\n:host /deep/ ba-full-calendar .fc-view > table {\n  position: relative;\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-basicWeek-view .fc-content-skeleton,\n:host /deep/ ba-full-calendar .fc-basicDay-view .fc-content-skeleton {\n  padding-top: 1px;\n  padding-bottom: 1em; }\n\n:host /deep/ ba-full-calendar .fc-basic-view tbody .fc-row {\n  min-height: 4em;\n  max-height: 70px; }\n\n:host /deep/ ba-full-calendar .fc-row.fc-rigid {\n  overflow: hidden; }\n\n:host /deep/ ba-full-calendar .fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n:host /deep/ ba-full-calendar .fc-basic-view .fc-week-number,\n:host /deep/ ba-full-calendar .fc-basic-view .fc-day-number {\n  padding: 0 2px; }\n\n:host /deep/ ba-full-calendar .fc-basic-view td.fc-week-number span,\n:host /deep/ ba-full-calendar .fc-basic-view td.fc-day-number {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n:host /deep/ ba-full-calendar .fc-basic-view .fc-week-number {\n  text-align: center; }\n\n:host /deep/ ba-full-calendar .fc-basic-view .fc-week-number span {\n  display: inline-block;\n  min-width: 1.25em; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-basic-view .fc-day-number {\n  text-align: right; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-basic-view .fc-day-number {\n  text-align: left; }\n\n:host /deep/ ba-full-calendar .fc-day-number.fc-other-month {\n  opacity: 0.3; }\n\n:host /deep/ ba-full-calendar .fc-agenda-view .fc-day-grid {\n  position: relative;\n  z-index: 2; }\n\n:host /deep/ ba-full-calendar .fc-agenda-view .fc-day-grid .fc-row {\n  min-height: 3em; }\n\n:host /deep/ ba-full-calendar .fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n  padding-top: 1px;\n  padding-bottom: 1em; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-axis {\n  text-align: right; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-axis {\n  text-align: left; }\n\n:host /deep/ ba-full-calendar .ui-widget td.fc-axis {\n  font-weight: 400; }\n\n:host /deep/ ba-full-calendar .fc-time-grid-container,\n:host /deep/ ba-full-calendar .fc-time-grid {\n  position: relative;\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-time-grid {\n  min-height: 100%; }\n\n:host /deep/ ba-full-calendar .fc-time-grid table {\n  border: 0 hidden transparent; }\n\n:host /deep/ ba-full-calendar .fc-time-grid > .fc-bg {\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-slats,\n:host /deep/ ba-full-calendar .fc-time-grid > hr {\n  position: relative;\n  z-index: 2; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-highlight-skeleton {\n  z-index: 3; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-content-skeleton {\n  position: absolute;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n:host /deep/ ba-full-calendar .fc-time-grid > .fc-helper-skeleton {\n  z-index: 5; }\n\n:host /deep/ ba-full-calendar .fc-slats td {\n  height: 1.5em;\n  border-bottom: 0; }\n\n:host /deep/ ba-full-calendar .fc-slats .fc-minor td {\n  border-top-style: dotted; }\n\n:host /deep/ ba-full-calendar .fc-slats .ui-widget-content {\n  background: none; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-highlight-container {\n  position: relative; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-highlight {\n  position: absolute;\n  left: 0;\n  right: 0; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-event-container {\n  position: relative; }\n\n:host /deep/ ba-full-calendar .fc-ltr .fc-time-grid .fc-event-container {\n  margin: 0 2.5% 0 2px; }\n\n:host /deep/ ba-full-calendar .fc-rtl .fc-time-grid .fc-event-container {\n  margin: 0 2px 0 2.5%; }\n\n:host /deep/ ba-full-calendar .fc-time-grid .fc-event {\n  position: absolute;\n  z-index: 1; }\n\n:host /deep/ ba-full-calendar .fc-time-grid-event {\n  overflow: hidden; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-not-start {\n    border-top-width: 0;\n    padding-top: 1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-not-end {\n    border-bottom-width: 0;\n    padding-bottom: 1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event > .fc-content {\n    position: relative;\n    z-index: 2; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event .fc-title {\n    padding: 0 1px; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event .fc-time {\n    padding: 0 1px;\n    font-size: .85em;\n    white-space: nowrap; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event .fc-bg {\n    z-index: 1;\n    background: #ffffff;\n    opacity: .25;\n    filter: alpha(opacity=25); }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-content {\n    white-space: nowrap; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-time {\n    display: inline-block;\n    vertical-align: top; }\n    :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-time span {\n      display: none; }\n    :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-time:before {\n      content: attr(data-start); }\n    :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-time:after {\n      content: \"\\A0-\\A0\"; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event.fc-short .fc-title {\n    display: inline-block;\n    vertical-align: top;\n    font-size: .85em;\n    padding: 0; }\n  :host /deep/ ba-full-calendar .fc-time-grid-event .fc-resizer {\n    position: absolute;\n    z-index: 3;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 8px;\n    overflow: hidden;\n    line-height: 8px;\n    font-size: 11px;\n    font-family: monospace;\n    text-align: center;\n    cursor: s-resize; }\n    :host /deep/ ba-full-calendar .fc-time-grid-event .fc-resizer:after {\n      content: \"=\"; }\n\n:host /deep/ ba-full-calendar .fc-day-grid-container.fc-scroller {\n  height: auto !important; }\n\n:host /deep/ ba-full-calendar .fc-body > tr > .fc-widget-content {\n  border: none; }\n\n:host /deep/ ba-full-calendar .fc-head {\n  color: #ffffff;\n  background-color: #00abff; }\n  :host /deep/ ba-full-calendar .fc-head td, :host /deep/ ba-full-calendar .fc-head th {\n    border: none; }\n  :host /deep/ ba-full-calendar .fc-head div.fc-widget-header {\n    padding: 5px 0; }\n\n:host /deep/ ba-full-calendar .fc-today-button, :host /deep/ ba-full-calendar .fc-month-button, :host /deep/ ba-full-calendar .fc-agendaWeek-button, :host /deep/ ba-full-calendar .fc-agendaDay-button {\n  display: none; }\n\n:host /deep/ ba-full-calendar .blurCalendar {\n  margin-top: 15px; }\n\n:host /deep/ ba-full-calendar .fc-prev-button, :host /deep/ ba-full-calendar .fc-next-button {\n  position: absolute;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  color: #ffffff; }\n\n:host /deep/ ba-full-calendar .fc-next-button {\n  left: 30px; }\n\n:host /deep/ ba-full-calendar .fc-day-number {\n  color: #ffffff;\n  opacity: 0.9; }\n\n/deep/.calendar-panel.card .card-body {\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px; } }\n\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px; } }\n\n.user-stats-card .card-title {\n  padding: 0 0 15px; }\n\n.blurCalendar {\n  height: 475px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .feed-messages-container .feed-message {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12); }\n  :host /deep/ .feed-messages-container .feed-message:first-child {\n    padding-top: 0; }\n  :host /deep/ .feed-messages-container .feed-message .hidden {\n    display: none !important; }\n  :host /deep/ .feed-messages-container .feed-message .message-icon {\n    cursor: pointer;\n    width: 60px;\n    height: 60px;\n    float: left;\n    position: relative;\n    margin-left: 20px; }\n    :host /deep/ .feed-messages-container .feed-message .message-icon > img, :host /deep/ .feed-messages-container .feed-message .message-icon .media-icon {\n      border-radius: 30px;\n      width: 100%;\n      height: 100%; }\n    :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon {\n      display: inline-block;\n      padding: 4px; }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon:after {\n        content: '';\n        display: inline-block;\n        width: 22px;\n        height: 22px;\n        background-size: contain; }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.video-message {\n        background: #f95372; }\n        :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.video-message:after {\n          background-image: url(\"/assets/img/theme/icon/feed/feed-video.svg\"); }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.image-message {\n        background: #8bd22f; }\n        :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.image-message:after {\n          width: 21px;\n          height: 21px;\n          margin-top: 1px;\n          margin-left: 1px;\n          border-radius: 5px;\n          background-image: url(\"/assets/img/theme/icon/feed/feed-image.svg\"); }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.geo-message {\n        background: #00abff; }\n        :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.geo-message:after {\n          width: 22px;\n          height: 22px;\n          background-image: url(\"/assets/img/theme/icon/feed/feed-location.svg\"); }\n    :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon {\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      right: -2px;\n      bottom: -4px;\n      border-radius: 15px; }\n  :host /deep/ .feed-messages-container .feed-message .text-block {\n    cursor: pointer;\n    position: relative;\n    border-radius: 5px;\n    margin: 0 0 0 80px;\n    padding: 5px 20px;\n    color: #ffffff;\n    width: 280px;\n    height: 70px; }\n    :host /deep/ .feed-messages-container .feed-message .text-block.text-message {\n      font-size: 12px;\n      width: inherit;\n      max-width: calc(100% - 80px);\n      height: inherit;\n      min-height: 60px; }\n      :host /deep/ .feed-messages-container .feed-message .text-block.text-message:before {\n        display: block; }\n      :host /deep/ .feed-messages-container .feed-message .text-block.text-message .message-content {\n        font-size: 12px;\n        line-height: 15px;\n        font-weight: 300; }\n    :host /deep/ .feed-messages-container .feed-message .text-block.small-message {\n      width: 155px;\n      height: 145px; }\n      :host /deep/ .feed-messages-container .feed-message .text-block.small-message .preview {\n        bottom: 0;\n        top: initial;\n        height: 87px; }\n        :host /deep/ .feed-messages-container .feed-message .text-block.small-message .preview img {\n          width: 155px;\n          height: 87px;\n          border-radius: 0 0 5px 5px; }\n  :host /deep/ .feed-messages-container .feed-message .message-header {\n    font-size: 12px;\n    padding-bottom: 5px; }\n    :host /deep/ .feed-messages-container .feed-message .message-header .author {\n      font-size: 13px;\n      padding-right: 5px; }\n  :host /deep/ .feed-messages-container .feed-message .message-content {\n    font-size: 18px;\n    line-height: 20px; }\n  :host /deep/ .feed-messages-container .feed-message .preview {\n    transition: 0s linear all;\n    display: inline-block; }\n    :host /deep/ .feed-messages-container .feed-message .preview img {\n      padding-top: 10px;\n      width: 100%;\n      height: auto;\n      float: none !important; }\n  :host /deep/ .feed-messages-container .feed-message .message-time {\n    width: 100%;\n    left: 0;\n    font-size: 11px;\n    padding-top: 10px;\n    color: #ffffff;\n    margin-bottom: 5px; }\n    :host /deep/ .feed-messages-container .feed-message .message-time .post-time {\n      float: left; }\n    :host /deep/ .feed-messages-container .feed-message .message-time .ago-time {\n      float: right; }\n\n:host /deep/ .feed-messages-container .line-clamp {\n  display: block;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 !important; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  :host /deep/ .feed-messages-container .line-clamp:after {\n    content: '...';\n    text-align: right;\n    bottom: 0;\n    right: 0;\n    width: 25%;\n    display: block;\n    position: absolute;\n    height: calc(1em * 1.2); } }\n\n@supports (-webkit-line-clamp: 1) {\n  :host /deep/ .feed-messages-container .line-clamp:after {\n    display: none !important; } }\n\n:host /deep/ .feed-messages-container .line-clamp-1 {\n  -webkit-line-clamp: 1;\n  height: calc(1em * 1.2 * 1); }\n\n:host /deep/ .feed-messages-container .line-clamp-2 {\n  -webkit-line-clamp: 2;\n  height: calc(1em * 1.2 * 2); }\n\n:host /deep/ .feed-messages-container .line-clamp-3 {\n  -webkit-line-clamp: 3;\n  height: calc(1em * 1.2 * 3); }\n\n:host /deep/ .feed-messages-container .line-clamp-4 {\n  -webkit-line-clamp: 4;\n  height: calc(1em * 1.2 * 4); }\n\n:host /deep/ .feed-messages-container .line-clamp-5 {\n  -webkit-line-clamp: 5;\n  height: calc(1em * 1.2 * 5); }\n\n/deep/.feed-panel .card-body {\n  padding: 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/.dashboard-line-chart {\n  width: 100%;\n  height: 340px;\n  margin-top: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .pie-charts {\n  color: #ffffff; }\n  :host /deep/ .pie-charts .pie-chart-item-container {\n    position: relative;\n    padding: 0 15px;\n    float: left;\n    box-sizing: border-box; }\n    :host /deep/ .pie-charts .pie-chart-item-container .card {\n      height: 114px; }\n  @media screen and (min-width: 1325px) {\n    :host /deep/ .pie-charts .pie-chart-item-container {\n      max-width: 25%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 25%;\n              flex: 0 0 25%; } }\n  @media screen and (min-width: 700px) and (max-width: 1325px) {\n    :host /deep/ .pie-charts .pie-chart-item-container {\n      max-width: 50%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 50%;\n              flex: 0 0 50%; } }\n  @media screen and (max-width: 700px) {\n    :host /deep/ .pie-charts .pie-chart-item-container {\n      max-width: 100%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 100%;\n              flex: 0 0 100%; } }\n  :host /deep/ .pie-charts .pie-chart-item {\n    position: relative; }\n    :host /deep/ .pie-charts .pie-chart-item .chart-icon {\n      position: absolute;\n      right: 0;\n      top: 3px; }\n  @media screen and (min-width: 1325px) and (max-width: 1650px), (min-width: 700px) and (max-width: 830px), (max-width: 400px) {\n    :host /deep/ .pie-charts .chart-icon {\n      display: none; } }\n  :host /deep/ .pie-charts .chart {\n    position: relative;\n    display: inline-block;\n    width: 84px;\n    height: 84px;\n    text-align: center;\n    float: left; }\n  :host /deep/ .pie-charts .chart canvas {\n    position: absolute;\n    top: 0;\n    left: 0; }\n  :host /deep/ .pie-charts .percent {\n    display: inline-block;\n    line-height: 84px;\n    z-index: 2;\n    font-size: 16px; }\n  :host /deep/ .pie-charts .percent:after {\n    content: '%';\n    margin-left: 0.1em;\n    font-size: .8em; }\n  :host /deep/ .pie-charts .description {\n    display: inline-block;\n    padding: 20px 0 0 20px;\n    font-size: 18px;\n    opacity: 0.9; }\n    :host /deep/ .pie-charts .description .description-stats {\n      padding-top: 8px;\n      font-size: 24px; }\n  :host /deep/ .pie-charts .angular {\n    margin-top: 100px; }\n  :host /deep/ .pie-charts .angular .chart {\n    margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/deep/.card.popular-app > .card-body {\n  padding: 0; }\n\n/deep/.card.popular-app .popular-app-img-container {\n  position: relative;\n  padding: 30px 0;\n  height: 260px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px; }\n  /deep/.card.popular-app .popular-app-img-container .popular-app-img {\n    width: 260px;\n    position: absolute;\n    -webkit-transform: translateY(-50%) translate(-50%);\n            transform: translateY(-50%) translate(-50%);\n    top: 50%;\n    left: 50%; }\n    /deep/.card.popular-app .popular-app-img-container .popular-app-img .logo-text {\n      display: inline-block;\n      margin: 10px;\n      font-size: 26px;\n      color: #ffffff; }\n\n/deep/.card.popular-app .popular-app-cost {\n  font-size: 20px;\n  padding: 20px 22px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  border-top: 1px solid rgba(255, 255, 255, 0.3); }\n\n/deep/.card.popular-app .popular-app-info {\n  padding: 20px 22px;\n  font-size: 20px;\n  text-align: center; }\n  /deep/.card.popular-app .popular-app-info .info-label {\n    font-size: 12px; }\n\n/deep/.card.popular-app .row {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  /deep/.card.popular-app .row > div {\n    padding: 0; }\n\n/deep/.blur .card.popular-app .popular-app-img-container {\n  background: rgba(0, 0, 0, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .task-todo-container input.task-todo {\n  margin-bottom: 8px; }\n\n:host /deep/ .task-todo-container ul.todo-list {\n  margin: 0;\n  padding: 0; }\n  :host /deep/ .task-todo-container ul.todo-list li {\n    margin: 0 0 -1px 0;\n    padding: 12px;\n    list-style: none;\n    position: relative;\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    cursor: -webkit-grab;\n    cursor: grab;\n    height: 42px; }\n    :host /deep/ .task-todo-container ul.todo-list li i.remove-todo {\n      position: absolute;\n      cursor: pointer;\n      top: 0px;\n      right: 12px;\n      font-size: 32px;\n      transition: color 0.2s;\n      color: rgba(255, 255, 255, 0.5);\n      visibility: hidden;\n      line-height: 42px; }\n      :host /deep/ .task-todo-container ul.todo-list li i.remove-todo:hover {\n        color: rgba(255, 255, 255, 0.6); }\n    :host /deep/ .task-todo-container ul.todo-list li:hover i.remove-todo {\n      visibility: visible; }\n    :host /deep/ .task-todo-container ul.todo-list li.checked .todo-text {\n      color: #ffffff; }\n    :host /deep/ .task-todo-container ul.todo-list li.checked:before {\n      background: rgba(255, 255, 255, 0.6) !important; }\n    :host /deep/ .task-todo-container ul.todo-list li i.mark {\n      display: block;\n      position: absolute;\n      top: -1px;\n      left: -1px;\n      height: 42px;\n      min-width: 4px;\n      background: rgba(255, 255, 255, 0.6);\n      cursor: pointer;\n      transition: min-width 0.3s ease-out; }\n    :host /deep/ .task-todo-container ul.todo-list li.active i.mark {\n      min-width: 40px; }\n    :host /deep/ .task-todo-container ul.todo-list li.active label.todo-checkbox > span:before {\n      color: white;\n      content: '\\F10C';\n      margin-right: 20px;\n      transition: margin-right 0.1s ease-out;\n      transition-delay: 0.2s;\n      float: none; }\n    :host /deep/ .task-todo-container ul.todo-list li.active label.todo-checkbox > input:checked + span:before {\n      content: '\\F00C'; }\n\n:host /deep/ .task-todo-container label.todo-checkbox {\n  width: 100%;\n  padding-right: 25px;\n  min-height: 16px;\n  cursor: pointer; }\n  :host /deep/ .task-todo-container label.todo-checkbox > span {\n    white-space: nowrap;\n    height: 16px; }\n    :host /deep/ .task-todo-container label.todo-checkbox > span:before {\n      border: none;\n      color: #ffffff;\n      transition: all 0.15s ease-out; }\n\n:host /deep/ .task-todo-container .add-item-icon {\n  display: none; }\n\n/deep/.ng2 .task-todo-container .todo-panel.panel, .blur .task-todo-container .todo-panel.panel {\n  color: white;\n  opacity: 0.9; }\n\n/deep/.ng2 .task-todo-container input.task-todo, .blur .task-todo-container input.task-todo {\n  color: white;\n  width: calc(100% - 25px);\n  border-radius: 0;\n  border: none;\n  background: transparent; }\n  /deep/.ng2 .task-todo-container input.task-todo:focus, .blur .task-todo-container input.task-todo:focus {\n    outline: none;\n    background-color: transparent;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12); }\n\n/deep/.ng2 .task-todo-container .add-item-icon, .blur .task-todo-container .add-item-icon {\n  display: block;\n  float: right;\n  margin-top: -45px;\n  margin-right: 5px;\n  font-size: 25px;\n  cursor: pointer; }\n\n/deep/.ng2 .task-todo-container ul.todo-list li, .blur .task-todo-container ul.todo-list li {\n  margin: 0;\n  border: none;\n  font-weight: 300; }\n  /deep/.ng2 .task-todo-container ul.todo-list li .blur-container, .blur .task-todo-container ul.todo-list li .blur-container {\n    height: 40px;\n    position: absolute;\n    width: calc(100% + 40px);\n    top: 0;\n    left: -25px;\n    overflow-y: hidden; }\n  /deep/.ng2 .task-todo-container ul.todo-list li:hover .blur-container, .blur .task-todo-container ul.todo-list li:hover .blur-container {\n    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12); }\n  /deep/.ng2 .task-todo-container ul.todo-list li:hover .blur-box, .blur .task-todo-container ul.todo-list li:hover .blur-box {\n    height: 100%;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);\n    -webkit-filter: blur(3px); }\n  /deep/.ng2 .task-todo-container ul.todo-list li i.remove-todo, .blur .task-todo-container ul.todo-list li i.remove-todo {\n    color: white;\n    opacity: 0.4; }\n    /deep/.ng2 .task-todo-container ul.todo-list li i.remove-todo:hover, .blur .task-todo-container ul.todo-list li i.remove-todo:hover {\n      color: white;\n      opacity: 0.95; }\n  /deep/.ng2 .task-todo-container ul.todo-list li i.mark, .blur .task-todo-container ul.todo-list li i.mark {\n    min-width: 40px;\n    display: none; }\n  /deep/.ng2 .task-todo-container ul.todo-list li label.todo-checkbox > span:before, .blur .task-todo-container ul.todo-list li label.todo-checkbox > span:before {\n    position: absolute;\n    color: #ffffff;\n    content: '\\F10C';\n    float: none;\n    margin-right: 6px;\n    transition: none; }\n  /deep/.ng2 .task-todo-container ul.todo-list li.checked label.todo-checkbox > span:before, .blur .task-todo-container ul.todo-list li.checked label.todo-checkbox > span:before {\n    content: '\\F00C'; }\n\n/deep/.ng2 .task-todo-container .box-shadow-border, .blur .task-todo-container .box-shadow-border {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.12);\n  width: calc(100% + 44px);\n  margin-left: -22px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/deep/ .ng2 .traffic-chart .canvas-holder, /deep/ .blur .traffic-chart .canvas-holder {\n  border: 15px solid rgba(0, 0, 0, 0.2);\n  border-radius: 150px; }\n\n/deep/ .ng2 .chart-bg, /deep/ .blur .chart-bg {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n:host /deep/ .channels-block {\n  width: 100%;\n  position: relative; }\n  :host /deep/ .channels-block .chart-bg {\n    position: absolute;\n    width: 180px;\n    height: 180px;\n    left: 60px;\n    top: 60px;\n    border-radius: 100px; }\n  :host /deep/ .channels-block .channels-info {\n    display: inline-block;\n    width: calc(100% - 370px);\n    margin-left: 70px;\n    margin-top: -20px; }\n  :host /deep/ .channels-block .small-container .channels-info {\n    display: none; }\n  :host /deep/ .channels-block .channels-info-item p {\n    margin-bottom: 9px;\n    font-size: 18px;\n    opacity: 0.9; }\n  :host /deep/ .channels-block .channels-info-item .channel-number {\n    display: inline-block;\n    float: right; }\n  :host /deep/ .channels-block .traffic-chart {\n    width: 300px;\n    position: relative;\n    min-height: 300px;\n    float: left; }\n  :host /deep/ .channels-block .traffic-legend {\n    display: inline-block;\n    padding: 70px 0 0 0;\n    width: 160px; }\n  :host /deep/ .channels-block .traffic-legend ul.doughnut-legend li {\n    list-style: none;\n    font-size: 12px;\n    margin-bottom: 12px;\n    line-height: 16px;\n    position: relative;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 120px; }\n    :host /deep/ .channels-block .traffic-legend ul.doughnut-legend li span {\n      float: left;\n      display: inline-block;\n      width: 16px;\n      height: 16px;\n      margin-right: 10px; }\n  :host /deep/ .channels-block .canvas-holder {\n    display: inline-block;\n    width: 300px;\n    height: 300px;\n    position: relative;\n    float: left; }\n  :host /deep/ .channels-block .traffic-text {\n    width: 100%;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    margin-top: -24px;\n    line-height: 24px;\n    text-align: center;\n    font-size: 18px; }\n    :host /deep/ .channels-block .traffic-text span {\n      display: block;\n      font-size: 18px;\n      color: #ffffff; }\n  :host /deep/ .channels-block .channel-change {\n    display: block;\n    margin-bottom: 12px; }\n  :host /deep/ .channels-block .channel-progress {\n    height: 4px;\n    border-radius: 0;\n    width: 100%;\n    margin-bottom: 0;\n    background-color: rgba(0, 0, 0, 0.15);\n    box-shadow: none; }\n    :host /deep/ .channels-block .channel-progress .progress-bar {\n      height: 4px;\n      background-color: rgba(255, 255, 255, 0.95);\n      box-shadow: none; }\n  :host /deep/ .channels-block .legend-color {\n    width: 30px;\n    height: 30px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);\n    position: relative;\n    top: 27px;\n    border-radius: 15px;\n    left: -45px; }\n  @media (max-width: 768px) {\n    :host /deep/ .channels-block .card.medium-card.traffic-panel {\n      height: auto; }\n    :host /deep/ .channels-block div.channels-info {\n      display: block;\n      width: calc(100% - 88px);\n      margin-top: -65px;\n      margin-bottom: 10px; }\n    :host /deep/ .channels-block .traffic-chart {\n      position: inherit;\n      float: none;\n      margin: 0 auto; }\n    :host /deep/ .channels-block .chart-bg {\n      left: calc(50% - 90px); } }\n  @media (max-width: 1465px) and (min-width: 1199px) {\n    :host /deep/ .channels-block .channels-info {\n      display: none; }\n    :host /deep/ .channels-block .traffic-chart {\n      position: inherit;\n      float: none;\n      margin: 0 auto; }\n    :host /deep/ .channels-block .chart-bg {\n      left: calc(50% - 90px); } }\n  @media (max-width: 380px) {\n    :host /deep/ .channels-block .traffic-chart {\n      width: 240px; }\n    :host /deep/ .channels-block .canvas-holder {\n      width: 240px;\n      height: 240px; }\n    :host /deep/ .channels-block .chart-bg {\n      top: 30px; } }\n  @media (max-width: 320px) {\n    :host /deep/ .channels-block .chart-bg {\n      left: 50px;\n      top: 50px;\n      width: 142px;\n      height: 142px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .dashboard-users-map {\n  width: 100%;\n  height: 315px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1183:
/***/ (function(module, exports) {

module.exports = "<ba-full-calendar [baFullCalendarConfiguration]=\"calendarConfiguration\" baFullCalendarClass=\"blurCalendar\" (onCalendarReady)=\"onCalendarReady($event)\"></ba-full-calendar>\n"

/***/ }),

/***/ 1184:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\n    <pie-chart></pie-chart>\n  </div>\n</div>\n\n<div class=\"row\">\n  <ba-card class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-12\"\n                     title=\"dashboard.acquisition_channels\" baCardClass=\"traffic-panel medium-card\">\n    <traffic-chart></traffic-chart>\n  </ba-card>\n\n  <ba-card class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-12\"\n           title=\"dashboard.users_by_country\" baCardClass=\"medium-card\">\n    <users-map></users-map>\n  </ba-card>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xlg-9 col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12\">\n    <div class=\"row\">\n      <ba-card class=\"col-xlg-8 col-xl-12 col-lg-12 col-md-7 col-sm-12 col-12\"\n               title=\"dashboard.revenue\" baCardClass=\"medium-card\">\n        <line-chart></line-chart>\n      </ba-card>\n      <ba-card class=\"col-xlg-4 col-xl-12 col-lg-12 col-md-5 col-sm-12 col-12\"\n               baCardClass=\"popular-app medium-card\">\n        <popular-app></popular-app>\n      </ba-card>\n    </div>\n  </div>\n\n  <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12\">\n    <ba-card title=\"dashboard.feed\"\n             baCardClass=\"large-card with-scroll feed-panel\">\n      <feed></feed>\n    </ba-card>\n  </div>\n\n</div>\n\n<div class=\"row shift-up\">\n  <ba-card class=\"col-xlg-3 col-lg-6 col-md-12 col-sm-12 col-12\" title=\"dashboard.todo_list\"\n           baCardClass=\"xmedium-card feed-comply-panel with-scroll todo-panel\">\n    <todo></todo>\n  </ba-card>\n  <ba-card class=\"col-xlg-6 col-lg-6 col-md-12 col-sm-12 col-12\" title=\"dashboard.calendar\"\n           baCardClass=\"xmedium-card feed-comply-panel with-scroll calendar-panel\">\n    <calendar></calendar>\n  </ba-card>\n</div>\n"

/***/ }),

/***/ 1185:
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-messages-container\">\n  <div class=\"feed-message\" *ngFor=\"let message of feed\" (click)=\"expandMessage(message)\">\n    <div class=\"message-icon\" *ngIf=\"message.type == 'text-message'\">\n      <img class=\"photo-icon\" src=\"{{ ( message.author | baProfilePicture ) }}\">\n    </div>\n    <div class=\"message-icon\" *ngIf=\"message.type != 'text-message'\">\n      <img class=\"photo-icon\" src=\"{{ ( message.author | baProfilePicture ) }}\">\n      <span class=\"sub-photo-icon\" [ngClass]=\"message.type\"></span>\n    </div>\n    <div class=\"text-block text-message\">\n      <div class=\"message-header\">\n        <span class=\"author\">{{ message.author }} {{ message.surname}}</span>\n      </div>\n      <div class=\"message-content line-clamp\" [ngClass]=\"{'line-clamp-2' : !message.expanded}\">\n        <span *ngIf=\"message.preview\">{{ message.header }} </span>{{ message.text }}\n      </div>\n      <div class=\"preview\" [ngClass]=\"{'hidden': !message.expanded}\" *ngIf=\"message.preview\">\n        <a href=\"{{ message.link }}\" target=\"_blank\">\n          <img src=\"{{ ( message.preview | baAppPicture )}}\">\n        </a>\n      </div>\n      <div [ngClass]=\"{'hidden': !message.expanded}\" class=\"message-time\">\n        <div class=\"post-time\">\n          {{ message.time }}\n        </div>\n        <div class=\"ago-time\">\n          {{ message.ago }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1186:
/***/ (function(module, exports) {

module.exports = "<ba-am-chart baAmChartClass=\"dashboard-line-chart\" [baAmChartConfiguration]=\"chartData\" (onChartReady)=\"initChart($event)\"></ba-am-chart>\n"

/***/ }),

/***/ 1187:
/***/ (function(module, exports) {

module.exports = "<div class=\"row pie-charts\">\n\n  <ba-card *ngFor=\"let chart of charts\" class=\"pie-chart-item-container col-xlg-3 col-lg-3 col-md-6 col-sm-12 col-12\">\n\n    <div class=\"pie-chart-item\">\n      <div class=\"chart\" [attr.data-rel]=\"chart.color\" data-percent=\"60\">\n        <span class=\"percent\"></span>\n      </div>\n      <div class=\"description\">\n        <div translate>{{ chart.description }}</div>\n        <div class=\"description-stats\">{{ chart.stats }}</div>\n      </div>\n      <i class=\"chart-icon i-{{ chart.icon }}\"></i>\n    </div>\n\n  </ba-card>\n</div>\n"

/***/ }),

/***/ 1188:
/***/ (function(module, exports) {

module.exports = "<div class=\"popular-app-img-container\">\n  <div class=\"popular-app-img\">\n    <img src=\"{{ ( 'app/my-app-logo.png' | baAppPicture ) }}\"/>\n    <span class=\"logo-text\" translate>{{'dashboard.popular_app.super_app'}}</span>\n  </div>\n</div>\n<div class=\"popular-app-cost row\">\n  <div class=\"col-9\" translate>{{'dashboard.popular_app.most_popular_app'}}</div>\n  <div class=\"col-3 text-right\">\n    175$\n  </div>\n</div>\n<div class=\"popular-app-info row\">\n  <div class=\"col-4 text-left\">\n    <div class=\"info-label\" translate>{{'dashboard.popular_app.total_visits'}}</div>\n    <div>47,512</div>\n  </div>\n  <div class=\"col-4 text-center\">\n    <div class=\"info-label\" translate>{{'dashboard.popular_app.new_visits'}}</div>\n    <div>9,217</div>\n  </div>\n  <div class=\"col-4 text-right\">\n    <div class=\"info-label\" translate>{{'dashboard.popular_app.sales'}}</div>\n    <div>2,928</div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1189:
/***/ (function(module, exports) {

module.exports = "<div class=\"task-todo-container\">\n  <input type=\"text\" value=\"\" class=\"form-control task-todo\" placeholder=\"{{'dashboard.todo.task_todo' | translate}}\" (keyup)=\"addToDoItem($event)\" [(ngModel)]=\"newTodoText\"/>\n  <i (click)=\"addToDoItem($event)\" class=\"add-item-icon ion-plus-round\"></i>\n  <div class=\"box-shadow-border\"></div>\n\n  <ul class=\"todo-list\">\n    <li *ngFor=\"let item of getNotDeleted()\" [ngClass]=\"{checked: item.isChecked, active: item.isActive}\"\n        (mouseenter)=\"item.isActive=true\" (mouseleave)=\"item.isActive=false\">\n\n      <div class=\"blur-container\"><div class=\"blur-box\"></div></div>\n      <i class=\"mark\" [ngStyle]=\"{ 'background-color': item.color }\"></i>\n      <label class=\"todo-checkbox custom-checkbox custom-input-success\">\n        <input type=\"checkbox\" [(ngModel)]=\"item.isChecked\">\n        <span class=\"cut-with-dots\">{{ item.text }}</span>\n      </label>\n      <i class=\"remove-todo ion-ios-close-empty\" (click)=\"item.deleted = true\"></i>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 1190:
/***/ (function(module, exports) {

module.exports = "<div class=\"channels-block\">\n\n  <div class=\"chart-bg\"></div>\n  <div class=\"traffic-chart\" id=\"trafficChart\">\n    <div class=\"canvas-holder\">\n      <canvas class=\"chart-area\" width=\"300px\" height=\"300px\"></canvas>\n      <div class=\"traffic-text\">\n        1,900,128\n        <span translate>{{'dashboard.traffic_chart.view_total'}}</span>\n      </div>\n    </div>\n    <div class=\"traffic-legend\"></div>\n  </div>\n\n  <div class=\"channels-info\">\n    <div>\n      <div class=\"channels-info-item\" *ngFor=\"let item of doughnutData\">\n        <div class=\"legend-color\" [ngStyle]=\"{'background-color': item.color }\"></div>\n        <p>{{ item.label }}<span class=\"channel-number\">+{{ item.percentage }}%</span></p>\n        <div class=\"progress progress-sm channel-progress\">\n          <div class=\"progress-bar\" role=\"progressbar\"\n               [attr.aria-valuenow]=\"item.percentage\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width: item.percentage + '%' }\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1191:
/***/ (function(module, exports) {

module.exports = "<ba-am-chart baAmChartClass=\"dashboard-users-map\" [baAmChartConfiguration]=\"mapData\"></ba-am-chart>\n"

/***/ }),

/***/ 1242:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translation_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__ = __webpack_require__(1007);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popularApp__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pieChart__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trafficChart__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__usersMap__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lineChart__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feed__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__todo__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__calendar__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_service__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__feed_feed_service__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lineChart_lineChart_service__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pieChart_pieChart_service__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__todo_todo_service__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__trafficChart_trafficChart_service__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__usersMap_usersMap_service__ = __webpack_require__(948);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__popularApp__["a" /* PopularApp */],
            __WEBPACK_IMPORTED_MODULE_8__pieChart__["a" /* PieChart */],
            __WEBPACK_IMPORTED_MODULE_9__trafficChart__["a" /* TrafficChart */],
            __WEBPACK_IMPORTED_MODULE_10__usersMap__["a" /* UsersMap */],
            __WEBPACK_IMPORTED_MODULE_11__lineChart__["a" /* LineChart */],
            __WEBPACK_IMPORTED_MODULE_12__feed__["a" /* Feed */],
            __WEBPACK_IMPORTED_MODULE_13__todo__["a" /* Todo */],
            __WEBPACK_IMPORTED_MODULE_14__calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* Dashboard */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_service__["a" /* CalendarService */],
            __WEBPACK_IMPORTED_MODULE_16__feed_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_17__lineChart_lineChart_service__["a" /* LineChartService */],
            __WEBPACK_IMPORTED_MODULE_18__pieChart_pieChart_service__["a" /* PieChartService */],
            __WEBPACK_IMPORTED_MODULE_19__todo_todo_service__["a" /* TodoService */],
            __WEBPACK_IMPORTED_MODULE_20__trafficChart_trafficChart_service__["a" /* TrafficChartService */],
            __WEBPACK_IMPORTED_MODULE_21__usersMap_usersMap_service__["a" /* UsersMapService */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarService = (function () {
    function CalendarService(_baConfig) {
        this._baConfig = _baConfig;
    }
    CalendarService.prototype.getData = function () {
        var dashboardColors = this._baConfig.get().colors.dashboard;
        return {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultDate: '2016-03-08',
            selectable: true,
            selectHelper: true,
            editable: true,
            eventLimit: true,
            events: [
                {
                    title: 'All Day Event',
                    start: '2016-03-01',
                    color: dashboardColors.silverTree
                },
                {
                    title: 'Long Event',
                    start: '2016-03-07',
                    end: '2016-03-10',
                    color: dashboardColors.blueStone
                },
                {
                    title: 'Dinner',
                    start: '2016-03-14T20:00:00',
                    color: dashboardColors.surfieGreen
                },
                {
                    title: 'Birthday Party',
                    start: '2016-04-01T07:00:00',
                    color: dashboardColors.gossip
                }
            ]
        };
    };
    return CalendarService;
}());
CalendarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], CalendarService);

var _a;
//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard = (function () {
    function Dashboard() {
    }
    return Dashboard;
}());
Dashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        styles: [__webpack_require__(1097)],
        template: __webpack_require__(1184)
    }),
    __metadata("design:paramtypes", [])
], Dashboard);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FeedService = (function () {
    function FeedService() {
        this._data = [
            {
                type: 'text-message',
                author: 'Kostya',
                surname: 'Danovsky',
                header: 'Posted new message',
                text: 'Guys, check this out: \nA police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and found the problem. A 10 years old boy was standing on the side of the road with a huge hand painted sign which said "Radar Trap Ahead." A little more investigative work led the officer to the boy\'s accomplice: another boy about 100 yards beyond the radar trap with a sign reading "TIPS" and a bucket at his feet full of change.',
                time: 'Today 11:55 pm',
                ago: '25 minutes ago',
                expanded: false,
            }, {
                type: 'video-message',
                author: 'Andrey',
                surname: 'Hrabouski',
                header: 'Added new video',
                text: '"Vader and Me"',
                preview: 'app/feed/vader-and-me-preview.png',
                link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
                time: 'Today 9:30 pm',
                ago: '3 hrs ago',
                expanded: false,
            }, {
                type: 'image-message',
                author: 'Vlad',
                surname: 'Lugovsky',
                header: 'Added new image',
                text: '"My little kitten"',
                preview: 'app/feed/my-little-kitten.png',
                link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
                time: 'Today 2:20 pm',
                ago: '10 hrs ago',
                expanded: false,
            }, {
                type: 'text-message',
                author: 'Nasta',
                surname: 'Linnie',
                header: 'Posted new message',
                text: 'Haha lol',
                time: '11.11.2015',
                ago: '2 days ago',
                expanded: false,
            }, {
                type: 'geo-message',
                author: 'Nick',
                surname: 'Cat',
                header: 'Posted location',
                text: '"New York, USA"',
                preview: 'app/feed/new-york-location.png',
                link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
                time: '11.11.2015',
                ago: '2 days ago',
                expanded: false,
            }, {
                type: 'text-message',
                author: 'Vlad',
                surname: 'Lugovsky',
                header: 'Posted new message',
                text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
                time: '12.11.2015',
                ago: '3 days ago',
                expanded: false,
            }, {
                type: 'text-message',
                author: 'Andrey',
                surname: 'Hrabouski',
                header: 'Posted new message',
                text: 'How do you smuggle an elephant across the border? Put a slice of bread on each side, and call him "lunch".',
                time: '14.11.2015',
                ago: '5 days ago',
                expanded: false,
            }, {
                type: 'text-message',
                author: 'Nasta',
                surname: 'Linnie',
                header: 'Posted new message',
                text: 'When your hammer is C++, everything begins to look like a thumb.',
                time: '14.11.2015',
                ago: '5 days ago',
                expanded: false,
            }, {
                type: 'text-message',
                author: 'Alexander',
                surname: 'Demeshko',
                header: 'Posted new message',
                text: '“I mean, they say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time." ©',
                time: '15.11.2015',
                ago: '6 days ago',
                expanded: false,
            }, {
                type: 'image-message',
                author: 'Nick',
                surname: 'Cat',
                header: 'Posted photo',
                text: '"Protein Heroes"',
                preview: 'app/feed/genom.png',
                link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
                time: '16.11.2015',
                ago: '7 days ago',
                expanded: false,
            },
            {
                type: 'text-message',
                author: 'Kostya',
                surname: 'Danovsky',
                header: 'Posted new message',
                text: 'Why did the CoffeeScript developer keep getting lost? Because he couldn\'t find his source without a map',
                time: '18.11.2015',
                ago: '9 days ago',
                expanded: false,
            }
        ];
    }
    FeedService.prototype.getData = function () {
        return this._data;
    };
    return FeedService;
}());
FeedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FeedService);

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartService = (function () {
    function LineChartService(_baConfig) {
        this._baConfig = _baConfig;
    }
    LineChartService.prototype.getData = function () {
        var layoutColors = this._baConfig.get().colors;
        var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;
        return {
            type: 'serial',
            theme: 'blur',
            marginTop: 15,
            marginRight: 15,
            responsive: {
                'enabled': true
            },
            dataProvider: [
                { date: new Date(2012, 11), value: 0, value0: 0 },
                { date: new Date(2013, 0), value: 15000, value0: 19000 },
                { date: new Date(2013, 1), value: 30000, value0: 20000 },
                { date: new Date(2013, 2), value: 25000, value0: 22000 },
                { date: new Date(2013, 3), value: 21000, value0: 25000 },
                { date: new Date(2013, 4), value: 24000, value0: 29000 },
                { date: new Date(2013, 5), value: 31000, value0: 26000 },
                { date: new Date(2013, 6), value: 40000, value0: 25000 },
                { date: new Date(2013, 7), value: 37000, value0: 20000 },
                { date: new Date(2013, 8), value: 18000, value0: 22000 },
                { date: new Date(2013, 9), value: 5000, value0: 26000 },
                { date: new Date(2013, 10), value: 40000, value0: 30000 },
                { date: new Date(2013, 11), value: 20000, value0: 25000 },
                { date: new Date(2014, 0), value: 5000, value0: 13000 },
                { date: new Date(2014, 1), value: 3000, value0: 13000 },
                { date: new Date(2014, 2), value: 1800, value0: 13000 },
                { date: new Date(2014, 3), value: 10400, value0: 13000 },
                { date: new Date(2014, 4), value: 25500, value0: 13000 },
                { date: new Date(2014, 5), value: 2100, value0: 13000 },
                { date: new Date(2014, 6), value: 6500, value0: 13000 },
                { date: new Date(2014, 7), value: 1100, value0: 13000 },
                { date: new Date(2014, 8), value: 17200, value0: 13000 },
                { date: new Date(2014, 9), value: 26900, value0: 13000 },
                { date: new Date(2014, 10), value: 14100, value0: 13000 },
                { date: new Date(2014, 11), value: 35300, value0: 13000 },
                { date: new Date(2015, 0), value: 54800, value0: 13000 },
                { date: new Date(2015, 1), value: 49800, value0: 13000 }
            ],
            categoryField: 'date',
            categoryAxis: {
                parseDates: true,
                gridAlpha: 0,
                color: layoutColors.defaultText,
                axisColor: layoutColors.defaultText
            },
            valueAxes: [
                {
                    minVerticalGap: 50,
                    gridAlpha: 0,
                    color: layoutColors.defaultText,
                    axisColor: layoutColors.defaultText
                }
            ],
            graphs: [
                {
                    id: 'g0',
                    bullet: 'none',
                    useLineColorForBulletBorder: true,
                    lineColor: __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* colorHelper */].hexToRgbA(graphColor, 0.3),
                    lineThickness: 1,
                    negativeLineColor: layoutColors.danger,
                    type: 'smoothedLine',
                    valueField: 'value0',
                    fillAlphas: 1,
                    fillColorsField: 'lineColor'
                },
                {
                    id: 'g1',
                    bullet: 'none',
                    useLineColorForBulletBorder: true,
                    lineColor: __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* colorHelper */].hexToRgbA(graphColor, 0.15),
                    lineThickness: 1,
                    negativeLineColor: layoutColors.danger,
                    type: 'smoothedLine',
                    valueField: 'value',
                    fillAlphas: 1,
                    fillColorsField: 'lineColor'
                }
            ],
            chartCursor: {
                categoryBalloonDateFormat: 'MM YYYY',
                categoryBalloonColor: '#4285F4',
                categoryBalloonAlpha: 0.7,
                cursorAlpha: 0,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                valueLineAlpha: 0.5
            },
            dataDateFormat: 'MM YYYY',
            export: {
                enabled: true
            },
            creditsPosition: 'bottom-right',
            zoomOutButton: {
                backgroundColor: '#fff',
                backgroundAlpha: 0
            },
            zoomOutText: '',
            pathToImages: __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.amChart
        };
    };
    return LineChartService;
}());
LineChartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], LineChartService);

var _a;
//# sourceMappingURL=lineChart.service.js.map

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieChartService = (function () {
    function PieChartService(_baConfig) {
        this._baConfig = _baConfig;
    }
    PieChartService.prototype.getData = function () {
        var pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
        return [
            {
                color: pieColor,
                description: 'dashboard.new_visits',
                stats: '57,820',
                icon: 'person',
            }, {
                color: pieColor,
                description: 'dashboard.purchases',
                stats: '$ 89,745',
                icon: 'money',
            }, {
                color: pieColor,
                description: 'dashboard.active_users',
                stats: '178,391',
                icon: 'face',
            }, {
                color: pieColor,
                description: 'dashboard.returned',
                stats: '32,592',
                icon: 'refresh',
            }
        ];
    };
    return PieChartService;
}());
PieChartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], PieChartService);

var _a;
//# sourceMappingURL=pieChart.service.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoService = (function () {
    function TodoService() {
        this._todoList = [
            { text: 'Check me out' },
            { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
            { text: 'Ex has semper alterum, expetenda dignissim' },
            { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
            { text: 'Simul erroribus ad usu' },
            { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
            { text: 'Get in touch with akveo team' },
            { text: 'Write email to business cat' },
            { text: 'Have fun with blur admin' },
            { text: 'What do you think?' },
        ];
    }
    TodoService.prototype.getTodoList = function () {
        return this._todoList;
    };
    return TodoService;
}());
TodoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], TodoService);

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficChartService = (function () {
    function TrafficChartService(_baConfig) {
        this._baConfig = _baConfig;
    }
    TrafficChartService.prototype.getData = function () {
        var dashboardColors = this._baConfig.get().colors.dashboard;
        return [
            {
                value: 2000,
                color: dashboardColors.white,
                highlight: __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* colorHelper */].shade(dashboardColors.white, 15),
                label: 'Other',
                percentage: 87,
                order: 1,
            }, {
                value: 1500,
                color: dashboardColors.gossip,
                highlight: __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* colorHelper */].shade(dashboardColors.gossip, 15),
                label: 'Search engines',
                percentage: 22,
                order: 4,
            }, {
                value: 1000,
                color: dashboardColors.silverTree,
                highlight: __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* colorHelper */].shade(dashboardColors.silverTree, 15),
                label: 'Referral Traffic',
                percentage: 70,
                order: 3,
            }, {
                value: 1200,
                color: dashboardColors.surfieGreen,
                highlight: __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* colorHelper */].shade(dashboardColors.surfieGreen, 15),
                label: 'Direct Traffic',
                percentage: 38,
                order: 2,
            }, {
                value: 400,
                color: dashboardColors.blueStone,
                highlight: __WEBPACK_IMPORTED_MODULE_1__theme__["d" /* colorHelper */].shade(dashboardColors.blueStone, 15),
                label: 'Ad Campaigns',
                percentage: 17,
                order: 0,
            },
        ];
    };
    return TrafficChartService;
}());
TrafficChartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], TrafficChartService);

var _a;
//# sourceMappingURL=trafficChart.service.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersMapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersMapService = (function () {
    function UsersMapService(_baConfig) {
        this._baConfig = _baConfig;
    }
    UsersMapService.prototype.getData = function () {
        var layoutColors = this._baConfig.get().colors;
        return {
            type: 'map',
            theme: 'blur',
            zoomControl: { zoomControlEnabled: false, panControlEnabled: false },
            dataProvider: {
                map: 'worldLow',
                zoomLevel: 3.5,
                zoomLongitude: 10,
                zoomLatitude: 52,
                areas: [
                    { title: 'Austria', id: 'AT', color: layoutColors.primary, customData: '1 244', groupId: '1' },
                    { title: 'Ireland', id: 'IE', color: layoutColors.primary, customData: '1 342', groupId: '1' },
                    { title: 'Denmark', id: 'DK', color: layoutColors.primary, customData: '1 973', groupId: '1' },
                    { title: 'Finland', id: 'FI', color: layoutColors.primary, customData: '1 573', groupId: '1' },
                    { title: 'Sweden', id: 'SE', color: layoutColors.primary, customData: '1 084', groupId: '1' },
                    { title: 'Great Britain', id: 'GB', color: layoutColors.primary, customData: '1 452', groupId: '1' },
                    { title: 'Italy', id: 'IT', color: layoutColors.primary, customData: '1 321', groupId: '1' },
                    { title: 'France', id: 'FR', color: layoutColors.primary, customData: '1 112', groupId: '1' },
                    { title: 'Spain', id: 'ES', color: layoutColors.primary, customData: '1 865', groupId: '1' },
                    { title: 'Greece', id: 'GR', color: layoutColors.primary, customData: '1 453', groupId: '1' },
                    { title: 'Germany', id: 'DE', color: layoutColors.primary, customData: '1 957', groupId: '1' },
                    { title: 'Belgium', id: 'BE', color: layoutColors.primary, customData: '1 011', groupId: '1' },
                    { title: 'Luxembourg', id: 'LU', color: layoutColors.primary, customData: '1 011', groupId: '1' },
                    { title: 'Netherlands', id: 'NL', color: layoutColors.primary, customData: '1 213', groupId: '1' },
                    { title: 'Portugal', id: 'PT', color: layoutColors.primary, customData: '1 291', groupId: '1' },
                    { title: 'Lithuania', id: 'LT', color: layoutColors.successLight, customData: '567', groupId: '2' },
                    { title: 'Latvia', id: 'LV', color: layoutColors.successLight, customData: '589', groupId: '2' },
                    { title: 'Czech Republic ', id: 'CZ', color: layoutColors.successLight, customData: '785', groupId: '2' },
                    { title: 'Slovakia', id: 'SK', color: layoutColors.successLight, customData: '965', groupId: '2' },
                    { title: 'Estonia', id: 'EE', color: layoutColors.successLight, customData: '685', groupId: '2' },
                    { title: 'Hungary', id: 'HU', color: layoutColors.successLight, customData: '854', groupId: '2' },
                    { title: 'Cyprus', id: 'CY', color: layoutColors.successLight, customData: '754', groupId: '2' },
                    { title: 'Malta', id: 'MT', color: layoutColors.successLight, customData: '867', groupId: '2' },
                    { title: 'Poland', id: 'PL', color: layoutColors.successLight, customData: '759', groupId: '2' },
                    { title: 'Romania', id: 'RO', color: layoutColors.success, customData: '302', groupId: '3' },
                    { title: 'Bulgaria', id: 'BG', color: layoutColors.success, customData: '102', groupId: '3' },
                    { title: 'Slovenia', id: 'SI', color: layoutColors.danger, customData: '23', groupId: '4' },
                    { title: 'Croatia', id: 'HR', color: layoutColors.danger, customData: '96', groupId: '4' }
                ]
            },
            areasSettings: {
                rollOverOutlineColor: layoutColors.border,
                rollOverColor: layoutColors.primaryDark,
                alpha: 0.8,
                unlistedAreasAlpha: 0.2,
                unlistedAreasColor: layoutColors.defaultText,
                balloonText: '[[title]]: [[customData]] users'
            },
            legend: {
                width: '100%',
                marginRight: 27,
                marginLeft: 27,
                equalWidths: false,
                backgroundAlpha: 0.3,
                backgroundColor: layoutColors.border,
                borderColor: layoutColors.border,
                borderAlpha: 1,
                top: 362,
                left: 0,
                horizontalGap: 10,
                data: [
                    {
                        title: 'over 1 000 users',
                        color: layoutColors.primary
                    },
                    {
                        title: '500 - 1 000 users',
                        color: layoutColors.successLight
                    },
                    {
                        title: '100 - 500 users',
                        color: layoutColors.success
                    },
                    {
                        title: '0 - 100 users',
                        color: layoutColors.danger
                    }
                ]
            },
            export: {
                enabled: true
            },
            creditsPosition: 'bottom-right',
            pathToImages: __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.amChart
        };
    };
    return UsersMapService;
}());
UsersMapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* BaThemeConfigProvider */]) === "function" && _a || Object])
], UsersMapService);

var _a;
//# sourceMappingURL=usersMap.service.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map