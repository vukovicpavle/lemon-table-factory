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

// Components for every table created by factory
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

export class TableFactory {
  config: TableConfig;
  constructor(config: TableConfig) {
    this.config = config;
  }

  // Default components
  static defaultTable = ({ children }: { children: React.ReactNode }) => (
    <table>{children}</table>
  );
  static defaultHead = ({ children }: { children: React.ReactNode }) => (
    <thead>{children}</thead>
  );
  static defaultHeadCell = ({ children }: { children: React.ReactNode }) => (
    <th>{children}</th>
  );
  static defaultFoot = ({ children }: { children: React.ReactNode }) => (
    <tfoot>{children}</tfoot>
  );
  static defaultFootCell = ({ children }: { children: React.ReactNode }) => (
    <td>{children}</td>
  );
  static defaultBody = ({ children }: { children: React.ReactNode }) => (
    <tbody>{children}</tbody>
  );
  static defaultRow = ({ children }: { children: React.ReactNode }) => (
    <tr>{children}</tr>
  );
  static defaultCell = ({ children }: { children: React.ReactNode }) => (
    <td>{children}</td>
  );

  // Factory methods
  createTable = () => {
    const Table =
      this.config.table !== undefined
        ? this.config.table
        : TableFactory.defaultTable;
    const Head =
      this.config.head !== undefined
        ? this.config.head
        : TableFactory.defaultHead;
    const HeadRow =
      this.config.headRow !== undefined
        ? this.config.headRow
        : TableFactory.defaultRow;
    const HeadCell =
      this.config.headCell !== undefined
        ? this.config.headCell
        : TableFactory.defaultHeadCell;
    const Foot =
      this.config.foot !== undefined
        ? this.config.foot
        : TableFactory.defaultFoot;
    const FootRow =
      this.config.footRow !== undefined
        ? this.config.footRow
        : TableFactory.defaultRow;
    const FootCell =
      this.config.footCell !== undefined
        ? this.config.footCell
        : TableFactory.defaultFootCell;
    const Body =
      this.config.body !== undefined
        ? this.config.body
        : TableFactory.defaultBody;
    const Row =
      this.config.row !== undefined ? this.config.row : TableFactory.defaultRow;
    const Cell =
      this.config.cell !== undefined
        ? this.config.cell
        : TableFactory.defaultCell;

    if (Table === null) {
      throw new Error("Table component is not defined");
    }

    // Return a component that renders the table (with data type T)
    return <T extends {}>(props: TableProps<T>) => (
      <Table {...props}>
        {Head !== null && (
          <Head tableProps={props}>
            {HeadRow !== null && (
              <HeadRow tableProps={props}>
                {props.columns.map(
                  (column) =>
                    HeadCell !== null && (
                      <HeadCell
                        key={column.key as React.Key}
                        tableProps={props}
                        column={column}
                      >
                        {column.label}
                      </HeadCell>
                    )
                )}
              </HeadRow>
            )}
          </Head>
        )}
        {Body !== null && (
          <Body tableProps={props}>
            {props.data.map(
              (record) =>
                Row !== null && (
                  <Row
                    key={record[props.rowKey] as React.Key}
                    tableProps={props}
                    record={record}
                  >
                    {props.columns.map(
                      (column) =>
                        Cell !== null && (
                          <Cell
                            key={column.key as React.Key}
                            tableProps={props}
                            record={record}
                            column={column}
                          >
                            {
                              // Render the cell value
                              column.render
                                ? column.render(record[column.key], record)
                                : record[column.key as keyof T as React.Key]
                            }
                          </Cell>
                        )
                    )}
                  </Row>
                )
            )}
          </Body>
        )}
        {Foot !== null && (
          <Foot tableProps={props}>
            {FootRow !== null && (
              <FootRow tableProps={props}>
                {props.columns.map(
                  (column) =>
                    FootCell !== null && (
                      <FootCell
                        key={column.key as React.Key}
                        tableProps={props}
                        column={column}
                      >
                        {column.label}
                      </FootCell>
                    )
                )}
              </FootRow>
            )}
          </Foot>
        )}
      </Table>
    );
  };
}
