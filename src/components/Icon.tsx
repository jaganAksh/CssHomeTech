import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  DoorOpen,
  Factory,
  Handshake,
  HeartPulse,
  Home,
  Hotel,
  KeyRound,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Package,
  Plane,
  SearchCheck,
  Server,
  ShieldCheck,
  Train,
  Wrench,
} from 'lucide-react';
import type { IconName } from '../types';

export const iconMap: Record<IconName, LucideIcon> = {
  access: LockKeyhole,
  airport: Plane,
  building: Building2,
  career: Briefcase,
  check: CheckCircle2,
  clock: Clock,
  consult: SearchCheck,
  data: Server,
  door: DoorOpen,
  emergency: AlertTriangle,
  factory: Factory,
  glass: Layers3,
  hardware: BadgeCheck,
  healthcare: HeartPulse,
  home: Home,
  hotel: Hotel,
  key: KeyRound,
  maintenance: Wrench,
  parts: Package,
  safe: ShieldCheck,
  service: LifeBuoy,
  transport: Train,
  wall: Layers3,
};

interface IconBadgeProps {
  name: IconName;
  className?: string;
  iconClassName?: string;
}

export function IconBadge({ name, className = '', iconClassName = '' }: IconBadgeProps) {
  const Icon = iconMap[name];

  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-mist text-brand-teal ${className}`}
      aria-hidden="true"
    >
      <Icon className={`h-5 w-5 ${iconClassName}`} strokeWidth={2.2} />
    </span>
  );
}
