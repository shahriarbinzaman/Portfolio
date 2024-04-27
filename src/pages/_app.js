import "@/styles/globals.css";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <div className="hidden md:block">
        <AnimatedCursor
          color="33, 33, 33"
          innerSize={14}
          outerSize={16}
          innerScale={1}
          outerScale={1.7}
        />
      </div>
      <Component {...pageProps} />
    </main>
  );
}
