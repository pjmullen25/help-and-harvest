"use client";

import React from "react";
import { motion } from "framer-motion";

const ORDER_EMAIL = "hello@helpandharvestfarm.com";
const EGG_PRICE = "$5";

const orderMailto = `mailto:${ORDER_EMAIL}?subject=Egg%20Order%20Request&body=Hi%20Help%20%26%20Harvest%2C%0A%0AI%20would%20like%20to%20order%20eggs.%0A%0ANumber%20of%20dozens%3A%0ALocation%3A%0APickup%20or%20Monday%20delivery%3A%0A%0AThank%20you!`;

type IconProps = {
  className?: string;
};

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HelpHarvestEggsWebsite() {
  runSmokeTests();

  return (
    <div className="min-h-screen bg-[#fbf8ef] text-[#2f2a1f]">
      <header className="sticky top-0 z-40 border-b border-[#e7ddc4] bg-[#fbf8ef]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8c96a] text-[#2f2a1f] shadow-sm">
              <IconEgg className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">Help & Harvest</p>
              <p className="text-xs tracking-wide text-[#6f654c]">Farm Fresh Eggs • Kuna, Idaho</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5f553e] md:flex">
            <a href="#eggs" className="hover:text-[#2f2a1f]">Our Eggs</a>
            <a href="#delivery" className="hover:text-[#2f2a1f]">Delivery</a>
            <a href="#order" className="hover:text-[#2f2a1f]">Order</a>
          </nav>

          <Button className="rounded-full bg-[#496b3a] px-5 py-2 text-white hover:bg-[#3d5b31]">
            <a href="#order">Order Eggs</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(232,201,106,0.35),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(73,107,58,0.18),_transparent_40%)]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7ddc4] bg-white/70 px-4 py-2 text-sm font-semibold text-[#496b3a] shadow-sm">
                <IconSun className="h-4 w-4" /> Local eggs from orchard-raised hens
              </p>

              <h1 className="text-5xl font-extrabold tracking-tight text-[#2f2a1f] md:text-6xl">
                Farm fresh eggs for families in Kuna.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f553e]">
                Help & Harvest sells fresh, unwashed eggs from chickens that free range in our orchard and are fed non-GMO feed. Simple, local, and raised with care.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full bg-[#496b3a] px-7 py-3 text-white hover:bg-[#3d5b31]">
                  <a href="#order">Request Eggs</a>
                </Button>
                <Button className="rounded-full border border-[#cdbf9d] bg-white/60 px-7 py-3 text-[#2f2a1f] hover:bg-white">
                  <a href="#eggs">Learn More</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-[#e7ddc4] bg-white p-4 shadow-xl">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#f3e4b7] to-[#d9e3c6]">
                  <div className="grid grid-cols-3 gap-4" aria-label="One dozen eggs illustration">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div key={index} className="h-16 w-12 rounded-[50%] bg-[#fffaf0] shadow-md ring-1 ring-[#e1d5bb]" />
                    ))}
                  </div>
                </div>
              </div>

              <Card className="absolute -bottom-8 left-5 max-w-xs rounded-3xl border-[#e7ddc4] bg-white shadow-lg">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold text-[#6f654c]">Price</p>
                  <p className="mt-1 text-3xl font-extrabold text-[#2f2a1f]">{EGG_PRICE} / dozen</p>
                  <p className="mt-2 text-sm text-[#6f654c]">Available locally while supply lasts.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="eggs" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#496b3a]">Our Eggs</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Raised simply. Sold locally.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5f553e]">
              Our hens spend their days free ranging through our orchard. We keep things simple, natural, and local so families in the Kuna area can enjoy fresh eggs from a nearby farm.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard icon={<IconLeaf className="h-6 w-6" />} title="Non-GMO Feed" text="Our chickens are fed non-GMO feed as part of their regular diet." />
            <FeatureCard icon={<IconSun className="h-6 w-6" />} title="Free Range Orchard Hens" text="The flock free ranges in our orchard, scratching, foraging, and roaming outside." />
            <FeatureCard icon={<IconEgg className="h-6 w-6" />} title="Unwashed Eggs" text="Eggs are sold unwashed, helping preserve the natural bloom until you are ready to use them." />
          </div>
        </section>

        <section id="delivery" className="bg-[#efe7d2] px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#496b3a]">Local Pickup & Delivery</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Serving Kuna, Idaho.</h2>
              <p className="mt-5 text-lg leading-8 text-[#5f553e]">
                Depending on your location, Monday delivery may be available within the Kuna area. Pickup and delivery availability can vary by week based on egg supply and route location.
              </p>
            </div>

            <div className="grid gap-4">
              <InfoRow icon={<IconMapPin className="h-6 w-6" />} title="Local Area" text="Focused on serving families in and around Kuna, ID." />
              <InfoRow icon={<IconTruck className="h-6 w-6" />} title="Monday Delivery" text="Available for some Kuna-area locations, depending on route and availability." />
              <InfoRow icon={<IconCheck className="h-6 w-6" />} title="While Supply Lasts" text="Egg availability depends on the hens, season, and weekly demand." />
            </div>
          </div>
        </section>

        <section id="order" className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-[2rem] bg-[#496b3a] p-8 text-white shadow-xl md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8c96a]">Order Eggs</p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Ready for fresh local eggs?</h2>
                <p className="mt-5 text-lg leading-8 text-white/85">
                  Send us a message with how many dozen you would like, your location, and whether you are interested in pickup or Monday delivery.
                </p>
              </div>

              <Card className="rounded-3xl border-white/20 bg-white text-[#2f2a1f] shadow-lg">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-[#6f654c]">Egg Price</p>
                  <p className="mt-1 text-4xl font-extrabold">{EGG_PRICE}</p>
                  <p className="text-sm text-[#6f654c]">per dozen</p>

                  <div className="mt-6 space-y-3 text-sm text-[#5f553e]">
                    <CheckLine>Non-GMO feed</CheckLine>
                    <CheckLine>Orchard free range</CheckLine>
                    <CheckLine>Unwashed eggs</CheckLine>
                  </div>

                  <Button className="mt-6 w-full rounded-full bg-[#e8c96a] px-4 py-3 text-[#2f2a1f] hover:bg-[#ddb949]">
                    <a href={orderMailto} className="flex items-center justify-center">
                      <IconMessageCircle className="mr-2 h-4 w-4" /> Message to Order
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e7ddc4] px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#6f654c] md:flex-row">
          <p>© {new Date().getFullYear()} Help & Harvest. Kuna, Idaho.</p>
          <p>Farm fresh eggs • Local pickup • Limited Monday delivery</p>
        </div>
      </footer>
    </div>
  );
}

