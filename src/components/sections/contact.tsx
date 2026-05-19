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
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Amazing"
          description="Have a project in mind? I'd love to hear from you"
        />

        <motion.div
          className="grid gap-12 lg:grid-cols-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-2">
            <p className="text-white/60 leading-relaxed">
              Whether you need a stunning website, a complex web application, or
              technical consultation — reach out and let&apos;s discuss your next project.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-violet-400" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-violet-300">
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-violet-400" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-violet-300">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-violet-400" />
                {siteConfig.location}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <Button variant="glass" className="w-full justify-start" asChild>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} className="text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="glass" className="w-full justify-start" asChild>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                  View GitHub Profile
                </a>
              </Button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8 lg:col-span-3"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send size={18} />
                {submitted ? "Opening email client..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}