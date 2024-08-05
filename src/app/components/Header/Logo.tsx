import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" text-3xl font-bold">
        K<span className="text-target">K</span>
      </p>
    </Link>
  )
}
