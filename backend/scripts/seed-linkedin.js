/**
 * LinkedIn Data Seed Script
 *
 * Seeds Strapi CMS with data extracted from LinkedIn profile.
 *
 * Usage:
 *   1. Start Strapi: pnpm run develop
 *   2. Create an API token in Strapi Admin > Settings > API Tokens
 *   3. Run: STRAPI_API_TOKEN=your_token node scripts/seed-linkedin.js
 *
 * Note: This script will create new entries. Run only once or clear existing data first.
 */

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!API_TOKEN) {
  console.error("Error: STRAPI_API_TOKEN environment variable is required");
  console.error("Create an API token in Strapi Admin > Settings > API Tokens");
  process.exit(1);
}

// =============================================================================
// LINKEDIN DATA (Extracted from linkedin_raw.txt)
// =============================================================================

const LINKEDIN_DATA = {
  // Personal Info
  name: "Juan Pablo Valdez",
  headline:
    "Fullstack Developer | Increased checkout conversions 22% for 3,000+ client e-commerce platform | React, Next.js, Node.js, TypeScript",
  location: "Argentina",
  email: "juanpaavaldezz@gmail.com",
  phone: "+54 381 613 4310",
  linkedinUrl: "https://www.linkedin.com/in/juanpablovaldez",
  githubUrl: "https://github.com/juanpablovaldez",

  // Summary/Bio
  bio: `Fullstack developer who treats code as a business lever, not just syntax.

What I bring beyond code: I talk to customers, read the data, and make technical decisions that move metrics. In e-commerce and fintech, I learned that performance, security, and UX aren't nice-to-haves—they're what separates products that convert from ones that don't.

Looking for: Remote roles at startups where I can own features end-to-end and learn from smart people. I'm building my own product PartySpot in my free time.

My stack: React, Next.js, React Native, Node.js, TypeScript, Nest.js, Prisma, Docker, AWS, CI/CD.
Outside work: business, economics, startups, blockchain, golf.`,
};

// =============================================================================
// COLLECTION DATA
// =============================================================================

const WORK_EXPERIENCES = [
  {
    company: "Wootic",
    position: "Fullstack Software Developer",
    startDate: "May 2025",
    endDate: "Present",
    location: "Argentina",
    description: [],
    technologies: [],
    order: 0,
  },
  {
    company: "Kontrava",
    position: "Fullstack Software Developer",
    startDate: "December 2023",
    endDate: "May 2025",
    location: "Sweden (Remote)",
    description: [
      "Reduced Largest Contentful Paint by 35% and First Contentful Paint by 40% on a multi-tenant e-commerce platform serving 3,000+ monthly clients",
      "Increased checkout completion rate by 22% through A/B testing with GA4 and heatmap data, identifying and fixing drop-off points",
      "Eliminated layout thrashing and achieved 60fps performance using DOM read/write batching, requestIdleCallback, and custom debounce utilities",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GA4",
    ],
    order: 1,
  },
  {
    company: "Globant",
    position: "Software Developer Intern",
    startDate: "2023",
    endDate: "2023",
    location: "Argentina",
    description: [
      "Completed internship program focused on frontend development and performance optimization",
    ],
    technologies: ["React", "TypeScript", "JavaScript"],
    order: 2,
  },
  {
    company: "Freelance",
    position: "Fullstack Developer",
    startDate: "January 2022",
    endDate: "December 2023",
    location: "Argentina",
    description: [
      "Delivered 10+ applications for e-commerce and internal operations clients using React, Next.js, and React Native",
      "Built reusable component libraries and managed AWS infrastructure (EC2, RDS, S3) with Terraform",
    ],
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "AWS",
      "Terraform",
      "Node.js",
    ],
    order: 3,
  },
];

const EDUCATION = [
  {
    course: "Software Development and Quality, Computer Science",
    institution: "Universidad del Norte 'Santo Tomás de Aquino'",
    date: "2024 - 2026",
    achievements: [],
    order: 0,
  },
];

