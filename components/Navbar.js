import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/Aksin.png" width={70} height={70} alt="Image Logo" />{' '}
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="ninjas">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
