import React from 'react'

const HomeIcon = () => {
  return (
    <>
      <svg
        width='16'
        height='18'
        viewBox='0 0 16 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 18V6L8 0L16 6V18H10V11H6V18H0Z'
          fill='#F8F8F8'
        />
      </svg>
    </>
  )
}

const Chat = () => {
  return (
    <>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4 12H12V10H4V12ZM4 9H16V7H4V9ZM4 6H16V4H4V6ZM0 20V2C0 1.45 0.196 0.979002 0.588 0.587002C0.98 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196002 19.413 0.588002C19.805 0.980002 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H4L0 20ZM2 15.175L3.175 14H18V2H2V15.175Z'
          fill='#F8F8F8'
        />
      </svg>
    </>
  )
}

const Sun = ({ className }) => {
  return (
    <>
      <svg
        width='32'
        height='31'
        viewBox='0 0 32 31'
        fill='none'
        className={className}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.8864 4.11408V1.04564C14.8864 0.774373 14.9941 0.514216 15.1859 0.322402C15.3777 0.130587 15.6378 0.0228271 15.9091 0.0228271C16.1803 0.0228271 16.4405 0.130587 16.6323 0.322402C16.8241 0.514216 16.9318 0.774373 16.9318 1.04564V4.11408C16.9318 4.38534 16.8241 4.6455 16.6323 4.83731C16.4405 5.02913 16.1803 5.13689 15.9091 5.13689C15.6378 5.13689 15.3777 5.02913 15.1859 4.83731C14.9941 4.6455 14.8864 4.38534 14.8864 4.11408ZM15.9091 7.18251C14.2909 7.18251 12.709 7.66241 11.3635 8.56151C10.018 9.46062 8.96933 10.7386 8.35007 12.2337C7.73081 13.7289 7.56878 15.3741 7.88448 16.9613C8.20018 18.5486 8.97942 20.0066 10.1237 21.1509C11.2679 22.2953 12.7258 23.0746 14.3129 23.3903C15.9 23.706 17.5451 23.544 19.0401 22.9247C20.5352 22.3053 21.813 21.2566 22.712 19.911C23.611 18.5654 24.0909 16.9834 24.0909 15.365C24.0885 13.1956 23.2258 11.1157 21.6919 9.58173C20.158 8.04773 18.0783 7.18488 15.9091 7.18251ZM7.00369 7.90615C7.19559 8.09808 7.45587 8.2059 7.72727 8.2059C7.99866 8.2059 8.25894 8.09807 8.45085 7.90615C8.64275 7.71423 8.75056 7.45393 8.75056 7.18251C8.75056 6.9111 8.64275 6.6508 8.45085 6.45887L6.40539 4.41325C6.21349 4.22133 5.95321 4.11351 5.68181 4.11351C5.41042 4.11351 5.15014 4.22133 4.95823 4.41325C4.76633 4.60517 4.65852 4.86547 4.65852 5.13689C4.65852 5.40831 4.76633 5.66861 4.95823 5.86053L7.00369 7.90615ZM7.00369 22.8239L4.95823 24.8695C4.76633 25.0614 4.65852 25.3217 4.65852 25.5931C4.65852 25.8646 4.76633 26.1249 4.95823 26.3168C5.15014 26.5087 5.41042 26.6165 5.68181 26.6165C5.95321 26.6165 6.21349 26.5087 6.40539 26.3168L8.45085 24.2712C8.54587 24.1761 8.62124 24.0633 8.67267 23.9391C8.7241 23.815 8.75056 23.6819 8.75056 23.5475C8.75056 23.4131 8.7241 23.28 8.67267 23.1559C8.62124 23.0317 8.54587 22.9189 8.45085 22.8239C8.35583 22.7288 8.24302 22.6535 8.11887 22.602C7.99471 22.5506 7.86165 22.5241 7.72727 22.5241C7.59289 22.5241 7.45982 22.5506 7.33567 22.602C7.21152 22.6535 7.09871 22.7288 7.00369 22.8239ZM24.0909 8.20533C24.2252 8.20543 24.3583 8.17907 24.4825 8.12773C24.6066 8.0764 24.7194 8.00111 24.8145 7.90615L26.8599 5.86053C27.0518 5.66861 27.1597 5.40831 27.1597 5.13689C27.1597 4.86547 27.0518 4.60517 26.8599 4.41325C26.668 4.22133 26.4078 4.11351 26.1364 4.11351C25.865 4.11351 25.6047 4.22133 25.4128 4.41325L23.3673 6.45887C23.2241 6.60192 23.1266 6.78424 23.0871 6.98275C23.0475 7.18126 23.0678 7.38704 23.1453 7.57404C23.2227 7.76103 23.354 7.92083 23.5223 8.03321C23.6906 8.14559 23.8885 8.20549 24.0909 8.20533ZM24.8145 22.8239C24.6226 22.632 24.3623 22.5241 24.0909 22.5241C23.8195 22.5241 23.5592 22.632 23.3673 22.8239C23.1754 23.0158 23.0676 23.2761 23.0676 23.5475C23.0676 23.8189 23.1754 24.0792 23.3673 24.2712L25.4128 26.3168C25.5078 26.4118 25.6206 26.4872 25.7448 26.5386C25.8689 26.59 26.002 26.6165 26.1364 26.6165C26.2707 26.6165 26.4038 26.59 26.528 26.5386C26.6521 26.4872 26.7649 26.4118 26.8599 26.3168C26.955 26.2218 27.0303 26.1089 27.0818 25.9848C27.1332 25.8606 27.1597 25.7275 27.1597 25.5931C27.1597 25.4587 27.1332 25.3257 27.0818 25.2015C27.0303 25.0773 26.955 24.9645 26.8599 24.8695L24.8145 22.8239ZM5.68181 15.365C5.68181 15.0937 5.57406 14.8336 5.38226 14.6418C5.19046 14.45 4.93033 14.3422 4.65909 14.3422H1.5909C1.31966 14.3422 1.05952 14.45 0.867726 14.6418C0.675928 14.8336 0.568176 15.0937 0.568176 15.365C0.568176 15.6363 0.675928 15.8964 0.867726 16.0883C1.05952 16.2801 1.31966 16.3878 1.5909 16.3878H4.65909C4.93033 16.3878 5.19046 16.2801 5.38226 16.0883C5.57406 15.8964 5.68181 15.6363 5.68181 15.365ZM15.9091 25.5931C15.6378 25.5931 15.3777 25.7009 15.1859 25.8927C14.9941 26.0845 14.8864 26.3447 14.8864 26.616V29.6844C14.8864 29.9557 14.9941 30.2158 15.1859 30.4076C15.3777 30.5994 15.6378 30.7072 15.9091 30.7072C16.1803 30.7072 16.4405 30.5994 16.6323 30.4076C16.8241 30.2158 16.9318 29.9557 16.9318 29.6844V26.616C16.9318 26.3447 16.8241 26.0845 16.6323 25.8927C16.4405 25.7009 16.1803 25.5931 15.9091 25.5931ZM30.2273 14.3422H27.1591C26.8878 14.3422 26.6277 14.45 26.4359 14.6418C26.2441 14.8336 26.1364 15.0937 26.1364 15.365C26.1364 15.6363 26.2441 15.8964 26.4359 16.0883C26.6277 16.2801 26.8878 16.3878 27.1591 16.3878H30.2273C30.4985 16.3878 30.7586 16.2801 30.9504 16.0883C31.1422 15.8964 31.25 15.6363 31.25 15.365C31.25 15.0937 31.1422 14.8336 30.9504 14.6418C30.7586 14.45 30.4985 14.3422 30.2273 14.3422Z'
          fill='#F8F8F8'
        />
      </svg>
    </>
  )
}

