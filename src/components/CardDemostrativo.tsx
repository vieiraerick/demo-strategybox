"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function CardDemostrativo() {
  return (
    <Card className="max-w-full laptop:min-w-[500px] desktop:min-w-[780px] bg-background dark:bg-default-100/50 flex flex-1">
      <CardHeader className="justify-between">
        <div className="flex flex-col gap-1 items-start justify-center w-full">
          <h2 className="text-small font-bold leading-none text-default-600">
            Próximos créditos
          </h2>
          <div className="flex flex-1 w-full text-sm mt-2 justify-between">
            <p>R$ 1.500,00</p>
            <p>01/10/2023</p>
          </div>
          <div className="flex flex-1 w-full text-sm mb-2 justify-between">
            <p>R$ 1.500,00</p>
            <p>01/11/2023</p>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="px-3 pt-0 pb-4 text-xl">
        <div className="text-sm w-full">
          <h3 className="border-l-4 border-purple-600 rounded-sm pl-2 my-2">
            Setembro
          </h3>
          {comprasSet.map((x) => {
            return (
              <div
                key={x.id}
                className="flex flex-1 flex-col justify-between mt-2"
              >
                <div className="flex flex-1 text-xs text-default-500">
                  <p className="flex flex-1">{x.des}</p>
                  <p className="flex justify-end w-[120px]">{x.data}</p>
                </div>
                <p className="flex justify-start w-[80px]">{x.valor}</p>
              </div>
            );
          })}
          <h3 className="border-l-4 border-purple-600 rounded-sm pl-2 mt-6 mb-2">
            Agosto
          </h3>
          {comprasAgo.map((x) => {
            return (
              <div
                key={x.id}
                className="flex flex-1 flex-col justify-between mt-2"
              >
                <div className="flex flex-1 text-xs text-default-500">
                  <p className="flex flex-1">{x.des}</p>
                  <p className="flex justify-end w-[120px]">{x.data}</p>
                </div>
                <p className="flex justify-start w-[80px]">{x.valor}</p>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}

const comprasSet = [
  {
    id: 1,
    des: "Compras - Estabelecimento A",
    valor: "R$ 128,90",
    data: "15 Set",
  },
  {
    id: 2,
    des: "Compras - Estabelecimento C",
    valor: "R$ 3,35",
    data: "14 Set",
  },
  {
    id: 3,
    des: "Compras - Estabelecimento A",
    valor: "R$ 7,45",
    data: "14 Set",
  },
  {
    id: 4,
    des: "Compras - Loja de Variedades",
    valor: "R$ 188,12",
    data: "8 Set",
  },
];

const comprasAgo = [
  {
    id: 5,
    des: "Compras - Restaurante XYZ",
    valor: "R$ 75,30",
    data: "31 Ago",
  },
  {
    id: 6,
    des: "Compras - Loja J",
    valor: "R$ 53,00",
    data: "31 Ago",
  },
  {
    id: 7,
    des: "Compras - Estabelecimento A",
    valor: "R$ 23,45",
    data: "29 Ago",
  },
  {
    id: 8,
    des: "Compras - Loja de Variedades",
    valor: "R$ 238,40",
    data: "23 Ago",
  },
];
