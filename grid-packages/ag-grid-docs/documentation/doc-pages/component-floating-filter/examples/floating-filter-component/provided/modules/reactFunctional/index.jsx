'use strict';

import React, { useMemo, useState, StrictMode, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import SliderFloatingFilter from './sliderFloatingFilter.jsx';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule])

const filterParams = {
    filterOptions: ['greaterThan'],
    maxNumConditions: 1,
};

const GridExample = () => {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        { field: 'athlete', filter: false },
        {
            field: 'gold',
            filter: 'agNumberColumnFilter',
            filterParams: filterParams,
            floatingFilterComponent: SliderFloatingFilter,
            floatingFilterComponentParams: {
                maxValue: 7,
            },
            suppressFloatingFilterButton: true,
            suppressMenu: false,
        },
        {
            field: 'silver',
            filter: 'agNumberColumnFilter',
            filterParams: filterParams,
            floatingFilterComponent: SliderFloatingFilter,
            floatingFilterComponentParams: {
                maxValue: 5,
            },
            suppressFloatingFilterButton: true,
            suppressMenu: false,
        },
        {
            field: 'bronze',
            filter: 'agNumberColumnFilter',
            filterParams: filterParams,
            floatingFilterComponent: SliderFloatingFilter,
            floatingFilterComponentParams: {
                maxValue: 10,
            },
            suppressFloatingFilterButton: true,
            suppressMenu: false,
        },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 100,
            filter: true,
            floatingFilter: true,
        }
    }, []);

    const onGridReady = useCallback((params) => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then(resp => resp.json())
            .then(data => {
                setRowData(data);
            });
    }, []);

    return (
        <div style={containerStyle}>
            <div style={{ "height": "100%", "boxSizing": "border-box" }}>
                <div style={gridStyle} className={/** DARK MODE START **/document.documentElement.dataset.defaultTheme || 'ag-theme-quartz'/** DARK MODE END **/}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        alwaysShowVerticalScroll
                        reactiveCustomComponents
                        onGridReady={onGridReady}
                    />
                </div>
            </div>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><GridExample /></StrictMode>);
