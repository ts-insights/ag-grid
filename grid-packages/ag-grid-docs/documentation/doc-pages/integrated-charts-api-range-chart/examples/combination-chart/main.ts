import {createGrid, FirstDataRenderedEvent, GridApi, GridOptions, GridReadyEvent,} from '@ag-grid-community/core';
import {AgAxisCaptionFormatterParams} from 'ag-charts-community';
import {getData} from "./data";

let gridApi: GridApi;

const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'day', maxWidth: 90 },
    { field: 'month', chartDataType: 'category' },
    { field: 'rain', chartDataType: 'series' },
    { field: 'pressure', chartDataType: 'series' },
    { field: 'temp', chartDataType: 'series' },
    { field: 'wind', chartDataType: 'series' },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    editable: true,
    filter: true,
  },
  enableRangeSelection: true,
  enableCharts: true,
  popupParent: document.body,
  chartThemeOverrides: {
    common: {
      axes: {
        number: {
          title: {
            enabled: true,
            formatter: (params: AgAxisCaptionFormatterParams)  => {
              return params.boundSeries.map(s => s.name).join(' / ');
            }
          }
        }
      }
    },
    bar: {
      series: {
        strokeWidth: 2,
        fillOpacity: 0.8,
      },
    },
    line: {
      series: {
        strokeWidth: 5,
        strokeOpacity: 0.8,
      },
    },
  },
  onGridReady : (params: GridReadyEvent) => {
    getData().then(rowData => params.api.setGridOption('rowData', rowData));
  },
  onFirstDataRendered,
};



function onFirstDataRendered(params: FirstDataRenderedEvent) {
  params.api.createRangeChart({
    chartType: 'customCombo',
    cellRange: {
      columns: ['month', 'rain', 'pressure', 'temp'],
    },
    seriesChartTypes: [
      { colId: 'rain', chartType: 'groupedColumn', secondaryAxis: false },
      { colId: 'pressure', chartType: 'line', secondaryAxis: true },
      { colId: 'temp', chartType: 'line', secondaryAxis: true },
    ],
    aggFunc: 'sum',
    suppressChartRanges: true,
    chartContainer: document.querySelector('#myChart') as any,
  });
}

// set up the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  gridApi = createGrid(document.querySelector<HTMLElement>('#myGrid')!, gridOptions);
});