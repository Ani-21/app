import Link from 'next/link'
import React from 'react'
import ArrowIcon from './icons/Arrow'

type BackArrowLinkProps = { link: string }

const BackArrowLink = ({ link }: BackArrowLinkProps) => (
  <div className="flex hover:underline font-medium text-dark ">
    <ArrowIcon />
    <Link href={`/${link}`}>Back to {link === '/' ? 'home' : link}</Link>
  </div>
)

export default BackArrowLink
