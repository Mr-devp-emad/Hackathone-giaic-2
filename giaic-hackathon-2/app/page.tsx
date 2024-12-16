"use client"

import FeatureSection from "@/components/Feature";
import Featureposts from "@/components/Featureposts";
import Hero from "@/components/Hero";
import Products from "@/components/Products";


export default function Home() {
  return (
   <main>
      <Hero />
      <Products />
      <FeatureSection />
      <Featureposts />
   </main>
  );
}
