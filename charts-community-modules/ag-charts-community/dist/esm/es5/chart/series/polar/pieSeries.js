var __extends = (this && this.__extends) || (function () {
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { Group } from '../../../scene/group';
import { Line } from '../../../scene/shape/line';
import { Text } from '../../../scene/shape/text';
import { Circle } from '../../marker/circle';
import { Selection } from '../../../scene/selection';
import { LinearScale } from '../../../scale/linearScale';
import { Sector } from '../../../scene/shape/sector';
import { BBox } from '../../../scene/bbox';
import { HighlightStyle, SeriesTooltip, SeriesNodeBaseClickEvent, valueProperty, rangedValueProperty, accumulativeValueProperty, } from './../series';
import { Label } from '../../label';
import { PointerEvents } from '../../../scene/node';
import { normalizeAngle180, toRadians } from '../../../util/angle';
import { toFixed, mod } from '../../../util/number';
import { Layers } from '../../layers';
import { Caption } from '../../../caption';
import { PolarSeries } from './polarSeries';
import { ChartAxisDirection } from '../../chartAxisDirection';
import { toTooltipHtml } from '../../tooltip/tooltip';
import { isPointInSector, boxCollidesSector } from '../../../util/sector';
import { BOOLEAN, NUMBER, OPT_FUNCTION, OPT_LINE_DASH, OPT_NUMBER, OPT_STRING, STRING, COLOR_STRING_ARRAY, OPT_COLOR_STRING_ARRAY, Validate, COLOR_STRING, } from '../../../util/validation';
import { StateMachine } from '../../../motion/states';
import * as easing from '../../../motion/easing';
import { DataModel } from '../../data/dataModel';
import { normalisePropertyTo } from '../../data/processors';
var PieSeriesNodeBaseClickEvent = /** @class */ (function (_super) {
    __extends(PieSeriesNodeBaseClickEvent, _super);
    function PieSeriesNodeBaseClickEvent(angleKey, calloutLabelKey, sectorLabelKey, radiusKey, nativeEvent, datum, series) {
        var _this = _super.call(this, nativeEvent, datum, series) || this;
        _this.angleKey = angleKey;
        _this.calloutLabelKey = calloutLabelKey;
        _this.sectorLabelKey = sectorLabelKey;
        _this.radiusKey = radiusKey;
        return _this;
    }
    return PieSeriesNodeBaseClickEvent;
}(SeriesNodeBaseClickEvent));
var PieSeriesNodeClickEvent = /** @class */ (function (_super) {
    __extends(PieSeriesNodeClickEvent, _super);
    function PieSeriesNodeClickEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'nodeClick';
        return _this;
    }
    return PieSeriesNodeClickEvent;
}(PieSeriesNodeBaseClickEvent));
var PieSeriesNodeDoubleClickEvent = /** @class */ (function (_super) {
    __extends(PieSeriesNodeDoubleClickEvent, _super);
    function PieSeriesNodeDoubleClickEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'nodeDoubleClick';
        return _this;
    }
    return PieSeriesNodeDoubleClickEvent;
}(PieSeriesNodeBaseClickEvent));
var PieNodeTag;
(function (PieNodeTag) {
    PieNodeTag[PieNodeTag["Sector"] = 0] = "Sector";
    PieNodeTag[PieNodeTag["Callout"] = 1] = "Callout";
    PieNodeTag[PieNodeTag["Label"] = 2] = "Label";
})(PieNodeTag || (PieNodeTag = {}));
var PieSeriesCalloutLabel = /** @class */ (function (_super) {
    __extends(PieSeriesCalloutLabel, _super);
    function PieSeriesCalloutLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offset = 3; // from the callout line
        _this.minAngle = 0; // in degrees
        _this.formatter = undefined;
        _this.minSpacing = 4;
        _this.maxCollisionOffset = 50;
        return _this;
    }
    __decorate([
        Validate(NUMBER(0))
    ], PieSeriesCalloutLabel.prototype, "offset", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeriesCalloutLabel.prototype, "minAngle", void 0);
    __decorate([
        Validate(OPT_FUNCTION)
    ], PieSeriesCalloutLabel.prototype, "formatter", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeriesCalloutLabel.prototype, "minSpacing", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeriesCalloutLabel.prototype, "maxCollisionOffset", void 0);
    return PieSeriesCalloutLabel;
}(Label));
var PieSeriesSectorLabel = /** @class */ (function (_super) {
    __extends(PieSeriesSectorLabel, _super);
    function PieSeriesSectorLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positionOffset = 0;
        _this.positionRatio = 0.5;
        _this.formatter = undefined;
        return _this;
    }
    __decorate([
        Validate(NUMBER())
    ], PieSeriesSectorLabel.prototype, "positionOffset", void 0);
    __decorate([
        Validate(NUMBER(0, 1))
    ], PieSeriesSectorLabel.prototype, "positionRatio", void 0);
    __decorate([
        Validate(OPT_FUNCTION)
    ], PieSeriesSectorLabel.prototype, "formatter", void 0);
    return PieSeriesSectorLabel;
}(Label));
var PieSeriesCalloutLine = /** @class */ (function () {
    function PieSeriesCalloutLine() {
        this.colors = undefined;
        this.length = 10;
        this.strokeWidth = 1;
    }
    __decorate([
        Validate(OPT_COLOR_STRING_ARRAY)
    ], PieSeriesCalloutLine.prototype, "colors", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeriesCalloutLine.prototype, "length", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeriesCalloutLine.prototype, "strokeWidth", void 0);
    return PieSeriesCalloutLine;
}());
var PieSeriesTooltip = /** @class */ (function (_super) {
    __extends(PieSeriesTooltip, _super);
    function PieSeriesTooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderer = undefined;
        return _this;
    }
    __decorate([
        Validate(OPT_FUNCTION)
    ], PieSeriesTooltip.prototype, "renderer", void 0);
    return PieSeriesTooltip;
}(SeriesTooltip));
var PieTitle = /** @class */ (function (_super) {
    __extends(PieTitle, _super);
    function PieTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showInLegend = false;
        return _this;
    }
    __decorate([
        Validate(BOOLEAN)
    ], PieTitle.prototype, "showInLegend", void 0);
    return PieTitle;
}(Caption));
export { PieTitle };
var DoughnutInnerLabel = /** @class */ (function (_super) {
    __extends(DoughnutInnerLabel, _super);
    function DoughnutInnerLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = '';
        _this.margin = 2;
        return _this;
    }
    __decorate([
        Validate(STRING)
    ], DoughnutInnerLabel.prototype, "text", void 0);
    __decorate([
        Validate(NUMBER())
    ], DoughnutInnerLabel.prototype, "margin", void 0);
    return DoughnutInnerLabel;
}(Label));
export { DoughnutInnerLabel };
var DoughnutInnerCircle = /** @class */ (function () {
    function DoughnutInnerCircle() {
        this.fill = 'transparent';
        this.fillOpacity = 1;
    }
    __decorate([
        Validate(COLOR_STRING)
    ], DoughnutInnerCircle.prototype, "fill", void 0);
    __decorate([
        Validate(OPT_NUMBER(0, 1))
    ], DoughnutInnerCircle.prototype, "fillOpacity", void 0);
    return DoughnutInnerCircle;
}());
export { DoughnutInnerCircle };
var PieStateMachine = /** @class */ (function (_super) {
    __extends(PieStateMachine, _super);
    function PieStateMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PieStateMachine;
}(StateMachine));
var PieSeries = /** @class */ (function (_super) {
    __extends(PieSeries, _super);
    function PieSeries(moduleCtx) {
        var _this = _super.call(this, { moduleCtx: moduleCtx, useLabelLayer: true }) || this;
        _this.radiusScale = new LinearScale();
        _this.groupSelection = Selection.select(_this.contentGroup, Group);
        _this.highlightSelection = Selection.select(_this.highlightGroup, Group);
        _this.nodeData = [];
        // When a user toggles a series item (e.g. from the legend), its boolean state is recorded here.
        _this.seriesItemEnabled = [];
        _this.title = undefined;
        _this.calloutLabel = new PieSeriesCalloutLabel();
        _this.sectorLabel = new PieSeriesSectorLabel();
        _this.calloutLine = new PieSeriesCalloutLine();
        _this.tooltip = new PieSeriesTooltip();
        /**
         * The key of the numeric field to use to determine the angle (for example,
         * a pie sector angle).
         */
        _this.angleKey = '';
        _this.angleName = '';
        _this.innerLabels = [];
        _this.innerCircle = undefined;
        /**
         * The key of the numeric field to use to determine the radii of pie sectors.
         * The largest value will correspond to the full radius and smaller values to
         * proportionally smaller radii.
         */
        _this.radiusKey = undefined;
        _this.radiusName = undefined;
        _this.radiusMin = undefined;
        _this.radiusMax = undefined;
        _this.calloutLabelKey = undefined;
        _this.calloutLabelName = undefined;
        _this.sectorLabelKey = undefined;
        _this.sectorLabelName = undefined;
        _this.legendItemKey = undefined;
        _this.fills = ['#c16068', '#a2bf8a', '#ebcc87', '#80a0c3', '#b58dae', '#85c0d1'];
        _this.strokes = ['#874349', '#718661', '#a48f5f', '#5a7088', '#7f637a', '#5d8692'];
        _this.fillOpacity = 1;
        _this.strokeOpacity = 1;
        _this.lineDash = [0];
        _this.lineDashOffset = 0;
        _this.formatter = undefined;
        /**
         * The series rotation in degrees.
         */
        _this.rotation = 0;
        _this.outerRadiusOffset = 0;
        _this.outerRadiusRatio = 1;
        _this.innerRadiusOffset = 0;
        _this.innerRadiusRatio = 1;
        _this.strokeWidth = 1;
        _this.shadow = undefined;
        _this.highlightStyle = new HighlightStyle();
        _this.surroundingRadius = undefined;
        _this.angleScale = new LinearScale();
        // Each sector is a ratio of the whole, where all ratios add up to 1.
        _this.angleScale.domain = [0, 1];
        // Add 90 deg to start the first pie at 12 o'clock.
        _this.angleScale.range = [-Math.PI, Math.PI].map(function (angle) { return angle + Math.PI / 2; });
        _this.backgroundGroup = _this.rootGroup.appendChild(new Group({
            name: _this.id + "-background",
            layer: true,
            zIndex: Layers.SERIES_BACKGROUND_ZINDEX,
        }));
        var pieCalloutLabels = new Group({ name: 'pieCalloutLabels' });
        var pieSectorLabels = new Group({ name: 'pieSectorLabels' });
        var innerLabels = new Group({ name: 'innerLabels' });
        _this.labelGroup.append(pieCalloutLabels);
        _this.labelGroup.append(pieSectorLabels);
        _this.labelGroup.append(innerLabels);
        _this.calloutLabelSelection = Selection.select(pieCalloutLabels, Group);
        _this.sectorLabelSelection = Selection.select(pieSectorLabels, Text);
        _this.innerLabelsSelection = Selection.select(innerLabels, Text);
        _this.animationState = new PieStateMachine('empty', {
            empty: {
                on: {
                    update: {
                        target: 'ready',
                        action: function () { return _this.animateEmptyUpdateReady(); },
                    },
                },
            },
            ready: {
                on: {
                    update: {
                        target: 'ready',
                        action: function () { return _this.animateReadyUpdateReady(); },
                    },
                },
            },
        });
        return _this;
    }
    Object.defineProperty(PieSeries.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (input) {
            this._data = input;
            this.processSeriesItemEnabled();
        },
        enumerable: false,
        configurable: true
    });
    PieSeries.prototype.addChartEventListeners = function () {
        var _this = this;
        var _a;
        (_a = this.chartEventManager) === null || _a === void 0 ? void 0 : _a.addListener('legend-item-click', function (event) { return _this.onLegendItemClick(event); });
    };
    PieSeries.prototype.visibleChanged = function () {
        this.processSeriesItemEnabled();
    };
    PieSeries.prototype.processSeriesItemEnabled = function () {
        var _a;
        var _b = this, data = _b.data, visible = _b.visible;
        this.seriesItemEnabled = (_a = data === null || data === void 0 ? void 0 : data.map(function () { return visible; })) !== null && _a !== void 0 ? _a : [];
    };
    PieSeries.prototype.getDomain = function (direction) {
        if (direction === ChartAxisDirection.X) {
            return this.angleScale.domain;
        }
        else {
            return this.radiusScale.domain;
        }
    };
    PieSeries.prototype.processData = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, data, _d, angleKey, radiusKey, seriesItemEnabled, extraProps;
            return __generator(this, function (_e) {
                _c = this.data, data = _c === void 0 ? [] : _c;
                _d = this, angleKey = _d.angleKey, radiusKey = _d.radiusKey, seriesItemEnabled = _d.seriesItemEnabled;
                if (!angleKey)
                    return [2 /*return*/];
                extraProps = [];
                if (radiusKey) {
                    extraProps.push(rangedValueProperty(radiusKey, { id: 'radiusValue', min: (_a = this.radiusMin) !== null && _a !== void 0 ? _a : 0, max: this.radiusMax }), valueProperty(radiusKey, true, { id: "radiusRaw" }), // Raw value pass-through.
                    normalisePropertyTo({ id: 'radiusValue' }, [0, 1], (_b = this.radiusMin) !== null && _b !== void 0 ? _b : 0, this.radiusMax));
                    extraProps.push();
                }
                data = data.map(function (d, idx) {
                    var _a;
                    return (seriesItemEnabled[idx] ? d : __assign(__assign({}, d), (_a = {}, _a[angleKey] = 0, _a)));
                });
                this.dataModel = new DataModel({
                    props: __spreadArray([
                        accumulativeValueProperty(angleKey, true, { id: "angleValue" }),
                        valueProperty(angleKey, true, { id: "angleRaw" }),
                        normalisePropertyTo({ id: 'angleValue' }, [0, 1], 0)
                    ], __read(extraProps)),
                });
                this.processedData = this.dataModel.processData(data);
                return [2 /*return*/];
            });
        });
    };
    PieSeries.prototype.maybeRefreshNodeData = function () {
        if (!this.nodeDataRefresh)
            return;
        var _a = __read(this._createNodeData(), 1), _b = _a[0], _c = _b === void 0 ? {} : _b, _d = _c.nodeData, nodeData = _d === void 0 ? [] : _d;
        this.nodeData = nodeData;
        this.nodeDataRefresh = false;
    };
    PieSeries.prototype.createNodeData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._createNodeData()];
            });
        });
    };
    PieSeries.prototype._createNodeData = function () {
        var _this = this;
        var _a, _b, _c, _d;
        var _e = this, seriesId = _e.id, processedData = _e.processedData, dataModel = _e.dataModel, rotation = _e.rotation, angleScale = _e.angleScale;
        if (!processedData || !dataModel || processedData.type !== 'ungrouped')
            return [];
        var angleIdx = (_b = (_a = dataModel.resolveProcessedDataIndexById("angleValue")) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : -1;
        var radiusIdx = (_d = (_c = dataModel.resolveProcessedDataIndexById("radiusValue")) === null || _c === void 0 ? void 0 : _c.index) !== null && _d !== void 0 ? _d : -1;
        if (angleIdx < 0)
            return [];
        var currentStart = 0;
        var nodeData = processedData.data.map(function (group, index) {
            var _a;
            var datum = group.datum, values = group.values;
            var currentValue = values[angleIdx];
            var startAngle = angleScale.convert(currentStart) + toRadians(rotation);
            currentStart = currentValue;
            var endAngle = angleScale.convert(currentStart) + toRadians(rotation);
            var span = Math.abs(endAngle - startAngle);
            var midAngle = startAngle + span / 2;
            var angleValue = values[angleIdx + 1];
            var radius = radiusIdx >= 0 ? (_a = values[radiusIdx]) !== null && _a !== void 0 ? _a : 1 : 1;
            var radiusValue = radiusIdx >= 0 ? values[radiusIdx + 1] : undefined;
            var labels = _this.getLabels(datum, midAngle, span, true);
            var sectorFormat = _this.getSectorFormat(datum, index, index, false);
            return __assign({ itemId: index, series: _this, datum: datum, index: index, angleValue: angleValue, midAngle: midAngle, midCos: Math.cos(midAngle), midSin: Math.sin(midAngle), startAngle: startAngle, endAngle: endAngle, sectorFormat: sectorFormat, radius: radius, radiusValue: radiusValue }, labels);
        });
        return [
            {
                itemId: seriesId,
                nodeData: nodeData,
                labelData: nodeData,
            },
        ];
    };
    PieSeries.prototype.getLabels = function (datum, midAngle, span, skipDisabled) {
        var _a = this, calloutLabel = _a.calloutLabel, sectorLabel = _a.sectorLabel, legendItemKey = _a.legendItemKey, callbackCache = _a.ctx.callbackCache;
        var calloutLabelKey = !skipDisabled || calloutLabel.enabled ? this.calloutLabelKey : undefined;
        var sectorLabelKey = !skipDisabled || sectorLabel.enabled ? this.sectorLabelKey : undefined;
        if (!calloutLabelKey && !sectorLabelKey && !legendItemKey)
            return {};
        var labelFormatterParams = this.getLabelFormatterParams(datum);
        var calloutLabelText;
        if (calloutLabelKey) {
            var calloutLabelMinAngle = toRadians(calloutLabel.minAngle);
            var calloutLabelVisible = span > calloutLabelMinAngle;
            if (!calloutLabelVisible) {
                calloutLabelText = undefined;
            }
            else if (calloutLabel.formatter) {
                calloutLabelText = callbackCache.call(calloutLabel.formatter, labelFormatterParams);
            }
            else {
                calloutLabelText = String(datum[calloutLabelKey]);
            }
        }
        var sectorLabelText;
        if (sectorLabelKey) {
            if (sectorLabel.formatter) {
                sectorLabelText = callbackCache.call(sectorLabel.formatter, labelFormatterParams);
            }
            else {
                sectorLabelText = String(datum[sectorLabelKey]);
            }
        }
        var legendItemText;
        if (legendItemKey) {
            legendItemText = String(datum[legendItemKey]);
        }
        return __assign(__assign(__assign({}, (calloutLabelText != null
            ? {
                calloutLabel: __assign(__assign({}, this.getTextAlignment(midAngle)), { text: calloutLabelText, hidden: false, collisionTextAlign: undefined, collisionOffsetY: 0, box: undefined }),
            }
            : {})), (sectorLabelText != null ? { sectorLabel: { text: sectorLabelText } } : {})), (legendItemKey != null && legendItemText != null
            ? { legendItem: { key: legendItemKey, text: legendItemText } }
            : {}));
    };
    PieSeries.prototype.getLabelFormatterParams = function (datum) {
        var _a = this, seriesId = _a.id, radiusKey = _a.radiusKey, radiusName = _a.radiusName, angleKey = _a.angleKey, angleName = _a.angleName, calloutLabelKey = _a.calloutLabelKey, calloutLabelName = _a.calloutLabelName, sectorLabelKey = _a.sectorLabelKey, sectorLabelName = _a.sectorLabelName;
        return {
            datum: datum,
            angleKey: angleKey,
            angleValue: datum[angleKey],
            angleName: angleName,
            radiusKey: radiusKey,
            radiusValue: radiusKey ? datum[radiusKey] : undefined,
            radiusName: radiusName,
            calloutLabelKey: calloutLabelKey,
            calloutLabelValue: calloutLabelKey ? datum[calloutLabelKey] : undefined,
            calloutLabelName: calloutLabelName,
            sectorLabelKey: sectorLabelKey,
            sectorLabelValue: sectorLabelKey ? datum[sectorLabelKey] : undefined,
            sectorLabelName: sectorLabelName,
            seriesId: seriesId,
        };
    };
    PieSeries.prototype.getTextAlignment = function (midAngle) {
        var quadrantTextOpts = [
            { textAlign: 'center', textBaseline: 'bottom' },
            { textAlign: 'left', textBaseline: 'middle' },
            { textAlign: 'center', textBaseline: 'hanging' },
            { textAlign: 'right', textBaseline: 'middle' },
        ];
        var midAngle180 = normalizeAngle180(midAngle);
        // Split the circle into quadrants like so: ⊗
        var quadrantStart = (-3 * Math.PI) / 4; // same as `normalizeAngle180(toRadians(-135))`
        var quadrantOffset = midAngle180 - quadrantStart;
        var quadrant = Math.floor(quadrantOffset / (Math.PI / 2));
        var quadrantIndex = mod(quadrant, quadrantTextOpts.length);
        return quadrantTextOpts[quadrantIndex];
    };
    PieSeries.prototype.getSectorFormat = function (datum, itemId, index, highlight) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var _k = this, angleKey = _k.angleKey, radiusKey = _k.radiusKey, fills = _k.fills, strokes = _k.strokes, seriesFillOpacity = _k.fillOpacity, formatter = _k.formatter, seriesId = _k.id, callbackCache = _k.ctx.callbackCache;
        var highlightedDatum = (_a = this.highlightManager) === null || _a === void 0 ? void 0 : _a.getActiveHighlight();
        var isDatumHighlighted = highlight && (highlightedDatum === null || highlightedDatum === void 0 ? void 0 : highlightedDatum.series) === this && itemId === highlightedDatum.itemId;
        var highlightedStyle = isDatumHighlighted ? this.highlightStyle.item : null;
        var fill = (_b = highlightedStyle === null || highlightedStyle === void 0 ? void 0 : highlightedStyle.fill) !== null && _b !== void 0 ? _b : fills[index % fills.length];
        var fillOpacity = (_c = highlightedStyle === null || highlightedStyle === void 0 ? void 0 : highlightedStyle.fillOpacity) !== null && _c !== void 0 ? _c : seriesFillOpacity;
        var stroke = (_d = highlightedStyle === null || highlightedStyle === void 0 ? void 0 : highlightedStyle.stroke) !== null && _d !== void 0 ? _d : strokes[index % strokes.length];
        var strokeWidth = (_e = highlightedStyle === null || highlightedStyle === void 0 ? void 0 : highlightedStyle.strokeWidth) !== null && _e !== void 0 ? _e : this.getStrokeWidth(this.strokeWidth);
        var format;
        if (formatter) {
            format = callbackCache.call(formatter, {
                datum: datum,
                angleKey: angleKey,
                radiusKey: radiusKey,
                fill: fill,
                stroke: stroke,
                strokeWidth: strokeWidth,
                highlighted: isDatumHighlighted,
                seriesId: seriesId,
            });
        }
        return {
            fill: (_f = format === null || format === void 0 ? void 0 : format.fill) !== null && _f !== void 0 ? _f : fill,
            fillOpacity: (_g = format === null || format === void 0 ? void 0 : format.fillOpacity) !== null && _g !== void 0 ? _g : fillOpacity,
            stroke: (_h = format === null || format === void 0 ? void 0 : format.stroke) !== null && _h !== void 0 ? _h : stroke,
            strokeWidth: (_j = format === null || format === void 0 ? void 0 : format.strokeWidth) !== null && _j !== void 0 ? _j : strokeWidth,
        };
    };
    PieSeries.prototype.getInnerRadius = function () {
        var _a = this, radius = _a.radius, innerRadiusRatio = _a.innerRadiusRatio, innerRadiusOffset = _a.innerRadiusOffset;
        var innerRadius = radius * (innerRadiusRatio !== null && innerRadiusRatio !== void 0 ? innerRadiusRatio : 1) + (innerRadiusOffset ? innerRadiusOffset : 0);
        if (innerRadius === radius || innerRadius < 0) {
            return 0;
        }
        return innerRadius;
    };
    PieSeries.prototype.getOuterRadius = function () {
        var _a = this, radius = _a.radius, outerRadiusRatio = _a.outerRadiusRatio, outerRadiusOffset = _a.outerRadiusOffset;
        var outerRadius = radius * (outerRadiusRatio !== null && outerRadiusRatio !== void 0 ? outerRadiusRatio : 1) + (outerRadiusOffset ? outerRadiusOffset : 0);
        if (outerRadius < 0) {
            return 0;
        }
        return outerRadius;
    };
    PieSeries.prototype.updateRadiusScale = function () {
        var innerRadius = this.getInnerRadius();
        var outerRadius = this.getOuterRadius();
        this.radiusScale.range = [innerRadius, outerRadius];
    };
    PieSeries.prototype.getTitleTranslationY = function () {
        var _a, _b;
        var outerRadius = Math.max(0, this.radiusScale.range[1]);
        if (outerRadius === 0) {
            return NaN;
        }
        var spacing = (_b = (_a = this.title) === null || _a === void 0 ? void 0 : _a.spacing) !== null && _b !== void 0 ? _b : 0;
        var titleOffset = 2 + spacing;
        var dy = Math.max(0, -outerRadius);
        return -outerRadius - titleOffset - dy;
    };
    PieSeries.prototype.update = function (_a) {
        var seriesRect = _a.seriesRect;
        return __awaiter(this, void 0, void 0, function () {
            var title, dy, titleBox;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        title = this.title;
                        this.maybeRefreshNodeData();
                        this.updateTitleNodes();
                        this.updateRadiusScale();
                        this.updateInnerCircleNodes();
                        this.rootGroup.translationX = this.centerX;
                        this.rootGroup.translationY = this.centerY;
                        if (title) {
                            dy = this.getTitleTranslationY();
                            titleBox = title.node.computeBBox();
                            title.node.visible =
                                title.enabled && isFinite(dy) && !this.bboxIntersectsSurroundingSeries(titleBox, 0, dy);
                            title.node.translationY = isFinite(dy) ? dy : 0;
                        }
                        this.updateNodeMidPoint();
                        return [4 /*yield*/, this.updateSelections()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.updateNodes(seriesRect)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PieSeries.prototype.updateTitleNodes = function () {
        var _a, _b;
        var _c = this, title = _c.title, oldTitle = _c.oldTitle;
        if (oldTitle !== title) {
            if (oldTitle) {
                (_a = this.labelGroup) === null || _a === void 0 ? void 0 : _a.removeChild(oldTitle.node);
            }
            if (title) {
                title.node.textBaseline = 'bottom';
                (_b = this.labelGroup) === null || _b === void 0 ? void 0 : _b.appendChild(title.node);
            }
            this.oldTitle = title;
        }
    };
    PieSeries.prototype.updateInnerCircleNodes = function () {
        var _a;
        var _b = this, innerCircle = _b.innerCircle, oldInnerCircle = _b.oldInnerCircle, oldNode = _b.innerCircleNode;
        if (oldInnerCircle !== innerCircle) {
            var circle = void 0;
            if (oldNode) {
                this.backgroundGroup.removeChild(oldNode);
            }
            if (innerCircle) {
                circle = new Circle();
                circle.fill = innerCircle.fill;
                circle.fillOpacity = (_a = innerCircle.fillOpacity) !== null && _a !== void 0 ? _a : 1;
                this.backgroundGroup.appendChild(circle);
            }
            this.oldInnerCircle = innerCircle;
            this.innerCircleNode = circle;
        }
    };
    PieSeries.prototype.updateNodeMidPoint = function () {
        var _this = this;
        this.nodeData.forEach(function (d) {
            var radius = _this.radiusScale.convert(d.radius);
            d.nodeMidPoint = {
                x: d.midCos * Math.max(0, radius / 2),
                y: d.midSin * Math.max(0, radius / 2),
            };
        });
    };
    PieSeries.prototype.updateSelections = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateGroupSelection()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PieSeries.prototype.updateGroupSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, groupSelection, highlightSelection, calloutLabelSelection, sectorLabelSelection, innerLabelsSelection, update;
            var _this = this;
            return __generator(this, function (_b) {
                _a = this, groupSelection = _a.groupSelection, highlightSelection = _a.highlightSelection, calloutLabelSelection = _a.calloutLabelSelection, sectorLabelSelection = _a.sectorLabelSelection, innerLabelsSelection = _a.innerLabelsSelection;
                update = function (selection) {
                    return selection.update(_this.nodeData, function (group) {
                        var sector = new Sector();
                        sector.tag = PieNodeTag.Sector;
                        group.appendChild(sector);
                    });
                };
                this.groupSelection = update(groupSelection);
                this.highlightSelection = update(highlightSelection);
                calloutLabelSelection.update(this.nodeData, function (group) {
                    var line = new Line();
                    line.tag = PieNodeTag.Callout;
                    line.pointerEvents = PointerEvents.None;
                    group.appendChild(line);
                    var text = new Text();
                    text.tag = PieNodeTag.Label;
                    text.pointerEvents = PointerEvents.None;
                    group.appendChild(text);
                });
                sectorLabelSelection.update(this.nodeData, function (node) {
                    node.pointerEvents = PointerEvents.None;
                });
                innerLabelsSelection.update(this.innerLabels, function (node) {
                    node.pointerEvents = PointerEvents.None;
                });
                return [2 /*return*/];
            });
        });
    };
    PieSeries.prototype.updateNodes = function (seriesRect) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var highlightedDatum, isVisible, radiusScale, innerRadius, updateSectorFn;
            var _this = this;
            return __generator(this, function (_b) {
                highlightedDatum = (_a = this.highlightManager) === null || _a === void 0 ? void 0 : _a.getActiveHighlight();
                isVisible = this.seriesItemEnabled.indexOf(true) >= 0;
                this.rootGroup.visible = isVisible;
                this.backgroundGroup.visible = isVisible;
                this.contentGroup.visible = isVisible;
                this.highlightGroup.visible = isVisible && (highlightedDatum === null || highlightedDatum === void 0 ? void 0 : highlightedDatum.series) === this;
                this.labelGroup.visible = isVisible;
                this.contentGroup.opacity = this.getOpacity();
                this.updateInnerCircle();
                radiusScale = this.radiusScale;
                innerRadius = radiusScale.convert(0);
                updateSectorFn = function (sector, datum, index, isDatumHighlighted) {
                    var radius = radiusScale.convert(datum.radius);
                    // Bring highlighted sector's parent group to front.
                    var sectorParent = sector.parent;
                    var sectorGrandParent = sectorParent === null || sectorParent === void 0 ? void 0 : sectorParent.parent;
                    if (isDatumHighlighted && sectorParent && sectorGrandParent) {
                        sectorGrandParent.removeChild(sectorParent);
                        sectorGrandParent.appendChild(sectorParent);
                    }
                    sector.innerRadius = Math.max(0, innerRadius);
                    sector.outerRadius = Math.max(0, radius);
                    if (isDatumHighlighted) {
                        sector.startAngle = datum.startAngle;
                        sector.endAngle = datum.endAngle;
                    }
                    var format = _this.getSectorFormat(datum.datum, datum.itemId, index, isDatumHighlighted);
                    sector.fill = format.fill;
                    sector.stroke = format.stroke;
                    sector.strokeWidth = format.strokeWidth;
                    sector.fillOpacity = format.fillOpacity;
                    sector.strokeOpacity = _this.strokeOpacity;
                    sector.lineDash = _this.lineDash;
                    sector.lineDashOffset = _this.lineDashOffset;
                    sector.fillShadow = _this.shadow;
                    sector.lineJoin = 'round';
                    sector.visible = _this.seriesItemEnabled[index];
                };
                this.groupSelection
                    .selectByTag(PieNodeTag.Sector)
                    .forEach(function (node, index) { return updateSectorFn(node, node.datum, index, false); });
                this.highlightSelection.selectByTag(PieNodeTag.Sector).forEach(function (node, index) {
                    var isDatumHighlighted = (highlightedDatum === null || highlightedDatum === void 0 ? void 0 : highlightedDatum.series) === _this && node.datum.itemId === highlightedDatum.itemId;
                    node.visible = isDatumHighlighted;
                    if (node.visible) {
                        updateSectorFn(node, node.datum, index, isDatumHighlighted);
                    }
                });
                this.animationState.transition('update');
                this.updateCalloutLineNodes();
                this.updateCalloutLabelNodes(seriesRect);
                this.updateSectorLabelNodes();
                this.updateInnerLabelNodes();
                return [2 /*return*/];
            });
        });
    };
    PieSeries.prototype.updateCalloutLineNodes = function () {
        var _a;
        var _b = this, radiusScale = _b.radiusScale, calloutLine = _b.calloutLine;
        var calloutLength = calloutLine.length;
        var calloutStrokeWidth = calloutLine.strokeWidth;
        var calloutColors = (_a = calloutLine.colors) !== null && _a !== void 0 ? _a : this.strokes;
        var offset = this.calloutLabel.offset;
        this.calloutLabelSelection.selectByTag(PieNodeTag.Callout).forEach(function (line, index) {
            var datum = line.datum;
            var radius = radiusScale.convert(datum.radius);
            var outerRadius = Math.max(0, radius);
            var label = datum.calloutLabel;
            if ((label === null || label === void 0 ? void 0 : label.text) && !label.hidden && outerRadius !== 0) {
                line.visible = true;
                line.strokeWidth = calloutStrokeWidth;
                line.stroke = calloutColors[index % calloutColors.length];
                line.fill = undefined;
                var x1 = datum.midCos * outerRadius;
                var y1 = datum.midSin * outerRadius;
                var x2 = datum.midCos * (outerRadius + calloutLength);
                var y2 = datum.midSin * (outerRadius + calloutLength);
                if (label.collisionTextAlign || label.collisionOffsetY !== 0) {
                    // Get the closest point to the text bounding box
                    var box = label.box;
                    var cx = x2;
                    var cy = y2;
                    if (x2 < box.x) {
                        cx = box.x;
                    }
                    else if (x2 > box.x + box.width) {
                        cx = box.x + box.width;
                    }
                    if (y2 < box.y) {
                        cy = box.y;
                    }
                    else if (y2 > box.y + box.height) {
                        cy = box.y + box.height;
                    }
                    // Apply label offset
                    var dx = cx - x2;
                    var dy = cy - y2;
                    var length_1 = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    var paddedLength = length_1 - offset;
                    if (paddedLength > 0) {
                        x2 = x2 + (dx * paddedLength) / length_1;
                        y2 = y2 + (dy * paddedLength) / length_1;
                    }
                }
                line.x1 = x1;
                line.y1 = y1;
                line.x2 = x2;
                line.y2 = y2;
            }
            else {
                line.visible = false;
            }
        });
    };
    PieSeries.prototype.getLabelOverflow = function (text, box, seriesRect) {
        var seriesLeft = seriesRect.x - this.centerX;
        var seriesRight = seriesRect.x + seriesRect.width - this.centerX;
        var seriesTop = seriesRect.y - this.centerY;
        var seriesBottom = seriesRect.y + seriesRect.height - this.centerY;
        var errPx = 1; // Prevents errors related to floating point calculations
        var visibleTextPart = 1;
        if (box.x + errPx < seriesLeft) {
            visibleTextPart = (box.x + box.width - seriesLeft) / box.width;
        }
        else if (box.x + box.width - errPx > seriesRight) {
            visibleTextPart = (seriesRight - box.x) / box.width;
        }
        var hasVerticalOverflow = box.y + errPx < seriesTop || box.y + box.height - errPx > seriesBottom;
        var textLength = Math.floor(text.length * visibleTextPart) - 1;
        var hasSurroundingSeriesOverflow = this.bboxIntersectsSurroundingSeries(box);
        return { visibleTextPart: visibleTextPart, textLength: textLength, hasVerticalOverflow: hasVerticalOverflow, hasSurroundingSeriesOverflow: hasSurroundingSeriesOverflow };
    };
    PieSeries.prototype.bboxIntersectsSurroundingSeries = function (box, dx, dy) {
        if (dx === void 0) { dx = 0; }
        if (dy === void 0) { dy = 0; }
        var surroundingRadius = this.surroundingRadius;
        if (surroundingRadius == null) {
            return false;
        }
        var corners = [
            { x: box.x + dx, y: box.y + dy },
            { x: box.x + box.width + dx, y: box.y + dy },
            { x: box.x + box.width + dx, y: box.y + box.height + dy },
            { x: box.x + dx, y: box.y + box.height + dy },
        ];
        var sur2 = Math.pow(surroundingRadius, 2);
        return corners.some(function (corner) { return Math.pow(corner.x, 2) + Math.pow(corner.y, 2) > sur2; });
    };
    PieSeries.prototype.computeCalloutLabelCollisionOffsets = function () {
        var _this = this;
        var _a = this, radiusScale = _a.radiusScale, calloutLabel = _a.calloutLabel, calloutLine = _a.calloutLine;
        var offset = calloutLabel.offset, minSpacing = calloutLabel.minSpacing;
        var innerRadius = radiusScale.convert(0);
        var shouldSkip = function (datum) {
            var label = datum.calloutLabel;
            var radius = radiusScale.convert(datum.radius);
            var outerRadius = Math.max(0, radius);
            return !label || outerRadius === 0;
        };
        var fullData = this.nodeData;
        var data = this.nodeData.filter(function (text) { return !shouldSkip(text); });
        data.forEach(function (datum) {
            var label = datum.calloutLabel;
            label.hidden = false;
            label.collisionTextAlign = undefined;
            label.collisionOffsetY = 0;
        });
        if (data.length <= 1) {
            return;
        }
        var leftLabels = data.filter(function (d) { return d.midCos < 0; }).sort(function (a, b) { return a.midSin - b.midSin; });
        var rightLabels = data.filter(function (d) { return d.midCos >= 0; }).sort(function (a, b) { return a.midSin - b.midSin; });
        var topLabels = data
            .filter(function (d) { return d.midSin < 0 && d.calloutLabel.textAlign === 'center'; })
            .sort(function (a, b) { return a.midCos - b.midCos; });
        var bottomLabels = data
            .filter(function (d) { return d.midSin >= 0 && d.calloutLabel.textAlign === 'center'; })
            .sort(function (a, b) { return a.midCos - b.midCos; });
        var tempTextNode = new Text();
        var getTextBBox = function (datum) {
            var label = datum.calloutLabel;
            var radius = radiusScale.convert(datum.radius);
            var outerRadius = Math.max(0, radius);
            var labelRadius = outerRadius + calloutLine.length + offset;
            var x = datum.midCos * labelRadius;
            var y = datum.midSin * labelRadius + label.collisionOffsetY;
            _this.setTextDimensionalProps(tempTextNode, x, y, _this.calloutLabel, label);
            return tempTextNode.computeBBox();
        };
        var avoidNeighbourYCollision = function (label, next, direction) {
            var box = getTextBBox(label).grow(minSpacing / 2);
            var other = getTextBBox(next).grow(minSpacing / 2);
            // The full collision is not detected, because sometimes
            // the next label can appear behind the label with offset
            var collidesOrBehind = box.x < other.x + other.width &&
                box.x + box.width > other.x &&
                (direction === 'to-top' ? box.y < other.y + other.height : box.y + box.height > other.y);
            if (collidesOrBehind) {
                var dy = direction === 'to-top' ? box.y - other.y - other.height : box.y + box.height - other.y;
                next.calloutLabel.collisionOffsetY = dy;
            }
        };
        var avoidYCollisions = function (labels) {
            var midLabel = labels.slice().sort(function (a, b) { return Math.abs(a.midSin) - Math.abs(b.midSin); })[0];
            var midIndex = labels.indexOf(midLabel);
            for (var i = midIndex - 1; i >= 0; i--) {
                var prev = labels[i + 1];
                var next = labels[i];
                avoidNeighbourYCollision(prev, next, 'to-top');
            }
            for (var i = midIndex + 1; i < labels.length; i++) {
                var prev = labels[i - 1];
                var next = labels[i];
                avoidNeighbourYCollision(prev, next, 'to-bottom');
            }
        };
        var avoidXCollisions = function (labels) {
            var labelsCollideLabelsByY = data.some(function (datum) { return datum.calloutLabel.collisionOffsetY !== 0; });
            var boxes = labels.map(function (label) { return getTextBBox(label); });
            var paddedBoxes = boxes.map(function (box) { return box.clone().grow(minSpacing / 2); });
            var labelsCollideLabelsByX = false;
            for (var i = 0; i < paddedBoxes.length && !labelsCollideLabelsByX; i++) {
                var box = paddedBoxes[i];
                for (var j = i + 1; j < labels.length; j++) {
                    var other = paddedBoxes[j];
                    if (box.collidesBBox(other)) {
                        labelsCollideLabelsByX = true;
                        break;
                    }
                }
            }
            var sectors = fullData.map(function (datum) {
                var startAngle = datum.startAngle, endAngle = datum.endAngle;
                var radius = radiusScale.convert(datum.radius);
                var outerRadius = Math.max(0, radius);
                return { startAngle: startAngle, endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius };
            });
            var labelsCollideSectors = boxes.some(function (box) {
                return sectors.some(function (sector) { return boxCollidesSector(box, sector); });
            });
            if (!labelsCollideLabelsByX && !labelsCollideLabelsByY && !labelsCollideSectors) {
                return;
            }
            labels
                .filter(function (datum) { return datum.calloutLabel.textAlign === 'center'; })
                .forEach(function (datum) {
                var label = datum.calloutLabel;
                if (datum.midCos < 0) {
                    label.collisionTextAlign = 'right';
                }
                else if (datum.midCos > 0) {
                    label.collisionTextAlign = 'left';
                }
                else {
                    label.collisionTextAlign = 'center';
                }
            });
        };
        avoidYCollisions(leftLabels);
        avoidYCollisions(rightLabels);
        avoidXCollisions(topLabels);
        avoidXCollisions(bottomLabels);
    };
    PieSeries.prototype.updateCalloutLabelNodes = function (seriesRect) {
        var _this = this;
        var _a = this, radiusScale = _a.radiusScale, calloutLabel = _a.calloutLabel, calloutLine = _a.calloutLine;
        var calloutLength = calloutLine.length;
        var offset = calloutLabel.offset, color = calloutLabel.color;
        var tempTextNode = new Text();
        this.calloutLabelSelection.selectByTag(PieNodeTag.Label).forEach(function (text) {
            var datum = text.datum;
            var label = datum.calloutLabel;
            var radius = radiusScale.convert(datum.radius);
            var outerRadius = Math.max(0, radius);
            if (!(label === null || label === void 0 ? void 0 : label.text) || outerRadius === 0 || label.hidden) {
                text.visible = false;
                return;
            }
            var labelRadius = outerRadius + calloutLength + offset;
            var x = datum.midCos * labelRadius;
            var y = datum.midSin * labelRadius + label.collisionOffsetY;
            // Detect text overflow
            _this.setTextDimensionalProps(tempTextNode, x, y, _this.calloutLabel, label);
            var box = tempTextNode.computeBBox();
            var _a = _this.getLabelOverflow(label.text, box, seriesRect), visibleTextPart = _a.visibleTextPart, textLength = _a.textLength, hasVerticalOverflow = _a.hasVerticalOverflow;
            var displayText = visibleTextPart === 1 ? label.text : label.text.substring(0, textLength) + "\u2026";
            _this.setTextDimensionalProps(text, x, y, _this.calloutLabel, __assign(__assign({}, label), { text: displayText }));
            text.fill = color;
            text.visible = !hasVerticalOverflow;
        });
    };
    PieSeries.prototype.computeLabelsBBox = function (options, seriesRect) {
        var _this = this;
        var _a;
        var _b = this, radiusScale = _b.radiusScale, calloutLabel = _b.calloutLabel, calloutLine = _b.calloutLine;
        var calloutLength = calloutLine.length;
        var offset = calloutLabel.offset, maxCollisionOffset = calloutLabel.maxCollisionOffset, minSpacing = calloutLabel.minSpacing;
        this.maybeRefreshNodeData();
        this.updateRadiusScale();
        this.computeCalloutLabelCollisionOffsets();
        var textBoxes = [];
        var text = new Text();
        var titleBox;
        if (((_a = this.title) === null || _a === void 0 ? void 0 : _a.text) && this.title.enabled) {
            var dy = this.getTitleTranslationY();
            if (isFinite(dy)) {
                this.setTextDimensionalProps(text, 0, dy, this.title, {
                    text: this.title.text,
                    textBaseline: 'bottom',
                    textAlign: 'center',
                    hidden: false,
                    collisionTextAlign: undefined,
                    collisionOffsetY: 0,
                });
                titleBox = text.computeBBox();
                textBoxes.push(titleBox);
            }
        }
        this.nodeData.forEach(function (datum) {
            var label = datum.calloutLabel;
            var radius = radiusScale.convert(datum.radius);
            var outerRadius = Math.max(0, radius);
            if (!label || outerRadius === 0) {
                return null;
            }
            var labelRadius = outerRadius + calloutLength + offset;
            var x = datum.midCos * labelRadius;
            var y = datum.midSin * labelRadius + label.collisionOffsetY;
            _this.setTextDimensionalProps(text, x, y, _this.calloutLabel, label);
            var box = text.computeBBox();
            label.box = box;
            // Hide labels that where pushed to far by the collision avoidance algorithm
            if (Math.abs(label.collisionOffsetY) > maxCollisionOffset) {
                label.hidden = true;
                return;
            }
            // Hide labels intersecting or above the title
            if (titleBox) {
                var seriesTop = seriesRect.y - _this.centerY;
                var titleCleanArea = new BBox(titleBox.x - minSpacing, seriesTop, titleBox.width + 2 * minSpacing, titleBox.y + titleBox.height + minSpacing - seriesTop);
                if (box.collidesBBox(titleCleanArea)) {
                    label.hidden = true;
                    return;
                }
            }
            if (options.hideWhenNecessary) {
                var _a = _this.getLabelOverflow(label.text, box, seriesRect), textLength = _a.textLength, hasVerticalOverflow = _a.hasVerticalOverflow, hasSurroundingSeriesOverflow = _a.hasSurroundingSeriesOverflow;
                var isTooShort = label.text.length > 2 && textLength < 2;
                if (hasVerticalOverflow || isTooShort || hasSurroundingSeriesOverflow) {
                    label.hidden = true;
                    return;
                }
            }
            label.hidden = false;
            textBoxes.push(box);
        });
        if (textBoxes.length === 0) {
            return null;
        }
        return BBox.merge(textBoxes);
    };
    PieSeries.prototype.setTextDimensionalProps = function (textNode, x, y, style, label) {
        var _a, _b;
        var fontStyle = style.fontStyle, fontWeight = style.fontWeight, fontSize = style.fontSize, fontFamily = style.fontFamily;
        textNode.fontStyle = fontStyle;
        textNode.fontWeight = fontWeight;
        textNode.fontSize = fontSize;
        textNode.fontFamily = fontFamily;
        textNode.text = label.text;
        textNode.x = x;
        textNode.y = y;
        textNode.textAlign = (_b = (_a = label === null || label === void 0 ? void 0 : label.collisionTextAlign) !== null && _a !== void 0 ? _a : label === null || label === void 0 ? void 0 : label.textAlign) !== null && _b !== void 0 ? _b : 'center';
        textNode.textBaseline = label.textBaseline;
    };
    PieSeries.prototype.updateSectorLabelNodes = function () {
        var radiusScale = this.radiusScale;
        var innerRadius = radiusScale.convert(0);
        var _a = this.sectorLabel, fontSize = _a.fontSize, fontStyle = _a.fontStyle, fontWeight = _a.fontWeight, fontFamily = _a.fontFamily, positionOffset = _a.positionOffset, positionRatio = _a.positionRatio, color = _a.color;
        var isDoughnut = innerRadius > 0;
        var singleVisibleSector = this.seriesItemEnabled.filter(Boolean).length === 1;
        this.sectorLabelSelection.each(function (text, datum) {
            var sectorLabel = datum.sectorLabel;
            var radius = radiusScale.convert(datum.radius);
            var outerRadius = Math.max(0, radius);
            var isTextVisible = false;
            if (sectorLabel && outerRadius !== 0) {
                var labelRadius = innerRadius * (1 - positionRatio) + radius * positionRatio + positionOffset;
                text.fill = color;
                text.fontStyle = fontStyle;
                text.fontWeight = fontWeight;
                text.fontSize = fontSize;
                text.fontFamily = fontFamily;
                text.text = sectorLabel.text;
                var shouldPutTextInCenter = !isDoughnut && singleVisibleSector;
                if (shouldPutTextInCenter) {
                    text.x = 0;
                    text.y = 0;
                }
                else {
                    text.x = datum.midCos * labelRadius;
                    text.y = datum.midSin * labelRadius;
                }
                text.textAlign = 'center';
                text.textBaseline = 'middle';
                var bbox = text.computeBBox();
                var corners = [
                    [bbox.x, bbox.y],
                    [bbox.x + bbox.width, bbox.y],
                    [bbox.x + bbox.width, bbox.y + bbox.height],
                    [bbox.x, bbox.y + bbox.height],
                ];
                var startAngle = datum.startAngle, endAngle = datum.endAngle;
                var sectorBounds_1 = { startAngle: startAngle, endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius };
                if (corners.every(function (_a) {
                    var _b = __read(_a, 2), x = _b[0], y = _b[1];
                    return isPointInSector(x, y, sectorBounds_1);
                })) {
                    isTextVisible = true;
                }
            }
            text.visible = isTextVisible;
        });
    };
    PieSeries.prototype.updateInnerCircle = function () {
        var circle = this.innerCircleNode;
        if (!circle) {
            return;
        }
        var innerRadius = this.getInnerRadius();
        if (innerRadius === 0) {
            circle.size = 0;
        }
        else {
            var circleRadius = Math.min(innerRadius, this.getOuterRadius());
            var antiAliasingPadding = 1;
            circle.size = Math.ceil(circleRadius * 2 + antiAliasingPadding);
        }
    };
    PieSeries.prototype.updateInnerLabelNodes = function () {
        var textBBoxes = [];
        var margins = [];
        this.innerLabelsSelection.each(function (text, datum) {
            var fontStyle = datum.fontStyle, fontWeight = datum.fontWeight, fontSize = datum.fontSize, fontFamily = datum.fontFamily, color = datum.color;
            text.fontStyle = fontStyle;
            text.fontWeight = fontWeight;
            text.fontSize = fontSize;
            text.fontFamily = fontFamily;
            text.text = datum.text;
            text.x = 0;
            text.y = 0;
            text.fill = color;
            text.textAlign = 'center';
            text.textBaseline = 'alphabetic';
            textBBoxes.push(text.computeBBox());
            margins.push(datum.margin);
        });
        var getMarginTop = function (index) { return (index === 0 ? 0 : margins[index]); };
        var getMarginBottom = function (index) { return (index === margins.length - 1 ? 0 : margins[index]); };
        var totalHeight = textBBoxes.reduce(function (sum, bbox, i) {
            return sum + bbox.height + getMarginTop(i) + getMarginBottom(i);
        }, 0);
        var totalWidth = Math.max.apply(Math, __spreadArray([], __read(textBBoxes.map(function (bbox) { return bbox.width; }))));
        var innerRadius = this.getInnerRadius();
        var labelRadius = Math.sqrt(Math.pow(totalWidth / 2, 2) + Math.pow(totalHeight / 2, 2));
        var labelsVisible = labelRadius <= (innerRadius > 0 ? innerRadius : this.getOuterRadius());
        var textBottoms = [];
        for (var i = 0, prev = -totalHeight / 2; i < textBBoxes.length; i++) {
            var bbox = textBBoxes[i];
            var bottom = bbox.height + prev + getMarginTop(i);
            textBottoms.push(bottom);
            prev = bottom + getMarginBottom(i);
        }
        this.innerLabelsSelection.each(function (text, _datum, index) {
            text.y = textBottoms[index];
            text.visible = labelsVisible;
        });
    };
    PieSeries.prototype.getNodeClickEvent = function (event, datum) {
        return new PieSeriesNodeClickEvent(this.angleKey, this.calloutLabelKey, this.sectorLabelKey, this.radiusKey, event, datum, this);
    };
    PieSeries.prototype.getNodeDoubleClickEvent = function (event, datum) {
        return new PieSeriesNodeDoubleClickEvent(this.angleKey, this.calloutLabelKey, this.sectorLabelKey, this.radiusKey, event, datum, this);
    };
    PieSeries.prototype.getTooltipHtml = function (nodeDatum) {
        var _a;
        var angleKey = this.angleKey;
        if (!angleKey) {
            return '';
        }
        var _b = this, tooltip = _b.tooltip, angleName = _b.angleName, radiusKey = _b.radiusKey, radiusName = _b.radiusName, calloutLabelKey = _b.calloutLabelKey, sectorLabelKey = _b.sectorLabelKey, calloutLabelName = _b.calloutLabelName, sectorLabelName = _b.sectorLabelName, seriesId = _b.id;
        var tooltipRenderer = tooltip.renderer;
        var datum = nodeDatum.datum, angleValue = nodeDatum.angleValue, radiusValue = nodeDatum.radiusValue, color = nodeDatum.sectorFormat.fill, _c = nodeDatum.calloutLabel, _d = _c === void 0 ? {} : _c, _e = _d.text, label = _e === void 0 ? '' : _e;
        var formattedAngleValue = typeof angleValue === 'number' ? toFixed(angleValue) : String(angleValue);
        var title = (_a = this.title) === null || _a === void 0 ? void 0 : _a.text;
        var content = "" + (label ? label + ": " : '') + formattedAngleValue;
        var defaults = {
            title: title,
            backgroundColor: color,
            content: content,
        };
        if (tooltipRenderer) {
            return toTooltipHtml(tooltipRenderer({
                datum: datum,
                angleKey: angleKey,
                angleValue: angleValue,
                angleName: angleName,
                radiusKey: radiusKey,
                radiusValue: radiusValue,
                radiusName: radiusName,
                calloutLabelKey: calloutLabelKey,
                calloutLabelName: calloutLabelName,
                sectorLabelKey: sectorLabelKey,
                sectorLabelName: sectorLabelName,
                title: title,
                color: color,
                seriesId: seriesId,
            }), defaults);
        }
        return toTooltipHtml(defaults);
    };
    PieSeries.prototype.getLegendData = function () {
        var _a, _b, _c;
        var _d = this, calloutLabelKey = _d.calloutLabelKey, legendItemKey = _d.legendItemKey, id = _d.id, data = _d.data;
        if (!data || data.length === 0)
            return [];
        if (!legendItemKey && !calloutLabelKey)
            return [];
        var titleText = ((_a = this.title) === null || _a === void 0 ? void 0 : _a.showInLegend) && this.title.text;
        var legendData = [];
        for (var index = 0; index < data.length; index++) {
            var datum = data[index];
            var labelParts = [];
            if (titleText) {
                labelParts.push(titleText);
            }
            var labels = this.getLabels(datum, 2 * Math.PI, 2 * Math.PI, false);
            if (legendItemKey && labels.legendItem !== undefined) {
                labelParts.push(labels.legendItem.text);
            }
            else if (calloutLabelKey && ((_b = labels.calloutLabel) === null || _b === void 0 ? void 0 : _b.text) !== undefined) {
                labelParts.push((_c = labels.calloutLabel) === null || _c === void 0 ? void 0 : _c.text);
            }
            if (labelParts.length === 0)
                continue;
            var sectorFormat = this.getSectorFormat(datum, index, index, false);
            legendData.push({
                legendType: 'category',
                id: id,
                itemId: index,
                seriesId: id,
                enabled: this.seriesItemEnabled[index],
                label: {
                    text: labelParts.join(' - '),
                },
                marker: {
                    fill: sectorFormat.fill,
                    stroke: sectorFormat.stroke,
                    fillOpacity: this.fillOpacity,
                    strokeOpacity: this.strokeOpacity,
                },
            });
        }
        return legendData;
    };
    PieSeries.prototype.onLegendItemClick = function (event) {
        var enabled = event.enabled, itemId = event.itemId, series = event.series;
        if (series.id === this.id) {
            this.toggleSeriesItem(itemId, enabled);
        }
        else if (series.type === 'pie') {
            this.toggleOtherSeriesItems(series, itemId, enabled);
        }
    };
    PieSeries.prototype.toggleSeriesItem = function (itemId, enabled) {
        this.seriesItemEnabled[itemId] = enabled;
        this.nodeDataRefresh = true;
    };
    PieSeries.prototype.toggleOtherSeriesItems = function (series, itemId, enabled) {
        var _this = this;
        var _a, _b;
        var legendItemKey = this.legendItemKey;
        if (!legendItemKey)
            return;
        var datumToggledLegendItemValue = series.legendItemKey && ((_a = series.data) === null || _a === void 0 ? void 0 : _a.find(function (_, index) { return index === itemId; })[series.legendItemKey]);
        if (!datumToggledLegendItemValue)
            return;
        (_b = this.data) === null || _b === void 0 ? void 0 : _b.forEach(function (datum, datumItemId) {
            if (datum[legendItemKey] === datumToggledLegendItemValue) {
                _this.toggleSeriesItem(datumItemId, enabled);
            }
        });
    };
    PieSeries.prototype.animateEmptyUpdateReady = function () {
        var _this = this;
        var duration = 1000;
        var labelDuration = 200;
        var rotation = Math.PI / -2 + toRadians(this.rotation);
        this.groupSelection.selectByTag(PieNodeTag.Sector).forEach(function (node) {
            var _a;
            var datum = node.datum;
            (_a = _this.animationManager) === null || _a === void 0 ? void 0 : _a.animateMany(_this.id + "_empty-update-ready_" + node.id, [
                { from: rotation, to: datum.startAngle },
                { from: rotation, to: datum.endAngle },
            ], {
                disableInteractions: true,
                duration: duration,
                ease: easing.easeOut,
                repeat: 0,
                onUpdate: function (_a) {
                    var _b = __read(_a, 2), startAngle = _b[0], endAngle = _b[1];
                    node.startAngle = startAngle;
                    node.endAngle = endAngle;
                },
            });
        });
        var labelAnimationOptions = {
            from: 0,
            to: 1,
            delay: duration,
            duration: labelDuration,
            ease: easing.linear,
            repeat: 0,
        };
        this.calloutLabelSelection.each(function (label) {
            var _a;
            (_a = _this.animationManager) === null || _a === void 0 ? void 0 : _a.animate(_this.id + "_empty-update-ready_" + label.id, __assign(__assign({}, labelAnimationOptions), { onUpdate: function (opacity) {
                    label.opacity = opacity;
                } }));
        });
        this.sectorLabelSelection.each(function (label) {
            var _a;
            (_a = _this.animationManager) === null || _a === void 0 ? void 0 : _a.animate(_this.id + "_empty-update-ready_" + label.id, __assign(__assign({}, labelAnimationOptions), { onUpdate: function (opacity) {
                    label.opacity = opacity;
                } }));
        });
        this.innerLabelsSelection.each(function (label) {
            var _a;
            (_a = _this.animationManager) === null || _a === void 0 ? void 0 : _a.animate(_this.id + "_empty-update-ready_" + label.id, __assign(__assign({}, labelAnimationOptions), { onUpdate: function (opacity) {
                    label.opacity = opacity;
                } }));
        });
    };
    PieSeries.prototype.animateReadyUpdateReady = function () {
        this.groupSelection.selectByTag(PieNodeTag.Sector).forEach(function (node) {
            var datum = node.datum;
            node.startAngle = datum.startAngle;
            node.endAngle = datum.endAngle;
        });
    };
    PieSeries.className = 'PieSeries';
    PieSeries.type = 'pie';
    __decorate([
        Validate(STRING)
    ], PieSeries.prototype, "angleKey", void 0);
    __decorate([
        Validate(STRING)
    ], PieSeries.prototype, "angleName", void 0);
    __decorate([
        Validate(OPT_STRING)
    ], PieSeries.prototype, "radiusKey", void 0);
    __decorate([
        Validate(OPT_STRING)
    ], PieSeries.prototype, "radiusName", void 0);
    __decorate([
        Validate(OPT_NUMBER(0))
    ], PieSeries.prototype, "radiusMin", void 0);
    __decorate([
        Validate(OPT_NUMBER(0))
    ], PieSeries.prototype, "radiusMax", void 0);
    __decorate([
        Validate(OPT_STRING)
    ], PieSeries.prototype, "calloutLabelKey", void 0);
    __decorate([
        Validate(OPT_STRING)
    ], PieSeries.prototype, "calloutLabelName", void 0);
    __decorate([
        Validate(OPT_STRING)
    ], PieSeries.prototype, "sectorLabelKey", void 0);
    __decorate([
        Validate(OPT_STRING)
    ], PieSeries.prototype, "sectorLabelName", void 0);
    __decorate([
        Validate(OPT_STRING)
    ], PieSeries.prototype, "legendItemKey", void 0);
    __decorate([
        Validate(COLOR_STRING_ARRAY)
    ], PieSeries.prototype, "fills", void 0);
    __decorate([
        Validate(COLOR_STRING_ARRAY)
    ], PieSeries.prototype, "strokes", void 0);
    __decorate([
        Validate(NUMBER(0, 1))
    ], PieSeries.prototype, "fillOpacity", void 0);
    __decorate([
        Validate(NUMBER(0, 1))
    ], PieSeries.prototype, "strokeOpacity", void 0);
    __decorate([
        Validate(OPT_LINE_DASH)
    ], PieSeries.prototype, "lineDash", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeries.prototype, "lineDashOffset", void 0);
    __decorate([
        Validate(OPT_FUNCTION)
    ], PieSeries.prototype, "formatter", void 0);
    __decorate([
        Validate(NUMBER(-360, 360))
    ], PieSeries.prototype, "rotation", void 0);
    __decorate([
        Validate(NUMBER())
    ], PieSeries.prototype, "outerRadiusOffset", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeries.prototype, "outerRadiusRatio", void 0);
    __decorate([
        Validate(NUMBER())
    ], PieSeries.prototype, "innerRadiusOffset", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeries.prototype, "innerRadiusRatio", void 0);
    __decorate([
        Validate(NUMBER(0))
    ], PieSeries.prototype, "strokeWidth", void 0);
    return PieSeries;
}(PolarSeries));
export { PieSeries };
