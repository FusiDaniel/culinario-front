import type { ImageProps } from 'next/image';
import Image from 'next/image';
import styles from '../styles/page.module.css'; // You might want to move this CSS file later

type Props = Omit<ImageProps, 'src'> & {
  srcDark: string;
  srcLight: string;
};

const ThemeImage = (props: Props) => {
  const { srcDark, srcLight, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

const Home = () => (
  <div className={styles.page}>
    <main className={styles.main}>
      <ThemeImage
        className={styles.logo}
        srcLight="turborepo-dark.svg"
        srcDark="turborepo-light.svg"
        alt="Turborepo logo"
        width={180}
        height={38}
        priority
      />
      <p className={styles.primary}> test</p>
    </main>
  </div>
);

export default Home;
