import { GuthrieChat } from "~~/components/guthrie/GuthrieChat";
import { GuthrieFooter } from "~~/components/guthrie/GuthrieFooter";
import { GuthrieHeader } from "~~/components/guthrie/GuthrieHeader";

export default function GuthrieLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-base-100">
      <GuthrieHeader />
      <main>{children}</main>
      <GuthrieFooter />
      <GuthrieChat />
    </div>
  );
}
