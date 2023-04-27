import Link from 'next/link'

import ArrowIcon from './icons/Arrow'

type BackArrowLinkProps = { link: string }

const BackArrowLink = ({ link }: BackArrowLinkProps) => (
  <div className="flex items-center hover:underline font-medium text-dark my-5 ">
    <ArrowIcon />
    <Link href={`/${link}`}>Back to {link === '/' ? 'home' : link}</Link>
  </div>
)

export default BackArrowLink
