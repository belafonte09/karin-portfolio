import React from 'react';

interface FigmaProIconProps {
  size?: number;
  className?: string;
}

const FigmaProIcon: React.FC<FigmaProIconProps> = ({
  size = 100,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 122 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M45 0L61.8261 22.3043L77.087 0L79.4348 30.913L100.957 14.087L90.7826 42.6522L117 48.5217L94.3043 60.2609L117 75.5217H87.6522L94.3043 99.3913L71.6087 84.913L73.9565 108L55.5652 84.913L40.3043 102.522V75.5217L17.6087 89.6087L28.9565 66.1304L0 58.3043L23.4783 48.5217L2.73913 37.5652H34.0435L23.4783 10.9565L48.913 26.6087L45 0Z" fill="#D91A69"/>
      <g style={{mixBlendMode: 'multiply'}}>
        <path d="M50 0L66.8261 22.3043L82.087 0L84.4348 30.913L105.957 14.087L95.7826 42.6522L122 48.5217L99.3043 60.2609L122 75.5217H92.6522L99.3043 99.3913L76.6087 84.913L78.9565 108L60.5652 84.913L45.3043 102.522V75.5217L22.6087 89.6087L33.9565 66.1304L5 58.3043L28.4783 48.5217L7.73913 37.5652H39.0435L28.4783 10.9565L53.913 26.6087L50 0Z" fill="#995198"/>
      </g>
    </svg>
  );
};

export default FigmaProIcon;