const CERTIFICATIONS = [
  {
    course: "AWS, Terraform & GitHub Actions Projects",
    institution: "Udemy",
    order: 0,
  },
  {
    course: "FullStack Development Career",
    institution: "Coderhouse",
    order: 1,
  },
  {
    course:
      "Backend Programming III: Backend Security and Quality with Nest.js",
    institution: "Coderhouse",
    order: 2,
  },
  {
    course:
      "Backend Programming II: Backend Design and Architecture with Node.js",
    institution: "Coderhouse",
    order: 3,
  },
  {
    course: "Backend Programming I: Advanced Backend Development with Node.js",
    institution: "Coderhouse",
    order: 4,
  },
  {
    course: "Frontend Development Career with React.js",
    institution: "Coderhouse",
    order: 5,
  },
  {
    course: "JavaScript Course",
    institution: "Coderhouse",
    order: 6,
  },
  {
    course: "React.js Course",
    institution: "Coderhouse",
    order: 7,
  },
  {
    course: "Web Development Fundamentals",
    institution: "Coderhouse",
    order: 8,
  },
];

const SKILLS = [
  // Core skills
  { name: "React", category: "core", order: 0 },
  { name: "Next.js", category: "core", order: 1 },
  { name: "React Native", category: "core", order: 2 },
  { name: "Node.js", category: "core", order: 3 },
  { name: "TypeScript", category: "core", order: 4 },
  { name: "Nest.js", category: "core", order: 5 },
  // Tools & DevOps
  { name: "Docker", category: "tools", order: 0 },
  { name: "AWS", category: "tools", order: 1 },
  { name: "CI/CD", category: "tools", order: 2 },
  { name: "Prisma", category: "tools", order: 3 },
  { name: "React Query", category: "tools", order: 4 },
  { name: "PostgreSQL", category: "tools", order: 5 },
  { name: "Terraform", category: "tools", order: 6 },
  // Languages
  { name: "English (Full Professional)", category: "languages", order: 0 },
  { name: "Spanish (Native/Bilingual)", category: "languages", order: 1 },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juanpablovaldez",
    icon: "linkedin",
    order: 0,
  },
  {
    name: "GitHub",
    url: "https://github.com/orbitado",
    icon: "github",
    order: 1,
  },
];

const NAVIGATION_LINKS = [
  { name: "Summary", url: "/#summary", order: 0 },
  { name: "Experience", url: "/#experience", order: 1 },
  { name: "Education", url: "/#education", order: 2 },
  { name: "Projects", url: "/#projects", order: 3 },
  { name: "Contact", url: "/#contact", order: 4 },
];

// Single Types
const HERO_DATA = {
  title: "Fullstack Developer",
  bio: LINKEDIN_DATA.bio,
  email: LINKEDIN_DATA.email,
  ctaPrimaryLabel: "Download Resume",
  ctaSecondaryLabel: "Contact Me",
  yearsOfExperienceStart: 2022,
};

const CONTACT_INFO_DATA = {
  title: "Let's Connect",
  description:
    "I'm always open to discussing new opportunities and projects. Feel free to reach out - I'd love to hear from you!",
  email: LINKEDIN_DATA.email,
  phone: LINKEDIN_DATA.phone,
  ctaPrimaryLabel: "Send me an email",
  ctaSecondaryLabel: "Call me",
};

const SITE_SETTINGS_DATA = {
  siteName: "Juan Pablo Valdez",
  copyright: "All rights reserved.",
  copyrightStartYear: 2022,
};

// =============================================================================
// API HELPERS
// =============================================================================

