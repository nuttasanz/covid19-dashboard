'use client'
import * as React from 'react';
import DesktopScreen from './Components/Screen/DesktopScreen/DesktopScreen';
import MobileScreen from './Components/Screen/MobileScreen/MobileScreen';

export default function Home() {
  return (
    <>
      <div className='hidden lg:block'>
        <DesktopScreen />
      </div>
      <div className='block lg:hidden'>
        <MobileScreen />
      </div>
    </>
  )
}