function Card({ children, className = "" }: CardProps) {
  return <div className={`border ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }: CardProps) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className = "" }: ButtonProps) {
  return (
    <div className={`inline-flex cursor-pointer items-center justify-center font-semibold transition ${className}`}>
      {children}
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <Card className="rounded-3xl border-[#e7ddc4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0e1ac] text-[#496b3a]">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-3 leading-7 text-[#6f654c]">{text}</p>
      </CardContent>
    </Card>
  );
}

function InfoRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-[#e1d5bb]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#496b3a] text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#6f654c]">{text}</p>
      </div>
    </div>
  );
}

function CheckLine({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex gap-2">
      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#496b3a]" /> {children}
    </p>
  );
}

function SvgIcon({ children, className = "h-5 w-5", viewBox = "0 0 24 24" }: { children: React.ReactNode; className?: string; viewBox?: string }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function IconEgg({ className }: IconProps) {
  return (
    <SvgIcon className={className}>
      <path d="M12 3C8.8 3 6 8.3 6 13.2C6 17.6 8.5 21 12 21s6-3.4 6-7.8C18 8.3 15.2 3 12 3Z" />
    </SvgIcon>
  );
}

function IconSun({ className }: IconProps) {
  return (
    <SvgIcon className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </SvgIcon>
  );
}

function IconLeaf({ className }: IconProps) {
  return (
    <SvgIcon className={className}>
      <path d="M20 4C13 4 6 8 5 16c5 1 12-2 15-12Z" />
      <path d="M5 16c3-2 6-4 9-6" />
      <path d="M4 20c1-2 2-3 4-5" />
    </SvgIcon>
  );
}

function IconMapPin({ className }: IconProps) {
  return (
    <SvgIcon className={className}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </SvgIcon>
  );
}

function IconTruck({ className }: IconProps) {
  return (
    <SvgIcon className={className}>
      <path d="M3 7h11v10H3z" />
      <path d="M14 11h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </SvgIcon>
  );
}

function IconCheck({ className }: IconProps) {
  return (
    <SvgIcon className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12 2.5 2.5L16 9" />
    </SvgIcon>
  );
}

function IconMessageCircle({ className }: IconProps) {
  return (
    <SvgIcon className={className}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5Z" />
    </SvgIcon>
  );
}

function runSmokeTests() {
  if (typeof console === "undefined") return;

  const tests: Array<[boolean, string]> = [
    [EGG_PRICE === "$5", "Egg price should be $5."],
    [orderMailto.startsWith(`mailto:${ORDER_EMAIL}`), "Order link should use the configured email address."],
    [orderMailto.includes("Egg%20Order%20Request"), "Order link should include an egg order subject."],
    [orderMailto.includes("Number%20of%20dozens"), "Order link should prompt for number of dozens."],
  ];

  tests.forEach(([passed, message]) => {
    if (!passed) {
      console.error(`Help & Harvest smoke test failed: ${message}`);
    }
  });
}
