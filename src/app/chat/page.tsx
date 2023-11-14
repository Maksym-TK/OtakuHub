'use client'

import { KeyboardEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Image from 'next/image'
import Input from '@/components/Input'

import ChatCard from '@/features/ChatCard '
import { useResizeObserver } from '@/hooks/useResizeObserver'
import { scrollBottom } from '@/helpers'
import { converseWithCharacter } from '@/services/openaiService'
import { MessageT } from './types'

const Chat = (): JSX.Element => {
  const search = useSearchParams()
  const [hero, setHero] = useState({ name: '', avatar: '' })
  const [messages, setMessages] = useState<MessageT[]>([])
  const [userMessage, setUserMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  const sendMessage = async (): Promise<void> => {
    if (!userMessage) return

    setMessages(prev => [
      ...prev,
      {
        avatar: '/images/png/user.png',
        message: userMessage,
        name: 'Anonimus',
        user: 'user',
      },
    ])

    setUserMessage('')
    setIsLoading(true)

    const answer = await converseWithCharacter(hero.name, userMessage)

    setMessages(prev => [
      ...prev,
      {
        avatar: hero.avatar,
        message: answer,
        name: hero.name,
        user: 'hero',
      },
    ])

    setIsLoading(false)
  }

  const handleEnter = async (
    e: KeyboardEvent<HTMLInputElement>,
  ): Promise<void> => {
    if (e.key === 'Enter') sendMessage()
  }

  useEffect(() => {
    setHero({
      name: search.get('hero') || '',
      avatar: search.get('avatar') || '',
    })
  }, [search])

  useResizeObserver(containerRef, () => scrollBottom(containerRef))

  return (
    <div className="p-5 h-full">
      <div className="flex flex-col justify-between h-full gap-y-6">
        <div
          ref={setContainerRef}
          className="flex flex-col flex-1 overflow-auto gap-y-3"
        >
          {messages.map(({ message, user, avatar, name }, index) => (
            <div
              key={index}
              className={`max-w-[257px] ${
                user === 'hero' ? 'self-end' : 'self-start'
              }`}
            >
              <ChatCard icon={avatar} title={name} message={message} />
            </div>
          ))}
        </div>
        <div>
          {isLoading && (
            <p className="p-2 animate-pulse text-gray-400 text-xs">
              {hero.name} is texing...
            </p>
          )}
          <div className="relative">
            <Input
              className="pr-11"
              value={userMessage}
              onChange={e => setUserMessage(e.target.value)}
              onKeyDown={handleEnter}
            />
            <Image
              onClick={sendMessage}
              className="absolute right-4 top-2/4 transform -translate-y-1/2 active:scale-90"
              alt="send"
              width={24}
              height={24}
              src="/images/png/send.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
