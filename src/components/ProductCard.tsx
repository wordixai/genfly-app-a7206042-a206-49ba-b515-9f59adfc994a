import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
  viewAllText: string;
  viewAllHref: string;
}

const ProductCard = ({ title, links, viewAllText, viewAllHref }: ProductCardProps) => {
  return (
    <article className="card-hover rounded-lg border bg-card p-6 shadow-sm transition-all">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        
        <div className="space-y-3">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-cloudflare-orange transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="pt-2">
            <a
              href={viewAllHref}
              className="inline-flex items-center text-sm font-semibold text-cloudflare-orange hover:text-cloudflare-orange/80 transition-colors"
            >
              {viewAllText}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;