// TypeScript interfaces for Tronlix site data

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  nameZh: string;
  nameEn: string;
  description: string[];
  includes: string[];
  deliverables: string[];
  bestFit: string;
}

export interface WorkCase {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  architecture: string;
  outcome: string;
  tags: string[];
  img: string;
}

export interface ProcessStep {
  num: string;
  titleZh: string;
  titleEn: string;
  desc: string;
}

export interface Value {
  num: string;
  titleZh: string;
  titleEn: string;
  desc: string;
}

export interface FAQItem {
  questionZh: string;
  questionEn: string;
  answerZh: string;
  answerEn: string;
}

export interface Principle {
  num: string;
  title: string;
  desc: string;
}
