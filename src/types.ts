export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlight: string;
  topics: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  rating: number;
  quote: string;
  achievement: string;
  beforeAfterImage?: {
    before: string;
    after: string;
    description: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'tecnica' | 'practica' | 'pago';
}

export interface ScheduleDay {
  day: string;
  dateTag: string;
  focus: string;
  blocks: {
    time: string;
    title: string;
    description: string;
    badge?: string;
  }[];
}
