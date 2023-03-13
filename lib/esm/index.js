var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
var TableFactory = /** @class */ (function () {
    function TableFactory(config) {
        var _this = this;
        // Factory methods
        this.createTable = function () {
            var Table = _this.config.table !== undefined
                ? _this.config.table
                : TableFactory.defaultTable;
            var Head = _this.config.head !== undefined
                ? _this.config.head
                : TableFactory.defaultHead;
            var HeadRow = _this.config.headRow !== undefined
                ? _this.config.headRow
                : TableFactory.defaultRow;
            var HeadCell = _this.config.headCell !== undefined
                ? _this.config.headCell
                : TableFactory.defaultHeadCell;
            var Foot = _this.config.foot !== undefined
                ? _this.config.foot
                : TableFactory.defaultFoot;
            var FootRow = _this.config.footRow !== undefined
                ? _this.config.footRow
                : TableFactory.defaultRow;
            var FootCell = _this.config.footCell !== undefined
                ? _this.config.footCell
                : TableFactory.defaultFootCell;
            var Body = _this.config.body !== undefined
                ? _this.config.body
                : TableFactory.defaultBody;
            var Row = _this.config.row !== undefined ? _this.config.row : TableFactory.defaultRow;
            var Cell = _this.config.cell !== undefined
                ? _this.config.cell
                : TableFactory.defaultCell;
            if (Table === null) {
                throw new Error("Table component is not defined");
            }
            // Return a component that renders the table (with data type T)
            return function (props) { return (React.createElement(Table, __assign({}, props),
                Head !== null && (React.createElement(Head, { tableProps: props }, HeadRow !== null && (React.createElement(HeadRow, { tableProps: props }, props.columns.map(function (column) {
                    return HeadCell !== null && (React.createElement(HeadCell, { key: column.key, tableProps: props, column: column }, column.label));
                }))))),
                Body !== null && (React.createElement(Body, { tableProps: props }, props.data.map(function (record) {
                    return Row !== null && (React.createElement(Row, { key: record[props.rowKey], tableProps: props, record: record }, props.columns.map(function (column) {
                        return Cell !== null && (React.createElement(Cell, { key: column.key, tableProps: props, record: record, column: column }, 
                        // Render the cell value
                        column.render
                            ? column.render(record[column.key], record)
                            : record[column.key]));
                    })));
                }))),
                Foot !== null && (React.createElement(Foot, { tableProps: props }, FootRow !== null && (React.createElement(FootRow, { tableProps: props }, props.columns.map(function (column) {
                    return FootCell !== null && (React.createElement(FootCell, { key: column.key, tableProps: props, column: column }, column.label));
                }))))))); };
        };
        this.config = config;
    }
    // Default components
    TableFactory.defaultTable = function (_a) {
        var children = _a.children;
        return (React.createElement("table", null, children));
    };
    TableFactory.defaultHead = function (_a) {
        var children = _a.children;
        return (React.createElement("thead", null, children));
    };
    TableFactory.defaultHeadCell = function (_a) {
        var children = _a.children;
        return (React.createElement("th", null, children));
    };
    TableFactory.defaultFoot = function (_a) {
        var children = _a.children;
        return (React.createElement("tfoot", null, children));
    };
    TableFactory.defaultFootCell = function (_a) {
        var children = _a.children;
        return (React.createElement("td", null, children));
    };
    TableFactory.defaultBody = function (_a) {
        var children = _a.children;
        return (React.createElement("tbody", null, children));
    };
    TableFactory.defaultRow = function (_a) {
        var children = _a.children;
        return (React.createElement("tr", null, children));
    };
    TableFactory.defaultCell = function (_a) {
        var children = _a.children;
        return (React.createElement("td", null, children));
    };
    return TableFactory;
}());
export { TableFactory };
