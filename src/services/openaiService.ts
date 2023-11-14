import { openai } from '@/configs/openAI'

export const getAnimeDescription = async (
  question: string,
): Promise<string> => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `The response should be composed of a maximum of 100 words and be coherent in meaning.
         Write a brief description of the anime '${question}'`,
      },
    ],
    max_tokens: 250,
    temperature: 1,
  })

  return response.choices[0].message.content || ''
}

export const converseWithCharacter = async (
  character: string,
  userMessage: string,
): Promise<string> => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `Imagine that you are ${character} and answer on his behalf.`,
      },
      {
        role: 'user',
        content: userMessage,
      },
    ],
    max_tokens: 250,
    temperature: 1,
  })

  return response.choices[0].message.content || ''
}
