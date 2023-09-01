import CardDemostrativo from "@/components/CardDemostrativo";

export default function Extrato() {
  return (
    <div className="w-full flex flex-1 flex-col justify-center items-center p-4">
      <h1 className="text-2xl">Extrato detalhado</h1>
      <h2 className="mt-2 mb-6">Cartão Benefício 1 - Final 7591</h2>
      <CardDemostrativo />
    </div>
  );
}
