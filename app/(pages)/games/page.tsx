import ComingSoon from "@/app/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games ",
};

export default function GamesPage() {
  return (
    <main>
      <ComingSoon />
    </main>
  );
}
