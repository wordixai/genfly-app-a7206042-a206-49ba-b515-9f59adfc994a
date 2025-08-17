import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CodePlayground from "@/components/CodePlayground";
import PlatformSection from "@/components/PlatformSection";
import ZeroTrustSection from "@/components/ZeroTrustSection";
import OtherDocsSection from "@/components/OtherDocsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <CodePlayground />
        <div className="border-t">
          <PlatformSection />
        </div>
        <div className="border-t">
          <ZeroTrustSection />
        </div>
        <div className="border-t">
          <OtherDocsSection />
        </div>
        <div className="border-t">
          <CommunitySection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;