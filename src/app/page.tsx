"use client";

import Card from "@/components/Card";
import Chart from "@/components/Chart";
import DetailsCard from "@/components/DetailsCard";
import SellsAmountCard from "@/components/SellsAmountCard";
import SellsTable from "@/components/SellsTable";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

import {
  CheckCircle,
  CurrencyCircleDollar,
  Prohibit,
  WarningCircle,
} from "../helpers/icons";

export default function Home() {
  return (
    <div className="h-full">
      <main className="p-12 flex flex-col gap-12">
        <div className="grid grid-flow-dense grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-4 gap-4">
          <Card
            etiqueta="Indicador 1"
            valor="R$ 25.010,00"
            icone={<CurrencyCircleDollar size={32} color="#0ea5e9" />}
          />
          <Card
            etiqueta="Indicador 2"
            valor="RS 6.398,65"
            icone={<CheckCircle size={32} color="#10b981" />}
          />
          <Card
            etiqueta="Indicador 3"
            valor="R$ 14.861,35"
            icone={<WarningCircle size={32} color="#facc15" />}
          />
          <Card
            etiqueta="Indicador 4"
            valor="R$ 3.750,00"
            icone={<Prohibit size={32} color="#ef4444" />}
          />
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4">
          <div className="mobile:hidden laptop:block">
            <Accordion defaultExpandedKeys={["1"]}>
              <AccordionItem
                key="1"
                aria-label="Gráfico de vendas"
                title="Gráfico de vendas"
                className="bg-white rounded-2xl px-4"
              >
                <Chart />
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion defaultExpandedKeys={["1"]}>
              <AccordionItem
                key="1"
                aria-label="Últimas vendas"
                title="Últimas vendas"
                className="bg-white rounded-2xl px-4"
              >
                <SellsTable />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4">
          <DetailsCard />
          <SellsAmountCard />
        </div>
      </main>
    </div>
  );
}
