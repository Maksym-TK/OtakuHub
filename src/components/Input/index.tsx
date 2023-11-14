import '@/components/Input/styles.css'
import { InputHTMLAttributes } from 'react'

const Input = ({
  className,
  onChange,
  ...props
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <div className="relative h-14 w-full">
      <div className="absolute inset-1 gradient blur-md" />
      <div className="absolute inset-0 gradient  p-[2px] rounded-3xl">
        <input
          onChange={onChange}
          {...props}
          placeholder="Write a message...."
          className={`w-full h-full bg-primary py-5 px-6 rounded-3xl text-xs placeholder-slate-500 focus:outline-none ${className}`}
        />
      </div>
    </div>
  )
}

export default Input
