import { Github, MessageCircle, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Resources",
      links: [
        { text: "API", href: "/api" },
        { text: "New to Cloudflare?", href: "/fundamentals" },
        { text: "Directory", href: "/directory" },
        { text: "Sponsorships", href: "/sponsorships" },
        { text: "Open Source", href: "https://github.com/cloudflare" },
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "https://support.cloudflare.com" },
        { text: "System Status", href: "https://www.cloudflarestatus.com" },
        { text: "Compliance", href: "https://www.cloudflare.com/trust-hub/compliance-resources" },
        { text: "GDPR", href: "https://www.cloudflare.com/trust-hub/gdpr" },
      ]
    },
    {
      title: "Company",
      links: [
        { text: "cloudflare.com", href: "https://www.cloudflare.com" },
        { text: "Our team", href: "https://www.cloudflare.com/people" },
        { text: "Careers", href: "https://www.cloudflare.com/careers" },
      ]
    },
    {
      title: "Tools",
      links: [
        { text: "Cloudflare Radar", href: "https://radar.cloudflare.com" },
        { text: "Speed Test", href: "https://speed.cloudflare.com" },
        { text: "Is BGP Safe Yet?", href: "https://isbgpsafeyet.com" },
        { text: "RPKI Toolkit", href: "https://rpki.cloudflare.com" },
        { text: "Certificate Transparency", href: "https://ct.cloudflare.com" },
      ]
    },
    {
      title: "Community",
      links: [
        { text: "X", href: "https://x.com/cloudflare", icon: "x" },
        { text: "Discord", href: "https://discord.cloudflare.com", icon: "discord" },
        { text: "YouTube", href: "https://www.youtube.com/cloudflare", icon: Youtube },
        { text: "GitHub", href: "https://github.com/cloudflare/cloudflare-docs", icon: Github },
      ]
    }
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "https://www.cloudflare.com/privacypolicy" },
    { text: "Terms of Use", href: "https://www.cloudflare.com/website-terms" },
    { text: "Report Security Issues", href: "https://www.cloudflare.com/disclosure" },
    { text: "Trademark", href: "https://www.cloudflare.com/trademark" },
  ];

  const getIcon = (iconType: string | any) => {
    if (iconType === "x") {
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.242188 2.25L21.554688 2.25L14.324219 10.507812L22.828125 21.75L16.171875 21.75L10.953125 14.933594L4.992188 21.75L1.679688 21.75L9.40625 12.914062L1.257812 2.25L8.082031 2.25L12.792969 8.480469ZM17.082031 19.773438L18.914062 19.773438L7.082031 4.125L5.113281 4.125Z" />
        </svg>
      );
    }
    if (iconType === "discord") {
      return <MessageCircle className="h-4 w-4" />;
    }
    if (typeof iconType === 'function') {
      const IconComponent = iconType;
      return <IconComponent className="h-4 w-4" />;
    }
    return null;
  };

  return (
    <footer className="border-t bg-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-cloudflare-orange transition-colors"
                    >
                      {(link as any).icon && getIcon((link as any).icon)}
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8" />

        <div className="flex flex-col items-center justify-center space-y-4">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <li>© 2025 Cloudflare, Inc.</li>
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cloudflare-orange transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;