import { Scene } from '../scene/scene';
import { Group } from '../scene/group';
import { Series, SeriesNodeDatum } from './series/series';
import { Padding } from '../util/padding';
import { BBox } from '../scene/bbox';
import { Caption } from '../caption';
import { Observable } from '../util/observable';
import { ChartAxis } from './chartAxis';
import { PlacedLabel } from '../util/labelPlacement';
import { AgChartOptions, AgChartInstance } from './agChartOptions';
import { Tooltip } from './tooltip/tooltip';
import { ChartOverlays } from './overlay/chartOverlays';
import { AnimationManager } from './interaction/animationManager';
import { CursorManager } from './interaction/cursorManager';
import { ChartEventManager } from './interaction/chartEventManager';
import { HighlightChangeEvent, HighlightManager } from './interaction/highlightManager';
import { InteractionEvent, InteractionManager } from './interaction/interactionManager';
import { TooltipManager } from './interaction/tooltipManager';
import { ZoomManager } from './interaction/zoomManager';
import { Module, ModuleContext, ModuleInstance, RootModule } from '../util/module';
import { LayoutService } from './layout/layoutService';
import { DataService } from './dataService';
import { UpdateService } from './updateService';
import { ChartUpdateType } from './chartUpdateType';
import { ChartLegendDatum, ChartLegend } from './legendDatum';
import { ChartHighlight } from './chartHighlight';
import { CallbackCache } from '../util/callbackCache';
declare type OptionalHTMLElement = HTMLElement | undefined | null;
export declare type TransferableResources = {
    container?: OptionalHTMLElement;
    scene: Scene;
    element: HTMLElement;
};
export declare abstract class Chart extends Observable implements AgChartInstance {
    readonly id: string;
    processedOptions: AgChartOptions;
    userOptions: AgChartOptions;
    queuedUserOptions: AgChartOptions[];
    getOptions(): AgChartOptions<never, never, never, never>;
    readonly scene: Scene;
    readonly seriesRoot: Group;
    legend: ChartLegend | undefined;
    readonly tooltip: Tooltip;
    readonly overlays: ChartOverlays;
    readonly highlight: ChartHighlight;
    debug: boolean;
    private extraDebugStats;
    private _container;
    set container(value: OptionalHTMLElement);
    get container(): OptionalHTMLElement;
    data: any;
    width?: number;
    height?: number;
    autoSize: boolean;
    private _lastAutoSize?;
    private autoSizeChanged;
    download(fileName?: string, fileFormat?: string): void;
    padding: Padding;
    seriesAreaPadding: Padding;
    title?: Caption;
    subtitle?: Caption;
    footnote?: Caption;
    mode: 'standalone' | 'integrated';
    private _destroyed;
    get destroyed(): boolean;
    protected readonly animationManager: AnimationManager;
    protected readonly chartEventManager: ChartEventManager;
    protected readonly cursorManager: CursorManager;
    protected readonly highlightManager: HighlightManager;
    protected readonly interactionManager: InteractionManager;
    protected readonly tooltipManager: TooltipManager;
    protected readonly zoomManager: ZoomManager;
    protected readonly layoutService: LayoutService;
    protected readonly updateService: UpdateService;
    protected readonly dataService: DataService;
    protected readonly axisGroup: Group;
    protected readonly callbackCache: CallbackCache;
    protected readonly modules: Record<string, {
        instance: ModuleInstance;
    }>;
    protected readonly legendModules: Record<string, {
        instance: ModuleInstance;
    }>;
    private legendType;
    protected constructor(document?: Document, overrideDevicePixelRatio?: number, resources?: TransferableResources);
    addModule(module: RootModule): void;
    removeModule(module: RootModule): void;
    isModuleEnabled(module: Module): boolean;
    getModuleContext(): ModuleContext;
    destroy(opts?: {
        keepTransferableResources: boolean;
    }): TransferableResources | undefined;
    log(opts: any): void;
    disablePointer(highlightOnly?: boolean): void;
    private _pendingFactoryUpdates;
    requestFactoryUpdate(cb: () => Promise<void>): void;
    private _processCallbacks;
    private _performUpdateNoRenderCount;
    private _performUpdateType;
    get performUpdateType(): ChartUpdateType;
    get updatePending(): boolean;
    private _lastPerformUpdateError?;
    get lastPerformUpdateError(): Error | undefined;
    private seriesToUpdate;
    private performUpdateTrigger;
    awaitUpdateCompletion(): Promise<void>;
    update(type?: ChartUpdateType, opts?: {
        forceNodeDataRefresh?: boolean;
        seriesToUpdate?: Iterable<Series>;
    }): void;
    private performUpdate;
    readonly element: HTMLElement;
    protected _axes: ChartAxis[];
    set axes(values: ChartAxis[]);
    get axes(): ChartAxis[];
    protected _series: Series[];
    set series(values: Series[]);
    get series(): Series[];
    addSeries(series: Series<any>, before?: Series<any>): boolean;
    protected initSeries(series: Series<any>): void;
    protected freeSeries(series: Series<any>): void;
    removeAllSeries(): void;
    protected addSeriesListeners(series: Series<any>): void;
    updateAllSeriesListeners(): void;
    protected assignSeriesToAxes(): void;
    protected assignAxesToSeries(force?: boolean): void;
    private findMatchingAxis;
    private resize;
    processData(): Promise<void>;
    placeLabels(): Map<Series<any>, PlacedLabel[]>;
    private attachLegend;
    private applyLegendOptions?;
    setLegendInit(initLegend: (legend: ChartLegend) => void): void;
    private updateLegend;
    protected validateLegendData(legendData: ChartLegendDatum[]): void;
    protected performLayout(): Promise<BBox>;
    private positionPadding;
    private positionCaptions;
    protected hoverRect?: BBox;
    protected seriesRect?: BBox;
    getSeriesRect(): Readonly<BBox | undefined>;
    private pickSeriesNode;
    lastPick?: {
        datum: SeriesNodeDatum;
        event?: Event;
    };
    protected onMouseMove(event: InteractionEvent<'hover'>): void;
    protected onLeave(event: InteractionEvent<'leave'>): void;
    private lastInteractionEvent?;
    private pointerScheduler;
    protected handlePointer(event: InteractionEvent<'hover'>): void;
    protected handlePointerTooltip(event: InteractionEvent<'hover'>, disablePointer: (highlightOnly?: boolean) => void): void;
    protected handlePointerNode(event: InteractionEvent<'hover'>): void;
    protected onClick(event: InteractionEvent<'click'>): void;
    protected onDoubleClick(event: InteractionEvent<'dblclick'>): void;
    private checkSeriesNodeClick;
    private checkSeriesNodeDoubleClick;
    private checkSeriesNodeRange;
    private onSeriesNodeClick;
    private onSeriesNodeDoubleClick;
    private mergePointerDatum;
    changeHighlightDatum(event: HighlightChangeEvent): void;
    waitForUpdate(timeoutMs?: number): Promise<void>;
    protected handleOverlays(): void;
    protected handleNoDataOverlay(): void;
}
export {};
