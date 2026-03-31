import type { GetServerSideProps } from 'next'
import Head from 'next/head'

const IOS_STORE_URL = 'https://apps.apple.com/jp/app/1531656982'
const ANDROID_STORE_URL = 'https://play.google.com/store/apps/details?id=jp.canuu.app.driver'

type Props = {
  id: string
}

export default function PostPage({ id }: Props) {
  return (
    <>
      <Head>
        <title>ドラトーク</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={styles.container}>
        <h1 style={styles.title}>ドラトーク</h1>
        <p style={styles.description}>
          この投稿はアプリで確認できます。
          <br />
          アプリをインストールして続きをご覧ください。
        </p>
        <a href={IOS_STORE_URL} style={{ ...styles.button, ...styles.iosButton }}>
          App Store からダウンロード
        </a>
        <a href={ANDROID_STORE_URL} style={{ ...styles.button, ...styles.androidButton }}>
          Google Play からダウンロード
        </a>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string }
  return { props: { id } }
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '0 24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  button: {
    display: 'block',
    width: '100%',
    maxWidth: '320px',
    padding: '16px',
    borderRadius: '12px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#fff',
  },
  iosButton: {
    backgroundColor: '#000',
  },
  androidButton: {
    backgroundColor: '#01875f',
  },
}
