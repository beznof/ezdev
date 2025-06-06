import React from 'react';

const HashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 20 20" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="4" y1="7.25" x2="16" y2="7.25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="4" y1="12.75" x2="16" y2="12.75" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M7.75 4L6.75 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M13.25 4L12.25 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  );
}

export default HashIcon;