"use client";

import PageLayout from "@/components/layouts/page-layout";
import Hero from "@/components/hero";
import BuyMeACoffee from "@/components/buy-me-a-coffee";

export default function IndexPage() {
  return (
    <PageLayout childrenClassName="py-10">
      <Hero />
      <BuyMeACoffee />
    </PageLayout>
  );
}
