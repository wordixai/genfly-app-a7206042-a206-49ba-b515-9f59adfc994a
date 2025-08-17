import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OtherDocsSection = () => {
  const docs = [
    {
      title: "Install an Origin CA certificate",
      description: "Use Origin Certificate Authority (CA) certificates to encrypt traffic between Cloudflare and your origin web server and reduce origin bandwidth.",
      href: "/ssl/origin-configuration/origin-ca",
      buttonText: "Install Origin CA"
    },
    {
      title: "Change your nameservers",
      description: "Make Cloudflare your primary DNS provider by updating your authoritative nameservers at your domain registrar.",
      href: "/dns/zone-setups/full-setup/setup",
      buttonText: "Update nameservers"
    },
    {
      title: "SSL/TLS Encryption mode",
      description: "Your domain's encryption mode controls how Cloudflare connects to your origin server and how SSL certificates at your origin will be validated.",
      href: "/ssl/origin-configuration/ssl-modes",
      buttonText: "Set encryption mode"
    },
    {
      title: "Allow traffic from specific countries only",
      description: "Block requests based on a list of allowed countries by configuring a custom rule in the Web Application Firewall (WAF).",
      href: "/waf/custom-rules/use-cases/allow-traffic-from-specific-countries",
      buttonText: "Allow traffic from specific countries only"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Other docs you might also like</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {docs.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg border p-6 shadow-sm card-hover">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{doc.title}</h3>
                  <p className="text-gray-600">{doc.description}</p>
                  <Button 
                    variant="outline"
                    className="border-cloudflare-orange text-cloudflare-orange hover:bg-cloudflare-orange hover:text-white"
                    asChild
                  >
                    <a href={doc.href} className="inline-flex items-center gap-2">
                      {doc.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherDocsSection;