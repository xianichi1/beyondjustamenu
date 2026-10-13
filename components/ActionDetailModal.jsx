'use client';

import React, { useState } from 'react';
import {
  X,
  BookOpen,
  AlertTriangle,
  Heart,
  Share2,
  Copy,
  Check,
  ExternalLink,
  Send,
  MessageSquare,
} from 'lucide-react';

const TABS = [
  { id: 'research', label: 'Research', icon: BookOpen },
  { id: 'report', label: 'Report', icon: AlertTriangle },
  { id: 'donate', label: 'Donate', icon: Heart },
  { id: 'share', label: 'Share', icon: Share2 },
];

const RESEARCH_ARTICLES = [
  {
    publication: 'TIME MAGAZINE',
    tag: 'INVESTIGATIVE',
    tagColor: 'text-[#E0564C]',
    title: 'Cover Story: We Are Being Targeted — Anti-Asian American Violence',
    description:
      "TIME's landmark cover investigation examining the spike in attacks, the Atlanta spa tragedy, and community mobilization.",
    url: 'https://time.com/5947622/time-cover-anti-asian-american-violence-atlanta-shooting/',
    linkText: 'Read TIME Article',
  },
  {
    publication: 'TIME MAGAZINE',
    tag: 'ANALYSIS',
    tagColor: 'text-[#E892A8]',
    title: 'Hate Crimes Targeting Asian Americans Nearly Tripled',
    description:
      'Examining the empirical rise in physical attacks, xenophobic scapegoating, and the toll on elderly immigrants.',
    url: 'https://time.com/5938482/asian-american-attacks/',
    linkText: 'Read TIME Report',
  },
  {
    publication: 'PEW RESEARCH CENTER',
    tag: 'DATA STUDY',
    tagColor: 'text-[#A3DDD0]',
    title: 'Asian Americans and Discrimination During the Pandemic',
    description:
      '58% of Asian adults reported facing discriminatory treatment, negative stereotyping, or racial slurs in public settings.',
    url: 'https://www.pewresearch.org/race-and-ethnicity/2023/11/30/asian-americans-and-discrimination-during-the-covid-19-pandemic/',
    linkText: 'Explore Pew Data',
  },
  {
    publication: 'UT AUSTIN / ETHICS UNWRAPPED',
    tag: 'CASE STUDY',
    tagColor: 'text-[#E0564C]',
    title: 'Anti-Asian Violence and the Bystander Effect',
    description:
      'Analyzes public inaction during anti-Asian harassment incidents and teaches behavioral tools for active bystander intervention.',
    url: 'https://ethicsunwrapped.utexas.edu/anti-asian-violence-and-the-bystander-effect',
    linkText: 'View Case Study',
  },
  {
    publication: 'GOVERNMENT OF CANADA',
    tag: 'CANADIAN HERITAGE',
    tagColor: 'text-[#A3DDD0]',
    title: 'Addressing Anti-Asian Racism in Canada',
    description:
      '301% surge in police-reported anti-Asian hate crimes (Statistics Canada), with federal documentation on historical exclusion and community responses.',
    url: 'https://www.canada.ca/en/canadian-heritage/campaigns/asian-heritage-month/anti-asian-racism.html',
    linkText: 'View Canada.ca Portal',
  },
  {
    publication: 'PAPER MAGAZINE',
    tag: 'CULTURE & SOLIDARITY',
    tagColor: 'text-[#E892A8]',
    title: 'Stop AAPI Hate: Global Culture & The Fight for Dignity',
    description:
      'How diasporic creative culture and global platforms unite to combat everyday xenophobia.',
    url: 'https://www.papermag.com/bts-stop-aapi-hate#rebelltitem1',
    linkText: 'Read Paper Mag Article',
  },
];

const DONATE_RESOURCES = [
  {
    source: 'STOP AAPI HATE',
    tag: 'NATIONAL ADVOCACY',
    tagColor: 'text-[#E0564C]',
    title: 'Stop AAPI Hate Coalition',
    description:
      'Direct support for national incident tracking, educational policy advocacy, and community safety programs.',
    url: 'https://stopaapihate.org/',
    linkText: 'Support Stop AAPI Hate',
  },
  {
    source: 'OMG LORD DIRECTORY',
    tag: 'RESOURCE HUB',
    tagColor: 'text-[#A3DDD0]',
    title: 'OMG Lord Anti-Racism Resources',
    description:
      'Curated directory of mutual aid funds, legal defense organizations, educational toolkits, and creative actions.',
    url: 'https://www.omglord.com/resources/anti-racism',
    linkText: 'Explore OMG Lord Hub',
  },
  {
    source: 'MUTUAL AID DIRECTORY',
    tag: 'CARRD HUB',
    tagColor: 'text-[#E892A8]',
    title: 'Anti-Asian Violence Resources Carrd',
    description:
      'Comprehensive masterlist of grassroots funds, senior escort programs, victim relief funds, and petitions.',
    url: 'https://anti-asianviolenceresources.carrd.co/',
    linkText: 'Open Carrd Masterlist',
  },
];

