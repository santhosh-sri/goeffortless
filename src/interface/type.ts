export interface HeaderItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  headerMenus?: HeaderMenus[];
}
export interface HeaderMenus {
  title?: string;
  href?: string;
}
export interface FirstFoldContent {
  pageHeading?: string;
  pageName?: string;
  logo?: string;
  ishome?: boolean;
  mheading?: string;
  heading?: string;
  description?: string;
  bannerImage?: string;
  mobileBannerImage?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  ctaUrl?: string;
  businessTagline?: string;
  founderTestominial?: FounderTestimonial[];
  secondaryCtaLink?: string;
  businessPartnersLogo?: {
    src?: string;
    width?: number;
    height?: number;
  }[];
  isPartnerPage?: boolean;
  isCareersPage?: boolean;
}
export interface FeatureCard {
  title?: string;
  description?: string;
  img?: string;
  bg?: string;
  imgPosition?: string;
}
export interface TopImagecards {
  title?: string;
  description?: string;
  img?: string;
  list?: string[];
  height?: string;
}
export interface ProductTab {
  name: string;
  content: string;
  perfectFor: string[];
}
export interface servicesList {
  src: string;
  text: string;
}

export interface CallBackcards {
  title?: string;
  description?: string;
  subText?: string;
  ctaText?: string;
  ctaUrl?: string;
  list?: string[];
  primary?: boolean;
  image?: string;
  redirectUrl?: string;
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: string;
}
export interface TimelineStep {
  dayLabel: string;
  title: string;
  points: string[];
}
export interface IdeasCard {
  title?: string;
  description?: string;
  img?: string;
}
export interface ComplianceCard {
  title?: string;
  subTitle?: string;
  description?: string;
  img?: string;
}
export interface UseCaseCard {
  title?: string;
  description?: string;
  img?: string;
  link?: string;
  ctaText?: string;
  ctaUrl?: string;
}
export interface PentaCard {
  title?: string;
  description?: string;
  img?: string;
  link?: string;
  ctaText?: string;
  ctaUrl?: string;
}
export interface PricingSectionContents {
  packageTitle?: string;
  packageSubTitle?: string;
  packageDescription?: string;
  href?: string;
  packageItems?: string[];
  packageDetails?: string[];
  showAnnum?: boolean;
  Recommended?: boolean;
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPlan?: React.Dispatch<React.SetStateAction<string>>;
}

export interface TestimonalProps extends React.HTMLAttributes<HTMLDivElement> {
  businessPartnersLogo?: BusinessPartnersLogo[];
  testimonials?: TestimonalCards[];
  bgColour?: string;
}

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  sliderCards?: SliderCard[];
}
export interface BusinessPartnersLogo {
  src?: string;
  width?: number;
  height?: number;
}
export interface TestimonalCards {
  name?: string;
  designation?: string;
  review?: string;
  profile?: string;
  contribution?: string;
  title?: string;
}

export interface ProductsCardSection {
  title?: string;
  subTitle?: string;
  description?: string;
  href?: string;
}
export interface SliderCard {
  title?: string;
  organizationDetails?: {
    name: string;
    description: string;
  }[];
  impactDetails?: {
    percentage: string;
    negativeImpact?: boolean;
    description: string;
  }[];
}

export interface faqs {
  question?: string;
  answer?: string;
}
export interface TeamMember {
  imageSrc: string;
  description: string;
  linkedInUrl?: string;
  isColoured?: boolean;
}

