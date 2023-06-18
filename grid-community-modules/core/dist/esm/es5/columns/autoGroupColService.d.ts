// Type definitions for @ag-grid-community/core v30.0.2
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Column } from "../entities/column";
import { BeanStub } from "../context/beanStub";
export declare const GROUP_AUTO_COLUMN_ID: 'ag-Grid-AutoColumn';
export declare class AutoGroupColService extends BeanStub {
    private columnModel;
    private columnFactory;
    createAutoGroupColumns(existingCols: Column[], rowGroupColumns: Column[]): Column[];
    private createOneAutoGroupColumn;
    private generateDefaultColDef;
}