const CREATIVE_RESOURCES = [
  {
    source: 'ARE.NA COLLECTION',
    tag: 'VISUAL ARCHIVE',
    tagColor: 'text-[#BA9FD6]',
    title: 'Asian Hate Signs Graphic Design Archive',
    description:
      'Curated visual research collection of protest placards, handmade typography, and grassroots anti-hate signs.',
    url: 'https://www.are.na/search?q=%7B%22term%22%3A%7B%22facet%22%3A%22asian%20hate%20signs%22%7D%7D',
    linkText: 'View on Are.na',
  },
  {
    source: "IT'S NICE THAT",
    tag: 'ILLUSTRATION FEATURE',
    tagColor: 'text-[#A3DDD0]',
    title: 'Yuk Fun: Stop Asian Hate Illustration',
    description:
      'Celebrated design studio Yuk Fun on challenging racist tropes through bold, vibrant graphic art.',
    url: 'https://www.itsnicethat.com/news/yuk-fun-stop-asian-hate-illustration-180321?utm_source=facebook&utm_medium=social&utm_campaign=intsocial&utm_content=fbregular',
    linkText: "Read on It's Nice That",
  },
];

export function ActionDetailModal({ category, onClose }) {
  const [selectedTab, setSelectedTab] = useState(null);
  const [copied, setCopied] = useState(false);
  const [incidentType, setIncidentType] = useState('verbal');
  const [incidentContext, setIncidentContext] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const activeTab = selectedTab || category || 'research';

  if (!category) return null;

  const handleClose = () => {
    setSelectedTab(null);
    setReportSubmitted(false);
    onClose();
  };

  const handleCopyShare = () => {
    const shareText =
      '"You like our food, but what about us?" — An interactive project confronting the commodification of Asian culture with real anti-racism data and grassroots solidarity actions. Check it out: ' + (typeof window !== 'undefined' ? window.location.href : '');
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#161616] border border-[#2B2B2B] rounded-3xl p-5 shadow-2xl max-h-[90vh] overflow-y-auto text-left text-neutral-200">
        <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E0564C]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Solidarity & Research Hub
            </span>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close dialog"
            className="p-1 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-1 p-1 bg-[#1F1F1F] rounded-2xl mb-5 text-[11px] font-medium">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedTab(id)}
              className={`py-2 rounded-xl transition-all flex flex-col items-center gap-1 cursor-pointer ${
                activeTab === id
                  ? 'bg-[#2D2D2D] text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {activeTab === 'research' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Verified News, Studies & Articles
              </h3>
              <p className="text-xs text-neutral-400">
                Key literature and journalistic reporting investigating the surge in anti-Asian attacks.
              </p>
            </div>

            <div className="space-y-3">
              {RESEARCH_ARTICLES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] space-y-1.5 hover:border-[#383838] transition-colors"
                >
                  <div className={`flex items-center justify-between text-[10px] font-mono ${item.tagColor}`}>
                    <span>{item.publication}</span>
                    <span>{item.tag}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-end pt-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#BA9FD6] hover:text-[#d3bfee] transition-colors"
                    >
                      {item.linkText} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'report' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Report & Document Incidents
              </h3>
              <p className="text-xs text-neutral-400">
                Official reporting tools and confidential community research intake.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3DDD0] font-semibold">
                Official National Incident Portals
              </span>
              <div className="grid grid-cols-1 gap-2 pt-1">
                <a
                  href="https://stopaapihate.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#242424] hover:bg-[#2C2C2C] text-xs font-semibold text-white transition-colors"
                >
                  <span>Stop AAPI Hate Official Incident Reporting</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#BA9FD6]" />
                </a>
                <a
                  href="https://anti-asianviolenceresources.carrd.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#242424] hover:bg-[#2C2C2C] text-xs font-semibold text-white transition-colors"
                >
                  <span>Anti-Asian Violence Resources & Legal Intake</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#BA9FD6]" />
                </a>
              </div>
            </div>

            {!reportSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReportSubmitted(true);
                }}
                className="space-y-3 p-4 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare className="w-4 h-4 text-[#BA9FD6]" />
                  <h4 className="text-xs font-bold text-white">
                    Have you experienced this before?
                  </h4>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Submit personal experiences anonymously to contribute to this graphic design thesis research archive.
                </p>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                    Nature of Experience
                  </label>
                  <select
                    value={incidentType}
                    onChange={(e) => setIncidentType(e.target.value)}
                    className="w-full text-xs bg-[#141414] border border-[#333333] rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-[#BA9FD6]"
                  >
                    <option value="verbal">Verbal Harassment / Racial Slurs</option>
                    <option value="microaggression">Everyday Microaggression (&ldquo;My culture isn&apos;t your costume&rdquo;)</option>
                    <option value="hospitality">Hospitality / Dining / Transit Incident</option>
                    <option value="refusal">Service Discrimination or Unsafe Encounter</option>
                    <option value="other">Online Xenophobic Stereotyping</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-neutral-300 mb-1">
                    Your Anonymous Story (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={incidentContext}
                    onChange={(e) => setIncidentContext(e.target.value)}
                    placeholder="Share what happened, where it occurred, or how you felt..."
                    className="w-full text-xs bg-[#141414] border border-[#333333] rounded-xl px-3 py-2 text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#BA9FD6]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#BA9FD6] hover:bg-[#b092ce] text-[#3E2D27] text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  SUBMIT ANONYMOUSLY
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] text-center space-y-2">
                <div className="w-9 h-9 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">
                  Anonymous Entry Recorded
                </h4>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Thank you for contributing your voice. Documenting these everyday realities challenges the superficial consumption of Asian culture.
                </p>
                <button
                  onClick={() => {
                    setReportSubmitted(false);
                    setIncidentContext('');
                  }}
                  className="text-xs text-[#BA9FD6] underline cursor-pointer"
                >
                  Submit another reflection
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'donate' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Direct Grassroots Funds & Directories
              </h3>
              <p className="text-xs text-neutral-400">
                Support vetted organizations protecting frontline workers, youth, and elderly community members.
              </p>
            </div>

            <div className="space-y-3">
              {DONATE_RESOURCES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] space-y-1.5 hover:border-[#383838] transition-colors"
                >
                  <div className={`flex items-center justify-between text-[10px] font-mono ${item.tagColor}`}>
                    <span>{item.source}</span>
                    <span>{item.tag}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-end pt-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#BA9FD6] hover:text-[#d3bfee] transition-colors"
                    >
                      {item.linkText} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'share' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Graphic Design & Campaign Archive
              </h3>
              <p className="text-xs text-neutral-400">
                Visual culture, sign archives, and spreading the message beyond passive consumption.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A3DDD0] via-[#BA9FD6] to-[#E0564C]" />
              <div className="text-[10px] font-mono text-[#E0564C] tracking-widest uppercase">
                PROTEST STATEMENT & MANIFESTO
              </div>
              <p className="text-base font-black text-white leading-tight">
                &ldquo;Love Us like you Love our Food & Culture!&rdquo;
              </p>
              <p className="text-xs text-neutral-300 max-w-xs mx-auto">
                Rather than posters that peel off and turn into forgotten staples, turn public consumption into lasting solidarity.
              </p>
            </div>

            <div className="space-y-2.5">
              {CREATIVE_RESOURCES.map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#1E1E1E] border border-[#2B2B2B] space-y-1">
                  <div className={`flex items-center justify-between text-[10px] font-mono ${item.tagColor}`}>
                    <span>{item.source}</span>
                    <span>{item.tag}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-end pt-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#BA9FD6] hover:text-[#d3bfee] transition-colors"
                    >
                      {item.linkText} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <button
                onClick={handleCopyShare}
                className="w-full py-3 rounded-full bg-[#BA9FD6] hover:bg-[#b092ce] text-[#3E2D27] text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#3E2D27]" />
                    CAMPAIGN STATEMENT COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#3E2D27]" />
                    COPY CAMPAIGN LINK & STATEMENT
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div className="mt-5 pt-3 border-t border-[#262626]">
          <button
            onClick={handleClose}
            className="w-full py-2.5 rounded-full bg-[#222222] hover:bg-[#2C2C2C] text-neutral-300 text-xs font-medium transition-colors cursor-pointer"
          >
            RETURN TO STORY
          </button>
        </div>
      </div>
    </div>
  );
}
