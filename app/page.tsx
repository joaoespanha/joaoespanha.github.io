import React from 'react'
import Hero from '@/components/main/Hero'
import Navbar from '@/components/main/NavBar'
import Footer from '@/components/main/Footer'
import Skills from '@/components/main/Skills'
import Encryption from '@/components/main/Encryption'
import Projects from '@/components/main/Projects'
export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Navbar />
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  )
}
