import Link from "next/link";
import Image from "next/image";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-md">
                <Image
                  src="/logo_dark.jpg"
                  alt="ByteWave Logo"
                  fill
                  className="object-contain dark:invert"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">ByteWave</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Fast, accessible, and high-quality software development services for startups and businesses globally.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://github.com/Bytewaveteam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:bytewaveteams@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center md:flex md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} ByteWave. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-muted-foreground md:mt-0">
            Designed for performance and scalability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
