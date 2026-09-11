import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const DATA_DIR = path.join(process.cwd(), 'src/data');

export function loadYaml<T>(filename: string): T {
  const content = fs.readFileSync(path.join(DATA_DIR, filename), 'utf8');
  return yaml.load(content) as T;
}

export interface SiteData {
  company_name: string;
  company_short: string;
  tagline: string;
  founded_year: number;
  tax_code: string;
  address: string;
  phone: string;
  email: string;
  working_hours: string;
  map_embed_url: string;
  social: {
    facebook: string;
    linkedin: string;
    youtube: string;
    zalo: string;
  };
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  cta_label: string;
  cta_url: string;
  secondary_cta_label: string;
  secondary_cta_url: string;
}

export interface HomeData {
  hero: HeroData;
  stats: StatItem[];
  why_us: WhyUsItem[];
}
