import React from 'react'

type InputProps = {
  value: string
  onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value)
  }

  return (
    <input
      placeholder="Anime name"
      type="text"
      className="p-3 w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
      value={value}
      onChange={handleInputChange}
    />
  )
}

export default Input
