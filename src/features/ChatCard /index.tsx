import Image from 'next/image'

type ChatCardProps = {
  title: string
  message?: string
  icon: string
}

const ChatCard = ({
  icon,
  message = '',
  title,
}: ChatCardProps): JSX.Element => {
  return (
    <div className="flex gap-x-2">
      <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-r from-turquoise-border to-pink-border  p-[2px] rounded-full">
        <Image
          width={40}
          height={40}
          className="rounded-full"
          alt="avatar"
          src={icon}
        />
      </div>
      <div className="ml-5bg-[#00000069] rounded-xl border border-[#e9e9e936] p-2 flex-auto">
        <div className="font-sans font-bold">
          <p className="text-sm">{title}</p>
          <p className="text-xs">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatCard
