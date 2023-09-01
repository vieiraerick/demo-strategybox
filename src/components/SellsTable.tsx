"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";

const rows = [
  {
    key: 1,
    num: 12892,
    des: "Produto A",
    val: 29.99,
  },
  {
    key: 2,
    num: 12891,
    des: "Produto B",
    val: 49.99,
  },
  {
    key: 3,
    num: 12890,
    des: "Produto C",
    val: 15.99,
  },
  {
    key: 4,
    num: 12889,
    des: "Produto D",
    val: 79.99,
  },
  {
    key: 5,
    num: 12888,
    des: "Produto E",
    val: 9.99,
  },
  {
    key: 6,
    num: 12887,
    des: "Produto F",
    val: 59.99,
  },
  {
    key: 7,
    num: 12886,
    des: "Produto G",
    val: 39.99,
  },
  {
    key: 8,
    num: 12885,
    des: "Produto H",
    val: 69.99,
  },
  {
    key: 9,
    num: 12884,
    des: "Produto I",
    val: 24.99,
  },
  {
    key: 10,
    num: 12883,
    des: "Produto J",
    val: 19.99,
  },
];

const columns = [
  {
    key: "num",
    label: "#",
  },
  {
    key: "des",
    label: "Descrição",
  },
  {
    key: "val",
    label: "Valor",
  },
];

export default function SellsTable() {
  return (
    <Table
      aria-label="Example table with dynamic content"
      isStriped
      removeWrapper
      classNames={{
        base: "max-h-[300px]",
        table: "text-default-900",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
