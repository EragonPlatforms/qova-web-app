import ComingSoon from "@/app/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News ",
};

export default function News() {
  return (
    <main>
      <ComingSoon />
    </main>
  );
}
