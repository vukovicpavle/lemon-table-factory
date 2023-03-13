import React from "react";
export type ColumnProps<T> = {
    key: keyof T;
    label: string;
    align?: "left" | "right" | "center";
    className?: string | ((record: T) => string);
    render?: (value: T[keyof T], record: T) => React.ReactNode;
};
export type TableProps<T> = {
    columns: ColumnProps<T>[];
    data: T[];
    rowKey: keyof T;
    className?: string;
    selectableRows?: boolean;
    selectedRows?: T[];
    onRowSelect?: (record: T) => void;
    onRowClick?: (record: T) => void;
    onRowHover?: (record: T) => void;
    children?: React.ReactNode;
};
export type TableHeadProps<T> = {
    tableProps: TableProps<T>;
    children: React.ReactNode;
};
export type TableHeadRowProps<T> = {
    tableProps: TableProps<T>;
    children: React.ReactNode;
};
export type TableHeadCellProps<T> = {
    tableProps: TableProps<T>;
    column: ColumnProps<T>;
    children: React.ReactNode;
};
export type TableFootProps<T> = {
    tableProps: TableProps<T>;
    children: React.ReactNode;
};
export type TableFootRowProps<T> = {
    tableProps: TableProps<T>;
    children: React.ReactNode;
};
export type TableFootCellProps<T> = {
    tableProps: TableProps<T>;
    column: ColumnProps<T>;
    children: React.ReactNode;
};
export type TableBodyProps<T> = {
    tableProps: TableProps<T>;
    children: React.ReactNode;
};
export type TableRowProps<T> = {
    tableProps: TableProps<T>;
    record: T;
    children: React.ReactNode;
};
export type TableCellProps<T> = {
    tableProps: TableProps<T>;
    record: T;
    column: ColumnProps<T>;
    children: React.ReactNode;
};
export type TableConfig = {
    table?: React.FC<TableProps<any>> | null;
    head?: React.FC<TableHeadProps<any>> | null;
    headRow?: React.FC<TableHeadRowProps<any>> | null;
    headCell?: React.FC<TableHeadCellProps<any>> | null;
    foot?: React.FC<TableFootProps<any>> | null;
    footRow?: React.FC<TableFootRowProps<any>> | null;
    footCell?: React.FC<TableFootCellProps<any>> | null;
    body?: React.FC<TableBodyProps<any>> | null;
    row?: React.FC<TableRowProps<any>> | null;
    cell?: React.FC<TableCellProps<any>> | null;
};
export declare class TableFactory {
    config: TableConfig;
    constructor(config: TableConfig);
    static defaultTable: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static defaultHead: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static defaultHeadCell: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static defaultFoot: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static defaultFootCell: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static defaultBody: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static defaultRow: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    static defaultCell: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    createTable: () => <T extends {}>(props: TableProps<T>) => JSX.Element;
}
