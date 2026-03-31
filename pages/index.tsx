import type { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

const IOS_STORE_URL = "https://apps.apple.com/jp/app/1531656982";
const ANDROID_STORE_URL =
  "https://play.google.com/store/apps/details?id=jp.canuu.app.driver";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>ドラトーク</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={styles.container}>
        <Image
          src="/app_icon.png"
          alt="ドラトーク"
          width={120}
          height={120}
          style={styles.logo}
        />
        <h1 style={styles.title}>ドラトーク</h1>
        <p style={styles.description}>
          アプリをインストールしてご利用ください。
        </p>
        <a
          href={IOS_STORE_URL}
          style={{ ...styles.button, ...styles.iosButton }}
        >
          App Store からダウンロード
        </a>
        <a
          href={ANDROID_STORE_URL}
          style={{ ...styles.button, ...styles.androidButton }}
        >
          Google Play からダウンロード
        </a>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers["user-agent"] ?? "";

  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  if (isIOS) {
    return {
      redirect: { destination: IOS_STORE_URL, permanent: false },
    };
  }

  if (isAndroid) {
    return {
      redirect: { destination: ANDROID_STORE_URL, permanent: false },
    };
  }

  return { props: {} };
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "0 24px",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    borderRadius: "24px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#666",
    textAlign: "center",
    lineHeight: "1.6",
    marginBottom: "32px",
  },
  button: {
    display: "block",
    width: "100%",
    maxWidth: "320px",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#fff",
  },
  iosButton: {
    backgroundColor: "#000",
  },
  androidButton: {
    backgroundColor: "#01875f",
  },
};
