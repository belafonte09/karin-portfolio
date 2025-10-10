import { useNavigate } from 'react-router-dom';
import DunningLetterVisual from './prototype/DunningLetterVisual';
import RuleCreationMacVisual from './prototype/RuleCreationMacVisual';

interface ProjectCardProps {
  name: string;
  date: string;
  problem: string;
  solution?: string;
  impact: Array<{ metric: string; before: string; after: string; }>;
  image?: string;
  videoUrl?: string;
  videoType?: string;
  problems?: string[];
  solutions?: string[];
  company: string;
  pdfUrl?: string;
}

const MinimalProjectCard = ({
  name,
  date,
  image = '/placeholder.svg',
  company,
  pdfUrl
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleImageClick = (e: React.MouseEvent) => {
    if (pdfUrl) {
      e.stopPropagation();
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <div
      onClick={() => navigate(`/portfolio/${company}/${encodeURIComponent(name)}`)}
      className="group cursor-pointer mb-24 hover:opacity-80 transition-opacity duration-300"
    >
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        {/* Project Info */}
        <div className="w-full md:w-2/5">
          <div className="group inline-block">
            <h3 className={`text-3xl font-semibold tracking-tight mb-2 text-riso-white transition-colors max-w-[310px] ${
              name === "How we used AI to simplify Rule Creation"
                ? "group-hover:text-riso-purple"
                : name === "How We Fixed our Design-Dev Communication Gap"
                ? "group-hover:text-riso-pink"
                : name === "Mobile App Redesign"
                ? "group-hover:text-riso-green"
                : name === "UX/UI for a smarter bulk merge app"
                ? "group-hover:text-riso-pink"
                : name === "Designing a foodsharing experience"
                ? "group-hover:text-riso-green"
                : name === "Boosting Payment Success"
                ? "group-hover:text-riso-green"
                : name === "Data Visualization Platform"
                ? "group-hover:text-riso-teracotta"
                : "group-hover:text-riso-teracotta"
            }`}>{name}</h3>
            <p className="text-sm text-riso-white mb-4">{date}</p>
            <div className="relative w-32 h-2">
              <svg
                className="absolute left-0 top-0 w-full overflow-visible"
                viewBox="0 0 128 8"
                preserveAspectRatio="none"
                style={{ height: '8px' }}
              >
                <path
                  d="M0,4 L128,4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className={`project-underline text-riso-white transition-all duration-200 ease-in-out ${
                    name === "UX/UI for a smarter bulk merge app" ? "bulk-merge-line" : ""
                  }`}
                  style={{
                    '--wavy-path': 'path("M0,4 Q32,1 64,4 T128,4")',
                    '--wavy-color': name === "How we used AI to simplify Rule Creation"
                      ? "hsl(var(--riso-purple))"
                      : name === "How We Fixed our Design-Dev Communication Gap"
                      ? "hsl(var(--riso-pink))"
                      : name === "Mobile App Redesign"
                      ? "hsl(var(--riso-green))"
                      : name === "UX/UI for a smarter bulk merge app"
                      ? "hsl(var(--riso-pink))"
                      : name === "Designing a foodsharing experience"
                      ? "hsl(var(--riso-green))"
                      : name === "Boosting Payment Success"
                      ? "hsl(var(--riso-green))"
                      : name === "Data Visualization Platform"
                      ? "hsl(var(--riso-teracotta))"
                      : "hsl(var(--riso-teracotta))"
                  } as React.CSSProperties}
                />
              </svg>

              <style jsx>{`
                .group:hover .project-underline {
                  d: var(--wavy-path);
                  stroke: var(--wavy-color);
                }
                .group:hover .bulk-merge-line {
                  d: path("M0,4 Q32,1 64,4 T128,4");
                  stroke: hsl(var(--riso-pink)) !important;
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="w-full md:w-[652px] h-[405px] relative overflow-hidden bg-riso-background rounded-2xl">
          {name === "Boosting Payment Success" ? (
            <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/mockups/Iphone-14-mockup-shape-o.png"
                alt="iPhone 14 mockup showing the improved payment solution"
                className="w-full h-full object-cover"
                key="boosting-payment-success" // Force re-render when image changes
              />
            </div>
          ) : name === "How we used AI to simplify Rule Creation" ? (
            <div className="w-full h-full flex items-center justify-center bg-riso-background transition-transform duration-500 group-hover:scale-105">
              <div className="scale-100 origin-center">
                <RuleCreationMacVisual />
              </div>
            </div>
          ) : name === "How We Fixed our Design-Dev Communication Gap" ? (
            <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/mockups/Iphone-14-shape-teardrop.png"
                alt="iPhone 14 teardrop shape mockup for Design-Dev Communication Gap"
                className="w-full h-full object-cover"
              />
            </div>
          ) : name === "Mobile App Redesign" ? (
            <div
              className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105 cursor-pointer rounded-2xl overflow-hidden"
              onClick={handleImageClick}
              title="Click to view PDF"
            >
              <img
                src="/images/mockups/mello-mobile-app-first-page.png"
                alt="Mobile App Redesign - Click to view PDF"
                className="w-full h-full object-cover"
              />
            </div>
          ) : company === "freelance" && pdfUrl ? (
            <div
              className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105 cursor-pointer rounded-2xl overflow-hidden"
              onClick={handleImageClick}
              title="Click to view PDF"
            >
              <img
                src={name === "UX/UI for a smarter bulk merge app"
                  ? "/images/projects/freelance/bulk-merge-preview.png"
                  : name === "Designing a foodsharing experience"
                  ? "/images/projects/freelance/appetit-preview.png"
                  : image}
                alt={`${name} - Click to view PDF`}
                className="w-full h-full object-cover"
                key={name} // Force re-render when image changes
              />
            </div>
          ) : name === "Data Visualization Platform" ? (
            <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
              <img
                src="/images/mockups/macbook-mockup-shape-square.png"
                alt="Data Visualization Platform MacBook mockup"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-full relative bg-riso-background transition-transform duration-500 group-hover:scale-105">
              <img
                src={image}
                alt={name}
                width={652}
                height={405}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalProjectCard;