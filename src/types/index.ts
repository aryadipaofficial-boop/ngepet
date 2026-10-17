export interface CurriculumLevel {
  id: string;
  name: string;
  alias: string;
  badge: string;
  targetAudience: string;
  description: string;
  duration: string;
  modulesCount: number;
  highlightTool: string;
  modules: {
    title: string;
    description: string;
    lessons: string[];
    deliverable: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  category: 'tiktok' | 'ai' | 'affiliate' | 'funnel';
  metric: string;
  metricLabel: string;
  avatarText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'umum' | 'biaya' | 'teknis' | 'materi';
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  experienceLevel: 'pemula' | 'menengah' | 'mahir';
  primaryInterest: 'affiliate' | 'tiktok_ads' | 'ai_automation' | 'dropship';
  motivation: string;
}
