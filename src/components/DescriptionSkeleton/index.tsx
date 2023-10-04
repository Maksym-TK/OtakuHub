import style from '@/components/DescriptionSkeleton/styles.module.css'

const DescriptionSkeleton = (): JSX.Element => {
  return (
    <div role="status" className="space-y-2.5 animate-pulse w-full">
      <div className="flex items-center w-full space-x-2">
        <div className={`${style.bright_skeleton_line}  w-32`}></div>
        <div className={`${style.dark_skeleton_line} w-24`}></div>
        <div className={`${style.dark_skeleton_line} w-full`}></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[480px]">
        <div className={`${style.bright_skeleton_line} w-full`}></div>
        <div className={`${style.dark_skeleton_line} w-full`}></div>
        <div className={`${style.dark_skeleton_line} w-24`}></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[400px]">
        <div className={`${style.dark_skeleton_line} w-full`}></div>
        <div className={`${style.bright_skeleton_line} w-80`}></div>
        <div className={`${style.dark_skeleton_line} w-full`}></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[480px]">
        <div className={`${style.bright_skeleton_line} w-full`}></div>
        <div className={`${style.dark_skeleton_line} w-full`}></div>
        <div className={`${style.dark_skeleton_line} w-24`}></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[440px]">
        <div className={`${style.dark_skeleton_line} w-32`}></div>
        <div className={`${style.dark_skeleton_line} w-24`}></div>
        <div className={`${style.bright_skeleton_line} w-full`}></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[360px]">
        <div className={`${style.dark_skeleton_line} w-full`}></div>
        <div className={`${style.bright_skeleton_line} w-80`}></div>
        <div className={`${style.dark_skeleton_line} w-full`}></div>
      </div>
    </div>
  )
}

export default DescriptionSkeleton
