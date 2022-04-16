import styles from "../../styles/Ninja.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const hello = ({ ninjas }) => {
  return (
    <div>
      <h1>ninja page index</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default hello;
