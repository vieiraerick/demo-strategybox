"use client";

import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { LinePlot } from "@mui/x-charts/LineChart";

import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

const series = [
  {
    type: "bar",
    stack: "A",
    yAxisKey: "qtd",
    data: [1500, 1250, 1000],
  },
  {
    type: "bar",
    stack: "A",
    yAxisKey: "qtd",
    data: [350, 250, 930],
  },
  {
    type: "line",
    yAxisKey: "valor",
    color: "red",
    data: [1500, 1250, 2000],
  },
];

export default function Combining() {
  return (
    <ChartContainer
      series={series}
      width={530}
      height={300}
      xAxis={[
        {
          id: "ano",
          data: ["2017", "2020", "2023"],
          scaleType: "band",
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: "qtd",
          scaleType: "linear",
        },
        {
          id: "valor",
          scaleType: "linear",
        },
      ]}
      sx={{
        backgroundColor: "#f1f5f9",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis label="Ano" position="bottom" axisId="ano" />
      <ChartsYAxis label="Quantidade Vendas" position="left" axisId="qtd" />
      <ChartsYAxis label="Valor" position="right" axisId="valor" />
    </ChartContainer>
  );
}
