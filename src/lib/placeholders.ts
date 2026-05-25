export const aboutData = {
  eyebrow: "About Us",
  heading: "About Anandlok Ayurveda Panchakarma and Wellness Center",
  paragraphs: [
    "Anandlok Ayurveda Panchakarma and Wellness Center, operated by Anandlok Health Foundation in Nagpur, offers authentic Ayurveda and Panchakarma care backed by over 15 years of clinical experience. Our doctors focus on personalized, root-cause healing guided by classical Ayurvedic principles.",
    "We approach healthcare as a path to better quality of life, longevity, and balanced physical, mental, and emotional wellbeing. Care blends traditional Ayurveda with Panchakarma detox therapies, lifestyle correction, diet guidance, and stress management.",
    "Our natural, result-oriented treatments support chronic and lifestyle conditions including joint pain, stress, obesity, digestive disorders, skin concerns, women's health issues, hormonal imbalance, and immunity enhancement.",
    "Every plan is individualized for each constitution and condition. With compassionate care and authentic therapies, we help people regain balance and long-term wellness naturally.",
  ],
  features: [
    "15+ Years of Ayurvedic Clinical Experience",
    "Experienced Ayurvedic Doctors and Therapists",
    "Authentic Panchakarma and Detox Therapies",
    "Personalized and Customized Ayurvedic Treatments",
    "Root Cause Based Holistic Healing",
    "Natural Treatment for Lifestyle Disorders",
    "Holistic Physical, Mental and Emotional Wellness",
    "Cost-Effective and Compassionate Healthcare",
    "Traditional Ayurveda with Modern Wellness Approach",
    "Best Ayurveda and Panchakarma practices under one roof",
    "Self prepared authentic Ayurveda medicines for safe, personalized healing and long-term wellness",
  ],
};

export const servicesData = [
  { title: "Panchakarma Therapy", desc: "Five-fold classical detox therapies to purify body and mind.", icon: null },
  {
    title: "Authentic Ayurvedic Diagnosis, Consultation & Treatment",
    desc: "Root-cause based consultation with personalized treatment plans available offline and online.",
    icon: null,
  },
  {
    title: "Ayurvedic Diet & Lifestyle Guidance",
    desc: "Prakriti-wise diet, routine, sleep, and seasonal wellness guidance for long-term balance.",
    icon: null,
  },
  {
    title: "Complete Heart Care Detox Program",
    desc: "Classical Ayurveda detox and lifestyle support to improve circulation and heart wellness naturally.",
    icon: null,
  },
];

export const treatmentsData = [
  {
    title: "Abhyanga - Ayurvedic Full Body Oil Massage",
    desc: "Traditional herbal oil massage that improves circulation, relieves stiffness, and promotes deep relaxation.",
    tag: "Popular",
  },
  {
    title: "Shirodhara Therapy",
    desc: "Warm herbal oil is gently poured over the forehead to reduce stress, anxiety, insomnia, and mental fatigue.",
    tag: "Signature",
  },
  {
    title: "Panchakarma Detox & Rejuvenation",
    desc: "Complete body detox therapy to eliminate toxins (Ama), improve metabolism, and rejuvenate naturally.",
    tag: "Detox",
  },
  {
    title: "Herbal Steam Therapy (Swedana)",
    desc: "Ayurvedic steam therapy that relaxes muscles, improves circulation, and supports detoxification.",
    tag: "Rejuvenation",
  },
];

