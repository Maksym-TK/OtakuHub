import { ButtonHTMLAttributes } from 'react'

const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button
      {...props}
      className={`w-52 relative bg-gradient-to-r from-turquoise-border to-pink-border  p-[2px] rounded-3xl ${className}`}
    >
      <div className="w-full h-full absolute bg-gradient-to-r from-turquoise-border to-pink-border blur-2xl" />
      <div className="bg-primary py-2 rounded-3xl">
        <p className=" font-bold font-sans relative">{children}</p>
      </div>
    </button>
  )
}

export default Button
