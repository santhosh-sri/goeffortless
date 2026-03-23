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
  languageModalConfig?: any;
  secondaryIcon?: string;
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
  annualData?: any,
  halfYearlyData?: any,
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
  name?: string;
  title?: string;
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
  packageItemsHalf?: PricingPackage[];
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
  tag?: string;
  billed?: string;
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
  pricingCardsHalf?: PricingSectionContents[];
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
  caseStudies?: CaseStudyCardProps[];
  faqs?: FAQData;
  marginTop?: boolean
  officelocation?: Location[];
  blogs?: BlogCardProps[];
  downloadApps?: DownloadSectionProps[]
  trackData?: TrackDataProps[]
  tdsFAQ?: faqs[];
  keyFactor?: string[];
  tdsApply?: TrackDataProps[];
  tdsAutomation?: string[];
  keyvalues?:  TrackDataProps[];
  tdsMatrix?: any;
  tableData?: any;
  commandCenterCards?: CommandCenterCardProps[];
  comparisonData?: ComparisonProps
  salesFeature?: FeatureSectionProps[]
  videoId?: string;
  FeatureItem?: FeatureHighlightItem[];
  erpComparisonData?: ERPComparisonCard[];
  roiCalculatorData?: any;
  readinessCardsData?: ReadinessCard[]
  metricCardData?: MetricCardData[];
  demoCtaButton?: string;
  demoSecButton?: string;
}

export interface CareersSectionContent {
  label?: string;
  href?: string;
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
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
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
  isBlogPage?: boolean;
  isDownloadPage?: boolean;
  isCompliancePage?: boolean;
  tds?: ComplianceTabSection;
  gst?: ComplianceTabSection;
  costCenters?: ComplianceTabSection;
  isFeaturePage?: boolean;
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

export interface CaseStudyCardProps {
  title: string;
  description: string;
  details: CaseStudyProps;
  type?: string;
  onReadMore: ()=> void;
}

export interface Stat {
  value: string;
  label: string;
  raiseType?: string;
}

export interface Contact {
  label: string;
  value: string;
  link?: string;
}

export interface CaseStudyProps {
  logoColor?: string;
  title: string;
  subtitle: string;
  fullDescription: string;
  challenges: string[];
  fixTitle: string;
  fixDescription: string;
  stats: Stat[];
  testimonial: {
    quote: string;
    author: string;
  };
  contacts: Contact[];
  logo?: string;
  docName?: string;
  fileName?: string;
  onClose: () => void;
}

export interface FAQData {
  [category: string]: faqs[];
};

export interface Location {
  locationName: string;
  details: string;
  locationSrc: string;
  link: string;
}

export interface BlogCardProps {
  imageUrl: string;
  title: string;
  desc: string;
  date: string;
  href?: string;
}

export interface DownloadSectionProps {
  appName?: string;
  title?: string;
  highlight?: string;
  description?: string;
  subDescription?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  imageSrc: string;
  option: string
}

export interface TrackDataProps {
  title?: string;
  desc?: string;
  icon?: string | any;
}

export interface TdsMatrixRow {
  section: string;
  expenseType: string;
  singleThreshold: string;
  aggregateThreshold: string;
  tdsRateIndividual: string;
  tdsRateNonIndividual: string;
}
 export interface ComplianceHeader {
  key: string;
  label: string;
 }

export interface ComplianceTabSection {
  serviceContent: ServiceContent[];
}

export interface CommandCenterCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
}

export interface LanguageOption {
  id: string;
  label: string;
  flag: string;
  value: string;
}

export interface LanguageModalConfig {
  title: string;
  subtitle: string;
  options: LanguageOption[];
}

export interface ComparisonProps {
  left: {
    title: string;
    subtitle: string;
    chat: {
      label: string;
      message: string;
      time: string;
    };
    points: string[];
  };
  right: {
    title: string;
    subtitle: string;
    images: string;
  };
}

// export interface FeatureSectionCard {
//   title: string;
//   subtitle?: string;
//   description: string;
//   image: string;
//   }
export interface FeatureSectionProps {
  
  feature: any;
  position: number;
}

export interface FeatureHighlightItem {
  title: string;
  icon: string;
}

export interface ERPComparisonCard {
  id: string;
  title: string;
  subTitle: string;
  secondTitle: string;
  erpPromise: any;
  result?: string;
}

export interface ReadinessCard {
  title: string;
  description: string;
  footnote?: string;
}

export interface MetricCardData {
  value: string;
  label: string;
}