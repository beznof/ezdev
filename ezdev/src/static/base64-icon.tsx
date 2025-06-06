import React from 'react';

const Base64Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      >
      <path d="M4,11A3,3,0,0,0,7,8V6A3,3,0,0,0,1,6V8A3,3,0,0,0,4,11ZM3,6A1,1,0,0,1,5,6V8A1,1,0,0,1,3,8ZM19,6a3,3,0,0,0-6,0V8a3,3,0,0,0,6,0ZM17,8a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Zm-7,3a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0v6A1,1,0,0,1,10,11ZM23,4v6a1,1,0,0,1-2,0V4a1,1,0,0,1,2,0ZM7,18V16a3,3,0,0,0-6,0v2a3,3,0,0,0,6,0ZM3,18V16a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm6,0a3,3,0,0,0,6,0V16a3,3,0,0,0-6,0Zm2-2a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm12-2v6a1,1,0,0,1-2,0V14a1,1,0,0,1,2,0Zm-5-1a1,1,0,0,1,1,1v6a1,1,0,0,1-2,0V14A1,1,0,0,1,18,13Z"
        stroke="none" 
        fill="#currentColor" 
        fill-rule="evenodd"
      />
    </svg>
  );
}

export default Base64Icon;