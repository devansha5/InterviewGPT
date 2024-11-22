'use client';

import Image from 'next/image';
import Wrapper from './components/Wrapper';
import React from 'react';

export default function Home() {
  return (
    <main className="App">
      <div className="container">
        {/* Centered Logo Container */}
        <div className="logoBox">
          <Image
            src="/logo.png"
            alt="InterviewGPT logo"
            width={1500} // Make it larger
            height={375} // Proportional increase
            style={{
              objectFit: 'contain', // Keep aspect ratio
              display: 'block', // Prevent unexpected inline behavior
            }}
          />
        </div>
        {/* Wrapper Component */}
        <Wrapper />
      </div>
    </main>
  );
}
