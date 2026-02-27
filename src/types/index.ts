export interface Artwork {
  slug: string;
  title: string;
  technique: string;
  year: number;
  dimensions: string;
  image: string;
  imageThumbnail: string;
  description: string;
  featured: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteData {
  artist: {
    name: string;
    tagline: string;
    taglineSub: string;
    bio: string[];
    avatar: string;
    seoName: string;
    seoKeywords: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    instagramUrl: string;
  };
  formspree: {
    endpoint: string;
  };
  seo: {
    siteUrl: string;
    ogImage: string;
    twitterHandle: string;
  };
  artworks: Artwork[];
  nav: NavItem[];
}
