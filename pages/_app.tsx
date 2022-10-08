import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import Head from "next/head";
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme === "dark" ? "dark" : "light");
  }, []);

  const changeTheme = () => {
    document.querySelector('html')?.classList.toggle('dark');
    const theme = localStorage.getItem('theme');
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>プリコネタロット</title>
      </Head>
      <div className="content pt-1">
        <header className="container">
          <div className="text-end mb-3"><span className="link" onClick={changeTheme}>ダークモード: { theme === "light" ? "オフ" : "オン" }</span></div>
          <p className="fs-1 text-center">プリコネタロット</p>
        </header>
        <Component {...pageProps} />
        <footer>
          <div className="text-center pt-3 pb-3">
            <div>
              <a href="https://twitter.com/@JADENgygo" className="me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://priconne-portfolio.vercel.app" className="link">
                闇プリン開発室
              </a>
            </div>
            <div>画像 &copy; Cygames, Inc.</div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default MyApp
