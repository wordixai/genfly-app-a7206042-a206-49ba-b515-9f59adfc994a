import { Github, MessageCircle, DollarSign, BookOpen } from "lucide-react";

const CommunitySection = () => {
  const sections = [
    {
      title: "Community",
      description: "Share ideas, answers, code and compare notes with the Cloudflare community.",
      links: [
        {
          icon: MessageCircle,
          text: "Discord",
          href: "https://discord.cloudflare.com"
        },
        {
          icon: MessageCircle,
          text: "Twitter",
          href: "https://x.com/CloudflareDev"
        },
        {
          icon: MessageCircle,
          text: "Community forum",
          href: "https://community.cloudflare.com"
        }
      ]
    },
    {
      title: "Open source",
      description: "Cloudflare contributes to the open-source ecosystem in a variety of ways, including:",
      links: [
        {
          icon: Github,
          text: "GitHub projects",
          href: "https://github.com/cloudflare"
        },
        {
          icon: DollarSign,
          text: "Sponsorship projects",
          href: "/sponsorships"
        },
        {
          icon: BookOpen,
          text: "Style guide",
          href: "/style-guide"
        }
      ]
    },
    {
      title: "Blog",
      description: "Get the latest news on Cloudflare products, technologies, and culture.",
      links: [
        {
          icon: BookOpen,
          text: "Read the blog",
          href: "https://blog.cloudflare.com"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            {sections.map((section, index) => (
              <div key={index} className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="flex items-center gap-3">
                      <link.icon className="h-5 w-5 text-gray-500" />
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-cloudflare-orange transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;