export interface ScheduleItem {
  id: string;
  day: string;
  dateStr?: string;
  timeUTC: string;
  timeEST: string;
  timePST: string;
  timeGMT: string;
  category: 'Just Chatting' | 'Gaming' | 'Special Event' | 'Day Off' | 'IRL Travel';
  title: string;
  description: string;
  tags: string[];
  isLiveToday?: boolean;
}

export interface ContentCard {
  id: string;
  type: 'clip' | 'photo';
  title: string;
  subtitle: string;
  imageUrl: string;
  duration?: string;
  views?: string;
  likes?: string;
  platform: 'twitch' | 'instagram';
  link: string;
  videoPlaceholderText?: string;
  caption?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  description: string;
  url: string;
  accentColor: string;
  hoverColor: string;
  iconName: string;
  badge?: string;
}
