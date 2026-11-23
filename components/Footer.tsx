import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex gap-4">
          <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="hover:underline">X</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
