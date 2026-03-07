import React from 'react';

interface PhoneTagLogoProps extends React.SVGProps<SVGSVGElement> {
  dotColors?: [string, string, string];
}

export function PhoneTagLogo({
  className = "",
  dotColors = ["#EF4444", "#F59E0B", "#10B981"], // red-500, amber-500, emerald-500
  ...props
}: PhoneTagLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Background 'P' shape */}
      <path
        d="M 15 5 H 55 A 35 35 0 0 1 55 75 H 40 V 95 H 15 Z"
        fill="currentColor"
      />

      {/* Chat bubble over the 'P' */}
      <path
        d="M 41 54 L 28 65 L 51 62 A 24 24 0 1 0 41 54 Z"
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* 3 Status Dots */}
      <circle cx="48" cy="40" r="4.5" fill={dotColors[0]} />
      <circle cx="60" cy="40" r="4.5" fill={dotColors[1]} />
      <circle cx="72" cy="40" r="4.5" fill={dotColors[2]} />
    </svg>
  );
}
