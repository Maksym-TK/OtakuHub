'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import Swipi from 'swipi'

import { getAnimeDescription } from '@/services/openaiService'
import DescriptionSkeleton from '@/components/DescriptionSkeleton'
import './styles.css'
import Ratting from '@/components/Ratting'
import Button from '@/components/Button'
import HeroCard from '@/features/HeroCard'
import { NarutoDescription, heroCards } from '@/mock'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const generateAnimeDescription = async (value: string): Promise<void> => {
    try {
      setLoading(true)
      const response = await getAnimeDescription(value)
      setDescription(response)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={inter.className}>
      <div className="h-96 w-full">
        <Image
          src="/images/png/mock_banner.png"
          alt="anime"
          width={1000}
          height={1000}
          className="object-cover w-full h-full "
        />
      </div>

      <div className="relative font-sans">
        <div className="content-shadow"></div>
        <div className="absolute w-full px-6 pb-2 flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <div className="w-36">
              <p className="font-bold text-4xl">Naruto</p>
              <div className="flex justify-between mt-1 text-neutral-500 text-xs">
                <p>Masashi Kishimoto</p>
                <p>2022</p>
              </div>
            </div>
            <div>
              <Ratting />
              <p className="text-neutral-500 text-xs mt-1">From 342 users</p>
            </div>
          </div>
          <div>
            {loading ? (
              <DescriptionSkeleton />
            ) : (
              <p className="text-sm text-neutral-500 line-clamp-5">
                {description || NarutoDescription}
              </p>
            )}
          </div>
          <Swipi
            loop
            slidesNumber={1}
            spaceBetweenSlides={30}
            showArrows={false}
            biasRight
          >
            {heroCards.map(({ icon, title, id }) => (
              <HeroCard
                moveToChat={`/chat?hero=${title}&avatar=${icon}`}
                key={id}
                icon={icon}
                title={title}
              />
            ))}
          </Swipi>

          <Button
            onClick={() => generateAnimeDescription('Naruto')}
            className="block mx-auto"
          >
            Description Generator
          </Button>
        </div>
      </div>
    </main>
  )
}
