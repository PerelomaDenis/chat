import * as React from 'react';

export const Operation = () => {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={`M82 28.7101L82 40C82 41.6569 80.6568 43 79 43H54.7416H31.0001C29.3432 43 28 41.6569
         28 40V27.7957V14C28 12.3431 29.3432 11 31 11H79C80.6569 11 82 12.3431 82 14V28.7101Z`}
        fill="url(#paint0_linear_158_2134)"
      />
      <g filter="url(#filter0_b_158_2134)">
        <path
          d={`M6 74V22C6 20.3431 7.34315 19 9 19H73C74.6569 19 76 20.3431 76 22V43.9928V74C76
           75.6569 74.6569 77 73 77H9C7.34315 77 6 75.6569 6 74Z`}
          fill="url(#paint1_radial_158_2134)"
          fillOpacity="0.4"
        />
        <path
          d={`M6.6365 74V22C6.6365 20.6947 7.69467 19.6365 9 19.6365H73C74.3053 19.6365 75.3635 
          20.6947 75.3635 22V43.9928V74C75.3635 75.3053 74.3053 76.3635 73 76.3635H9C7.69467
          76.3635 6.6365 75.3053 6.6365 74Z`}
          stroke="url(#paint2_linear_158_2134)"
          strokeWidth="1.273"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d={`M31.0833 51.6562C30.3987 51.6562 29.8438 52.2019 29.8438 52.875C29.8438 53.5481 
        30.3987 54.0938 31.0833 54.0938H41C41.6846 54.0938 42.2396 53.5481 42.2396 52.875C42.2396
        52.2019 41.6846 51.6562 41 51.6562H31.0833Z`}
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={`M29.4305 35C26.6921 35 24.4722 37.1826 24.4722 39.875V56.125C24.4722 58.8175 
        26.6921 61 29.4305 61H52.5694C55.3079 61 57.5277 58.8175 57.5277 56.125V39.875C57.5277 
        37.1826 55.3079 35 52.5694 35H29.4305ZM52.5694 37.4375H29.4305C28.0613 37.4375 26.9513
        38.5288 26.9513 39.875V41.9062H55.0486V39.875C55.0486 38.5288 53.9386 37.4375 52.5694 
        37.4375ZM26.9513 56.125V44.3437H55.0486V56.125C55.0486 57.4711 53.9386 58.5625 52.5694
        58.5625H29.4305C28.0613 58.5625 26.9513 57.4711 26.9513 56.125Z`}
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_158_2134"
          x="-9.27595"
          y="3.72405"
          width="100.552"
          height="88.5519"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="7.63798" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_158_2134" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_158_2134"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_158_2134"
          x1="82"
          y1="27"
          x2="28"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7164FF" />
          <stop offset="1" stopColor="#682DFE" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_158_2134"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.4914 44.1471) rotate(-14.9794) scale(81.0809 134.108)"
        >
          <stop stopColor="#3347FF" />
          <stop offset="0.749777" stopColor="#DFE2FF" stopOpacity="0.54725" />
          <stop offset="1" stopColor="#6B7AFF" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_158_2134"
          x1="11.7228"
          y1="40.1023"
          x2="31.268"
          y2="81.5854"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.64" />
          <stop offset="1" stopColor="white" stopOpacity="0.24" />
        </linearGradient>
      </defs>
    </svg>
  );
};
