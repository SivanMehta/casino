import React from 'react';

export default function Wheel({ spinning }) {
  if(spinning) {
    return "Wheeeee!"
  }

  return "Not Spinning"
}
