import { Calculator, Calendar, Camera, BookOpen, Users } from 'lucide-react'

export const SITE_ROUTES = [
  {
    href: "/calendar",
    title: "Naptár & Tornaterem",
    description: "Foglald le a tornatermet, és kövesd nyomon a kari események időpontjait.",
    Icon: Calendar,
    iconBgClass: "bg-purple-500/10 dark:bg-purple-500/20",
    iconTextColorClass: "text-purple-600 dark:text-purple-400",
    hoverBorderClass: "hover:border-purple-500/50",
    accentColorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    href: "/calculator",
    title: "KKI Kalkulátor",
    description: "Számold ki gyorsan és egyszerűen a várható tanulmányi és szociális ösztöndíjadat.",
    Icon: Calculator,
    iconBgClass: "bg-blue-500/10 dark:bg-blue-500/20",
    iconTextColorClass: "text-brand-blue dark:text-blue-400",
    hoverBorderClass: "hover:border-brand-blue/50",
    accentColorClass: "text-brand-blue dark:text-blue-400",
  },
  {
    href: "/gallery",
    title: "Galéria",
    description: "Böngészd végig a legutóbbi MIK-es események, gólyatáborok és bulik legjobb pillanatait.",
    Icon: Camera,
    iconBgClass: "bg-orange-500/10 dark:bg-orange-500/20",
    iconTextColorClass: "text-orange-600 dark:text-orange-400",
    hoverBorderClass: "hover:border-orange-500/50",
    accentColorClass: "text-orange-600 dark:text-orange-400",
  },
  {
    href: "/guides",
    title: "Tudástár & Segédletek",
    description: "Töltsd le a legfontosabb nyomtatványokat, mintadogákat és egyetemi útmutatókat.",
    Icon: BookOpen,
    iconBgClass: "bg-yellow-500/10 dark:bg-yellow-500/20",
    iconTextColorClass: "text-yellow-600 dark:text-yellow-400",
    hoverBorderClass: "hover:border-yellow-500/50",
    accentColorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    href: "/aboutus",
    title: "Rólunk",
    description: "Ismerd meg a HÖK csapatát, a képviselőket, és tudd meg, kihez fordulhatsz.",
    Icon: Users,
    iconBgClass: "bg-indigo-500/10 dark:bg-indigo-500/20",
    iconTextColorClass: "text-indigo-600 dark:text-indigo-400",
    hoverBorderClass: "hover:border-indigo-500/50",
    accentColorClass: "text-indigo-600 dark:text-indigo-400",
  }
  // A 6. "Iroda Státusz" kártyát szándékosan kihagytam innen, 
  // mert az egy egyedi, beépített indikátoros kártya, nem egy sima FeatureCard!
] as const;
