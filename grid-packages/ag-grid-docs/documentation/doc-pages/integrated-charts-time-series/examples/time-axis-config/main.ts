import {createGrid, FirstDataRenderedEvent, GridApi, GridOptions, GridReadyEvent} from '@ag-grid-community/core';
import {getData} from './data';

let gridApi: GridApi;

const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'timestamp', chartDataType: 'time' },
    { field: 'cpuUsage' },
  ],
  defaultColDef: { flex: 1 },
  enableRangeSelection: true,
  popupParent: document.body,
  enableCharts: true,
  chartThemeOverrides: {
    area: {
      title: {
        enabled: true,
        text: 'CPU Usage',
      },
      navigator: {
        enabled: true,
        height: 20,
        margin: 25,
      },
      axes: {
        time: {
          label: {
            rotation: 315,
            format: '%H:%M',
          },
        },
        number: {
          label: {
            formatter: (params) => {
              return params.value + '%'
            },
          },
        },
      },
      series: {
        tooltip: {
          renderer: ({ xValue, yValue }) => {
            xValue = xValue instanceof Date ? xValue : new Date(xValue);
            return {
              content: `${formatTime(xValue)}: ${yValue}%`,
            };
          },
        },
      },
    },
  },
  chartToolPanelsDef: {
    panels: ['data', 'format']
  },
  onGridReady,
  onFirstDataRendered,
};

function onGridReady(params: GridReadyEvent) {
  getData().then(rowData => params.api.updateGridOption('rowData', rowData));
}

function onFirstDataRendered(params: FirstDataRenderedEvent) {
  params.api.createRangeChart({
    chartContainer: document.querySelector('#myChart') as HTMLElement,
    cellRange: {
      columns: ['timestamp', 'cpuUsage'],
    },
    suppressChartRanges: true,
    chartType: 'area',
  });
}

function formatTime(date: Date | number) {
  return Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(date))
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  gridApi = createGrid(document.querySelector<HTMLElement>('#myGrid')!, gridOptions);
})

