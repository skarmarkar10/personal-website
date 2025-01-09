/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Brigham and Women\'s Hospital',
    position: 'Clinical Research Coordinator',
    url: 'https://www.brighamandwomens.org/',
    startDate: '2024-06-05',
    summary: 'Promptfoo builds open-source tools to evaluate, find, and fix vulnerabilities in large language models (LLMs). Our open-source tools are used by over 35,000 developers and researchers worldwide.',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution',
      'Established key partnerships with AI research institutions and tech companies',
    ],
  },
  {
    name: 'Perfect Pair',
    position: 'Director of Finance',
    url: 'https://smileidentity.com',
    startDate: '2020-08-01',
    summary: `Smile builds machine learning APIs to compare user submitted photos to ID documents. Our APIs are
    used by hundreds of thousands of people every day to access financial services. As VP of Engineering,
    I provide technical leadership on high-impact projects, influence and coach a distributed team of engineers,
    and facilitate alignment and clarity across teams on goals, outcomes, and timelines. I was promoted
    from Director of Engineering to VP of Engineering in April 2022, and then to VP of Engineering and Head
    of AI in November 2022. I lead a 20+ person engineering org. I directly manage ~8 engineers and spend
    >50% of my time writing code.`,
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
      'Reorged engineering teams to focus on product delivery. Created a new team to focus on ML infrastructure.',
      'Lead re-design of internal APIs for inference. Built new computer vision pipelines for industry leading certifications (NIST/iBeta liveness).',
      'Pitched, designed, developed, deployed, and maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search.',
    ],
  },
  {
    name: 'Joglekar Lab',
    position: 'Undergraduate Research Assistant',
    url: 'https://joglekarlab.org/',
    startDate: '2017-04-01',
    summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    YC companies.`,
    highlights: [
      'Created the InstaSafe. Fast, automated investment docs for YC companies.',
      'Advise several startups in the fund.',
    ],
  },
];

export default work;