const Moon = ({ className }) => {
  return (
    <>
      <svg
        width='31'
        height='31'
        className={className}
        viewBox='0 0 31 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M30.1483 19.6044C29.2192 22.6377 27.3571 25.3007 24.827 27.2144C22.6056 28.8863 19.9622 29.906 17.1936 30.1591C14.4249 30.4121 11.6405 29.8884 9.15289 28.6468C6.6653 27.4052 4.57297 25.4948 3.11076 23.13C1.64855 20.7652 0.874336 18.0397 0.875009 15.2594C0.865013 12.0141 1.91995 8.8552 3.87799 6.26725C5.79158 3.73701 8.45442 1.8748 11.4876 0.945604C11.6875 0.884046 11.9004 0.878152 12.1034 0.928554C12.3064 0.978957 12.4918 1.08375 12.6397 1.23166C12.7876 1.37958 12.8924 1.56501 12.9428 1.76803C12.9932 1.97105 12.9873 2.18397 12.9258 2.38389C12.2625 4.57788 12.2069 6.91072 12.7649 9.13383C13.3228 11.3569 14.4734 13.387 16.0941 15.0078C17.7147 16.6285 19.7447 17.7792 21.9677 18.3371C24.1907 18.8951 26.5234 18.8395 28.7173 18.1762C28.9172 18.1147 29.1301 18.1088 29.3331 18.1592C29.5361 18.2096 29.7216 18.3144 29.8695 18.4623C30.0174 18.6102 30.1222 18.7956 30.1726 18.9986C30.223 19.2017 30.2171 19.4146 30.1555 19.6145L30.1483 19.6044Z'
          fill='#F8F8F8'
        />
      </svg>
    </>
  )
}

