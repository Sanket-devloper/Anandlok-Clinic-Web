import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  Bath,
  CheckCircle2,
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.webp";
import clinicPhoto from "@/assets/about-clinic.webp";

const serviceImageSources = import.meta.glob("../assets/services/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const clinicStandardImage = serviceImageSources["../assets/services/clinic-standard.webp"] ?? serviceImageSources["../assets/services/consultation-standard.webp"];

type ServiceId =
  | "consultation"
  | "panchakarma"
  | "treatments"
  | "uturn"
  | "spinowalk"
  | "heart"
  | "hope"
  | "diet"
  | "marma"
  | "yoga"
  | "rejuvenation";

type ServiceItem = { id: ServiceId; title: string; shortTitle: string };
type DetailContent = { heading: string; subtitle: string; paragraphs: string[] };
type DetailCard = { icon: typeof Bath; title: string; text: string };

const serviceItems: ServiceItem[] = [
  { id: "consultation", title: "Authentic Ayurvedic Diagnosis & Consultation", shortTitle: "Diagnosis & Consultation" },
  { id: "panchakarma", title: "Panchakarma Therapies", shortTitle: "Panchakarma Therapies" },
  { id: "treatments", title: "Ayurvedic Treatments We Offer", shortTitle: "Treatment Programs" },
  { id: "uturn", title: "UTURN Lifestyle Disease Reversal Program", shortTitle: "UTURN Program" },
  { id: "spinowalk", title: "SPINOWALK – Walk With Dignity", shortTitle: "SPINOWALK" },
  { id: "heart", title: "Complete Heart Care Detox Program", shortTitle: "Heart Care Detox" },
  { id: "hope", title: "Fertility & Reproductive Wellness Program", shortTitle: "Fertility & Reproductive Wellness Program" },
  { id: "diet", title: "Ayurvedic Diet & Lifestyle Guidance", shortTitle: "Diet & Lifestyle" },
  { id: "marma", title: "Marma Therapy", shortTitle: "Marma Therapy" },
  { id: "yoga", title: "Yoga & Meditation", shortTitle: "Yoga & Meditation" },
  { id: "rejuvenation", title: "Relaxation & Rejuvenation Therapy in Ayurveda", shortTitle: "Rejuvenation Therapy" },
];

const cardIconMap: Record<string, typeof Bath> = {
  consultation: Sparkles,
  panchakarma: Droplets,
  treatments: HeartPulse,
  uturn: Activity,
  spinowalk: ShieldCheck,
  heart: HeartPulse,
  hope: Sparkles,
  diet: Leaf,
  marma: CircleDotDashed,
  yoga: Waves,
  rejuvenation: FlameKindling,
};

const buildSectionCards = (items: string[]) =>
  items.map((title) => ({ icon: cardIconMap.panchakarma, title, text: "" }));

const serviceData: Record<ServiceId, {
  detail: DetailContent;
  chips: string[];
  therapyTitle: string;
  therapyCards: DetailCard[];
  benefitsTitle: string;
  benefits: string[];
  conditionsTitle: string;
  conditions: string[];
  faqs: { question: string; answer: string }[];
  footerNote: string;
  referenceNote: string;
}> = {
  consultation: {
    detail: {
      heading: "Authentic Ayurvedic Diagnosis & Consultation",
      subtitle: "Offline and online consultation based on classical Ayurveda principles, focused on root-cause diagnosis and personalized care.",
      paragraphs: [
        "At Anandlok Health Foundation Anandlok Ayurveda Panchakarma and Wellness Center, our experienced Ayurvedic doctors assess the root cause of disease rather than only treating symptoms. Every consultation is guided by classical Ayurveda and tailored to the individual.",
        "We consider Prakriti, lifestyle, mental state, and disease condition to design personalized and customized treatment plans. Our guidance includes health assessment, diet evaluation, emotional wellness understanding, preventive healthcare, and self-prepared Ayurvedic medicines for safe and effective support.",
      ],
    },
    chips: ["Root-cause diagnosis", "Online and offline care", "Personalized treatment plans", "Classical Ayurveda", "Preventive guidance"],
    therapyTitle: "Consultation Includes",
    therapyCards: [
      { icon: Sparkles, title: "Detailed Ayurvedic Health Assessment", text: "Comprehensive evaluation of your current health status and concerns." },
      { icon: Leaf, title: "Prakriti Analysis", text: "Assessment of body constitution for individualized care planning." },
      { icon: HeartPulse, title: "Lifestyle & Diet Evaluation", text: "Review of diet, habits, stress, sleep, and routine factors." },
      { icon: ShieldCheck, title: "Customized Treatment Planning", text: "Personalized protocols based on disease, constitution, and goals." },
    ],
    benefitsTitle: "Why Consultation Matters",
    benefits: ["Clarifies root cause", "Supports long-term healing", "Guides proper treatment selection", "Improves understanding of your constitution", "Promotes holistic wellness"],
    conditionsTitle: "What It Helps With",
    conditions: ["Chronic illnesses", "Lifestyle disorders", "Digestive complaints", "Stress and fatigue", "Preventive healthcare"],
    faqs: [
      { question: "Is consultation available online?", answer: "Yes. We provide both offline and online Ayurvedic consultation based on patient needs." },
      { question: "Will I receive a personalized plan?", answer: "Yes. Every plan is customized to Prakriti, health condition, and lifestyle." },
      { question: "Do you provide medicines?", answer: "Yes. We also provide self-prepared Ayurvedic medicines formulated with authentic practices." },
    ],
    footerNote: "Authentic consultation designed for safe, personalized Ayurvedic healing.",
    referenceNote: "Clinical consultation for accurate Ayurvedic assessment and planning.",
  },
  panchakarma: {
    detail: {
      heading: "Panchakarma Therapies",
      subtitle: "Authentic Ayurvedic detoxification and rejuvenation therapies for natural healing and balance.",
      paragraphs: [
        "Anandlok Ayurveda Panchakarma and Wellness Center is a trusted destination for authentic Panchakarma treatment in Nagpur, India. Our therapies detoxify the body, restore dosha balance, and improve physical, mental, and emotional wellbeing naturally.",
        "With more than 15 years of Ayurvedic clinical experience, our doctors and trained Panchakarma therapists provide customized and cost-effective programs based on Prakriti, disease condition, lifestyle, and health goals.",
      ],
    },
    chips: ["Detoxification", "Rejuvenation", "15+ years experience", "Customized programs", "Natural balance"],
    therapyTitle: "Authentic Panchakarma Therapies",
    therapyCards: [
      { icon: Droplets, title: "Abhyanga Ayurvedic Massage", text: "Oil massage for circulation, nourishment, and relaxation." },
      { icon: Waves, title: "Shirodhara Therapy", text: "Forehead oil flow for stress, anxiety, and sleep support." },
      { icon: FlameKindling, title: "Basti Treatment", text: "Classical medicated therapy supporting internal balance." },
      { icon: Wind, title: "Nasya Therapy", text: "Nasal therapy for head, neck, sinus, and sensory wellness." },
      { icon: Leaf, title: "Virechana Detoxification", text: "Gentle detox for pitta balance and liver support." },
      { icon: Activity, title: "Swedana Steam Therapy", text: "Herbal steam therapy to soften tissues and reduce stiffness." },
      { icon: CircleDotDashed, title: "Kati Basti", text: "Lower back oil retention for lumbar support." },
      { icon: ShieldCheck, title: "Janu Basti", text: "Knee oil therapy for pain and stiffness relief." },
      { icon: Sparkles, title: "Udwartana Therapy", text: "Herbal powder therapy supporting metabolism and skin health." },
    ],
    benefitsTitle: "Major Benefits of Panchakarma Therapy",
    benefits: [
      "Deep Detoxification & Body Cleansing",
      "Removes Toxins (Ama) Naturally",
      "Improves Digestion & Metabolism",
      "Enhances Immunity & Vitality",
      "Reduces Stress, Anxiety & Mental Fatigue",
      "Improves Sleep Quality",
      "Supports Weight Loss & Obesity Management",
      "Helps in Joint Pain & Arthritis Relief",
      "Improves Skin Glow & Hair Health",
      "Supports Hormonal Balance",
      "Increases Energy & Stamina",
      "Promotes Anti-Aging & Rejuvenation",
      "Improves Blood Circulation",
      "Supports Better Liver & Gut Health",
      "Helps Manage Lifestyle Disorders Naturally",
      "Enhances Mental Clarity & Emotional Wellness",
      "Strengthens Overall Physical Health",
      "Supports Long-Term Preventive Healthcare",
    ],
    conditionsTitle: "Panchakarma Helps In Managing",
    conditions: [
      "Arthritis & Joint Disorders",
      "Back Pain, Spine & Cervical Problems",
      "Stress & Anxiety",
      "Diabetes, Thyroid, Obesity, Cholesterol & Lifestyle Disorders",
      "Skin Diseases",
      "Digestive Disorders",
      "Obesity & Metabolic Disorders",
      "Women’s Health Problems",
      "Infertility",
      "Respiratory Disorders",
      "Chronic Fatigue & Weak Immunity",
    ],
    faqs: [
      { question: "What is Panchakarma therapy?", answer: "Panchakarma is the classical Ayurvedic detox system that uses cleansing and rejuvenation therapies to restore balance and remove toxins." },
      { question: "How many sessions are required?", answer: "The number of sessions depends on constitution, condition, and treatment goals." },
      { question: "Is Panchakarma safe for everyone?", answer: "It is generally safe when supervised by trained Ayurvedic doctors and personalized to the patient." },
      { question: "Which diseases can Panchakarma help manage?", answer: "It is used for joint pain, spine issues, digestive concerns, obesity, skin disorders, stress, and lifestyle conditions." },
      { question: "How does Panchakarma detoxification work?", answer: "It prepares the body with oleation and sweating therapies, then removes toxins through classical purification procedures." },
    ],
    footerNote: "A complete premium Panchakarma presentation for detox, balance, and rejuvenation.",
    referenceNote: "Detox therapies for cleansing, balance, and renewed vitality.",
  },
  treatments: {
    detail: {
      heading: "Ayurvedic Treatments We Offer",
      subtitle: "Authentic Ayurvedic treatment and Panchakarma therapies for acute and chronic conditions, lifestyle correction, and natural healing.",
      paragraphs: [
        "At Anandlok Ayurveda Panchakarma and Wellness Centre, Nagpur, we provide treatment for a wide range of health conditions using root-cause based Ayurveda, detoxification, lifestyle correction, and long-term wellness planning.",
        "Our care spans lifestyle disorders, joint and spine problems, digestive disorders, skin and hair care, women’s health, male reproductive health, mental wellness, respiratory care, kidney support, pediatric care, eye care, and more.",
      ],
    },
    chips: ["Acute and chronic care", "Root-cause based", "Long-term wellness", "Personalized Ayurveda", "Panchakarma support"],
    therapyTitle: "Treatment Categories",
    therapyCards: [
      { icon: Leaf, title: "Lifestyle Disorder Treatments", text: "Diabetes, blood pressure, obesity, fatty liver, thyroid, cholesterol." },
      { icon: HeartPulse, title: "Joint, Spine & Pain Management", text: "Arthritis, spondylosis, slip disc, sciatica, back pain, sports injury." },
      { icon: Sparkles, title: "Women’s & Male Health Care", text: "PCOS, infertility, menstrual issues, reproductive wellness, vitality support." },
      { icon: ShieldCheck, title: "Special Care Programs", text: "Respiratory, kidney, digestive, pediatric, eye care, and detoxification support." },
    ],
    benefitsTitle: "Core Benefits",
    benefits: ["Natural healing support", "Detoxification and rejuvenation", "Lifestyle correction", "Personalized treatment plans", "Long-term wellness"],
    conditionsTitle: "Focus Areas",
    conditions: ["Lifestyle disorders", "Pain and mobility issues", "Digestive and metabolic disorders", "Women’s health", "Respiratory and renal support"],
    faqs: [
      { question: "Can these treatments be customized?", answer: "Yes. Every treatment plan is customized according to condition, Prakriti, and wellness goals." },
      { question: "Do you combine Panchakarma with medicines?", answer: "Yes. We combine authentic therapies with individualized Ayurvedic medicines and guidance." },
      { question: "Is this for chronic conditions only?", answer: "No. We also support acute concerns, preventive care, and wellness optimization." },
    ],
    footerNote: "A complete treatment directory built on authentic Ayurveda and personalized care.",
    referenceNote: "A complete service overview for personalized Ayurvedic care.",
  },
  uturn: {
    detail: {
      heading: "UTURN Lifestyle Disease Reversal Program",
      subtitle: "Offline and online lifestyle disease management program focused on authentic Ayurveda, diet, lifestyle, and holistic healing.",
      paragraphs: [
        "The UTURN Program helps individuals naturally improve health and manage chronic lifestyle disorders through root-cause based healing. It is designed around authentic Ayurveda, diet, lifestyle, and holistic management principles.",
        "With 15+ years of clinical experience and 80,000+ wellness journeys, the program combines Ayurveda, Panchakarma, detoxification, customized diet planning, stress management, yoga, and preventive healthcare.",
      ],
    },
    chips: ["Lifestyle reversal", "Online and offline", "80,000+ journeys", "Root-cause healing", "Preventive focus"],
    therapyTitle: "Program Components",
    therapyCards: [
      { icon: Droplets, title: "Authentic Ayurveda Treatment", text: "Classical treatment planning for lifestyle disease reversal." },
      { icon: Leaf, title: "Customized Diet & Nutrition", text: "Food guidance matched to disease, digestion, and constitution." },
      { icon: Sparkles, title: "Lifestyle Modification Guidance", text: "Daily routine, stress, sleep, and habit correction support." },
      { icon: Waves, title: "Yoga & Holistic Integration", text: "Movement, breath, and wellness practices for sustainable change." },
    ],
    benefitsTitle: "Benefits of UTURN",
    benefits: ["Helps improve overall health naturally", "Supports healthy weight and metabolism", "Enhances energy, immunity, and vitality", "Promotes better digestion and detoxification", "Supports hormonal and emotional balance", "Encourages sustainable healthy habits", "Improves quality of life and longevity"],
    conditionsTitle: "Lifestyle Diseases Covered",
    conditions: ["Diabetes and metabolic disorders", "Obesity and weight management", "PCOD/PCOS and thyroid concerns", "Stress and sleep issues", "Digestive and immunity wellness"],
    faqs: [
      { question: "What does UTURN focus on?", answer: "It focuses on reversing the lifestyle pattern behind disease rather than only managing symptoms." },
      { question: "Can it be done online?", answer: "Yes. The program supports both offline and online care." },
      { question: "Is the plan personalized?", answer: "Yes. Each program is customized to the individual’s body, habits, and health condition." },
    ],
    footerNote: "A structured wellness transformation program for lasting lifestyle change.",
    referenceNote: "Lifestyle reversal support with diet, routine, and Ayurveda.",
  },
  spinowalk: {
    detail: {
      heading: "SPINOWALK – Walk With Dignity",
      subtitle: "Joint, spine treatment and rejuvenation program designed to help people move freely, reduce pain, and improve quality of life naturally.",
      paragraphs: [
        "SPINOWALK is an Ayurveda-based joint and spine wellness program for mobility problems, stiffness, and musculoskeletal conditions. It supports natural pain management through authentic Ayurveda and Panchakarma therapies.",
        "The program combines joint and spine care, customized medicines, rejuvenation therapies, posture correction, and lifestyle guidance to improve walking, flexibility, and confidence in movement.",
      ],
    },
    chips: ["Joint and spine care", "Non-surgical support", "Mobility improvement", "Personalized care", "Rejuvenation"],
    therapyTitle: "Specialized Therapies",
    therapyCards: [
      { icon: CircleDotDashed, title: "Kati Basti Therapy", text: "Lower back support for pain and stiffness." },
      { icon: ShieldCheck, title: "Janu Basti Therapy", text: "Knee care therapy for comfort and mobility." },
      { icon: Droplets, title: "Abhyanga Ayurvedic Massage", text: "Oil therapy for tissues, circulation, and relaxation." },
      { icon: FlameKindling, title: "Panchakarma Detoxification", text: "Detox and rejuvenation support for musculoskeletal wellness." },
    ],
    benefitsTitle: "Benefits of SPINOWALK",
    benefits: ["Helps reduce joint and spine pain naturally", "Improves walking, mobility, and flexibility", "Supports better posture and physical strength", "Helps reduce stiffness and inflammation", "Promotes natural healing and rejuvenation", "Enhances daily comfort and quality of life"],
    conditionsTitle: "Conditions Covered",
    conditions: ["Slip disc", "Sciatica", "Cervical and lumbar spondylosis", "Arthritis and osteoarthritis", "Knee pain and frozen shoulder", "Sports injury recovery"],
    faqs: [
      { question: "Is this program suitable for chronic pain?", answer: "Yes. It is designed for joint, spine, and musculoskeletal concerns." },
      { question: "Does it focus on mobility?", answer: "Yes. Mobility and confidence in movement are core goals of the program." },
      { question: "Can it support recovery without surgery?", answer: "It provides holistic support and non-surgical wellness care.", },
    ],
    footerNote: "A dignified movement and spine wellness program grounded in authentic Ayurveda.",
    referenceNote: "Joint and spine care focused on mobility and dignified movement.",
  },
  heart: {
    detail: {
      heading: "Complete Heart Care Detox Program",
      subtitle: "Classical Ayurveda-based cardiovascular wellness support focused on circulation, stress reduction, cholesterol balance, and preventive heart health.",
      paragraphs: [
        "Our Heart Care Detox Program supports cardiovascular wellness naturally through Panchakarma, herbal therapies, diet, and lifestyle correction. It is designed to improve circulation, reduce stress, and promote healthy heart function.",
        "The program is ideal for high-stress lifestyles, hypertension support, cholesterol imbalance, sedentary routines, and preventive cardiac wellness care.",
      ],
    },
    chips: ["Circulation support", "Stress reduction", "Cholesterol balance", "Preventive care", "Natural wellness"],
    therapyTitle: "Program Benefits",
    therapyCards: [
      { icon: HeartPulse, title: "Supports Healthy Heart Function", text: "Wellness planning that supports cardiovascular balance." },
      { icon: ShieldCheck, title: "Helps Manage Cholesterol", text: "Diet and detox guidance for lipid balance." },
      { icon: Waves, title: "Reduces Stress and Anxiety", text: "Calming routines and therapies for mental ease." },
      { icon: Droplets, title: "Improves Circulation and Vitality", text: "Therapies that support flow and energy." },
    ],
    benefitsTitle: "Benefits",
    benefits: ["Supports healthy heart function", "Helps manage cholesterol naturally", "Reduces stress and anxiety", "Improves circulation and vitality", "Promotes healthy lifestyle habits"],
    conditionsTitle: "Recommended For",
    conditions: ["High stress lifestyle", "Hypertension support", "Cholesterol imbalance", "Sedentary lifestyle", "Preventive cardiac wellness"],
    faqs: [
      { question: "Is this a detox program?", answer: "Yes. It combines detox, diet, and lifestyle correction for heart wellness support." },
      { question: "Is it preventive or disease focused?", answer: "It supports both preventive heart health and wellness management." },
      { question: "Can it be customized?", answer: "Yes. It is designed according to individual needs and health goals." },
    ],
    footerNote: "A calm, preventive heart wellness program with authentic Ayurvedic care.",
    referenceNote: "Heart wellness support through detox, balance, and prevention.",
  },
  hope: {
    detail: {
      heading: "Fertility & Reproductive Wellness Program",
      subtitle: "A fertility and reproductive health program for couples and individuals seeking natural support through Ayurveda, Panchakarma, and holistic care.",
      paragraphs: [
        "The program is designed to support fertility challenges by identifying the root cause rather than only managing symptoms. The program provides personalized care based on constitution, hormones, stress, digestion, lifestyle, and overall wellness.",
        "It combines fertility-focused Panchakarma, hormonal balance support, reproductive wellness care, stress management, diet guidance, and natural rejuvenation therapies for both male and female health.",
      ],
    },
    chips: ["Female and male fertility", "Hormonal balance", "Personalized care", "Couple-centered support", "Natural rejuvenation"],
    therapyTitle: "Specialized Support",
    therapyCards: [
      { icon: Sparkles, title: "Fertility Supporting Panchakarma", text: "Detox and balance therapies for reproductive wellness." },
      { icon: FlameKindling, title: "Basti and Uttarbasti Support", text: "Classical therapies used in fertility-focused Ayurveda." },
      { icon: Waves, title: "Stress Relief Therapies", text: "Emotional and mental support during the fertility journey." },
      { icon: Leaf, title: "Personalized Ayurvedic Medicines", text: "Herbal support built around diagnosis and constitution." },
    ],
    benefitsTitle: "Benefits",
    benefits: ["Supports healthy reproductive function", "Helps improve hormonal balance naturally", "Supports ovulation and reproductive wellness", "Helps improve sperm quality and vitality", "Reduces stress and emotional fatigue", "Encourages natural fertility and wellness"],
    conditionsTitle: "Conditions Covered",
    conditions: ["Female infertility", "PCOD/PCOS", "Irregular periods", "Male infertility", "Low sperm count and motility", "Sexual weakness"],
    faqs: [
      { question: "Is this program for couples?", answer: "Yes. It supports couples and individuals seeking reproductive wellness." },
      { question: "Does it include Panchakarma?", answer: "Yes. Detoxification and rejuvenation therapies are part of the care model." },
      { question: "Is treatment personalized?", answer: "Yes. Every plan is personalized according to reproductive and overall health needs." },
    ],
    footerNote: "Compassionate fertility and reproductive wellness care rooted in Ayurveda.",
    referenceNote: "Fertility and reproductive wellness with compassionate Ayurvedic care.",
  },
  diet: {
    detail: {
      heading: "Ayurvedic Diet & Lifestyle Guidance",
      subtitle: "Personalized Ahar, Vihar, Nidra, Dinacharya, Ritucharya, and detox guidance based on classical Ayurveda principles.",
      paragraphs: [
        "True health in Ayurveda is maintained through balanced diet, healthy lifestyle, proper sleep, mental wellness, and seasonal care. Our guidance is tailored according to Prakriti, digestion, age, climate, and health conditions.",
        "We provide practical daily and seasonal wellness support that helps individuals improve digestion, energy, immunity, sleep, and long-term disease prevention through natural habits.",
      ],
    },
    chips: ["Ahar", "Vihar", "Nidra", "Dinacharya", "Ritucharya"],
    therapyTitle: "Guidance Areas",
    therapyCards: [
      { icon: Leaf, title: "Ahar – Diet Guidance", text: "Prakriti-wise diet plans for digestion and balance." },
      { icon: Activity, title: "Vihar – Lifestyle Guidance", text: "Healthy routine and habit correction support." },
      { icon: Waves, title: "Nidra – Sleep Guidance", text: "Sleep improvement for recovery and calmness." },
      { icon: Sparkles, title: "Ritucharya – Seasonal Care", text: "Seasonal wellness and detox support." },
    ],
    benefitsTitle: "Benefits",
    benefits: ["Better digestion and gut health", "Improved energy and immunity", "Weight and metabolism management", "Disease prevention support", "Balanced physical and mental wellness"],
    conditionsTitle: "Useful For",
    conditions: ["Digestive weakness", "Weight concerns", "Stress and sleep issues", "Seasonal imbalance", "Preventive healthcare"],
    faqs: [
      { question: "Is this only for sick patients?", answer: "No. It is also for prevention, optimization, and daily wellbeing." },
      { question: "Do you give a routine plan?", answer: "Yes. Dinacharya and lifestyle guidance are personalized." },
      { question: "Can it support detox?", answer: "Yes. Ritushodhan and seasonal detox can be included when needed." },
    ],
    footerNote: "A practical and personalized guide to Ayurvedic living.",
    referenceNote: "Daily diet and lifestyle guidance aligned to your constitution.",
  },
  marma: {
    detail: {
      heading: "Marma Therapy",
      subtitle: "Authentic Marma Therapy for pain management, energy balancing, stress relief, and natural rejuvenation.",
      paragraphs: [
        "Marma Therapy stimulates vital energy points in the body to improve Prana flow, balance doshas, enhance circulation, release tension, and support natural healing.",
        "At Anandlok, therapy sessions are personalized according to constitution, pain areas, stress levels, and wellness goals to help individuals relax, recover, and feel balanced naturally.",
      ],
    },
    chips: ["Energy points", "Pain relief", "Stress relief", "Circulation", "Natural healing"],
    therapyTitle: "Benefits of Marma Therapy",
    therapyCards: [
      { icon: ShieldCheck, title: "Reduces Pain Naturally", text: "Supports relief from joint and muscle pain." },
      { icon: Waves, title: "Supports Stress Relief", text: "Helps calm the mind and nervous system." },
      { icon: Droplets, title: "Improves Circulation", text: "Supports better energy flow and vitality." },
      { icon: Sparkles, title: "Encourages Rejuvenation", text: "Gentle therapy for wellness and vitality." },
    ],
    benefitsTitle: "Therapeutic Benefits",
    benefits: ["Helps reduce joint and muscle pain naturally", "Supports stress and anxiety relief", "Improves blood circulation and energy flow", "Helps relieve neck, back, and shoulder pain", "Supports mental relaxation and emotional balance", "Promotes better sleep and nervous system relaxation"],
    conditionsTitle: "Helps In Managing",
    conditions: ["Joint pain and arthritis", "Back pain and sciatica", "Cervical spondylosis", "Migraine and headache", "Sleep disorders and fatigue"],
    faqs: [
      { question: "Is Marma Therapy gentle?", answer: "Yes. It is a gentle yet powerful Ayurvedic therapy." },
      { question: "Can it be combined with Panchakarma?", answer: "Yes. It can be integrated with other Ayurvedic therapies." },
      { question: "Is it personalized?", answer: "Yes. Points and techniques are selected based on the individual and the condition." },
    ],
    footerNote: "Vital-point therapy for relaxation, pain relief, and natural balance.",
    referenceNote: "Vital-point therapy for relaxation, circulation, and pain relief.",
  },
  yoga: {
    detail: {
      heading: "Yoga & Meditation",
      subtitle: "Holistic Yoga and Meditation programs for physical health, mental wellness, emotional balance, flexibility, and immunity.",
      paragraphs: [
        "Our Yoga and Meditation programs help individuals achieve harmony between body, mind, and spirit while supporting natural healing, stress management, disease prevention, and long-term wellness.",
        "Sessions are customized according to age, constitution, health condition, stress levels, lifestyle, and wellness goals, combining yoga practices with Ayurveda for a complete holistic experience.",
      ],
    },
    chips: ["Flexibility", "Stress relief", "Mindfulness", "Pranayama", "Holistic wellness"],
    therapyTitle: "Program Elements",
    therapyCards: [
      { icon: Waves, title: "Therapeutic Yoga Sessions", text: "Customized practices for strength, posture, and mobility." },
      { icon: Sparkles, title: "Meditation & Mindfulness", text: "Guided calmness and emotional balance practices." },
      { icon: Wind, title: "Pranayama & Breathing", text: "Breathing practices for lung capacity and clarity." },
      { icon: HeartPulse, title: "Lifestyle Disease Support", text: "Yoga support for diabetes, obesity, and hypertension care." },
    ],
    benefitsTitle: "Benefits",
    benefits: ["Helps reduce stress, anxiety, and mental fatigue", "Improves flexibility, strength, and posture", "Enhances mental calmness and emotional balance", "Supports better sleep and relaxation", "Boosts immunity and energy levels", "Promotes inner peace and mindfulness"],
    conditionsTitle: "Supports",
    conditions: ["Lifestyle disorders", "Stress and burnout", "Insomnia", "Weight management", "Mental clarity and emotional balance"],
    faqs: [
      { question: "Is yoga part of Ayurveda wellness?", answer: "Yes. It complements Ayurvedic healing very well." },
      { question: "Are sessions personalized?", answer: "Yes. We customize yoga and meditation by condition and goal." },
      { question: "Can it support disease management?", answer: "Yes. Specialized yoga support is offered for lifestyle concerns." },
    ],
    footerNote: "A gentle path toward balance, health, and mindful living.",
    referenceNote: "Yoga and meditation for calm, flexibility, and inner balance.",
  },
  rejuvenation: {
    detail: {
      heading: "Relaxation & Rejuvenation Therapy in Ayurveda",
      subtitle: "Ayurveda-based relaxation and rejuvenation therapies to restore energy, calm the mind, and improve overall wellbeing naturally.",
      paragraphs: [
        "These therapies are designed to restore physical energy, mental peace, and emotional balance through authentic Panchakarma treatments, herbal oil therapies, yoga, meditation, and wellness practices.",
        "The program focuses on reducing stress, improving sleep, boosting immunity, enhancing skin glow, and revitalizing the nervous system for a healthier and happier life.",
      ],
    },
    chips: ["Relaxation", "Rejuvenation", "Stress relief", "Sleep support", "Natural glow"],
    therapyTitle: "Specialized Rejuvenation Therapies",
    therapyCards: [
      { icon: Droplets, title: "Abhyanga Ayurvedic Full Body Oil Massage", text: "Deep relaxation, tissue nourishment, and circulation support." },
      { icon: Waves, title: "Shirodhara Therapy", text: "Warm oil flow for stress, anxiety, and insomnia relief." },
      { icon: FlameKindling, title: "Panchakarma Detox & Rejuvenation", text: "Complete detoxification and revitalization support." },
      { icon: Activity, title: "Herbal Steam Therapy (Swedana)", text: "Therapy for muscle relaxation and detoxification." },
    ],
    benefitsTitle: "Benefits of Rejuvenation Therapy",
    benefits: ["Deep mental and physical relaxation", "Stress and anxiety management", "Nervous system rejuvenation", "Improved sleep quality", "Enhanced energy and vitality", "Better blood circulation", "Muscle relaxation and pain relief", "Skin nourishment and natural glow", "Immunity and wellness support"],
    conditionsTitle: "Who Can Benefit",
    conditions: ["Stress and burnout", "Mental fatigue and anxiety", "Poor sleep and insomnia", "Body pain and stiffness", "Lifestyle disorders and emotional imbalance"],
    faqs: [
      { question: "Is this for wellness or treatment?", answer: "It works for both preventive wellness and therapeutic rejuvenation support." },
      { question: "Can it include multiple therapies?", answer: "Yes. It may combine Abhyanga, Shirodhara, Swedana, and Panchakarma." },
      { question: "Is it suitable for busy professionals?", answer: "Yes. It is ideal for stress, burnout, and recovery support." },
    ],
    footerNote: "A restorative Ayurveda experience for balance, glow, and calm.",
    referenceNote: "Relaxation therapy for deep rest, recovery, and glow.",
  },
};

const sharedIntro = [
  "Authentic Ayurveda guided by classical principles",
  "Personalized care built around Prakriti and condition",
  "Root-cause based healing with natural therapies",
  "15+ years of clinical wellness experience",
  "Holistic support for body, mind, and emotions",
];

const ServicesTreatmentLayout = () => {
  const [activeService, setActiveService] = useState<ServiceId>("consultation");
  const activeItem = useMemo(() => serviceItems.find((item) => item.id === activeService) ?? serviceItems[0], [activeService]);
  const active = serviceData[activeService];
  const topImage = clinicStandardImage ?? clinicPhoto;

  const serviceImage =
    activeService === "consultation"
      ? serviceImageSources["../assets/services/consultation.webp"] ?? serviceImageSources["../assets/services/consultation-standard.webp"] ?? clinicPhoto
      : serviceImageSources[`../assets/services/${activeService}.webp`] ?? clinicPhoto;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(200,169,107,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(53,94,59,0.12),transparent_28%),linear-gradient(180deg,#faf8f3_0%,#f5ebdd_100%)]">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0))]" />
      <div className="section-padding relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center justify-between gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3 text-left shadow-[0_10px_30px_-20px_rgba(53,94,59,0.6)]">
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Select Service</span>
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
                  {serviceItems.map((item) => (
                    <DropdownMenuItem
                      key={item.id}
                      onSelect={() => setActiveService(item.id)}
                      className={cn(
                        "cursor-pointer rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors focus:bg-primary/10 focus:text-primary",
                        activeService === item.id && "bg-primary/10 text-primary",
                      )}
                    >
                      {item.title}
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
            <aside className="hidden lg:block lg:sticky lg:top-28">
              <div className="rounded-[1.75rem] border border-border/60 bg-[linear-gradient(180deg,rgba(250,248,243,0.96),rgba(245,235,221,0.94))] p-3 shadow-[0_18px_50px_-28px_rgba(53,94,59,0.35)] backdrop-blur-sm">
                <div className="px-3 pb-4 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/85">Treatments</p>
                </div>
                <nav className="space-y-1.5 pb-2">
                  {serviceItems.map((item) => {
                    const isActive = item.id === activeService;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveService(item.id)}
                        className={cn(
                          "group flex w-full items-center justify-between rounded-2xl border-l-4 px-3 py-3 text-left transition-all duration-300",
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
                <div className="relative min-h-[24rem] overflow-hidden bg-[#355E3B]">
                  <img src={heroBg} alt="Ayurvedic banner" className="absolute inset-0 h-full w-full object-cover opacity-35" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(53,94,59,0.96),rgba(122,92,62,0.78))]" />
                  <div className="absolute -right-12 top-8 h-44 w-44 rounded-full border border-white/20 bg-white/10 blur-[0.5px]" />
                  <div className="absolute -left-10 bottom-4 h-36 w-36 rounded-full border border-white/20 bg-[#c8a96b]/10" />

                  <div className="relative grid gap-8 px-6 py-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
                    <div className="flex flex-col justify-center text-[#FAF8F3]">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-[#FAF8F3]/80">{activeItem.shortTitle}</p>
                      <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">{active.detail.heading}</h2>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 md:text-base">{active.detail.subtitle}</p>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {sharedIntro.map((item) => (
                          <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                            <span className="text-sm font-medium leading-6 text-white/92">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-y-8 left-10 right-6 rounded-[2rem] bg-white/12 blur-2xl" />
                      <div className="relative w-full max-w-[30rem] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f5ebdd]">
                          <img src={topImage} alt={active.detail.heading} className="h-[20rem] w-full object-cover md:h-[24rem]" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(53,94,59,0.08),rgba(53,94,59,0.38))]" />
                          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary shadow-lg">
                            Authentic Ayurveda
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/25 bg-white/20 p-4 text-white backdrop-blur-md">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Therapeutic Focus</p>
                            <p className="mt-2 text-lg font-medium leading-7">{active.referenceNote}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-10 px-5 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-10">
                  <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-primary/85">Introduction</p>
                      <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">{active.detail.heading}</h3>
                      <div className="mt-5 space-y-4 text-sm leading-8 text-muted-foreground md:text-[0.98rem]">
                        {active.detail.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(250,248,243,0.96))] p-5 shadow-[0_14px_30px_-24px_rgba(53,94,59,0.35)]">
                      <div className="flex items-center gap-3 border-b border-border/70 pb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Clinical Focus</p>
                          <p className="text-base font-semibold text-foreground">Personalized healing plans</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                        <p>Authentic Ayurvedic care with personalized planning.</p>
                        <p>Root-cause based healing, detoxification, and wellness support.</p>
                        <p>Traditional therapies blended with practical guidance for daily life.</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="mb-5 flex items-end justify-between gap-4 border-b border-border/70 pb-4">
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-primary/85">{active.therapyTitle}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-foreground">{activeItem.title}</h3>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {active.therapyCards.map((service, index) => {
                        const Icon = service.icon;

                        return (
                          <div key={service.title} className="group rounded-[1.5rem] border border-border/70 bg-white/95 p-5 shadow-[0_10px_28px_-20px_rgba(53,94,59,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(53,94,59,0.35)]" style={{ animationDelay: `${index * 60}ms` }}>
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-foreground">{service.title}</h4>
                                <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.text}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  <section>
                    <div className="mb-5 border-b border-border/70 pb-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-primary/85">{active.benefitsTitle}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground">Benefits and outcomes</h3>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {active.benefits.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-[1.25rem] border border-border/65 bg-[#faf8f3] px-4 py-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm leading-7 text-foreground/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="mb-5 border-b border-border/70 pb-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-primary/85">{active.conditionsTitle}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground">Conditions and wellness areas</h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {active.conditions.map((item) => (
                        <div key={item} className="rounded-[1.25rem] border border-border/70 bg-white p-4 shadow-[0_8px_22px_-20px_rgba(53,94,59,0.25)]">
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <ShieldCheck className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-medium leading-7 text-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div className="rounded-[1.75rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,248,243,0.98))] p-6 shadow-[0_18px_40px_-28px_rgba(53,94,59,0.32)]">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-primary/85">{activeItem.shortTitle}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">Visual preview</h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-[0.96rem]">
                        {active.detail.subtitle}
                      </p>

                      <div className="mt-6 space-y-3">
                        {active.chips.map((chip) => (
                          <div key={chip} className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white px-4 py-3">
                            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                            <span className="text-sm font-medium text-foreground">{chip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-white shadow-[0_18px_40px_-24px_rgba(53,94,59,0.35)]">
                      <div className="relative">
                        <img src={serviceImage} alt={active.detail.heading} className="h-[22rem] w-full object-cover md:h-[26rem]" loading="lazy" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(53,94,59,0.06),rgba(53,94,59,0.42))]">
                          
                        </div>
                        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary shadow-lg">
                          {activeItem.shortTitle}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/25 bg-white/18 p-4 text-white backdrop-blur-md">
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">{activeItem.shortTitle}</p>
                          <p className="mt-2 text-lg font-medium leading-7">
                            {active.footerNote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="mb-5 border-b border-border/70 pb-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-primary/85">Frequently Asked Questions</p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground">Common questions about {activeItem.shortTitle}</h3>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/70 bg-white/95 p-4 shadow-[0_12px_28px_-22px_rgba(53,94,59,0.24)] md:p-5">
                      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                        {active.faqs.map((faq, index) => (
                          <AccordionItem key={faq.question} value={`item-${index}`} className="border-b border-border/60 last:border-b-0">
                            <AccordionTrigger className="py-4 text-left text-sm font-medium text-foreground hover:no-underline md:text-[0.98rem]">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 pr-8 text-sm leading-7 text-muted-foreground md:text-[0.96rem]">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
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

export default ServicesTreatmentLayout;