export const blogPosts = [
  {
    slug: "swarnaprashana-sanskar",
    title: "Swarnaprashana Sanskar in Ayurveda",
    date: "May 18, 2026",
    tag: "Child Wellness",
    excerpt:
      "A traditional immunity ritual that supports memory, digestion, and overall growth when guided by classical Ayurveda.",
    intro: [
      "Swarnaprashana Sanskar is a classical Ayurvedic practice for children, prepared with purified gold (Swarna Bhasma), herbal extracts, ghee, and honey. At Anandlok, the therapy is administered with careful clinical guidance to support a child's physical, mental, and intellectual development.",
      "Families choose Swarnaprashana for its reputation in building immunity, improving memory, and supporting healthy growth in a natural, gentle way.",
    ],
    sections: [
      {
        heading: "What is Swarnaprashana?",
        paragraphs: [
          "Swarnaprashana is an Ayurvedic immunization and rejuvenation practice described in classical texts. It involves administering gold-based herbal preparations to strengthen immunity and promote healthy development.",
          "It is traditionally given on Pushya Nakshatra days, though regular administration can also be guided by an experienced Ayurvedic doctor.",
        ],
      },
      {
        heading: "Benefits of Swarnaprashana for Children",
        bullets: [
          "Supports natural immunity and resistance",
          "Encourages memory and cognitive development",
          "Improves concentration and learning ability",
          "Supports digestion and metabolism",
          "Encourages healthy growth and appetite",
          "Promotes respiratory wellness",
          "Helps reduce recurrent seasonal infections",
          "Supports better sleep and emotional balance",
        ],
      },
      {
        heading: "Who Can Take Swarnaprashana?",
        paragraphs: ["Swarnaprashana is commonly recommended for:"],
        bullets: [
          "Infants and young children",
          "School-going children",
          "Children with low immunity or frequent colds",
          "Poor appetite or weak digestion",
          "Learning and focus support",
          "Preventive child wellness care",
        ],
      },
      {
        heading: "Why Choose Anandlok for Swarnaprashana?",
        bullets: [
          "Authentic Swarnaprashana preparation",
          "Experienced Ayurveda doctors",
          "Traditional, safe practices with modern guidance",
          "Personalized child wellness plans",
          "Focus on preventive pediatric healthcare",
        ],
      },
      {
        heading: "Why It Matters in Ayurveda",
        paragraphs: [
          "Ayurveda emphasizes building Ojas (vital energy) early in life. Swarnaprashana supports immunity and cognitive development while nurturing long-term wellbeing.",
        ],
      },
    ],
    closing: {
      heading: "Natural Immunity and Brain Development",
      paragraphs: [
        "Give your child the benefits of authentic Ayurvedic care with Swarnaprashana Sanskar for stronger immunity, sharper memory, and healthier growth.",
      ],
    },
    cta: {
      heading: "Book a Swarnaprashana Consultation",
      paragraph: "Help your child grow healthier, stronger, and more confident with the power of Ayurveda.",
    },
  },
];

export const blogsData = blogPosts.map(({ slug, title, excerpt, date, tag }) => ({
  slug,
  title,
  excerpt,
  date,
  tag,
}));

export const awardsData = [
  { title: "Vd Khadiwale Award", year: "2014" },
  { title: "State Level Debate on Swas", year: "2019" },
  { title: "Ayurveda Award", year: "2021", note: "Madhya Pradesh" },
  { title: "Sastha Mitra Award", year: "2015", note: "Amhi Amchya Arogaya Sathi" },
  { title: "Ayurveda Pariwar Dhanwantrin Award", year: "2017" },
  { title: "Ayurmani Rural Health and Ayurveda", year: "2021" },
  { title: "Arogya Bharti Award", year: "2022" },
  { title: "Ba and Bapu Award", year: "2023", note: "Community Wellness" },
  { title: "Deepsthambha Yuva Preerna Award", year: "2016" },
  { title: "Sakal Prabhavshali Ayurvedacharya Award", year: "2025" },
  { title: "Vd. Pt Joshi Awardratna Award", year: "2024" },
  { title: "Narishakti Award", year: "2026", note: "Gayatri Pariwar" },
];

export const aboutDoctorsData = [
  {
    name: "Dr. Prashant Kuchankar",
    role: "Founder and Director, Anandlok Ayurveda",
    qualification: "BAMS, MPH",
    specialization: "Ayurveda Panchakarma and holistic wellness",
    experience: "15+ years of experience",
  },
  {
    name: "Dr. Viraj Gite",
    role: "Director and Senior Health Consultant",
    qualification: "BAMS, MPH-CH",
    specialization: "Ayurveda Panchakarma expert",
    experience: "13+ years of experience",
  },
  {
    name: "Dr. Namrata Kapure",
    role: "Director, Anandlok Ayurveda",
    qualification: "BAMS",
    specialization: "Ayurveda Panchakarma and female health expert",
    experience: "13+ years of experience",
  },
];

export default {
  aboutData,
  servicesData,
  treatmentsData,
  blogsData,
  blogPosts,
  awardsData,
  aboutDoctorsData,
};
