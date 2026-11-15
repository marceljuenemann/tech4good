// TEMPORARY: copied from the design mockup. Will be replaced by the resources YAML (see AGENTS.md).
export interface Resource {
  name: string;
  url?: string;
  description: string;
  verified: boolean;
}
export interface ResourceGroup {
  title?: string;
  items: Resource[];
}
export interface ResourceSection {
  id: string;
  title: string;
  groups: ResourceGroup[];
}
export const resourceSections: ResourceSection[] = [
  {
    id: "communities",
    title: "Communities",
    groups: [
      {
        title: "Tech for good",
        items: [
          { name: "Tech for Good Community", url: "https://luma.com/tech-for-good", description: "Monthly in-person meetups and a WhatsApp group — that’s us.", verified: true },
          { name: "Good Tech", url: "https://www.goodtech.ventures/", description: "Community for early-stage tech-for-good startups, run by Catch22.", verified: true },
          { name: "London Responsible Tech Breakfast Club", description: "Regular breakfast meetup on responsible tech and AI.", verified: true },
        ],
      },
      {
        title: "Altruism and impact",
        items: [
          { name: "Second Renaissance Map", url: "https://secondrenaissance.net/map", description: "Visual map of changemaking movements.", verified: true },
          { name: "Meta-Crisis 101", url: "https://www.sloww.co/meta-crisis-101/", description: "Introduction to the shared root causes of global crises.", verified: true },
          { name: "Effective Altruism", url: "https://www.effectivealtruism.org/", description: "Global evidence-based movement for doing the most good.", verified: true },
          { name: "London EA Entrypoints", url: "https://london-ea-community-map.netlify.app/", description: "Directory of London EA groups and programmes.", verified: true },
          { name: "London EA Events", url: "https://luma.com/calendar/cal-afqqBGvsVut8g8a", description: "Calendar of EA and adjacent events.", verified: true },
          { name: "London Effective Giving", url: "https://londoneffectivegiving.com/", description: "Socials, talks and coworking on effective giving.", verified: true },
          { name: "Social Enterprise UK", url: "https://www.socialenterprise.org.uk/", description: "National body for social enterprises.", verified: true },
          { name: "Impact Connect", url: "https://impactconnect.compassio.co/", description: "Monthly one-to-one matching for impact professionals.", verified: true },
        ],
      },
      {
        title: "Diversity and inclusion in tech",
        items: [
          { name: "FemTechConf", url: "https://femtechconf.com/london", description: "One-day women-in-tech summit.", verified: true },
          { name: "Women in Data", url: "https://www.womenindata.co.uk/", description: "UK community for women in data and AI.", verified: true },
          { name: "Out in Tech", url: "https://outintech.com/", description: "Global LGBTQ+ tech community.", verified: false },
          { name: "Colorintech", url: "https://www.colorintech.org/", description: "London nonprofit for ethnic minority tech talent.", verified: false },
          { name: "UK Black Tech", url: "https://www.ukblacktech.com/", description: "Initiatives for Black talent in UK tech.", verified: false },
          { name: "Coding Black Females", url: "https://codingblackfemales.com/", description: "Large UK community for Black women in tech.", verified: false },
          { name: "Asians in Tech", url: "https://asiansintech.com/", description: "London network celebrating Asian talent in UK tech.", verified: false },
          { name: "Diversity in Tech", url: "https://www.diversityintech.co.uk/", description: "Career advice and jobs for diverse UK tech talent.", verified: false },
        ],
      },
    ],
  },
  {
    id: "causes",
    title: "Causes",
    groups: [
      {
        title: "Responsible AI and AI safety",
        items: [
          { name: "LIaiSE", url: "https://liaiseai.xyz/", description: "Mentoring, events and reading lists for AI safety newcomers.", verified: true },
          { name: "LISA", url: "https://www.safeai.org.uk/", description: "Coworking and research hub for AI safety in Shoreditch.", verified: true },
          { name: "BlueDot Impact", url: "https://bluedot.org/", description: "Free AI safety and governance courses.", verified: false },
          { name: "AI Security Institute", url: "https://www.aisi.gov.uk/", description: "UK government AI safety research body.", verified: false },
          { name: "Ada Lovelace Institute", url: "https://www.adalovelaceinstitute.org/", description: "Research on data and AI in society.", verified: false },
        ],
      },
      {
        title: "Climate tech",
        items: [
          { name: "London Climate Action Week", url: "https://www.londonclimateactionweek.org/", description: "Annual city-wide climate events.", verified: true },
          { name: "Green Software Foundation", url: "https://greensoftware.foundation/", description: "Standards and education for low-carbon software.", verified: true },
          { name: "Carbon13", url: "https://carbonthirteen.com/", description: "Cambridge-based venture builder for climate startups.", verified: true },
          { name: "ClimateAction.tech", url: "https://climateaction.tech/", description: "Global community of tech workers on climate.", verified: false },
          { name: "Work on Climate", url: "https://workonclimate.org/", description: "Community and resources for climate careers.", verified: false },
          { name: "Climatebase", url: "https://climatebase.org/", description: "Climate job board with many London roles.", verified: false },
          { name: "Terra.do", url: "https://terra.do/", description: "Climate courses and career community.", verified: false },
        ],
      },
      {
        title: "Health tech",
        items: [
          { name: "DigitalHealth.London", url: "https://digitalhealth.london/", description: "Accelerator linking digital health firms with London’s NHS.", verified: false },
          { name: "One HealthTech", url: "https://www.onehealthtech.com/", description: "London community promoting diversity in health innovation.", verified: false },
          { name: "MedCity", url: "https://medcityhq.com/", description: "London life sciences and healthtech cluster.", verified: false },
          { name: "Health Innovation Network", url: "https://healthinnovationnetwork.com/", description: "South London network for adopting new NHS technology.", verified: false },
        ],
      },
      {
        title: "Mental health and wellbeing",
        items: [
          { name: "Action for Happiness", url: "https://actionforhappiness.org/", description: "London charity running free wellbeing courses and events.", verified: true },
          { name: "Happier Lives Institute", url: "https://www.happierlivesinstitute.org/", description: "Research and charity recommendations on global wellbeing.", verified: true },
          { name: "Mental Health Innovations", url: "https://mentalhealthinnovations.org/", description: "Digital mental health charity behind Shout 85258.", verified: false },
          { name: "MQ Mental Health Research", url: "https://www.mqmentalhealth.org/", description: "Charity funding mental health research.", verified: false },
          { name: "Wellcome — Mental Health", url: "https://wellcome.org/what-we-do/mental-health", description: "Major funder, including digital mental health approaches.", verified: false },
          { name: "Wellbeing Research Centre", url: "https://wellbeing.hmc.ox.ac.uk/", description: "Oxford wellbeing science centre.", verified: false },
        ],
      },
      {
        title: "FemTech",
        items: [
          { name: "FemTech Lab", url: "https://femtechlab.com/", description: "London accelerator for women’s health founders.", verified: false },
          { name: "Women of Wearables", url: "https://www.womenofwearables.com/", description: "Community for women in wearables and healthtech.", verified: false },
          { name: "FemTech Insider", url: "https://www.femtechinsider.com/", description: "Femtech industry news and analysis.", verified: false },
        ],
      },
      {
        title: "EdTech and digital inclusion",
        items: [
          { name: "Ada, the National College for Digital Skills", url: "https://www.ada.ac.uk/", description: "Sixth-form college and apprenticeships for digital talent.", verified: true },
          { name: "Bett", url: "https://www.bettshow.com/", description: "Annual education technology show at ExCeL London.", verified: false },
          { name: "Founders and Coders", url: "https://www.foundersandcoders.com/", description: "Free peer-led coding bootcamp with a tech-for-good focus.", verified: false },
          { name: "CodeYourFuture", url: "https://www.codeyourfuture.io/", description: "Free coding training for refugees and low-income learners.", verified: false },
        ],
      },
      {
        title: "Civic tech and open data",
        items: [
          { name: "Newspeak House", url: "https://newspeak.house/", description: "Bethnal Green residential college for civic technologists.", verified: true },
          { name: "Movement Research Unit", url: "https://www.mvmtresearch.org/", description: "Free research support for movement groups and unions.", verified: true },
          { name: "mySociety", url: "https://www.mysociety.org/", description: "Civic tech charity behind TheyWorkForYou and FixMyStreet.", verified: false },
          { name: "Democracy Club", url: "https://democracyclub.org.uk/", description: "Volunteer-run open data on UK elections.", verified: false },
          { name: "Open Data Institute", url: "https://theodi.org/", description: "Open data nonprofit in King’s Cross.", verified: false },
          { name: "Open Knowledge Foundation", url: "https://okfn.org/", description: "Global open knowledge nonprofit based in London.", verified: false },
        ],
      },
      {
        title: "Charity and nonprofit tech",
        items: [
          { name: "CAST", url: "https://www.wearecast.org.uk/", description: "Helps charities use digital to deliver their missions.", verified: true },
          { name: "Catalyst", url: "https://www.thecatalyst.org.uk/", description: "Network building digital capability in UK charities.", verified: true },
          { name: "TechSoup Connect", url: "https://events.techsoup.org/techsoup-connect-england-chapter/", description: "Volunteer-run tech meetups for nonprofits.", verified: true },
          { name: "DataKind UK", url: "https://datakind.org.uk/", description: "Volunteer data scientists for charities.", verified: false },
          { name: "Charity Digital", url: "https://www.charitydigital.org.uk/", description: "Charity tech resources, news and events.", verified: false },
        ],
      },
      {
        title: "Accessibility",
        items: [
          { name: "AbilityNet", url: "https://abilitynet.org.uk/", description: "Supports disabled people with technology; runs the Tech4Good Awards.", verified: false },
          { name: "Global Disability Innovation Hub", url: "https://www.disabilityinnovation.com/", description: "Assistive tech research at Queen Elizabeth Olympic Park.", verified: false },
          { name: "Helen Hamlyn Centre for Design", url: "https://www.rca.ac.uk/research-innovation/research-centres/helen-hamlyn-centre/", description: "Royal College of Art inclusive design centre.", verified: false },
          { name: "Business Disability Forum", url: "https://businessdisabilityforum.org.uk/", description: "Helps employers become disability-inclusive, including in tech.", verified: false },
        ],
      },
      {
        title: "Digital rights and online safety",
        items: [
          { name: "Full Fact", url: "https://fullfact.org/", description: "Fact-checking charity building its own AI tools.", verified: true },
          { name: "Open Rights Group", url: "https://www.openrightsgroup.org/", description: "Grassroots campaigns for online privacy and free speech.", verified: false },
          { name: "Privacy International", url: "https://privacyinternational.org/", description: "London charity on technology and human rights.", verified: false },
          { name: "5Rights Foundation", url: "https://5rightsfoundation.com/", description: "Campaigns for child-centred digital design.", verified: false },
        ],
      },
      {
        title: "Decentralised tech",
        items: [
          { name: "DeSci London", url: "https://luma.com/user/DeSciLondon", description: "Events for decentralised science.", verified: true },
          { name: "Logos Circle London", url: "https://luma.com/logos-london", description: "Monthly meetup on privacy and decentralised infrastructure.", verified: false },
        ],
      },
    ],
  },
  {
    id: "careers",
    title: "Job boards",
    groups: [
      {
        items: [
          { name: "Escape the City", url: "https://www.escapethecity.org/", description: "Curated purpose-driven jobs, courses and events.", verified: true },
          { name: "80,000 Hours", url: "https://80000hours.org/", description: "Career advice and job board, with many AI safety roles.", verified: true },
          { name: "High Impact Professionals", url: "https://www.highimpactprofessionals.org/", description: "Accelerator, talent directory and job board for impact careers.", verified: true },
        ],
      },
    ],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    groups: [
      {
        items: [
          { name: "Tech To The Rescue", url: "https://www.techtotherescue.org/", description: "Connects nonprofits with tech companies and funders, now focused on AI.", verified: true },
          { name: "Reach Volunteering", url: "https://reachvolunteering.org.uk/", description: "Matches skilled volunteers with charities, many in IT and data.", verified: false },
          { name: "Digital Boost", url: "https://digitalboost.org.uk/", description: "Mentoring for small businesses and charities.", verified: false },
          { name: "Code Club", url: "https://codeclub.org/", description: "Raspberry Pi Foundation programme for free kids’ coding clubs.", verified: false },
          { name: "STEM Ambassadors", url: "https://www.stem.org.uk/stem-ambassadors", description: "Volunteers inspiring young people about STEM careers.", verified: false },
          { name: "Catchafire", url: "https://www.catchafire.org/", description: "Skills-based volunteering platform for nonprofits.", verified: false },
          { name: "For Good First Issue", url: "https://forgoodfirstissue.github.com/", description: "Directory of social-good open-source projects; remote-friendly.", verified: false },
        ],
      },
    ],
  },
  {
    id: "funding",
    title: "Funding",
    groups: [
      {
        title: "Start here",
        items: [
          { name: "GOV.UK: Set up a social enterprise", url: "https://www.gov.uk/set-up-a-social-enterprise", description: "Compare legal structures before you look for funding.", verified: false },
        ],
      },
      {
        title: "Grants",
        items: [
          { name: "GrantMatch", url: "https://www.grantmatch.co.uk/grants", description: "Searchable UK grants, filterable by organisation type, sector and region.", verified: false },
          { name: "Funding Options for CICs", url: "https://www.cictools.co.uk/guides/cic-funding-grants", description: "Funding guide for Community Interest Companies.", verified: false },
          { name: "360Giving GrantNav", url: "https://grantnav.threesixtygiving.org/", description: "Data on past UK grants, for finding funders.", verified: false },
          { name: "Charity Excellence Funding Finder", url: "https://www.charityexcellence.co.uk/funding-finder-grants-directory/", description: "Free directory of UK grant funders.", verified: false },
          { name: "UnLtd", url: "https://www.unltd.org.uk/", description: "Grants and mentoring for individual social entrepreneurs.", verified: false },
          { name: "EA Funds", url: "https://funds.effectivealtruism.org/", description: "EA grant funds open to individuals and early projects.", verified: false },
        ],
      },
      {
        title: "Accelerators and equity",
        items: [
          { name: "Bethnal Green Ventures", url: "https://bethnalgreenventures.com/", description: "Early-stage tech-for-good investor; runs coffee events.", verified: true },
          { name: "ImpactVC", url: "https://www.impactvc.co/", description: "Network for impact-focused VCs.", verified: true },
          { name: "Social Tech Trust", url: "https://socialtechtrust.org/", description: "Impact investor for early-stage tech ventures.", verified: false },
          { name: "Ambitious Impact", url: "https://www.charityentrepreneurship.com/", description: "London incubator matching founders with researched charity ideas.", verified: false },
        ],
      },
      {
        title: "Social investment",
        items: [
          { name: "Good Finance", url: "https://www.goodfinance.org.uk/", description: "Guides and a directory of social investors.", verified: false },
          { name: "Social Investment Business", url: "https://www.sibgroup.org.uk/", description: "Investment for charities and social enterprises.", verified: false },
        ],
      },
      {
        title: "Crowdfunding and funding experiments",
        items: [
          { name: "Crowdfunder", url: "https://www.crowdfunder.co.uk/", description: "UK crowdfunding platform popular with social projects.", verified: true },
          { name: "Gitcoin", url: "https://gitcoin.co/", description: "Web3-focused, with experiments like quadratic funding for public goods.", verified: true },
          { name: "Artizen", url: "https://artizen.fund/", description: "Match-funding for art, science and tech projects.", verified: true },
          { name: "Manifund", url: "https://manifund.org/", description: "Fast regranting and community funding, mostly EA and AI safety.", verified: false },
        ],
      },
      {
        title: "Prizes and challenges",
        items: [
          { name: "MIT Solve", url: "https://solve.mit.edu/", description: "Annual global challenges for tech-based social ventures.", verified: false },
          { name: "Challenge Works", url: "https://challengeworks.org/", description: "Nesta’s prize centre listing open innovation challenges.", verified: false },
        ],
      },
    ],
  },
  {
    id: "spaces",
    title: "Spaces",
    groups: [
      {
        items: [
          { name: "Impact Hub London", url: "https://london.impacthub.net/", description: "Euston coworking space with social enterprise programmes.", verified: true },
          { name: "The Conduit", url: "https://www.theconduit.com/", description: "Central London members’ club for changemakers.", verified: true },
          { name: "Impact First", url: "https://www.impactfirst.org.uk/", description: "Shared workspace for high-impact, EA-aligned projects.", verified: true },
          { name: "Newspeak House", url: "https://newspeak.house/", description: "Bethnal Green residential college for civic technologists.", verified: true },
          { name: "Founder Cowork Club", url: "https://luma.com/foundercoworkclub", description: "Deep-work coworking for purpose-driven founders at &Soul Shoreditch.", verified: true },
          { name: "The Trampery", url: "https://thetrampery.com/", description: "B Corp running workspaces for social enterprises.", verified: false },
          { name: "Sustainable Ventures", url: "https://www.sustainableventures.co.uk/", description: "Climate tech hub with workspace and investment.", verified: false },
          { name: "Venture Café London", url: "https://venturecafelondon.org/", description: "Free weekly networking and workshops at One Triton Square.", verified: false },
        ],
      },
    ],
  },
  {
    id: "beyond",
    title: "Beyond London",
    groups: [
      {
        title: "Elsewhere in the UK",
        items: [
          { name: "Tech4Good South West", url: "https://tech4goodsouthwest.org/", description: "Network across Bristol, Bath and the South West.", verified: true },
          { name: "Tech for Good Live", url: "https://techforgood.live/", description: "Podcast, events and community for UK tech for good.", verified: false },
          { name: "Tech for Good North East", url: "https://www.techforgoodne.org/", description: "Digital inclusion network for the North East.", verified: false },
          { name: "Tech for Good Scotland", url: "https://thirdsectorlab.co.uk/techforgood/", description: "Free Glasgow events on responsible AI and civic tech.", verified: false },
          { name: "Scottish Tech Army", url: "https://www.scottishtecharmy.org/", description: "Online volunteers delivering digital projects for charities.", verified: false },
        ],
      },
      {
        title: "Global networks and directories",
        items: [
          { name: "Civic Tech Field Guide", url: "https://civictech.guide/", description: "Large curated directory of civic tech projects and organisations.", verified: false },
          { name: "Digital Public Goods Alliance", url: "https://digitalpublicgoods.net/", description: "Promotes and registers open digital public goods.", verified: false },
          { name: "Code for All", url: "https://codeforall.org/", description: "Global network of civic tech organisations.", verified: false },
          { name: "Fast Forward", url: "https://www.ffwd.org/", description: "US-focused accelerator for tech nonprofits.", verified: false },
        ],
      },
    ],
  },
];
