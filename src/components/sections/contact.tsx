"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Amazing"
          description="Have a project in mind? I'd love to hear from you"
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-5 lg:gap-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Information & Socials Area */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-6 text-center lg:text-left">
            <div>
              <p className="text-xs sm:text-base text-white/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                Whether you need a stunning website, a complex web application, or
                technical consultation — reach out and let&apos;s discuss your next project.
              </p>

              {/* Verified Contact Details Matrix */}
              <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-white/60 inline-block text-left lg:block mx-auto lg:mx-0">
                <p className="flex items-center gap-2.5">
                  <Mail size={14} className="text-violet-400 shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-violet-300 transition-colors">
                    {siteConfig.email}
                  </a>
                </p>
                <p className="flex items-center gap-2.5 mt-1.5">
                  <Phone size={14} className="text-violet-400 shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-violet-300 transition-colors">
                    {siteConfig.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5 mt-1.5">
                  <MapPin size={14} className="text-violet-400 shrink-0" />
                  <span className="tracking-tight">{siteConfig.location}</span>
                </p>
              </div>
            </div>

            {/* Premium Button Actions Block */}
            <div className="space-y-2.5 max-w-md w-full mx-auto lg:mx-0 pt-2">
              <Button size="sm" variant="glass" className="w-full h-10 justify-center lg:justify-start rounded-xl text-xs font-medium border-white/5 bg-white/5" asChild>
                <a href="https://wa.me/923183015403" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button size="sm" variant="glass" className="w-full h-10 justify-center lg:justify-start rounded-xl text-xs font-medium border-white/5 bg-white/5" asChild>
                <a href="https://github.com/ahmar4561" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  View GitHub Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Luxury Form UI Container */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-4.5 sm:p-8 backdrop-blur-xl lg:col-span-3"
          >
            <div className="space-y-4.5">
              <div className="space-y-1.5 text-left">
                <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-white/80">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="h-9.5 text-xs sm:text-sm rounded-lg border-white/10 bg-white/5 placeholder:text-white/20 focus:border-violet-500/50"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-1.5 text-left mt-3">
                <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-white/80">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="h-9.5 text-xs sm:text-sm rounded-lg border-white/10 bg-white/5 placeholder:text-white/20 focus:border-violet-500/50"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-1.5 text-left mt-3">
                <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-white/80">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  className="text-xs sm:text-sm rounded-lg border-white/10 bg-white/5 min-h-[90px] placeholder:text-white/20 focus:border-violet-500/50"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                />
              </div>
              
              {/* Form Submission Button */}
              <Button type="submit" size="sm" className="w-full h-10 rounded-xl text-xs font-semibold mt-5 gap-2">
                <Send size={14} />
                {submitted ? "Opening email client..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
