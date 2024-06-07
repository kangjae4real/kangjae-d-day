"use client";

import dynamic from "next/dynamic";

const PageLayout = dynamic(() => import("@/components/layouts/page-layout"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
});
const BuyMeACoffee = dynamic(() => import("@/components/buy-me-a-coffee"), {
  ssr: false,
});

export default function IndexPage() {
  return (
    <PageLayout childrenClassName="flex flex-col justify-center items-center">
      <Hero />
      <BuyMeACoffee />
    </PageLayout>
  );
}
