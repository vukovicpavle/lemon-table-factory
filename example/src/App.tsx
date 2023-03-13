import {
  ColumnProps,
  TableConfig,
  TableFactory,
  TableHeadProps,
  TableProps,
} from "@vukovicpavle/lemon-table-factory";

const config: TableConfig = {
  table: (props: TableProps<Data>) => {
    return <table>{props.children}</table>;
  },
  head: (props: TableHeadProps<Data>) => {
    return <thead>{props.children}</thead>;
  },
  foot: null,
};

const factory = new TableFactory(config);

type Data = {
  id: number;
  name: string;
  age: number;
};

const data: Data[] = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 21 },
];

const columns: ColumnProps<Data>[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
];

const Table = factory.createTable();

export default function App() {
  return (
    <div>
      <Table<Data> columns={columns} data={data} rowKey="id" />
    </div>
  );
}
