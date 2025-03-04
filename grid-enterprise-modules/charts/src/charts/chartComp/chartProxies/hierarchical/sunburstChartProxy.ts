import { AgSunburstSeriesOptions } from 'ag-charts-community';
import { HierarchicalChartProxy } from './hierarchicalChartProxy';
import { ChartProxyParams, FieldDefinition, UpdateParams } from '../chartProxy';

export class SunburstChartProxy extends HierarchicalChartProxy {
    public constructor(params: ChartProxyParams) {
        super(params);
    }

    protected override getSeries(params: UpdateParams, labelKey: string): AgSunburstSeriesOptions[] {
        const { fields } = params;
        // Sunburst charts support up to two input series, corresponding to size and color respectively
        const [sizeField, colorField] = fields as [FieldDefinition | undefined, FieldDefinition | undefined];
        if (!sizeField) return [];
        // Combine the size and color series into a single composite series
        return [
            {
                type: this.standaloneChartType as AgSunburstSeriesOptions['type'],
                // The label key is generated internally by the hierarchy processing and is not user-configurable
                labelKey,
                // Size and color fields are inferred from the range data
                sizeKey: sizeField.colId,
                sizeName: sizeField.displayName ?? undefined,
                colorKey: colorField?.colId,
                colorName: colorField?.displayName ?? undefined,
            },
        ];
    }

    protected override transformData(data: any[], categoryKey: string, categoryAxis?: boolean): any[] {
        // Ignore the base implementation as it assumes only a single category axis
        // (this method is never actually invoked)
        return data;
    }

    public override crossFilteringReset(): void {
        // cross filtering is not currently supported in sunburst charts
    }
}
