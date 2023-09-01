import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["2021", "2022", "2023"] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
      sx={{
        backgroundColor: "#fefefe",
        display: "flex",
        flex: 1,
        width: "100%",
      }}
    />
  );
}
