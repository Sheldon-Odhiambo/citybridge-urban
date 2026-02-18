
import { Program, Ministry, TeamMember } from './types';

export interface GalleryItem {
  url: string;
  label: string;
}

export interface DetailedProgram extends Program {
  longDescription: string;
  schedule?: string;
  impactStory?: string;
  tags: string[];
  gallery: GalleryItem[];
  mainImage: string;
  hoverImage: string;
}

export const BIBLE_VERSES = [
  {
    text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    reference: "Jeremiah 29:11",
    theme: "Hope"
  },
  {
    text: "Whatever you do, work heartily, as for the Lord and not for men.",
    reference: "Colossians 3:23",
    theme: "Mastery"
  },
  {
    text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
    reference: "Matthew 5:16",
    theme: "Creativity"
  },
  {
    text: "They shall build up the ancient ruins; they shall raise up the former devastations; they shall repair the ruined cities.",
    reference: "Isaiah 61:4",
    theme: "Restoration"
  },
   {
    text: "Be watchful, stand firm in the faith, act like men, be strong.",
    reference: "1 corinthians 16:13",
    theme: "Steadfastness"
  }
];

export const MINISTRIES: Ministry[] = [
  {
    name: "Fountain of Hope Church of the Nazarene",
    leader: "Pastor Roy Mugambi",
    location: "Kandisi, Kenya",
    mission: "Building faith and community restoration through discipleship and compassion.",
    connection: "The spiritual lead and foundation of our community bond."
  },
  {
    name: "CityBridge Urban Center",
    leader: "Keith Tadiwanashe Manokore",
    mission: "A dedicated hub for community leadership, creative arts, and urban transformation.",
    connection: "Our central platform for change and empowerment."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Pastor Roy Mugambi",
    role: "Lead Pastor of Fountain of Hope Church of the Nazarene",
    image: "/assets/proy.jpeg",
    bio: "Pastor Roy leads Fountain of Hope with a mission to bridge the gap between church and community.",
    specialty: "Spiritual Leadership"
  },
  {
    name: "Keith Tadiwanashe Manokore",
    role: "Leader of CityBridge & Co-founder of Crib Connection",
    image: "/assets/TADI.jpeg",
    bio: "Keith leads CityBridge Urban Center and co-founded Crib Connection, focusing on business growth, urban strategy, and community innovation.",
    specialty: "Urban Strategy & Leadership"
  },
  {
    name: "Caleb Magaya",
    role: "Co-founder of Crib Connection",
    image: "assets/magaya.jpeg",
    bio: "Caleb is the co-founder of Crib Connection, leading creative studio initiatives and mentoring talent in professional arts.",
    specialty: "Creative Studio Direction"
  }
];

export const CRIB_TEAM = [
  {
    name: "Wesley Kikoti",
    role: "Incharge of Arts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800",
    bio: "Wesley Kikoti is responsible for coordinating arts and creative initiatives, fostering creativity, and supporting artistic growth within the team."
  },
  {
    name: "Keith Manokore",
    role: "Co-founder & Urban Visionary",
    image: "/assets/TADI.jpeg",
    hoverImage: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=800",
    bio: "Keith Tadiwanashe bridges the gap between urban strategy and ground-level action in Kandisi."
  },
  { 
    name: "Caleb Magaya",
    role: "Co-founder & Art Strategist",
    image: "assets/magaya.jpeg",
    hoverImage: "https://images.unsplash.com/photo-1492562080023-ab3dbdf5bbbb?auto=format&fit=crop&q=80&w=800",
    bio: "Caleb is the Co-Founder and Art Strategist, providing creative direction and strategic guidance to shape impactful and meaningful work."
  },
  {
    name: "Mitchelina Kisoi",
    role: "Tresurer",
    image: "/assets/cohort4.jpg",
    hoverImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
    bio: "Mitchelina oversees finances, managing resources responsibly and ensuring transparency to support the organization’s goals and growth."
  },
  {
    name: "Charity Dabasa",
    role: "Technical Lead & Media Engineer",
    image: "/assets/dabasa.jpg",
    hoverImage: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=800",
    bio: "Dabasa is Responsible for technical operations and media production, ensuring systems run smoothly and content is delivered effectively."
  },
  {
    name: "Naomi",
    role: "Experience Designer & Community Coordinator",
    image: "/assets/naomi.jpg",
    hoverImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
    bio: "Naomi serves as Secretary, ensuring effective communication, organization, and smooth coordination of activities while supporting the team with diligence and attention to detail."
  }

];

export const CRIB_VOLUNTEERS = [
  {
    name: "Joy Ushe",
    role: "Kids Program Mentor",
    image: "/assets/ushe.jpg",
    bio: "Joy serves as a volunteer in the kids programme, supporting activities and creating a warm, welcoming environment where children feel valued and encouraged."
  },
  {
    name: "Felix Kephar",
    role: "Junior Arts Mentor",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=800",
    bio: "Kepha volunteers in the kids programme, assisting with activities and helping nurture positive growth and creativity among the children."
  }
];

