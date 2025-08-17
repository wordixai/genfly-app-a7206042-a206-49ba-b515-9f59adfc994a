import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PlatformSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <img
                src="https://developers.cloudflare.com/_astro/developer-platform-light.CZoHB6oh_Z2wp9EL.svg"
                alt="Developer Platform"
                className="w-full max-w-md mx-auto lg:mx-0"
              />
              <h2 className="text-3xl font-bold">Developer Platform</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Cloudflare Developer Platform provides a serverless execution environment 
                that allows you to create entirely new applications or augment existing ones 
                without configuring or maintaining infrastructure.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">▶</div>
                  <div>Video Player</div>
                </div>
              </div>
              
              <div className="p-6">
                <Button 
                  className="w-full bg-cloudflare-orange hover:bg-cloudflare-orange/90 text-white"
                  asChild
                >
                  <a 
                    href="/directory/?product-group=Developer+platform"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Explore our Developer Platform
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;