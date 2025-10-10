import React from 'react';

interface BridgingGapsIconProps {
  size?: number;
  className?: string;
}

const BridgingGapsIcon: React.FC<BridgingGapsIconProps> = ({
  size = 100,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 145 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M95.0557 25.2195L131.418 57.1587L71.299 95.3891C25.7246 121.521 7.30084 80.3874 3.42217 74.5802C0.319232 69.9345 -0.133279 51.3517 0.0283318 42.641C0.836388 28.9296 8.8523 1.21663 34.4515 0.0552028C60.0507 -1.10622 85.5207 16.3475 95.0557 25.2195Z" fill="#C76935"/>
      <g style={{mixBlendMode: 'multiply'}}>
        <path d="M108.292 25.2195L144.655 57.1587L84.5353 95.3891C38.9609 121.521 20.5372 80.3874 16.6585 74.5802C13.5556 69.9345 13.103 51.3517 13.2647 42.641C14.0727 28.9296 22.0886 1.21663 47.6879 0.0552028C73.2871 -1.10622 98.757 16.3475 108.292 25.2195Z" fill="#B2278E"/>
      </g>
    </svg>
  );
};

export default BridgingGapsIcon;