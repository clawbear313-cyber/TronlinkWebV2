import type { NavItem, Service, WorkCase, ProcessStep, Value, FAQItem, Principle } from '@/types/index.ts';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Approach', path: '/approach' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Process', path: '/process' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER = {
  tagline: 'Architecture-First Web Engineering.',
  tagline2: 'Building trusted long-term digital partnerships.',
  bottomTag: 'Engineering-Driven Trust',
  copyright: '© 2026 Tronlix. All rights reserved.',
  services: ['Corporate Web Architecture', 'Custom Engineering', 'Performance Consulting'],
  connect: [
    { label: 'Email', href: 'mailto:hello@tronlix.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
};

export const SERVICES: Service[] = [
  {
    id: '01',
    nameZh: '企業官網設計',
    nameEn: 'Corporate Web Architecture',
    description: [
      '我們以整體架構設計為核心，建立真正能承載品牌敘事與技術需求的網站系統。',
      '透過清晰的資訊結構、模組化元件與 SEO 友善的技術架構，打造能長期運行與持續演進的數位資產。每一次合作，都是長期信賴關係的基礎。',
    ],
    includes: [
      '企業品牌視覺系統設計',
      '多國語系網站架構規劃',
      '內容管理系統(CMS)整合',
      '前端效能優化',
      'CI/CD Pipeline Design',
    ],
    deliverables: ['技術架構文件', 'SEO優化建議', 'CI/CD設計方案', '長期維護支援計畫'],
    bestFit: '重視技術品質、追求長期數位資產經營的中大型企業或科技團隊。',
  },
  {
    id: '02',
    nameZh: '高規格客製化工程實作',
    nameEn: 'Custom Engineering Implementation',
    description: [
      '以工程紀律實現系統建構，所有開發皆基於型別安全、模組化架構與可維護設計。',
      '系統在成長過程中持續保持穩定與清晰，讓客戶得以在每個發展階段都對技術方向充滿信心。',
    ],
    includes: [
      'TypeScript嚴謹型別開發',
      '模組化組件庫建立',
      'API整合與系統串接',
      '安全性漏洞防護實作',
    ],
    deliverables: ['技術架構文件', 'API整合文件', '維護與擴展手冊'],
    bestFit: '具備複雜業務邏輯、需與現有API或後端系統深度整合的專案。',
  },
  {
    id: '03',
    nameZh: '系統現代化與效能顧問',
    nameEn: 'Modernization & Performance Consulting',
    description: [
      '我們與客戶的技術團隊緊密協作，透過架構優化、效能分析與安全強化，讓既有系統持續向前演進。',
      '每一次顧問合作，都是建立長期技術信賴的過程。',
    ],
    includes: ['系統架構優化', 'SEO技術架構診斷', '效能提升分析', '擴展性規劃'],
    deliverables: ['系統診斷報告', '架構優化方案', 'SEO優化建議', '效能提升路線圖'],
    bestFit: '希望提升系統效能、擴展業務能力，並建立可持續演進技術架構的組織。',
  },
];

export const WORK_CASES: WorkCase[] = [
  {
    id: '01',
    client: 'GenoFlow Biotech',
    industry: 'Biotechnology / 生技醫療',
    challenge:
      'GenoFlow 需要一個能精確呈現複雜專利技術流程的全球化數位平台，並支援多國語系團隊的協同維護。',
    solution: '建立基於 Next.js 的無頭架構系統，確保技術細節的渲染速度與全球存取效能。',
    architecture: '採用原子化組件設計 (Atomic Design)，確保全站 15 個語系版本的 UI 絕對一致。',
    outcome: 'Lighthouse 效能指標提升至 98 分，多國語系內容維護成本降低 60%。',
    tags: ['Next.js', 'Headless CMS', 'Multilingual'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&q=80',
  },
  {
    id: '02',
    client: 'Arcane Capital',
    industry: 'FinTech / 金融科技',
    challenge:
      'Arcane Capital 需要一個能支撐即時數據高頻更新、並具備持續擴展能力的交易儀表板架構。',
    solution: '重構數據流架構，引入 WebSockets 與 React Server Components。',
    architecture: '模組化架構設計，將數據層與表現層完全解耦。',
    outcome: '數據更新延遲降低 85%，新功能開發週期縮短 40%。',
    tags: ['React', 'WebSocket', 'Scalability'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    titleZh: '探索與研究',
    titleEn: 'Discovery & Research',
    desc: '深入了解業務需求、技術環境與使用者期望。',
  },
  {
    num: '02',
    titleZh: '架構設計',
    titleEn: 'Architecture Design',
    desc: '規劃系統架構、技術選型與模組化結構。',
  },
  {
    num: '03',
    titleZh: '工程實作',
    titleEn: 'Engineering',
    desc: '以嚴謹的工程紀律進行開發。',
  },
  {
    num: '04',
    titleZh: '品質驗證',
    titleEn: 'Quality Assurance',
    desc: '全面的效能測試與 Lighthouse 分析。',
  },
  {
    num: '05',
    titleZh: '上線與持續支援',
    titleEn: 'Launch & Ongoing Support',
    desc: '系統上線後持續提供技術支援，深化與客戶的長期合作關係。',
  },
];

export const VALUES: Value[] = [
  { num: '01', titleZh: '精確', titleEn: 'Precision', desc: '每一行程式碼都經過深思熟慮，精確是信賴的基礎。' },
  { num: '02', titleZh: '信賴', titleEn: 'Trust', desc: '在長期合作中建立深厚的技術信賴，是我們最重要的成果。' },
  { num: '03', titleZh: '紀律', titleEn: 'Discipline', desc: '嚴格遵循工程最佳實踐，確保每個系統持續演進。' },
  { num: '04', titleZh: '長遠', titleEn: 'Longevity', desc: '為未來十年設計系統，與客戶共同成長。' },
  { num: '05', titleZh: '解耦', titleEn: 'Decoupling', desc: '模組化確保靈活擴展，支撐業務持續發展。' },
  { num: '06', titleZh: '效能', titleEn: 'Performance', desc: '速度是使用者體驗的基礎，也是技術信賴的體現。' },
];

export const FAQS: FAQItem[] = [
  {
    questionZh: '你們如何確保長期合作的技術品質？',
    questionEn: 'How do you ensure technical quality over long-term engagements?',
    answerZh:
      '我們在每個專案中建立完整的技術架構文件與模組化設計，確保系統能隨業務演進持續調整。長期合作讓我們對客戶的技術脈絡有更深的理解，進而提供更精準的技術決策支援。',
    answerEn:
      'We establish comprehensive architecture documentation and modular design in every project, ensuring systems can adapt as the business evolves. Long-term engagement deepens our understanding of each client\'s technical context, enabling more precise decision support over time.',
  },
  {
    questionZh: '你們的合作模式是什麼？',
    questionEn: 'What does your engagement model look like?',
    answerZh: '我們以夥伴關係為核心，從初期探索到系統上線後的持續支援，全程緊密協作。',
    answerEn:
      'Our model is built on partnership — from initial discovery through post-launch support, we collaborate closely at every stage.',
  },
  {
    questionZh: '專案開發週期通常多久？',
    questionEn: 'How long does a typical project take?',
    answerZh:
      '依據複雜程度，標準企業官網系統通常需要 8 到 12 週，包含架構設計、開發、測試與正式上線。',
    answerEn:
      'Depending on complexity, a standard corporate website system typically takes 8 to 12 weeks, including architecture design, development, testing, and launch.',
  },
];

export const PRINCIPLES: Principle[] = [
  {
    num: '01',
    title: 'Architecture First',
    desc: '我們以整體架構設計為起點，建立真正能承載品牌敘事與技術需求的網站系統，為長期演進奠定基礎。',
  },
  {
    num: '02',
    title: 'Engineering Discipline',
    desc: '以工程紀律實現系統建構，確保系統在成長過程中持續保持穩定與清晰。',
  },
  {
    num: '03',
    title: 'Trusted Partnership',
    desc: '我們以長期夥伴關係為核心，在持續的合作中深化信賴，成為客戶技術演進最可靠的夥伴。',
  },
];

export const HERO_IMAGES = {
  home: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1920&q=75',
  approach: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=75',
  services: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=75',
  work: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=75',
  process: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=75',
  about: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=75',
  contact: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=75',
};