const Robot = () => {
  return (
    <>
      <svg
        width='37'
        height='38'
        viewBox='0 0 37 38'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <mask
          id='mask0_118_299'
          style='mask-type:luminance'
          maskUnits='userSpaceOnUse'
          x='1'
          y='2'
          width='35'
          height='34'
        >
          <path
            d='M28.5208 14.25H8.47917C7.62773 14.25 6.9375 14.9589 6.9375 15.8333V31.6667C6.9375 32.5411 7.62773 33.25 8.47917 33.25H28.5208C29.3723 33.25 30.0625 32.5411 30.0625 31.6667V15.8333C30.0625 14.9589 29.3723 14.25 28.5208 14.25Z'
            fill='white'
            stroke='white'
            strokeWidth='4'
          />
          <path
            d='M13.1042 22.1667C13.9556 22.1667 14.6458 21.4578 14.6458 20.5833C14.6458 19.7089 13.9556 19 13.1042 19C12.2527 19 11.5625 19.7089 11.5625 20.5833C11.5625 21.4578 12.2527 22.1667 13.1042 22.1667Z'
            fill='black'
          />
          <path
            d='M23.8959 22.1667C24.7474 22.1667 25.4376 21.4578 25.4376 20.5833C25.4376 19.7089 24.7474 19 23.8959 19C23.0445 19 22.3542 19.7089 22.3542 20.5833C22.3542 21.4578 23.0445 22.1667 23.8959 22.1667Z'
            fill='black'
          />
          <path
            d='M15.4167 25.3333C15.0078 25.3333 14.6157 25.5001 14.3265 25.7971C14.0374 26.094 13.875 26.4967 13.875 26.9166C13.875 27.3366 14.0374 27.7393 14.3265 28.0362C14.6157 28.3332 15.0078 28.5 15.4167 28.5V25.3333ZM21.5833 28.5C21.9922 28.5 22.3843 28.3332 22.6735 28.0362C22.9626 27.7393 23.125 27.3366 23.125 26.9166C23.125 26.4967 22.9626 26.094 22.6735 25.7971C22.3843 25.5001 21.9922 25.3333 21.5833 25.3333V28.5ZM15.4167 28.5H21.5833V25.3333H15.4167V28.5Z'
            fill='black'
          />
          <path
            d='M18.5 7.91669V14.25M3.08337 20.5834V26.9167M33.9167 20.5834V26.9167'
            stroke='white'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.5 7.91667C19.3515 7.91667 20.0417 7.20778 20.0417 6.33333C20.0417 5.45888 19.3515 4.75 18.5 4.75C17.6486 4.75 16.9584 5.45888 16.9584 6.33333C16.9584 7.20778 17.6486 7.91667 18.5 7.91667Z'
            stroke='white'
            strokeWidth='4'
          />
        </mask>
        <g mask='url(#mask0_118_299)'>
          <path
            d='M0 0H37V38H0V0Z'
            fill='#F8F8F8'
          />
        </g>
      </svg>
    </>
  )
}

const Send = () => {
  return (
    <>
      {' '}
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3.4 20.4L20.85 12.92C21.0304 12.8432 21.1842 12.715 21.2923 12.5514C21.4004 12.3878 21.4581 12.1961 21.4581 12C21.4581 11.8039 21.4004 11.6122 21.2923 11.4486C21.1842 11.285 21.0304 11.1568 20.85 11.08L3.4 3.59999C3.2489 3.53409 3.08377 3.50684 2.91951 3.5207C2.75525 3.53456 2.59702 3.58909 2.4591 3.67939C2.32118 3.76968 2.20791 3.89289 2.1295 4.03789C2.0511 4.1829 2.01003 4.34515 2.01 4.50999L2 9.11999C2 9.61999 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z'
          fill='#FE4D4D'
        />
      </svg>
    </>
  )
}

const User = () => {
  return (
    <>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10 0C11.3261 0 12.5979 0.526784 13.5355 1.46447C14.4732 2.40215 15 3.67392 15 5C15 6.32608 14.4732 7.59785 13.5355 8.53553C12.5979 9.47322 11.3261 10 10 10C8.67392 10 7.40215 9.47322 6.46447 8.53553C5.52678 7.59785 5 6.32608 5 5C5 3.67392 5.52678 2.40215 6.46447 1.46447C7.40215 0.526784 8.67392 0 10 0ZM10 12.5C15.525 12.5 20 14.7375 20 17.5V20H0V17.5C0 14.7375 4.475 12.5 10 12.5Z'
          fill='#F8F8F8'
        />
      </svg>
    </>
  )
}

export { HomeIcon, Chat, Moon, Sun, Robot, Send, User }