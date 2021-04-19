/* eslint-disable max-len */
import React from 'react';

interface Props {
  color?: string;
  width?: string;
  height?: string;
  background?: string;
  border?: string;
}
const Check = ({ color, height, width, background, border }: Props) => {
  return (
    <svg
      width={width || 19}
      height={height || 19}
      viewBox="0 0 19 20"
      fill={background || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.546387" width="18" height="18.5547" rx="4.5" stroke={border} />
      <path
        d="M7.72003 14.2075L7.71881 14.2074C7.39313 14.1778 7.0988 14.0175 6.90503 13.7711C6.90502 13.7711 6.90501 13.7711 6.90501 13.7711L2.73288 8.46451L2.73283 8.46445C2.35445 7.98334 2.44519 7.29488 2.94892 6.9213L2.94901 6.92124C3.46077 6.54153 4.19297 6.6405 4.57857 7.13079L7.66227 11.0528L7.9876 11.4666L8.38413 11.1204L14.5665 5.72377L14.2382 5.3477L14.5665 5.72377C15.0439 5.30709 15.7821 5.34685 16.2088 5.80793C16.6275 6.26049 16.5912 6.95313 16.1221 7.36256C16.1221 7.36256 16.1221 7.36256 16.1221 7.36257L8.60566 13.9234L8.60537 13.9237C8.39332 14.1091 8.11616 14.2124 7.82785 14.2124C7.79121 14.2124 7.75543 14.2108 7.72003 14.2075Z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default Check;
