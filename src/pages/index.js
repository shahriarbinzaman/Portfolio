import { Header, About, Contact, Experience, Projects } from "@/components";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Head>
        <title>Shahriar's Portfolio</title>
        <meta
          name="description"
          content="Shahriar Bin Zaman is a Software Developer and Data Scientist with a strong programming foundation and experience in data science and analytics, eager to drive innovation in a dynamic team environments."
          key="desc"
        />
      </Head>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
