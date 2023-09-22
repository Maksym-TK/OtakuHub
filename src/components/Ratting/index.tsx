import Star from '@/components/Star'
import { generateEmptyArray } from '@/helpers'

const Ratting = (): JSX.Element => {
  return (
    <div className="flex items-center space-x-1">
      {generateEmptyArray(5).map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  )
}

export default Ratting
