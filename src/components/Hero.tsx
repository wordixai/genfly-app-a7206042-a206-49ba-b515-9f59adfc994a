import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroLinks = [
    { text: "Directory", href: "/directory" },
    { text: "Subscriptions and billing", href: "/billing" },
    { text: "API", href: "/api" },
    { text: "Changelog", href: "/changelog" },
    { text: "Learning paths", href: "/learning-paths" },
    { text: "Architectures", href: "/reference-architecture" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container relative">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <nav className="flex flex-wrap gap-4 text-sm">
                {heroLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-600 hover:text-cloudflare-orange transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Welcome to Cloudflare
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Explore guides and tutorials to start building on Cloudflare's platform
                </p>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <img
                  src="https://developers.cloudflare.com/_astro/Dev-Docs-Header-Illustration-Light-Mode-cropped.COpWJJAy_282GIp.svg"
                  alt="Cloudflare Developer Platform"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;