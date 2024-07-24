import clsx from "clsx";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx("text-slate-900")}>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}
