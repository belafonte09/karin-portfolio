import React, { useState } from 'react';

interface ContactLinkProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = ""
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative inline-block text-riso-white transition-all duration-300 no-underline font-medium text-xl ${className}`}
    >
      {children}
      <svg
        className="absolute left-0 w-full overflow-visible"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        style={{ height: '8px', top: 'calc(100% - 2px)' }}
      >
        <path
          d="M2,4 L98,4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="underline-path"
        />
      </svg>

      <style jsx>{`
        .underline-path {
          transition: d 0.2s ease;
        }

        a:hover .underline-path {
          d: path("M2,4 Q25,1 50,4 T98,4");
        }
      `}</style>
    </a>
  );
};

const ContactCard: React.FC = () => {
  const [cardBg, setCardBg] = useState('bg-riso-background');
  const [copyFeedback, setCopyFeedback] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('khoffmann.design@gmail.com');
      setCopyFeedback('Email copied!');
      setTimeout(() => setCopyFeedback(''), 2000);
    } catch (err) {
      setCopyFeedback('Failed to copy');
      setTimeout(() => setCopyFeedback(''), 2000);
    }
  };

  const handleEmailHover = () => {
    setCardBg('bg-riso-fuschia');
    setShowTooltip(true);
  };

  const handleLinkedInHover = () => {
    setCardBg('bg-riso-pink');
  };

  const handleResumeHover = () => {
    setCardBg('bg-riso-teracotta');
  };

  const handleTitleHover = () => {
    setCardBg('bg-riso-purple');
  };

  const handleMouseLeave = () => {
    setCardBg('bg-riso-background');
    setShowTooltip(false);
  };

  return (
    <div className={`${cardBg} rounded-2xl p-6 md:pt-[72px] md:pl-16 md:pb-[72px] md:pr-16 text-riso-white transition-colors duration-300`}>
      {/* Section Title */}
      <h1
        className="text-4xl md:text-5xl font-sora font-bold text-riso-white mb-32 cursor-pointer transition-all duration-300"
        onMouseEnter={handleTitleHover}
        onMouseLeave={handleMouseLeave}
      >
        Get in touch
      </h1>

      {/* Contact Links */}
      <div className="flex flex-col md:flex-row items-end gap-8 md:gap-16">
        <ContactLink
          href="https://docs.google.com/document/d/1a1HvTLUeWnqcciY6NEE_Kfmp7OAbA702/edit?usp=sharing&ouid=102463870981616514202&rtpof=true&sd=true"
          onMouseEnter={handleResumeHover}
          onMouseLeave={handleMouseLeave}
        >
          View Resume
        </ContactLink>

        <div className="relative flex items-end">
          <ContactLink
            onClick={handleEmailCopy}
            onMouseEnter={handleEmailHover}
            onMouseLeave={handleMouseLeave}
          >
            khoffmann.design@gmail.com
          </ContactLink>
          {showTooltip && !copyFeedback && (
            <div className="absolute -top-10 left-0 bg-riso-white text-riso-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              Copy
            </div>
          )}
          {copyFeedback && (
            <div className="absolute -top-10 left-0 bg-riso-white text-riso-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
              {copyFeedback}
            </div>
          )}
        </div>

        <ContactLink
          href="https://www.linkedin.com/in/karin-hoffmann/"
          onMouseEnter={handleLinkedInHover}
          onMouseLeave={handleMouseLeave}
        >
          LinkedIn
        </ContactLink>
      </div>
    </div>
  );
};

export default ContactCard;