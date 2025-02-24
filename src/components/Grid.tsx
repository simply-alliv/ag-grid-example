import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export interface GridColumn {
    field: string;
}

export interface GridProps {
    className?: string;
    height?: number;
    width?: number;
    children?: React.ReactNode;
    columns: GridColumn[];
    rows: Record<string, any>[];
}

export const Grid: React.FC<GridProps> = (props) => {
    // Row Data: The data to be displayed.
    // const [rowData, setRowData] = useState([
    //     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    //     { make: "Ford", model: "F-Series", price: 33850, electric: false },
    //     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    // ]);

    // Column Definitions: Defines the columns to be displayed.
    // const [colDefs, setColDefs] = useState([
    //     { field: 'make' },
    //     { field: 'model' },
    //     { field: 'price' },
    //     { field: 'electric' },
    // ]);

    return (
        <div style={{ height: props.height ?? 500, width: props.width ?? 500 }}>
            <AgGridReact
                rowData={props.rows}
                columnDefs={props.columns}
            />
        </div>
    )
}


// Example
// <Grid columns={[{ field: 'Full name' }, { field: 'Email addresses' }, { field: 'Addresses' }]}></Grid>