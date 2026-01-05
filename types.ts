export interface ScheduleItem {
  date: string;
  day: string;
  activities: string[];
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  className?: string;
}