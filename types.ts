
export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Ministry {
  name: string;
  leader: string;
  location?: string;
  mission: string;
  connection: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialty: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
