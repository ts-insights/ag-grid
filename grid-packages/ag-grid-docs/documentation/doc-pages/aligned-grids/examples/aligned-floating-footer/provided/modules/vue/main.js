import Vue from "vue";
import { AgGridVue } from "@ag-grid-community/vue";

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import "./styles.css";

import { ModuleRegistry } from '@ag-grid-community/core';
// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const VueExample = {
    template: `
        <div style="height: 100%; display: flex; flex-direction: column" :class="themeClass">
            <ag-grid-vue style="flex: 1 1 auto;"
                         ref="topGrid"
                         class="top"
                         :gridOptions="topGridOptions"
                         @grid-ready="onGridReady"
                         :columnDefs="columnDefs"
                         :rowData="rowData"
            ></ag-grid-vue>
            <ag-grid-vue style="height: 60px; flex: none;"
                         ref="bottomGrid"
                         class="bottom"
                         :gridOptions="bottomGridOptions"
                         :headerHeight="0"
                         :columnDefs="columnDefs"
                         :rowData="bottomData"
                         :rowStyle="rowStyle"
            ></ag-grid-vue>
        </div>
    `,
    components: {
        "ag-grid-vue": AgGridVue
    },
    data: function () {
        return {
            topGridOptions: null,
            bottomGridOptions: null,
            gridApi: null,
            rowData: null,
            bottomData: null,
            columnDefs: null,
            athleteVisible: true,
            ageVisible: true,
            countryVisible: true,
            rowStyle: { fontWeight: 'bold' },
            themeClass: /** DARK MODE START **/document.documentElement.dataset.defaultTheme || 'ag-theme-quartz'/** DARK MODE END **/,
        };
    },
    beforeMount() {
        this.bottomData = [
            {
                athlete: 'Total',
                age: '15 - 61',
                country: 'Ireland',
                year: '2020',
                date: '26/11/1970',
                sport: 'Synchronised Riding',
                gold: 55,
                silver: 65,
                bronze: 12
            }
        ];

        this.topGridOptions = {
            alignedGrids: () => [this.$refs.bottomGrid],
            defaultColDef: {
                filter: true,
                flex: 1,
                minWidth: 100
            },
            suppressHorizontalScroll: true,
            alwaysShowVerticalScroll: true,
            autoSizeStrategy: {
                type: 'fitCellContents'
            },
        };
        this.bottomGridOptions = {
            alignedGrids: () => [this.$refs.topGrid],
            defaultColDef: {
                filter: true,
                flex: 1,
                minWidth: 100
            },
            alwaysShowVerticalScroll: true,
        };

        this.columnDefs = [
            { field: 'athlete', width: 200, hide: !this.athleteVisible },
            { field: 'age', width: 150, hide: !this.ageVisible },
            { field: 'country', width: 150, hide: !this.countryVisible },
            { field: 'year', width: 120 },
            { field: 'date', width: 150 },
            { field: 'sport', width: 150 },
            {
                headerName: 'Total',
                colId: 'total',
                valueGetter: 'data.gold + data.silver + data.bronze',
                width: 200
            },
            { field: 'gold', width: 100 },
            { field: 'silver', width: 100 },
            { field: 'bronze', width: 100 }
        ];
    },
    mounted() {
        this.gridApi = this.$refs.topGrid.api;
    },
    methods: {
        onGridReady(params) {
            const httpRequest = new XMLHttpRequest();
            const updateData = data => {
                this.rowData = data;
            };

            httpRequest.open(
                "GET",
                'https://www.ag-grid.com/example-assets/olympic-winners.json'
            );
            httpRequest.send();
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                    updateData(JSON.parse(httpRequest.responseText));
                }
            };
        },
    },
};

new Vue({
    el: "#app",
    components: {
        "my-component": VueExample
    }
});
