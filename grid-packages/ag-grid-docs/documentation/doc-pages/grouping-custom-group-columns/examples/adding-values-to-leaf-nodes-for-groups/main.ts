import { GridApi, createGrid, ColDef, GridOptions, ValueGetterParams } from '@ag-grid-community/core';

const columnDefs: ColDef[] = [
  {
    headerName: 'Country',
    colId: 'countryGroup',
    showRowGroup: 'country',
    minWidth: 200,
    cellRenderer: 'agGroupCellRenderer',
    filterValueGetter: (params: ValueGetterParams) => {
      return params.data ? params.data.country : null
    },
  },
  { field: 'country', rowGroup: true, hide: true },
  {
    headerName: 'Year / Athlete',
    colId: 'yearAthleteGroup',
    minWidth: 220,
    showRowGroup: 'year',
    cellRenderer: 'agGroupCellRenderer',
    valueGetter: 'data ? data.athlete : null',
  },
  { field: 'year', rowGroup: true, hide: true },
  { field: 'sport', minWidth: 200 },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
  { field: 'age' },
  { field: 'date', minWidth: 140 },
]

let gridApi: GridApi<IOlympicData>;

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    filter: true,
  },
  groupDisplayType: 'custom',
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  gridApi = createGrid(gridDiv, gridOptions);

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then((data: IOlympicData[]) => gridApi!.setGridOption('rowData', data))
})
