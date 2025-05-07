import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <title>MediaCorn</title>
    <meta name="Saleh Adib Hasnat" content="Adult Videos" />
    <link rel="author" href="https://www.facebook.com/God.D.Adib" />
    {/* <meta name="keywords" content={post.keywords} /> */}
    <App />
  </>
);
