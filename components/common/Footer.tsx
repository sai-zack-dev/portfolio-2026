import Container from "@/components/common/Container";
import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <Container>
      <footer className="flex w-full items-center justify-between py-12 border-t text-sm">
        <p className="text-muted-foreground">
          Built and Designed by <span className="font-bold">Sai Zack</span>.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="hover:text-primary transition-colors"
            >
              <Icon className="h-6 w-6 text-neutral-500 hover:scale-125 transition-all" />
            </a>
          ))}
        </div>
      </footer>
    </Container>
  );
}
