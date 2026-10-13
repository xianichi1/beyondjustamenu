import React from 'react';

const DIMENSIONS = {
  sm: 'w-24 h-32',
  md: 'w-36 h-48',
  lg: 'w-44 h-56',
};

const PEARLS = [
  { cx: 53.5, cy: 187, r: 8 },
  { cx: 71, cy: 187, r: 8.5 },
  { cx: 89, cy: 187, r: 8.5 },
  { cx: 106.5, cy: 187, r: 8 },
  { cx: 62.5, cy: 172, r: 8.5 },
  { cx: 80, cy: 172, r: 9 },
  { cx: 97.5, cy: 172, r: 8.5 },
  { cx: 71, cy: 157, r: 8.5 },
  { cx: 89, cy: 157, r: 8.5 },
];

export function BobaIllustration({
  theme = 'cute',
  size = 'md',
  className = '',
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`relative flex items-center justify-center select-none ${DIMENSIONS[size] || DIMENSIONS.md} ${className}`}>
      <svg
        viewBox="0 0 160 220"
        className="w-full h-full overflow-visible transition-all duration-500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!isDark && (
          <g id="accents">
            <path
              d="M 18 100 Q 12 85 24 72 T 20 54"
              stroke="#D4C4E5"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            <path
              d="M 142 100 Q 148 85 136 72 T 140 54"
              stroke="#D4C4E5"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            <path
              d="M 22 125 C 22 121 16 120 14 124 C 12 120 6 121 6 125 C 6 131 14 136 14 136 C 14 136 22 131 22 125 Z"
              fill="#F8ACA0"
              stroke="#3E2D27"
              strokeWidth="1.2"
            />
            <path
              d="M 148 116 C 148 112 142 111 140 115 C 138 111 132 112 132 116 C 132 122 140 127 140 127 C 140 127 148 122 148 116 Z"
              fill="#F8ACA0"
              stroke="#3E2D27"
              strokeWidth="1.2"
            />
            <path
              d="M 140 38 L 142 43 L 147 45 L 142 47 L 140 52 L 138 47 L 133 45 L 138 43 Z"
              fill="#A6E5D7"
              stroke="#3E2D27"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M 24 40 L 25.5 44 L 29.5 45.5 L 25.5 47 L 24 51 L 22.5 47 L 18.5 45.5 L 22.5 44 Z"
              fill="#A6E5D7"
              stroke="#3E2D27"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>
        )}

        <g id="straw">
          <path
            d="M 92 12 L 106 12 L 86 86 L 72 86 Z"
            fill="#F7A492"
            stroke="#3E2D27"
            strokeWidth="3.4"
            strokeLinejoin="round"
          />
          <ellipse
            cx="99"
            cy="12"
            rx="7"
            ry="3.5"
            fill="#FBD1C8"
            stroke="#3E2D27"
            strokeWidth="3.4"
            strokeLinejoin="round"
          />
        </g>

        <path
          d="M 32 54 L 45 190 C 46 198 54 204 64 204 L 96 204 C 106 204 114 198 115 190 L 128 54 Z"
          fill="#FFFDF9"
          stroke="#3E2D27"
          strokeWidth="3.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <path
          d="M 35 88 Q 57 84 80 88 T 125 88 L 115 190 C 114 198 106 204 96 204 L 64 204 C 54 204 46 198 45 190 Z"
          fill="#EBB798"
          stroke="#3E2D27"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M 35 88 Q 57 84 80 88 T 125 88"
          stroke="#3E2D27"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M 26 54 C 26 40 50 36 80 36 C 110 36 134 40 134 54 C 134 58 130 60 128 60 L 32 60 C 30 60 26 58 26 54 Z"
          fill="#A3DDD0"
          stroke="#3E2D27"
          strokeWidth="3.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="54"
          x2="128"
          y2="54"
          stroke="#3E2D27"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <g id="pearls">
          {PEARLS.map((pearl, idx) => (
            <g key={idx}>
              <circle
                cx={pearl.cx}
                cy={pearl.cy}
                r={pearl.r}
                fill="#55372E"
                stroke="#3E2D27"
                strokeWidth="1"
              />
              <circle
                cx={pearl.cx - pearl.r * 0.32}
                cy={pearl.cy - pearl.r * 0.32}
                r={pearl.r * 0.28}
                fill="#FFFDF9"
              />
            </g>
          ))}
        </g>

        {!isDark ? (
          <g id="face-happy">
            <circle cx="68" cy="118" r="3.2" fill="#3E2D27" />
            <circle cx="92" cy="118" r="3.2" fill="#3E2D27" />
            <ellipse cx="61" cy="122" rx="4.5" ry="3" fill="#F8ACA0" opacity="0.85" />
            <ellipse cx="99" cy="122" rx="4.5" ry="3" fill="#F8ACA0" opacity="0.85" />
            <path
              d="M 75 120 Q 80 126 85 120"
              stroke="#3E2D27"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ) : (
          <g id="face-sad">
            <ellipse cx="68" cy="118" rx="4" ry="4.5" fill="#3E2D27" />
            <circle cx="66.5" cy="116.5" r="1.6" fill="#FFFDF9" />
            <ellipse cx="92" cy="118" rx="4" ry="4.5" fill="#3E2D27" />
            <circle cx="90.5" cy="116.5" r="1.6" fill="#FFFDF9" />
            <ellipse cx="60" cy="123" rx="4.5" ry="2.8" fill="#F8ACA0" opacity="0.5" />
            <ellipse cx="100" cy="123" rx="4.5" ry="2.8" fill="#F8ACA0" opacity="0.5" />
            <path
              d="M 74 127 Q 80 121 86 127"
              stroke="#3E2D27"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 62 124 C 60 128 59 133 63 135 C 66 135 67 131 64 126 Z"
              fill="#96D8F8"
              stroke="#3E2D27"
              strokeWidth="1.2"
            />
            <circle cx="62" cy="132" r="0.8" fill="#FFFFFF" />
          </g>
        )}
      </svg>
    </div>
  );
}
