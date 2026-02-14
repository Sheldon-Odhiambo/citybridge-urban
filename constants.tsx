
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
    mission: "Building faith and community restoration from the ground up.",
    connection: "The spiritual birthplace of our urban mission."
  },
  {
    name: "Urban Ministry Center",
    leader: "Keith Tadiwanashe Manokore",
    mission: "A hub for youth leadership, creative arts, and city innovation.",
    connection: "Our central studio for urban transformation."
  },
  {
    name: "Crib Connection",
    leader: "Caleb Magaya & Keith Manokore",
    mission: "Empowering young creators to start sustainable businesses.",
    connection: "The entrepreneurial arm of our ministry."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Pastor Roy Mugambi",
    role: "Founding Visionary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Roy's heart is for the people of Kandisi, leading with a vision of restoration through proximity.",
    specialty: "Guidance"
  },
  {
    name: "Keith Manokore",
    role: "Lead Strategist & Co-founder of Crib Connection",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    bio: "Keith designs the systems that connect faith with city life and co-leads the creative entrepreneurial movement.",
    specialty: "Urban Design"
  },
  {
    name: "Caleb Magaya",
    role: "Project Director & Co-founder of Crib Connection",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    bio: "Caleb mentors youth daily, transforming raw talent into sustainable business ventures through the Crib network.",
    specialty: "Youth Coaching"
  }
];

export const PROGRAMS: DetailedProgram[] = [
  {
    id: 'communities',
    title: "House to House Hubs",
    description: "Meeting in homes to build real family and local peace where people live.",
    mainImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
    longDescription: "Restoration isn't just about a building; it's about being present. Our 'House to House' movement brings neighbors together for meals, prayer, and local support. We turn streets into families, one living room at a time.",
    schedule: "Weekly Home Gatherings",
    impactStory: "Neighbors who were once strangers now share meals and support each other's families through our home hubs.",
    icon: "Home",
    tags: ["Presence", "Family", "Local"],
    details: ["Home dinner groups", "Neighbor-to-neighbor care", "Street-level prayer"],
    gallery: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 'youth',
    title: "Next Gen Mentors",
    description: "Coaching youth to lead with character and hope in our city.",
    mainImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600",
    longDescription: "We believe in the untapped potential of every young person. Through intentional coaching and creative projects, we help students discover their identity and lead with values that transform our community.",
    schedule: "Saturday Leadership Lab",
    impactStory: "Local students who struggled are now leading community service projects and mentoring younger peers.",
    icon: "Users",
    tags: ["Youth", "Leadership", "Character"],
    details: ["Direct mentoring", "Values-based training", "Leadership games"],
    gallery: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 'incubation',
    title: "Skill Launchpad",
    description: "Mastering crafts and launching businesses that last.",
    mainImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600",
    longDescription: "We provide the tools and space for innovation. From carpentry to digital tech, we help neighbors master a craft and build businesses that provide economic dignity for themselves and others.",
    schedule: "Daily Studio Access",
    impactStory: "Three independent shops have launched from our studio this year, creating five new jobs in our district.",
    icon: "Rocket",
    tags: ["Skills", "Jobs", "Innovation"],
    details: ["Craft workshops", "Business coaching", "Studio tool library"],
    gallery: [
      "https://images.unsplash.com/photo-1520127877037-33100693a778?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1459749411177-eb8226922997?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200"
    ]
  },
  {
    id: 'arts',
    title: "Creative Story Lab",
    description: "Using media and design to share the true voice of the city.",
    mainImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600",
    longDescription: "The city has a story, and it's full of hope. We train youth in photography, video, and graphic design so they can capture the beauty and truth of our urban life for the world to see.",
    schedule: "Tue & Thu Creative Studio",
    impactStory: "A student-led documentary about our neighborhood was screened locally, changing perceptions of our district.",
    icon: "Camera",
    tags: ["Arts", "Media", "Digital"],
    details: ["Camera training", "Graphic design", "Digital storytelling"],
    gallery: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];
