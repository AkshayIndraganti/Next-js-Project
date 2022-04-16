import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aksin | Home</title>
        <meta name="keywords" content="Aksin" />
      </Head>
      <div className={styles.title}>
        <h1 className={styles.text}>Home Page</h1>

        <p className={styles.text}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vero accusantium
          provident cupiditate quod maiores, amet, quis reiciendis iure velit
          veritatis natus quasi ducimus aliquam recusandae officia doloribus
          tempore unde voluptates molestiae a optio.
        </p>

        <p className={styles.text}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Debitis impedit nisi
          blanditiis culpa ipsam ex excepturi explicabo earum dolorem, officia
          accusantium expedita, qui sunt. Accusamus ratione sapiente, assumenda
          dignissimos inventore quisquam temporibus mollitia distinctio, ea
          error excepturi odit labore, quam facere fugit animi. Amet?
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      </div>
    </>
  );
}
