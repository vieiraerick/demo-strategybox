"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { ReactElement } from "react";

interface CardComponentProps {
  valor: string;
  etiqueta: string;
  icone: ReactElement;
}

export default function CardComponent(props: CardComponentProps) {
  return (
    <Card
      className="border-none max-w-[640px] bg-gray-800/60 text-white"
      isBlurred
      shadow="sm"
    >
      <CardBody className="flex flex-row gap-2 items-center">
        {props.icone}
        <Divider orientation="vertical" />
        <div className="flex flex-col">
          <p className="text-md">{props.valor}</p>
          <p className="text-small text-default-300">{props.etiqueta}</p>
        </div>
      </CardBody>
    </Card>
  );
}
