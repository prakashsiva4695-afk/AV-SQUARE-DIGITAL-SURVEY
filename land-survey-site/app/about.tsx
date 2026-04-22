import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Award, MapPin, Calendar, Target, Cpu } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GeoPoint Surveys — 25+ years of precision land surveying, our team, certifications, and mission to deliver accurate geospatial data.",
};

const team = [
  {
    name: "James Whitfield, PLS",
    role: "Founder & Principal Surveyor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    license: "PLS #CO-0012",
    years: "25 yrs exp.",
  },
  {
    name: "Maria Delgado, PLS",
    role: "Director of Field Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    license: "PLS #CO-0048",
    years: "18 yrs exp.",
  },
  {
    name: "Derek Chen",
    role: "GIS & Remote Sensing Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    license: "CP #GIS-2210",
    years: "14 yrs exp.",
  },
  {
    name: "Rachel Okonkwo",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    license: "PMP Certified",
    years: "11 yrs exp.",
  },
];

const milestones = [
  { year: "1998", event: "GeoPoint Surveys founded in Denver, CO with 3 staff" },
  { year: "2004", event: "Expanded to GPS/GNSS technology, first state contract" },
  { year: "2010", event: "Opened second office; grew to 15 field professionals" },
  { year: "2016", event: "Launched UAV/drone division; first LiDAR scan fleet" },
  { year: "2020", event: "ISO 9001 certification; 1,000th project milestone" },
  { year: "2024", event: "30+ staff; multi-state licensing across 15 states" },
];

const values = [
  { icon: Target, title: "Precision First", desc: "We hold millimeter-level accuracy as a non-negotiable standard on every project." },
  { icon: Users, title: "Client Partnership", desc: "We work as an extension of your team, not just a vendor. Your success is our success." },
  { icon: Cpu, title: "Technology-Driven", desc: "Continuous investment in the latest survey equipment and software keeps our work at the industry frontier." },
  { icon: Award, title: "Integrity Always", desc: "Licensed, insured, and bound by professional ethics — our reputation is built one accurate survey at a time." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionReveal>
            <span className="gsap-reveal inline-flex items-center gap-2 text-teal-400 text-xs font-mono tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-teal-400" />
              About GeoPoint
            </span>
            <h1 className="gsap-reveal font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 max-w-3xl">
              A Quarter Century of{" "}
              <span className="text-gradient italic">Precision</span>
            </h1>
            <p className="gsap-reveal text-slate-300 text-xl leading-relaxed max-w-2xl">
              Founded in 1998, GeoPoint Surveys has grown from a small field crew into
              one of Colorado's most trusted geospatial firms — delivering survey data
              that shapes infrastructure, protects property rights, and advances development.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="gsap-reveal-left relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80"
                  alt="GeoPoint team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-navy-950/80 backdrop-blur-sm border border-teal-500/20 rounded-lg px-5 py-3">
                  <span className="text-teal-400 font-mono text-xs tracking-widest uppercase">Est. 1998 · Denver, CO</span>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal>
              <div className="space-y-5">
                <h2 className="gsap-reveal font-heading text-3xl md:text-4xl text-white">
                  Our Story
                </h2>
                <p className="gsap-reveal text-slate-300 leading-relaxed">
                  GeoPoint was founded by James Whitfield, PLS, with a single total station,
                  a pickup truck, and a commitment to doing survey work the right way. In the
                  early years, the company focused on residential boundary surveys across the
                  Denver metro area — earning a reputation for accuracy and responsiveness.
                </p>
                <p className="gsap-reveal text-slate-300 leading-relaxed">
                  Over the following decade, GeoPoint expanded into municipal and DOT work,
                  invested in GPS technology, and grew to a team of 15. The 2010s brought
                  another transformation: the company became an early adopter of UAV/drone
                  photogrammetry and LiDAR, enabling survey-grade 3D mapping at scale.
                </p>
                <p className="gsap-reveal text-slate-300 leading-relaxed">
                  Today, GeoPoint's 30+ professionals serve clients across 15 states — from
                  highway engineers and land developers to conservation districts and public
                  utilities. Our tools have evolved, but our core commitment has not: deliver
                  data you can stake your project on.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="gsap-reveal inline-flex items-center gap-2 text-teal-400 text-xs font-mono tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-teal-400" />
                Our Values
                <span className="w-8 h-px bg-teal-400" />
              </span>
              <h2 className="gsap-reveal font-heading text-4xl text-white">
                What Drives Us
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <div key={v.title} className="gsap-reveal card-glow bg-navy-900/50 rounded-xl p-6">
                  <div className="w-10 h-10 rounded bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                    <v.icon size={18} className="text-teal-400" />
                  </div>
                  <h3 className="font-heading text-lg text-white mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="gsap-reveal inline-flex items-center gap-2 text-teal-400 text-xs font-mono tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-teal-400" />
                History
                <span className="w-8 h-px bg-teal-400" />
              </span>
              <h2 className="gsap-reveal font-heading text-4xl text-white">
                Milestones
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-teal-400/20 to-transparent" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="gsap-reveal flex gap-8 items-start">
                    <div className="shrink-0 w-16 text-right">
                      <span className="font-mono text-teal-400 text-sm font-medium">{m.year}</span>
                    </div>
                    <div className="relative mt-1">
                      <div className="w-3 h-3 rounded-full border-2 border-teal-400 bg-navy-950 relative z-10" />
                    </div>
                    <div className="bg-navy-900/40 border border-teal-500/10 rounded-lg px-5 py-3 flex-1">
                      <p className="text-slate-300 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="gsap-reveal inline-flex items-center gap-2 text-teal-400 text-xs font-mono tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-teal-400" />
                Leadership
                <span className="w-8 h-px bg-teal-400" />
              </span>
              <h2 className="gsap-reveal font-heading text-4xl text-white">Meet the Team</h2>
              <p className="gsap-reveal text-slate-400 max-w-md mx-auto mt-3">
                Licensed professionals with decades of combined field and technical experience.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="gsap-reveal group">
                  <div className="relative h-72 rounded-xl overflow-hidden mb-4 card-glow">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-teal-400 font-mono text-[10px] tracking-widest">{member.license}</span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-white">{member.name}</h3>
                  <p className="text-slate-400 text-sm">{member.role}</p>
                  <p className="text-teal-400/60 text-xs font-mono mt-1">{member.years}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}