import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const productSections = [
    {
      title: "Featured",
      links: [
        { text: "Add web analytics", href: "/web-analytics" },
        { text: "Troubleshoot errors", href: "/support/troubleshooting/http-status-codes" },
        { text: "Register a domain", href: "/registrar" },
        { text: "Setup 1.1.1.1", href: "/1.1.1.1/setup" },
        { text: "Get started with Cloudflare", href: "/learning-paths/get-started/concepts" },
      ],
      viewAllText: "View all docs",
      viewAllHref: "/directory",
    },
    {
      title: "Developer Products",
      links: [
        { text: "Workers", href: "/workers" },
        { text: "Pages", href: "/pages" },
        { text: "R2", href: "/r2" },
        { text: "Images", href: "/images" },
        { text: "Stream", href: "/stream" },
      ],
      viewAllText: "View all developer products",
      viewAllHref: "/directory/?product-group=Developer+platform",
    },
    {
      title: "AI Products",
      links: [
        { text: "AutoRAG", href: "/autorag" },
        { text: "Workers AI", href: "/workers-ai" },
        { text: "Vectorize", href: "/vectorize" },
        { text: "AI Gateway", href: "/ai-gateway" },
        { text: "AI Playground", href: "https://playground.ai.cloudflare.com" },
      ],
      viewAllText: "View all AI products",
      viewAllHref: "/directory/?product-group=AI",
    },
    {
      title: "Zero Trust",
      links: [
        { text: "Access", href: "/cloudflare-one/policies/access" },
        { text: "Tunnel", href: "/cloudflare-one/connections/connect-networks" },
        { text: "Gateway", href: "/cloudflare-one/policies/gateway" },
        { text: "Browser Isolation", href: "/cloudflare-one/policies/browser-isolation" },
        { text: "Replace your VPN", href: "/learning-paths/replace-vpn/concepts" },
      ],
      viewAllText: "View all Cloudflare One products",
      viewAllHref: "/directory/?product-group=Cloudflare+One",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {productSections.map((section, index) => (
            <ProductCard
              key={index}
              title={section.title}
              links={section.links}
              viewAllText={section.viewAllText}
              viewAllHref={section.viewAllHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;