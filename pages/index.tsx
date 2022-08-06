import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();
  const cards = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
    "cup0", "cup1", "cup2", "cup3", "cup4", "cup5", "cup6", "cup7", "cup8", "cup9", "cup10", "cup11", "cup12", "cup13",
    "coin0", "coin1", "coin2", "coin3", "coin4", "coin5", "coin6", "coin7", "coin8", "coin9", "coin10", "coin11", "coin12", "coin13",
    "wand0", "wand1", "wand2", "wand3", "wand4", "wand5", "wand6", "wand7", "wand8", "wand9", "wand10", "wand11", "wand12", "wand13",
    "sword0", "sword1", "sword2", "sword3", "sword4", "sword5", "sword6", "sword7", "sword8", "sword9", "sword10", "sword11", "sword12", "sword13",
  ];
  const shuffle = ([...array]: string[]): string[] => {
    for (let i = array.length - 1; i >= 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const augur = (card: string) => {
    const upright = Math.random() < 0.5;
    router.push(`/result/${card}-${upright ? "upright" : "reversed"}`);
  }
  return (
    <div className="container">
      <p className="text-center">78枚のタロットカードから1枚を選んでね</p>
      <div className="row gx-3 gy-3 row-cols-3 row-cols-sm-4 row-cols-md-5 row-cols-lg-6">
        {
          shuffle(cards).map(e => {
            return (
              <div key={e} className="col">
                <Image src="/card.png" width={1080} height={1920} onClick={() => augur(e)} />
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Home
