import * as React from "react"
const Svg= (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150"
    viewBox="0 0 1440 590"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
        <stop offset="5%" stopColor="#9900ef" />
        <stop offset="95%" stopColor="#8ED1FC" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillOpacity={0.53}
      d="M0 600V150c61.156 25.779 122.313 51.558 197 62s162.906 5.549 241 36 146.064 96.248 214 121c67.936 24.752 135.839 8.46 200 23s124.582 59.915 186 77c61.418 17.085 123.834 5.881 191 23s139.083 62.56 211 108H0Z"
      className="transition-all duration-300 ease-in-out delay-150 path-0"
      transform="rotate(-180 720 300)"
    />
    <path
      fill="url(#a)"
      d="M0 600V350c70.05-9.966 140.102-19.933 210-14s139.644 27.764 213 52 150.322 50.875 207 104 93.068 132.734 154 148c60.932 15.266 146.405-33.813 226-13 79.595 20.813 153.313 111.518 224 152 70.687 40.482 138.344 30.741 206 21V600H0Z"
      className="transition-all duration-300 ease-in-out delay-150 path-1"
      transform="rotate(-180 720 300)"
    />
  </svg>
  
)
export default Svg