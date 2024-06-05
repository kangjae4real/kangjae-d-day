"use client";

import PageLayout from "@/components/layouts/page-layout";
import Hero from "@/components/hero";

export default function IndexPage() {
  return (
    <PageLayout childrenClassName="py-10">
      <Hero />
    </PageLayout>
  );
}
