'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import Input from '@/components/Input'
import { getAnimeDescription } from '@/services/openaiService'
import DescriptionSkeleton from '@/components/DescriptionSkeleton'

import Button from '@/components/Button'
import HeroCard from '@/features/HeroCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  const [description, setDescription] = useState('')
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)

  const generateAnimeDescription = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await getAnimeDescription(searchText)
      setDescription(response)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={inter.className}>
      <div className="flex flex-col items-center p-4 gap-y-5">
        <h1 className="text-center">My App</h1>
        <Input value={searchText} onChange={setSearchText} />
        <button
          onClick={generateAnimeDescription}
          className="px-3 py-2 bg-indigo-500 rounded-lg w-min"
        >
          Generate
        </button>
        <h2>{description}</h2>
        {loading && <DescriptionSkeleton />}
      </div>
      <Button>Description Generator</Button>
      <HeroCard
        title="Maria Espaes"
        message="As Morbius"
        icon="https://wallpapers.com/images/hd/naruto-face-hpracgzord0mm3tv.jpg"
      />
    </main>
  )
}
