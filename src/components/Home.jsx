import React, {useRef, useEffect} from 'react'
import HeroPage from './Hero'
import Projects from './Projects'

export default function Home({darkThemeqqqybn}) {
    const homeRef =useRef(null)
useEffect(()=>{
    if(homeRef.current){
        homeRef.current.scrollIntoView({behavior:'smooth'})
    }
}, [])
  return (
    <div ref={homeRef}>
      <HeroPage />
      <Projects />
    </div>
  )
}
