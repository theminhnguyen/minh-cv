export type Lang = "de" | "en";

/** Ein Text in beiden Sprachen. */
export type L = Record<Lang, string>;

/** Eine Liste von Texten in beiden Sprachen. */
export type LList = Record<Lang, string[]>;

export type Track = "ai" | "product" | "leadership" | "delivery";

export type Role = {
  id: string;
  title: L;
  period: L;
  /** ISO-Startdatum, nur für Sortierung und `datetime`-Attribute. */
  start: string;
  current?: boolean;
  tracks: Track[];
  summary: L;
  highlights: Array<{ label: L; text: L }>;
};

export type Company = {
  id: string;
  name: string;
  location: L;
  period: L;
  roles: Role[];
};

export type EarlyRole = {
  role: L;
  company: string;
  location: L;
  period: string;
};

export type Degree = {
  degree: L;
  school: string;
  location: L;
  period: string;
  grade?: string;
  thesis?: { partner?: string; title: L };
};

export type Certification = {
  name: string;
  issuer: string;
  group: "ai" | "delivery";
  /** Nur gesetzt, wo das Jahr belegt ist — wird dann als Aktualitätshinweis gezeigt. */
  year?: string;
};

export type SkillCluster = {
  id: string;
  title: L;
  icon: "brain" | "users" | "compass" | "gauge" | "briefcase";
  items: Array<{ name: L; proof: L }>;
};

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: L;
};
