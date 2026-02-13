
import { Program, Ministry, TeamMember } from './types';

export interface DetailedProgram extends Program {
  longDescription: string;
  schedule?: string;
  impactStory?: string;
  tags: string[];
  gallery: string[];
  mainImage: string;
}

export const MINISTRIES: Ministry[] = [
  {
    name: "Fountain of Hope",
    leader: "Pastor Roy Mugambi",
    location: "Kandisi, Kenya",
    mission: "Spiritual leadership and community transformation.",
    connection: "The foundational ministry that gave birth to Citybridge."
  },
  {
    name: "CityBridge Urban Center",
    leader: "Keith Tadiwanashe Manokore",
    mission: "Urban ministry focusing on youth formation and entrepreneurship.",
    connection: "Planted as one of six global Urban Ministry Studios."
  },
  {
    name: "Crib Connection",
    leader: "Caleb Magaya & Keith Manokore",
    mission: "Empowering youth in arts and business for community impact.",
    connection: "Program under Citybridge, moving towards independence."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Pastor Roy Mugambi",
    role: "Founding Visionary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "The spiritual heart of the Kandisi district, dedicated to restoring hope through deep community roots.",
    specialty: "Spiritual Direction"
  },
  {
    name: "Keith Manokore",
    role: "Lead Strategist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    bio: "Driving the innovation of the Urban Ministry Studio, bridging the gap between faith and the creative economy.",
    specialty: "Urban Innovation"
  },
  {
    name: "Caleb Magaya",
    role: "Operational Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    bio: "Focused on youth empowerment and the practical execution of creative skills training and mentorship.",
    specialty: "Youth Mentorship"
  }
];

export const PROGRAMS: DetailedProgram[] = [
  {
    id: 'kids',
    title: "CityBridge Kids",
    description: "A safe, faith-centered environment for children to grow.",
    mainImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600",
    longDescription: "Our Kids program isn't just a daycare; it's a foundation for a lifetime of faith and character. Every Sunday, we provide age-appropriate biblical teaching through storytelling, music, and interactive play. We focus on building 'The Big Three': Identity in Christ, Belonging to the Community, and Purpose in the Kingdom.",
    schedule: "Sundays at 9:00 AM & 11:00 AM",
    impactStory: "Last year, over 50 children participated in our 'Fruit of the Spirit' festival, showcasing their artistic talents while learning about kindness and patience.",
    icon: "Child",
    tags: ["Faith", "Education", "Safe Space"],
    details: ["Bible-based teaching", "Creative activities & play", "Mentorship & guidance"],
    gallery: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 'skills',
    title: "Skill Exchange",
    description: "Transforming talent into dignity and sustainability.",
    mainImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600",
    longDescription: "The Skill Exchange is the heart of our economic restoration mission. We identify latent talent in the community—like string art, carpentry, or digital design—and provide the professional studio space needed to create. The exchange operates on a unique 40/60 profit model that ensures artists are paid fairly while keeping the studio operational for the next generation.",
    schedule: "Open Workshop: Mon-Fri, 9:00 AM - 5:00 PM",
    impactStory: "Our lead String Artist transitioned from unemployed to a professional creator whose work now decorates homes across three continents.",
    icon: "Hammer",
    tags: ["Entrepreneurship", "Craft", "Economy"],
    details: ["String Art refinement", "Shared teaching space", "Sustainable profit model"],
    gallery: [
      "https://images.unsplash.com/photo-1520127877037-33100693a778?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1459749411177-eb8226922997?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 'cohort',
    title: "Classroom Cohort",
    description: "6-month intensive training for long-term impact.",
    mainImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600",
    longDescription: "The Cohort is a transformational journey for young leaders. The first 3 months focus on 'The Foundation'—business development, financial literacy, and professional ethics. The final 3 months are 'The Activation'—intensive technical training in creative media, culminating in a professional portfolio project for a local client.",
    schedule: "Enrollment every Jan & July",
    impactStory: "80% of our last cohort graduates are currently either running their own micro-businesses or are employed in creative agencies.",
    icon: "GraduationCap",
    tags: ["Leadership", "Media", "Professional"],
    details: ["3m Business Development", "3m Creative Arts Training", "Real-life project links"],
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 'community',
    title: "Community Life",
    description: "Building strong bonds through teamwork and joy.",
    mainImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1600",
    longDescription: "Restoration happens in the context of relationship. Community Life hosts our famous Friday Game Nights, inter-neighborhood sports tournaments, and weekly discipleship circles. We believe that when we play together and pray together, we build a bridge that can't be broken by the challenges of urban life.",
    schedule: "Friday Nights at 7:00 PM",
    impactStory: "Our weekly Game Nights have become the safest gathering point in the district, bringing together youth who previously had no neutral space to interact.",
    icon: "Users",
    tags: ["Fellowship", "Sports", "Joy"],
    details: ["Team building sports", "Friday Game Nights", "Discipleship fellowships"],
    gallery: [
      "https://images.unsplash.com/photo-1526726533691-11889370aa0b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];
