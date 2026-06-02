import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Bath,
  ChevronDown,
  CircleDotDashed,
  Droplets,
  FlameKindling,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind,
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ProgressiveImage from "@/components/ProgressiveImage";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.webp";

const treatmentImageSources = import.meta.glob("../assets/treatments/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

type ProgramId =
  | "abhyanga"
  | "swedana"
  | "vamana"
  | "virechana"
  | "basti"
  | "nasya"
  | "pinda"
  | "raktamokshana"
  | "leech"
  | "karnapoorana"
  | "shirodhara"
  | "agnikarma"
  | "vedhana"
  | "manya"
  | "kati"
  | "spine"
  | "hridaya"
  | "netra"
  | "takradhara"
  | "udwartana"
  | "lepanam"
  | "beauty";

type ProgramItem = { id: ProgramId; title: string; shortTitle: string };
type ProgramContent = {
  detail: {
    heading: string;
    subtitle: string;
    paragraphs: string[];
  };
  benefitsTitle: string;
  benefits: string[];
  extraTitle?: string;
  extraItems?: string[];
  footerNote: string;
};

const programItems: ProgramItem[] = [
  { id: "abhyanga", title: "Abhyanga (Massage Snehan Therapy)", shortTitle: "Abhyanga" },
  { id: "swedana", title: "Swedana (Ayurvedic Steam Therapy)", shortTitle: "Swedana" },
  { id: "vamana", title: "Vamana Therapy (Therapeutic Emesis)", shortTitle: "Vamana" },
  { id: "virechana", title: "Virechana Therapy (Purgation Detox)", shortTitle: "Virechana" },
  { id: "basti", title: "Basti Therapy (Oil Basti & Kadha Basti)", shortTitle: "Basti" },
  { id: "nasya", title: "Nasya Therapy", shortTitle: "Nasya" },
  { id: "pinda", title: "Pinda Swedana Therapy", shortTitle: "Pinda Swedana" },
  { id: "raktamokshana", title: "Raktamokshana Therapy (Blood Purification Therapy)", shortTitle: "Raktamokshana" },
  { id: "leech", title: "Leech Therapy (Jalaukavacharana)", shortTitle: "Leech Therapy" },
  { id: "karnapoorana", title: "Karnapoorana Therapy", shortTitle: "Karnapoorana" },
  { id: "shirodhara", title: "Shirodhara Therapy", shortTitle: "Shirodhara" },
  { id: "agnikarma", title: "Agnikarma Therapy", shortTitle: "Agnikarma" },
  { id: "vedhana", title: "Vedhana Karma", shortTitle: "Vedhana Karma" },
  { id: "manya", title: "Manya Basti Therapy", shortTitle: "Manya Basti" },
  { id: "kati", title: "Kati Basti Therapy", shortTitle: "Kati Basti" },
  { id: "spine", title: "Spine Basti Therapy", shortTitle: "Spine Basti" },
  { id: "hridaya", title: "Hridaya Dhara & Hridaya Basti", shortTitle: "Hridaya" },
  { id: "netra", title: "Netra Tarpana (Eye Rejuvenation Therapy)", shortTitle: "Netra Tarpana" },
  { id: "takradhara", title: "Takradhara Therapy", shortTitle: "Takradhara" },
  { id: "udwartana", title: "Udwartana Therapy", shortTitle: "Udwartana" },
  { id: "lepanam", title: "Lepanam Therapy", shortTitle: "Lepanam" },
  { id: "beauty", title: "Ayurvedic Beauty & Skin Rejuvenation Treatments", shortTitle: "Beauty & Skin" },
];

const iconMap: Record<ProgramId, typeof Bath> = {
  abhyanga: Droplets,
  swedana: Waves,
  vamana: Wind,
  virechana: Leaf,
  basti: FlameKindling,
  nasya: Wind,
  pinda: Activity,
  raktamokshana: ShieldCheck,
  leech: ShieldCheck,
  karnapoorana: Sparkles,
  shirodhara: Waves,
  agnikarma: FlameKindling,
  vedhana: CircleDotDashed,
  manya: HeartPulse,
  kati: ShieldCheck,
  spine: Activity,
  hridaya: HeartPulse,
  netra: Sparkles,
  takradhara: Waves,
  udwartana: Sparkles,
  lepanam: Leaf,
  beauty: Sparkles,
};

const programData: Record<ProgramId, ProgramContent> = {
  abhyanga: {
    detail: {
      heading: "Abhyanga (Massage Snehan Therapy)",
      subtitle:
        "Abhyanga is a traditional Ayurvedic full body oil massage therapy using medicated herbal oils to nourish tissues, improve circulation, reduce stress, and rejuvenate the body naturally.",
      paragraphs: [
        "Abhyanga is a traditional Ayurvedic full body oil massage therapy using medicated herbal oils to nourish tissues, improve circulation, reduce stress, and rejuvenate the body naturally.",
      ],
    },
    benefitsTitle: "Benefits",
    benefits: ["Stress and anxiety relief", "Muscle relaxation and pain relief", "Improves blood circulation", "Skin nourishment and anti-aging support", "Better sleep and relaxation"],
    footerNote: "A gentle grounding therapy for nourishment, relaxation, and whole-body rejuvenation.",
  },
  swedana: {
    detail: {
      heading: "Swedana (Ayurvedic Steam Therapy)",
      subtitle:
        "Swedana is an herbal steam therapy that helps open body channels, eliminate toxins, reduce stiffness, and improve circulation.",
      paragraphs: ["Swedana is an herbal steam therapy that helps open body channels, eliminate toxins, reduce stiffness, and improve circulation."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Detoxification support", "Joint pain and stiffness relief", "Muscle relaxation", "Improves flexibility and circulation"],
    footerNote: "A warming detox therapy that supports stiffness relief and natural circulation.",
  },
  vamana: {
    detail: {
      heading: "Vamana Therapy (Therapeutic Emesis)",
      subtitle:
        "Vamana is a specialized Panchakarma detox therapy that removes excess Kapha toxins from the body through controlled purification.",
      paragraphs: ["Vamana is a specialized Panchakarma detox therapy that removes excess Kapha toxins from the body through controlled purification."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Respiratory wellness support", "Skin disorder management support", "Metabolic detoxification", "Improves digestion and immunity"],
    footerNote: "A classical cleansing therapy used to reduce excess Kapha and restore balance.",
  },
  virechana: {
    detail: {
      heading: "Virechana Therapy (Purgation Detox)",
      subtitle:
        "Virechana is an Ayurvedic detoxification therapy focused on eliminating excess Pitta toxins through therapeutic cleansing.",
      paragraphs: ["Virechana is an Ayurvedic detoxification therapy focused on eliminating excess Pitta toxins through therapeutic cleansing."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Liver detoxification", "Skin health support", "Digestive system cleansing", "Improves metabolism and vitality"],
    footerNote: "A cleansing and balancing therapy designed for internal detoxification and renewal.",
  },
  basti: {
    detail: {
      heading: "Basti Therapy (Oil Basti & Kadha Basti)",
      subtitle:
        "Basti is one of the most important Panchakarma therapies for balancing Vata disorders using medicated oils and herbal decoctions.",
      paragraphs: ["Basti is one of the most important Panchakarma therapies for balancing Vata disorders using medicated oils and herbal decoctions."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Joint and spine wellness", "Arthritis and back pain support", "Nervous system rejuvenation", "Digestive wellness support"],
    extraTitle: "Types",
    extraItems: ["Oil Basti (Anuvasana Basti)", "Herbal Decoction Basti (Niruha/Kadha Basti)"],
    footerNote: "A foundational Panchakarma therapy for Vata balance and deep internal support.",
  },
  nasya: {
    detail: {
      heading: "Nasya Therapy",
      subtitle:
        "Nasya is an Ayurvedic nasal detox therapy using herbal oils and medicines for cleansing the head and neck region.",
      paragraphs: ["Nasya is an Ayurvedic nasal detox therapy using herbal oils and medicines for cleansing the head and neck region."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Sinus and migraine relief support", "Stress and mental relaxation", "Improves concentration and sleep", "Respiratory wellness support"],
    footerNote: "A head-and-neck focused therapy that supports clarity, breathing, and relaxation.",
  },
  pinda: {
    detail: {
      heading: "Pinda Swedana Therapy",
      subtitle:
        "Pinda Swedana is a rejuvenating herbal bolus massage therapy that relieves pain, stiffness, and muscular weakness.",
      paragraphs: ["Pinda Swedana is a rejuvenating herbal bolus massage therapy that relieves pain, stiffness, and muscular weakness."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Joint pain management", "Muscle strengthening", "Sports injury recovery support", "Improves circulation and flexibility"],
    footerNote: "A targeted supportive therapy for pain relief and mobility improvement.",
  },
  raktamokshana: {
    detail: {
      heading: "Raktamokshana Therapy (Blood Purification Therapy)",
      subtitle:
        "Raktamokshana is a classical Ayurvedic blood detoxification therapy used for purification and skin wellness support.",
      paragraphs: ["Raktamokshana is a classical Ayurvedic blood detoxification therapy used for purification and skin wellness support."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Skin wellness support", "Inflammation reduction", "Blood purification", "Pain management support"],
    extraTitle: "Types of Raktamokshana",
    extraItems: ["Siravedha", "Jalaukavacharana (Leech Therapy)", "Alabu Therapy", "Shringa Therapy", "Prachanna Karma"],
    footerNote: "A classical purification approach used for blood and skin wellness support.",
  },
  leech: {
    detail: {
      heading: "Leech Therapy (Jalaukavacharana)",
      subtitle:
        "Leech therapy is a specialized Ayurvedic blood purification treatment using medicinal leeches for detoxification and healing support.",
      paragraphs: ["Leech therapy is a specialized Ayurvedic blood purification treatment using medicinal leeches for detoxification and healing support."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Improves circulation", "Supports wound healing", "Pain and inflammation management", "Skin disorder support"],
    footerNote: "A gentle purification therapy used to support circulation and healing.",
  },
  karnapoorana: {
    detail: {
      heading: "Karnapoorana Therapy",
      subtitle:
        "Karnapoorana is an Ayurvedic ear oil therapy used for ear nourishment and relaxation.",
      paragraphs: ["Karnapoorana is an Ayurvedic ear oil therapy used for ear nourishment and relaxation."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Ear wellness support", "Jaw and neck relaxation", "Reduces dryness and discomfort", "Stress relief support"],
    footerNote: "A soothing ear nourishment therapy that supports relaxation and comfort.",
  },
  shirodhara: {
    detail: {
      heading: "Shirodhara Therapy",
      subtitle:
        "Shirodhara is a deeply relaxing Ayurvedic therapy where warm herbal oil flows continuously over the forehead.",
      paragraphs: ["Shirodhara is a deeply relaxing Ayurvedic therapy where warm herbal oil flows continuously over the forehead."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Stress and anxiety reduction", "Better sleep quality", "Mental relaxation and clarity", "Nervous system rejuvenation"],
    footerNote: "A signature calming therapy for relaxation, sleep, and mental clarity.",
  },
  agnikarma: {
    detail: {
      heading: "Agnikarma Therapy",
      subtitle:
        "Agnikarma is a specialized Ayurvedic heat therapy used for pain management and musculoskeletal wellness.",
      paragraphs: ["Agnikarma is a specialized Ayurvedic heat therapy used for pain management and musculoskeletal wellness."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Chronic pain relief support", "Joint and ligament wellness", "Sciatica and frozen shoulder support", "Fast pain management therapy"],
    footerNote: "A focused heat-based therapy used for musculoskeletal pain relief support.",
  },
  vedhana: {
    detail: {
      heading: "Vedhana Karma",
      subtitle:
        "Vedhana Karma is a classical Ayurvedic para-surgical procedure used for therapeutic puncturing and detoxification support.",
      paragraphs: ["Vedhana Karma is a classical Ayurvedic para-surgical procedure used for therapeutic puncturing and detoxification support."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Pain management support", "Swelling reduction", "Local detoxification support"],
    footerNote: "A classical therapeutic procedure used for localized support and relief.",
  },
  manya: {
    detail: {
      heading: "Manya Basti Therapy",
      subtitle:
        "Manya Basti is an Ayurvedic neck therapy where warm medicated oil is retained over the cervical region.",
      paragraphs: ["Manya Basti is an Ayurvedic neck therapy where warm medicated oil is retained over the cervical region."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Cervical spondylosis support", "Neck pain and stiffness relief", "Muscle relaxation", "Improves neck mobility"],
    footerNote: "A focused cervical therapy for neck comfort, mobility, and relaxation.",
  },
  kati: {
    detail: {
      heading: "Kati Basti Therapy",
      subtitle:
        "Kati Basti is a specialized lower back therapy using warm medicated oils for spine wellness and pain management.",
      paragraphs: ["Kati Basti is a specialized lower back therapy using warm medicated oils for spine wellness and pain management."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Lower back pain relief", "Sciatica support", "Spine strengthening", "Muscle relaxation and flexibility"],
    footerNote: "A restorative lower-back therapy for comfort, strength, and flexibility.",
  },
  spine: {
    detail: {
      heading: "Spine Basti Therapy",
      subtitle:
        "Spine Basti therapy focuses on spinal rejuvenation and musculoskeletal wellness through medicated oil retention therapy.",
      paragraphs: ["Spine Basti therapy focuses on spinal rejuvenation and musculoskeletal wellness through medicated oil retention therapy."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Spine care and nourishment", "Disc and nerve wellness support", "Improves flexibility and posture"],
    footerNote: "A supportive spinal therapy for nourishment, posture, and flexibility.",
  },
  hridaya: {
    detail: {
      heading: "Hridaya Dhara & Hridaya Basti",
      subtitle:
        "These therapies focus on relaxation and nourishment of the heart region using medicated oils and herbal decoctions.",
      paragraphs: ["These therapies focus on relaxation and nourishment of the heart region using medicated oils and herbal decoctions."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Stress management support", "Emotional relaxation", "Cardiac wellness support", "Nervous system calming effect"],
    footerNote: "A heart-region nourishment therapy that supports calmness and relaxation.",
  },
  netra: {
    detail: {
      heading: "Netra Tarpana (Eye Rejuvenation Therapy)",
      subtitle:
        "Netra Tarpana is an Ayurvedic eye rejuvenation therapy using medicated ghee for eye nourishment.",
      paragraphs: ["Netra Tarpana is an Ayurvedic eye rejuvenation therapy using medicated ghee for eye nourishment."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Eye strain relief", "Dry eye support", "Improves eye relaxation", "Digital eye fatigue management"],
    footerNote: "A nourishing eye therapy designed for comfort, rest, and rejuvenation.",
  },
  takradhara: {
    detail: {
      heading: "Takradhara Therapy",
      subtitle:
        "Takradhara is a cooling Ayurvedic therapy using medicated buttermilk poured over the forehead.",
      paragraphs: ["Takradhara is a cooling Ayurvedic therapy using medicated buttermilk poured over the forehead."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Stress and insomnia management", "Mental calmness", "Hair and scalp wellness", "Pitta balancing therapy"],
    footerNote: "A cooling and calming therapy that supports mental rest and Pitta balance.",
  },
  udwartana: {
    detail: {
      heading: "Udwartana Therapy",
      subtitle:
        "Udwartana is a dry herbal powder massage therapy used for detoxification and weight management support.",
      paragraphs: ["Udwartana is a dry herbal powder massage therapy used for detoxification and weight management support."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Weight management support", "Improves circulation", "Skin exfoliation and glow", "Reduces body stiffness"],
    footerNote: "A stimulating herbal powder therapy for cleansing, glow, and metabolism support.",
  },
  lepanam: {
    detail: {
      heading: "Lepanam Therapy",
      subtitle:
        "Lepanam is a medicated herbal paste application therapy for pain, inflammation, and skin wellness support.",
      paragraphs: ["Lepanam is a medicated herbal paste application therapy for pain, inflammation, and skin wellness support."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Joint and muscle relaxation", "Skin wellness support", "Swelling and inflammation reduction"],
    footerNote: "A localized herbal application therapy for comfort and calming support.",
  },
  beauty: {
    detail: {
      heading: "Ayurvedic Beauty & Skin Rejuvenation Treatments",
      subtitle:
        "Our Ayurvedic beauty therapies focus on natural skin rejuvenation, anti-aging support, detoxification, and holistic wellness.",
      paragraphs: ["Our Ayurvedic beauty therapies focus on natural skin rejuvenation, anti-aging support, detoxification, and holistic wellness."],
    },
    benefitsTitle: "Benefits",
    benefits: ["Healthy glowing skin", "Natural anti-aging support", "Hair wellness and nourishment", "Stress-free beauty care"],
    extraTitle: "Treatments Include",
    extraItems: ["Herbal facials", "Skin detox therapies", "Anti-aging Ayurveda treatments", "Hair and scalp rejuvenation", "Natural glow enhancement therapies"],
    footerNote: "Natural beauty care that supports skin, hair, and overall wellness from within.",
  },
};

const ProgramsTreatmentLayout = () => {
  const [activeProgram, setActiveProgram] = useState<ProgramId>("abhyanga");
  const activeItem = useMemo(() => programItems.find((item) => item.id === activeProgram) ?? programItems[0], [activeProgram]);
  const active = programData[activeProgram];
  const activeTreatmentImage = treatmentImageSources[`../assets/treatments/${activeProgram}.webp`];

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(200,169,107,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(53,94,59,0.12),transparent_28%),linear-gradient(180deg,#faf8f3_0%,#f5ebdd_100%)]">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0))]" />
      <div className="section-padding relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch mb-8 md:mb-10">
            <div className="premium-card !p-0 overflow-hidden">
              <div className="relative min-h-[18rem] md:min-h-[22rem] bg-[#355E3B]">
                <ProgressiveImage
                  src={heroBg}
                  alt="Ayurvedic Panchakarma"
                  className="object-cover opacity-35"
                  wrapperClassName="absolute inset-0"
                  priority
                  placeholderLabel="Loading banner image"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(53,94,59,0.96),rgba(122,92,62,0.78))]" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-[#FAF8F3]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-[#FAF8F3]/80">Special Programs</p>
                  <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
                    Authentic Panchakarma Therapies at Anandlok Ayurveda Panchakarma and Wellness Center
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 md:text-base">
                    Experience the healing power of traditional Ayurveda Panchakarma therapies designed to detoxify the body, rejuvenate the mind, restore balance, and promote holistic wellness naturally.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 border-t border-border/60 bg-card/90 p-6 md:p-8 md:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Therapies</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">70+ authentic Ayurveda therapies</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Focus</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Detox, rejuvenation, and balance</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Care</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Personalized Ayurvedic treatment plans</p>
                </div>
              </div>
            </div>

            <div className="premium-card flex flex-col justify-center gap-4 md:gap-6">
              <div>
                <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3">Panchakarma Overview</p>
                <h3 className="section-heading mb-3">Healing power of classical Ayurveda</h3>
                <div className="gold-divider !mx-0 !ml-0" />
              </div>
              <p className="text-muted-foreground leading-7">
                We offer 70+ authentic Ayurveda therapies based on classical Ayurvedic principles for complete body purification and rejuvenation. These programs support lifestyle disorders, stress management, pain relief, spine care, women’s wellness, and preventive healthcare.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Personalized Ayurvedic care",
                  "Traditional Panchakarma support",
                  "Natural detoxification",
                  "Holistic rejuvenation",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-border/60 bg-white/80 px-4 py-3 text-sm font-medium text-foreground shadow-[0_10px_30px_-22px_rgba(53,94,59,0.35)]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm leading-7 text-muted-foreground">
                Our expert Ayurveda doctors provide personalized Panchakarma treatments for lifestyle disorders, stress management, pain relief, spine care, women’s wellness, and preventive healthcare.
              </div>
            </div>
          </div>

          <div className="mb-6 lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center justify-between gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3 text-left shadow-[0_10px_30px_-20px_rgba(53,94,59,0.6)]">
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Select Therapy</span>
                    <span className="mt-1 block text-sm font-medium text-foreground">{activeItem.title}</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-primary" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={10}
                className="z-[60] w-[calc(100vw-1rem)] max-h-[min(70vh,34rem)] rounded-2xl border border-border/70 bg-card p-2 shadow-2xl overflow-y-auto overscroll-contain touch-pan-y sm:w-[20rem]"
              >
                <div className="space-y-1 pr-1">
                  {programItems.map((item) => (
                    <DropdownMenuItem
                      key={item.id}
                      onSelect={() => setActiveProgram(item.id)}
                      className={cn(
                        "cursor-pointer rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors focus:bg-primary/10 focus:text-primary",
                        activeProgram === item.id && "bg-primary/10 text-primary",
                      )}
                    >
                      {item.title}
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-stretch">
            <aside className="hidden lg:block lg:sticky lg:top-28">
              <div className="relative flex h-full max-h-[calc(100vh-8rem)] min-h-[40rem] flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-[linear-gradient(180deg,rgba(250,248,243,0.96),rgba(245,235,221,0.94))] p-3 shadow-[0_18px_50px_-28px_rgba(53,94,59,0.35)] backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#faf8f3] via-[#faf8f3]/60 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#f5ebdd] via-[#f5ebdd]/60 to-transparent" />
                <div className="px-3 pb-4 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">Therapies</p>
                </div>
                <nav className="programs-therapies-scroll min-h-0 flex-1 space-y-1.5 overflow-y-auto px-1 pb-3 pt-1 overscroll-contain">
                  {programItems.map((item) => {
                    const isActive = item.id === activeProgram;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveProgram(item.id)}
                        className={cn(
                          "group flex w-full items-center justify-between rounded-2xl border-l-4 px-3.5 py-3.5 text-left transition-all duration-300",
                          isActive
                            ? "border-l-primary bg-white/75 text-primary shadow-[0_12px_24px_-18px_rgba(53,94,59,0.55)]"
                            : "border-l-transparent text-foreground hover:border-l-primary/50 hover:bg-white/55 hover:text-primary",
                        )}
                      >
                        <span className="pr-3 text-sm font-medium leading-6">{item.title}</span>
                        <ArrowRight className={cn("h-4 w-4 shrink-0 transition-transform duration-300", isActive ? "opacity-100" : "opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100")} />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            <div className="space-y-6">
              <article className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_30px_80px_-32px_rgba(53,94,59,0.28)]">
                <div className="relative min-h-[18rem] overflow-hidden bg-[#355E3B]">
                  <ProgressiveImage
                    src={heroBg}
                    alt="Panchakarma therapy banner"
                    className="object-cover opacity-30"
                    wrapperClassName="absolute inset-0"
                    priority
                    placeholderLabel="Loading banner image"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(53,94,59,0.96),rgba(122,92,62,0.78))]" />
                  <div className="absolute -right-12 top-8 h-44 w-44 rounded-full border border-white/20 bg-white/10 blur-[0.5px]" />
                  <div className="absolute -left-10 bottom-4 h-36 w-36 rounded-full border border-white/20 bg-[#c8a96b]/10" />

                  <div className="relative px-6 py-8 md:px-8 lg:px-10 lg:py-10 text-[#FAF8F3]">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-[#FAF8F3]/80">{activeItem.shortTitle}</p>
                    <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:max-w-none lg:leading-[1.2] lg:text-5xl">
                      {active.detail.heading}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 md:text-base">{active.detail.subtitle}</p>
                  </div>
                </div>

                <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr]">
                  <section className="rounded-[1.5rem] border border-border/60 bg-[linear-gradient(180deg,rgba(250,248,243,0.92),rgba(255,255,255,0.98))] p-6 md:p-7">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">Program Details</h3>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                      {active.detail.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>

                  <section className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-white/85 min-h-[300px]">
                    {activeTreatmentImage ? (
                      <ProgressiveImage
                        src={activeTreatmentImage}
                        alt={active.detail.heading}
                        className="object-cover"
                        wrapperClassName="absolute inset-0"
                        placeholderLabel="Loading treatment image"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#d0d0d0] bg-[#f5f5f5]">
                        <svg className="mb-3 h-16 w-16 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-medium text-[#999]">Image Placeholder</p>
                        <p className="mt-1 text-xs text-[#bbb]">Upload therapy image here</p>
                      </div>
                    )}
                  </section>
                </div>

                <div className="grid gap-6 border-t border-border/60 p-6 md:p-8 lg:grid-cols-2">
                  <section>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">Key Benefit Highlights</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {active.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-white/85 px-4 py-3 shadow-[0_10px_24px_-24px_rgba(53,94,59,0.42)]">
                          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <ShieldCheck className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-sm leading-6 text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-4">
                    {active.extraTitle && active.extraItems && (
                      <div className="rounded-[1.5rem] border border-border/60 bg-[linear-gradient(180deg,rgba(250,248,243,0.98),rgba(245,235,221,0.92))] p-6 md:p-7">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">{active.extraTitle}</h3>
                        <div className="mt-4 space-y-3">
                          {active.extraItems.map((item) => (
                            <div key={item} className="rounded-2xl border border-border/60 bg-white/90 px-4 py-3 text-sm font-medium text-foreground">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="rounded-[1.5rem] border border-primary/15 bg-primary/5 p-6 md:p-7 text-sm leading-7 text-muted-foreground">
                      <span className="font-semibold text-primary">{activeItem.shortTitle}:</span> {active.footerNote}
                    </div>
                  </section>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsTreatmentLayout;