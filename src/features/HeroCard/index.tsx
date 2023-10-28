import Image from 'next/image'
import Link from 'next/link'

type HeroCardProps = {
  title: string
  message?: string
  moveToChat?: string
  icon: string
  openChat?: () => void
}

const HeroCard = ({
  icon,
  message = '',
  moveToChat = '',
  title,
}: HeroCardProps): JSX.Element => {
  return (
    <div className="relative w-full min-w-[170px] h-14">
      <div className="w-14 top-[-1px] bottom-[-1px] z-10 absolute bg-gradient-to-r from-turquoise-border to-pink-border  p-[2px] rounded-full">
        <Image
          width={52}
          height={52}
          className="object-cover w-full h-full rounded-full"
          alt="avatar"
          src={icon}
        />
      </div>
      <div className="absolute  top-1 bottom-1 left-5 right-0  ml-5bg-[#00000069] rounded-xl border border-[#e9e9e936]">
        <div className="flex items-center justify-between h-full gap-x-2 ml-11 mr-2">
          <div className="font-sans font-bold">
            <p className="text-sm">{title}</p>
            <p className="text-xs">{message}</p>
          </div>
          {!message && (
            <Link href={moveToChat}>
              <Image
                width={24}
                height={24}
                className="cursor-pointer"
                alt="message"
                src="/images/message.svg"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroCard
