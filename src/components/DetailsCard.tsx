import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import React from "react";

export default function DetailsCard() {
  const [isBloqued, setIsBloqued] = React.useState(false);

  return (
    <Card className="max-w-full bg-background dark:bg-default-100/50 flex flex-1">
      <CardHeader className="justify-between">
        <div className="flex flex-col gap-1 items-start justify-center">
          <h2 className="text-small font-semibold leading-none text-default-600">
            Gerenciamento do Cartão
          </h2>
        </div>
        <Button
          className={
            isBloqued ? "bg-transparent text-foreground border-default-200" : ""
          }
          color="danger"
          radius="full"
          size="sm"
          variant={isBloqued ? "faded" : "solid"}
          onPress={() => setIsBloqued(!isBloqued)}
        >
          {isBloqued ? "Desbloquear" : "Bloquear"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 pt-0 pb-4 text-xl">
        <h1>Saldo Disponível: R$ 6.398,65</h1>
      </CardBody>
      <Divider />
      <CardFooter className="gap-3 w-full">
        <div className="text-default-400 text-sm w-full">
          {compras.map((x) => {
            return (
              <div key={x.id} className="flex flex-1 gap-2 justify-between">
                <p className="w-[60px]">{x.id}</p> |
                <p className="flex flex-1">{x.des}</p> |
                <p className="flex justify-end w-[80px]">{x.valor}</p> |
                <p className="flex justify-end w-[120px]">{x.data}</p>
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}

const compras = [
  {
    id: "112354",
    des: "Compra de produto 1",
    valor: "R$ 128,90",
    data: "5 minutos atrás",
  },
  {
    id: "112353",
    des: "Compra de produto 3",
    valor: "R$ 3,35",
    data: "12 minutos atrás",
  },
  {
    id: "112352",
    des: "Compra de produto 2",
    valor: "R$ 7,45",
    data: "2 horas atrás",
  },
  {
    id: "112351",
    des: "Compra de produto 1",
    valor: "R$ 128,30",
    data: "3 dias atrás",
  },
];
