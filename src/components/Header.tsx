import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-cloudflare-orange">
              <path
                fill="currentColor"
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              />
            </svg>
            <span className="hidden font-bold sm:inline-block text-cloudflare-black">
              Cloudflare Docs
            </span>
          </a>
        </div>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" className="text-sm font-medium">
              Docs Directory
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              APIs
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              SDKs
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Help
            </Button>
            <Button className="ml-2 bg-cloudflare-orange hover:bg-cloudflare-orange/90 text-white">
              Log in
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;