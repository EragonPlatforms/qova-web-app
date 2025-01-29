import ComingSoon from "@/app/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <main>
      <ComingSoon />
    </main>
  );
}