export interface MissionSectionContent {
  image: {
    src: string;
    alt: string;
  };
  mobileImage?: {
    src: string;
    alt: string;
  };
  title: string;
  colouredTitle?: string;
  intro: string;
  paragraphs: string[];
  cta: {
    text: string;
    url: string;
  };
}
export interface FeatureProps extends React.HTMLAttributes<HTMLDivElement> {
  featureCards?: FeatureCard[];
  GridCols?: boolean;
  isMobile?: boolean;
  index?: number;
}
export interface HomePagePricing extends React.HTMLAttributes<HTMLDivElement> {
  packageItems?: PricingPackage[];
}
export interface PricingPackage {
  name: string;
  annualPrice: string;
  oneTimeImplementationFee: string;
  numberOfUsers: number;
  ocrScanning: string;
  documentStorage: string;
  numberOfBRS: string;
  additionalUsersPrice: string;
  features: string[];
}
export interface GrowthCardsContent {
  title?: string;
  description?: string;
  image?: string;
  height?: number;
  width?: number;
  showLine?: boolean;
  isMobile?: boolean;
  index?: string | number;
}
export interface ServiceContent {
  tagLine?: string;
  colouredTagLine?: string;
  GridCols?: boolean;
  title?: string;
  colouredTitle?: string;
  description?: string;
  Customtitle?: string;
  showForm?: boolean;
  href?: string;
  bgColour?: string;
  showGreyBoderLine?: boolean;
  isBordered?: boolean;
  pricingFeatures?: boolean;
  showGreyTopBorder?: boolean;
  callBackCards?: CallBackcards[];
  topImagecards?: TopImagecards[];
  businessOutcomes?: TopImagecards[];
  timelineSteps?: TimelineStep[];
  testimonialsSection?: TestimonalProps;
  sliderSection?: SliderProps;
  IdeasCard?: IdeasCard[];
  complianceCards?: ComplianceCard[];
  useCases?: UseCaseCard[];
  producttabs?: ProductTab[];
  servicesList?: servicesList[];
  pentaCards?: PentaCard[];
  pricingCards?: PricingSectionContents[];
  newPricingCards?: HomePagePricing;
  growthCards?: GrowthCardsContent[];
  founderTestominial?: FounderTestimonial[];
  dashboardSection?: DashboardSection[];
  useCaseSection?: USeCaseSection[];
  verticalSlider?: SectionData;
  homePageVerticalSlider?: HomePageVerticalSlider;
  founderTeams?: TeamMember[];
  mangementTeams?: TeamMember[];
  investors?: TeamMember[];
  mentorsCard?: TeamMember[];
  companyValuesItems?: CompanyValue[];
  growthFeaturesCard?: CompanyValue[];
  partnerList?: CompanyValue[];
  partnerBenifits?: CompanyValue[];
  jobCardDetails?: JobCardList[];
  missionCard?: MissionSectionContent;
  featureCardsSection?: FeatureProps;
  featuresBanner?: FeatureBannerItem[];
  faqsSection?: faqs[];
  isPricingPlanPage?: boolean;
  certificate?:CertificationData[];
}

export interface CareersSectionContent {
  label?: string;
  headline?: string;
  subheadline?: string;
  highlightWords?: {
    emoji: string;
    text: string;
    arrow: string;
  };
  teamImage: {
    src: string;
    alt: string;
  };
  missionHeading?: string[];
  missionDescription?: string;
}

export interface JobCardList {
  title: string;
  type: string;
  mode: string;
  location: string;
  description: string;
  url: string;
  isMobile?: boolean;
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
  index?: number;
  width?: number;
  height?: number;
  isMobile?: boolean;
  hidetopBorder?: boolean;
  growthFeatures?: boolean;
  customLength?: boolean;
  hideLastBorder?: boolean;
  topBottomBorder?: boolean;
}
export interface Feature {
  key: string;
  title: string;
  description: string;
  image: string;
}

export interface StoreButton {
  label: string;
  image: string;
  url: string;
}

export interface Feature {
  text: string;
}

export interface Image {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface FeatureBannerItem {
  title?: string;
  description?: string;
  howItSolvesItTitle?: string;
  features?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface SectionData {
  title: string;
  features: Feature[];
  store_buttons: StoreButton[];
}

export interface HomePageVerticalSliderFeature {
  title: string;
  description: string;
  image: string;
  featureCardsSection?: FeatureProps;
}

export interface HomePageVerticalSlider {
  features: HomePageVerticalSliderFeature[];
  isMobile?: boolean;
}
export type DashboardSection = {
  title?: string;
  solution?: string;
  img?: string;
  layout?: string;
  description?: string;
  subTitle?: string;
  subDesc?: string;
  noCols?: boolean;
};
export type USeCaseSection = {
  title?: string;
  solution?: string[];
  img?: string;
  layout?: string;
  border?: string;
  position?: string;
};

export interface FounderTestimonial {
  rating?: number;
  title?: string;
  quote?: string;
  name?: string;
  designation?: string;
}

export interface MetadataType {
  title?: string;
  description?: string;
  og?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    image?: string;
  };
}
export interface Content {
  headerItems?: HeaderItemsProps;
  firstFold?: FirstFoldContent;
  usecaseFold?: FirstFoldContent;
  careersBanner?: CareersSectionContent;
  serviceContent?: ServiceContent[];
  isHomePage?: boolean;
  productsSection?: ProductsCardSection[];
  footerData?: FooterData;
  isPricingPage?: boolean;
  isCareersPage?: boolean;
  isPricingPlanPage?: boolean;
  metadata?: MetadataType;
}
export interface FooterSection {
  title?: string;
  items?: string[];
}

export interface FooterLogo {
  src?: string;
  alt?: string;
}

export interface SocialLink {
  platform?: string;
  icon?: string;
  url?: string;
}

export interface FooterData extends React.HTMLAttributes<HTMLDivElement> {
  sections?: FooterSection[];
  logo?: FooterLogo;
  social_links?: SocialLink[];
}

export interface PricingFeatures {
  packageTitle?: string;
  packageSubTitle?: string;
  packageDescription?: string;
  href?: string;
  packageItems?: string[];
  packageDetails?: string[];
  showAnnum?: boolean;
  Recommended?: boolean;
}

export interface CertificationData  {
  button?: string;
  view?: string;
  big?: boolean;
};
