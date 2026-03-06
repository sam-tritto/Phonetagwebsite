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
      viewBox="15 5 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* 
        Main P shape with carved out chat bubble. 
        Using evenodd fill rule to subtract the inner path from the outer path.
      */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M 44 80
          A 12 12 0 0 1 20 80
          V 30
          A 20 20 0 0 1 40 10
          H 70
          A 35 35 0 0 1 70 80
          H 44
          Z

          M 92 45
          A 20 14 0 0 1 72 59
          A 20 14 0 0 1 56 55
          Q 48 58 38 57
          A 2 2 0 0 1 37 54
          Q 44 48 52 47
          A 20 14 0 0 1 72 31
          A 20 14 0 0 1 92 45
          Z
        "
        fill="currentColor"
      />

      {/* 3 Status Dots */}
      <circle cx="62" cy="45" r="3.5" fill={dotColors[0]} />
      <circle cx="72" cy="45" r="3.5" fill={dotColors[1]} />
      <circle cx="82" cy="45" r="3.5" fill={dotColors[2]} />
    </svg>
  );
}
