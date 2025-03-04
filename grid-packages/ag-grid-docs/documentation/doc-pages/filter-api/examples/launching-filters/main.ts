import {
  GridApi,
  createGrid,
  ColDef,
  GridOptions
} from '@ag-grid-community/core';


const columnDefs: ColDef[] = [
  { field: 'athlete' },
  { field: 'age', floatingFilter: true, },
  { field: 'country', suppressHeaderFilter: true },
  { field: 'year', maxWidth: 120, floatingFilter: true, suppressHeaderFilter: true },
  { field: 'sport' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total', filter: false },
]

let gridApi: GridApi<IOlympicData>;

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    minWidth: 150,
    filter: true,
  },
  columnMenu: 'new',
}

function openCountryFilter() {
  gridApi.showColumnFilter('country');
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  gridApi = createGrid(gridDiv, gridOptions);

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then((data: IOlympicData[]) => gridApi!.setGridOption('rowData', data))
})
