"use client";

import { Mail } from "lucide-react";
import {
  FiverrIcon,
  GithubIcon,
  LinkedinIcon,
  UpworkIcon,
  WhatsappIcon,
} from "@/components/icons/social-icons";
import { socialLinks, type SocialPlatform } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";

const iconMap: Record<SocialPlatform, ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  whatsapp: WhatsappIcon,
  fiverr: FiverrIcon,
  upwork: UpworkIcon,
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  size?: number;
  platforms?: SocialPlatform[];
}

export function SocialLinks({
  className,
  iconClassName,
  size = 20,
  platforms,
}: SocialLinksProps) {
  const links = platforms
    ? socialLinks.filter((l) => platforms.includes(l.platform))
    : socialLinks;

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {links.map(({ platform, href, label }) => {
        const Icon = iconMap[platform];
        // Agar koi icon map nahi hota to crash na ho
        if (!Icon) return null;

        return (
          <a
            key={platform}
            href={href}
            target={platform === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-lg hover:shadow-violet-500/10",
              iconClassName
            )}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
