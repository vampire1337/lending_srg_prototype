export type NavItem = {
  href: string;
  label: string;
};

export type MediaAsset = {
  src: string;
  alt: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type CapabilityItem = {
  title: string;
  description: string;
};

export type ApiMatrixItem = {
  audience: string;
  capability: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  companyMark?: string;
};

export type LandingContent = {
  navigation: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    pillars: ValueItem[];
    media: MediaAsset;
  };
  dna: {
    title: string;
    body: string;
  };
  problem: {
    title: string;
    body: string;
  };
  platform: {
    title: string;
    body: string;
  };
  banks: {
    title: string;
    subtitle: string;
    values: ValueItem[];
    media: MediaAsset;
  };
  insurers: {
    title: string;
    subtitle: string;
    productControl: CapabilityItem[];
    salesControl: CapabilityItem[];
    integrations: CapabilityItem[];
    media: MediaAsset;
  };
  technology: {
    title: string;
    body: string;
    matrix: ApiMatrixItem[];
    components: ValueItem[];
    media: MediaAsset;
  };
  cta: {
    title: string;
    body: string;
  };
};
