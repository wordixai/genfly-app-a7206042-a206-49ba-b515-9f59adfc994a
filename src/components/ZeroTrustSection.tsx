import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ZeroTrustSection = () => {
  const features = [
    {
      title: "Install the WARP Client",
      description: "The Cloudflare WARP client allows individuals and organizations to have a faster, more secure, and more private experience online.",
      href: "/cloudflare-one/connections/connect-devices/warp",
      buttonText: "Get started"
    },
    {
      title: "Set up a tunnel",
      description: "Cloudflare Tunnel provides you with a secure way to connect your resources to Cloudflare without a publicly routable IP address.",
      href: "/cloudflare-one/connections/connect-networks",
      buttonText: "Set up a tunnel"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg border p-6 shadow-sm card-hover">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <Button 
                    variant="outline"
                    className="border-cloudflare-orange text-cloudflare-orange hover:bg-cloudflare-orange hover:text-white"
                    asChild
                  >
                    <a href={feature.href} className="inline-flex items-center gap-2">
                      {feature.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <img
                src="https://developers.cloudflare.com/_astro/zero-trust-light.BvZ3bzoV_2oueAh.svg"
                alt="Zero Trust"
                className="w-full max-w-md mx-auto lg:mx-0"
              />
              <h2 className="text-3xl font-bold">Zero Trust</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cloudflare Zero Trust replaces legacy security perimeters with our global network, 
                making the Internet faster and safer for teams around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroTrustSection;