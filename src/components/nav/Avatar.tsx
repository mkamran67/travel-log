import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  imgSrc?: string;
  desktopOnly?: boolean;
}

function Avatar({ imgSrc, desktopOnly }: Props) {

  if (desktopOnly) {
    return (
      <a href="#" className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-green-700">
        <UserCircleIcon className="h-8 w-8 rounded-full shadow-lg" />
        <span className="sr-only">Your profile</span>
        <span aria-hidden="true">Tom Cook</span>
      </a>
    )
  } else {
    return (
      <a href="#">
        <span className="sr-only">Your profile</span>
        <UserCircleIcon className="h-8 w-8 rounded-full shadow-lg" />
      </a>
    )
  }
}









export default Avatar