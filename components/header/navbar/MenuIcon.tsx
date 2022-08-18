import { MouseEventHandler } from 'react'

type MenuBarProps = {
  transform: string
  opacity?: number
}

const MenuBar = ({ transform, opacity = 1 }: MenuBarProps) => {
  return (
    <div
      className='ease-in-out" my-[6px] mx-0 h-[5px] w-[35px] bg-white transition duration-[.4s]'
      style={{
        opacity,
        transform,
      }}
    />
  )
}

type Props = {
  open: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}

const MenuIcon = ({ open, onClick }: Props) => (
  <div
    className="fixed top-[10px] left-[10px] z-50 inline-block xl:hidden"
    onClick={onClick}
  >
    <MenuBar
      transform={open ? 'rotate(-45deg) translate(-9px, 7px)' : 'rotate(0)'}
    />
    <MenuBar
      opacity={open ? 0 : 1}
      transform={open ? 'translateX(-100%)' : 'translateX(0)'}
    />
    <MenuBar
      transform={open ? 'rotate(45deg) translate(-8px, -7px)' : 'rotate(0)'}
    />
  </div>
)

export default MenuIcon
