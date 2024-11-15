import type { MetaFunction } from "@remix-run/node";
import CapitalGainsCard from "~/components/CapitalGainsCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Capital Gains Dashboard" },
    { name: "description", content: "Capital Gains Dashboard" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <CapitalGainsCard />
    </div>
  );
}