async function apiRequest(endpoint, method = "GET", data = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  if (data) {
    options.body = JSON.stringify({ data });
  }

  const response = await fetch(`${STRAPI_URL}/api${endpoint}`, options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error ${response.status}: ${errorText}`);
  }

  return response.json();
}

async function createEntry(endpoint, data) {
  return apiRequest(endpoint, "POST", data);
}

async function updateSingleType(endpoint, data) {
  return apiRequest(endpoint, "PUT", data);
}

// =============================================================================
// SEED FUNCTIONS
// =============================================================================

async function seedWorkExperiences() {
  console.log("\n📋 Seeding Work Experiences...");
  for (const exp of WORK_EXPERIENCES) {
    const payload = {
      company: exp.company,
      position: exp.position,
      startDate: exp.startDate,
      endDate: exp.endDate,
      location: exp.location,
      description: exp.description.map((text) => ({ text })),
      technologies: exp.technologies.map((name) => ({ name })),
      order: exp.order,
    };
    await createEntry("/work-experiences", payload);
    console.log(`  ✓ ${exp.company} - ${exp.position}`);
  }
}

async function seedEducation() {
  console.log("\n🎓 Seeding Education...");
  for (const edu of EDUCATION) {
    const payload = {
      course: edu.course,
      institution: edu.institution,
      date: edu.date,
      achievements: edu.achievements.map((text) => ({ text })),
      order: edu.order,
    };
    await createEntry("/educations", payload);
    console.log(`  ✓ ${edu.institution}`);
  }
}

async function seedCertifications() {
  console.log("\n📜 Seeding Certifications...");
  for (const cert of CERTIFICATIONS) {
    const payload = {
      course: cert.course,
      institution: cert.institution,
      certificateUrl: cert.certificateUrl || null,
      projectUrl: cert.projectUrl || null,
      order: cert.order,
    };
    await createEntry("/certifications", payload);
    console.log(`  ✓ ${cert.course}`);
  }
}

async function seedSkills() {
  console.log("\n🛠️  Seeding Skills...");
  for (const skill of SKILLS) {
    const payload = {
      name: skill.name,
      category: skill.category,
      order: skill.order,
    };
    await createEntry("/skills", payload);
    console.log(`  ✓ ${skill.name} (${skill.category})`);
  }
}

async function seedSocialLinks() {
  console.log("\n🔗 Seeding Social Links...");
  for (const link of SOCIAL_LINKS) {
    const payload = {
      name: link.name,
      url: link.url,
      icon: link.icon,
      order: link.order,
    };
    await createEntry("/social-links", payload);
    console.log(`  ✓ ${link.name}`);
  }
}

async function seedNavigationLinks() {
  console.log("\n🧭 Seeding Navigation Links...");
  for (const link of NAVIGATION_LINKS) {
    const payload = {
      name: link.name,
      url: link.url,
      order: link.order,
    };
    await createEntry("/navigation-links", payload);
    console.log(`  ✓ ${link.name}`);
  }
}

async function seedHero() {
  console.log("\n🦸 Seeding Hero (Single Type)...");
  await updateSingleType("/hero", HERO_DATA);
  console.log("  ✓ Hero section updated");
}

async function seedContactInfo() {
  console.log("\n📞 Seeding Contact Info (Single Type)...");
  await updateSingleType("/contact-info", CONTACT_INFO_DATA);
  console.log("  ✓ Contact info updated");
}

async function seedSiteSettings() {
  console.log("\n⚙️  Seeding Site Settings (Single Type)...");
  await updateSingleType("/site-setting", SITE_SETTINGS_DATA);
  console.log("  ✓ Site settings updated");
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log("🚀 Starting LinkedIn Data Seed");
  console.log(`   Target: ${STRAPI_URL}`);
  console.log("");

  try {
    // Seed Collection Types
    await seedWorkExperiences();
    await seedEducation();
    await seedCertifications();
    await seedSkills();
    await seedSocialLinks();
    await seedNavigationLinks();

    // Seed Single Types
    await seedHero();
    await seedContactInfo();
    await seedSiteSettings();

    console.log("\n✅ Seed completed successfully!");
    console.log("\nNext steps:");
    console.log("  1. Open Strapi Admin: http://localhost:1337/admin");
    console.log("  2. Review and publish entries in Content Manager");
    console.log("  3. Upload resume PDF to Hero section");
  } catch (error) {
    console.error("\n❌ Seed failed:", error.message);
    process.exit(1);
  }
}

main();
