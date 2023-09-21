'use client'

import { useState } from 'react'
import Input from '@/components/Input'
import { getAnimeDescription } from '@/services/openaiService'
import DescriptionSkeleton from '@/components/DescriptionSkeleton'

export default function Home(): JSX.Element {
  const [description, setDescription] = useState('')
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)

  const generate = async (): Promise<void> => {
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
    <main>
      <div className="p-4 flex-col gap-y-5 flex items-center">
        <h1 className="text-center">My App</h1>
        <Input value={searchText} onChange={setSearchText} />
        <button
          onClick={generate}
          className="px-3 py-2 rounded-lg bg-indigo-500 w-min"
        >
          Generate
        </button>
        <h2>{description}</h2>
        {loading && <DescriptionSkeleton />}
      </div>
    </main>
  )
}
