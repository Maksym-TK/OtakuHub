import Image from 'next/image'

type HeroCardProps = {
  title: string
  message?: string
  moveToChat?: () => void
  icon: string
}

const HeroCard = ({
  icon,
  message = '',
  moveToChat,
  title,
}: HeroCardProps): JSX.Element => {
  return (
    <div className="w-40 h-12 ml-3 relative bg-[#00000069] rounded-xl border border-[#e9e9e936]">
      <div className="w-12 left-[-12px] top-[-1px] bottom-[-1px] absolute bg-gradient-to-r from-turquoise-border to-pink-border  p-[2px] rounded-full">
        <Image
          width={52}
          height={52}
          className="object-cover w-full h-full rounded-full"
          alt="avatar"
          src={icon}
        />
      </div>

      <div className="absolute flex items-center justify-between h-full transform -translate-y-1/2 right-1 left-11 top-1/2 gap-x-2">
        <div>
          <p className="font-sans text-sm font-bold">{title}</p>
          <p className="font-sans text-xs font-bold ">{message}</p>
        </div>
        {!message && (
          <Image
            onClick={moveToChat}
            width={24}
            height={24}
            className="cursor-pointer"
            alt="message"
            src="/images/message.svg"
          />
        )}
      </div>
    </div>
  )
}

export default HeroCard
