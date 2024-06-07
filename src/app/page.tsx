"use client";

import PageLayout from "@/components/layouts/page-layout";
import Hero from "@/components/hero";
import BuyMeACoffee from "@/components/buy-me-a-coffee";

export default function IndexPage() {
  return (
    <PageLayout childrenClassName="flex flex-col justify-center items-center">
      <Hero />
      <BuyMeACoffee />
    </PageLayout>
  );
}
