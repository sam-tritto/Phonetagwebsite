import React from 'react';
import appLogo from '../../../assets/app_logo.png';
import appLogoWhite from '../../../assets/app_logo_white.png';

interface PhoneTagLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'default' | 'white';
}

export function PhoneTagLogo({
  className = "",
  variant = 'default',
  alt = 'PhoneTag Logo',
  ...props
}: PhoneTagLogoProps) {
  const src = variant === 'white' ? appLogoWhite : appLogo;
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
}
