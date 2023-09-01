"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { CurrencyCircleDollar } from "../helpers/icons";

import { useWindowSize } from "@/helpers/hooks";

export default function SellsAmountCard() {
  const size = useWindowSize();

  return (
    <Card
      className="border-none p-4 bg-background dark:bg-default-100/50"
      isBlurred
      shadow="sm"
    >
      <CardBody className="flex flex-col gap-4 items-start desktop:items-center justify-around">
        <div className="flex flex-1 flex-col gap-4 desktop:flex-row justify-around">
          <div className="flex flex-row desktop:px-4">
            <CurrencyCircleDollar size={32} color="#10b981" />
            <div className="flex flex-col pl-2">
              <p className="text-xl">R$ 465,93</p>
              <p className="text-small text-default-500">Hoje</p>
            </div>
          </div>
          {size > 1024 && <Divider orientation="vertical" />}
          <div className="flex flex-row desktop:px-4">
            <CurrencyCircleDollar size={32} color="#10b981" />
            <div className="flex flex-col pl-2">
              <p className="text-xl">R$ 25.010,00</p>
              <p className="text-small text-default-500">Este Mês</p>
            </div>
          </div>
        </div>
        {size > 1024 && <Divider />}
        <div className="flex flex-1 flex-col gap-4 desktop:flex-row justify-around">
          <div className="flex flex-row desktop:px-4">
            <CurrencyCircleDollar size={32} color="#10b981" />
            <div className="flex flex-col pl-2">
              <p className="text-xl">R$ 1.920.124,35</p>
              <p className="text-small text-default-500">Este Ano</p>
            </div>
          </div>
          {size > 1024 && <Divider orientation="vertical" />}
          <div className="flex flex-row desktop:px-4">
            <CurrencyCircleDollar size={32} color="#10b981" />
            <div className="flex flex-col pl-2">
              <p className="text-xl">R$ 37.984.254,00</p>
              <p className="text-small text-default-500">Todo o período</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