export const PROGRAMS: DetailedProgram[] = [
  {
    id: 'home-visits',
    title: "Home Visits",
    description: "Building close bond relationships through prayer and food hampers.",
    mainImage: "/assets/home1.jpg",
    hoverImage: "/assets/home2.jpg",
    longDescription: "Our Home Visits movement brings prayers and food hampers to each family visited, turning distance between the church and community into a close bond relationship. We focus on building deep relationships through consistent presence and compassionate support.",
    schedule: "WEEKEND SCHEDULE",
    impactStory: "Turning physical distance into spiritual and community closeness through consistent weekend visitation.",
    icon: "Home",
    tags: ["Prayer", "Compassion", "Community Bond"],
    details: ["Prayer support", "Food hampers", "Relationship building"],
    gallery: [
      { url: "/assets/home3.jpg", label: "Saturday Prayer Walk" },
      { url: "/assets/home4.jpg", label: "Weekend Hamper Delivery" },
      { url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200", label: "Sunday Fellowship Bonds" },
      { url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200", label: "Frontline Compassion" },
      { url: "/assets/home5.jpg", label: "Home Connection Log" },
      { url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1200", label: "Weekend Reachout" }
    ]
  },
  
  {
    id: 'next-gen',
    title: "Next Gen Mentors",
    description: "Promoting discipleship, compassion, and hope in our community youth.",
    mainImage: "/assets/gen2.jpg",
    hoverImage: "/assets/gen1.jpg",
    longDescription: "Our mentorship program focuses on coaching the next generation to lead with integrity, discovering their potential through discipleship and hope. We provide a steady weekend guidance system for young leaders.",
    schedule: "WEEKEND SCHEDULE",
    impactStory: "Youth are finding direction and spiritual grounding through consistent weekend mentorship sessions.",
    icon: "Users",
    tags: ["Discipleship", "Hope", "Mentorship"],
    details: ["Values coaching", "Character development", "Spiritual grounding"],
    gallery: [
      { url: "/assets/gen3.jpg", label: "Saturday Discovery Session" },
      { url: "/assets/gen4.jpg", label: "Weekend Pathfinding" },
      { url: "/assets/gen5.jpg", label: "Sunday Spiritual Coaching" },
      { url: "/assets/gen3.jpg", label: "Mastery Mindset" },
      { url: "/assets/gen7.jpg", label: "Weekend Impact Log" },
      { url: "/assets/gen1.jpg", label: "Future Architects" }
    ]
    
    
  },
  {
    id: 'skill-launchpad',
    title: "Skill Launchpad",
    description: "Helping community business owners grow and expand through creative mastery.",
    mainImage: "/assets/skill1.jpg",
    hoverImage: "/assets/skill2.jpg",
    longDescription: "The Skill Launchpad is designed to help community business owners grow and scale. We provide platforms for expansion through mastery of music, painting, string art, and other creative disciplines. Our focus is on skill exchange and growth, not a tool library.",
    schedule: "WEEKEND SCHEDULE",
    impactStory: "Local entrepreneurs are scaling their businesses by integrating high-end creative skills into their daily operations.",
    icon: "Rocket",
    tags: ["Music", "Painting", "String Art", "Growth"],
    details: ["Music Production", "Fine Painting", "String Art Mastery"],
    gallery: [
      { url: "/assets/skill2.jpg", label: "Saturday Studio Grind" },
      { url: "/assets/skill4.jpg", label: "Weekend Creative Flow" },
      { url: "/assets/skill5.jpg", label: "Sunday Mastery Lab" },
      { url: "/assets/skill1.jpg", label: "The Economic Engine" },
      { url: "/assets/skill8.jpg", label: "Skill Exchange Log" },
      { url: "/assets/skill2.jpg", label: "Weekend Launchpad" }
    ]
  }
];

export const CRIB_PROGRAMS = [
  {
    id: 'skill-exchange',
    title: "Skill Exchange",
    desc: "A collaborative network where founders and community members trade techniques in film, audio, and visual design.",
    icon: "🔄",
    image: "/assets/ex1.JPG",
    hoverImage: "/assets/ex2.jpg"
  },
  {
    id: 'game-nights',
    title: "Friday Game Nights",
    desc: "Vibrant evenings of laughter and strategy, building a deep community culture beyond the studio work.",
    icon: "🎲",
    image: "/assets/gamenight1.JPG",
    hoverImage: "/assets/gamenight2.JPG"
  },
  {
    id: 'classroom-cohorts',
    title: "Classroom Cohorts",
    desc: "Intensive training modules celebrating the completion of professional creative tracks.",
    icon: "🎓",
    image: "/assets/croom.jpg",
    hoverImage: "/assets/croom2.jpg"
  }
];

export const CRIB_COHORTS = [
  {
    number: "Cohort 1",
    dates: "June 21st – November 23rd, 2025",
    highlight: "Journey to Completion",
    details: "12 participants came together to explore the intersections of faith and creative mastery, completing the first full curriculum in Kandisi.",
    status: "Completed",
    certificationType: "Certificate of Completion",
    visualHighlights: [
      {
        url: "/assets/cohort1.jpg",
        caption: "The Journey Begins: Our first gathering at the Connection hub, laying the foundation of brotherhood and vision."
      },
      {
        url: "/assets/cohort2.jpg",
        caption: "Classroom Mastery: Diving deep into the theory of creative design, where faith principles meet professional standards."
      },
      {
        url: "/assets/cohort3.jpg",
        caption: "Hands-on Production: Participants collaborating in the studio, turning abstract ideas into community-focused media."
      },
      {
        url: "/assets/cohort4.jpg",
        caption: "Final Milestones: Celebrating the completion of the legacy track, where 12 individuals became urban change agents."
      }
    ],
    stories: [
      {
        name: "Samuel K.",
        role: "Audio Team",
        quote: "The Crib gave me a space to refine my rhythm and connect with a brotherhood that cares about more than just the music."
      },
      {
        name: "Faith M.",
        role: "Visual Team",
        quote: "Learning to tell our community's stories through film has given me a new lens of hope and dignity."
      }
    ]
  }
];
