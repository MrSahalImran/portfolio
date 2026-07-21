import "./index.css";
import App from "./App.jsx";
import { ViteReactSSG } from "vite-react-ssg/single-page";

// Static Site Generation (build-time prerender) + client hydration.
export const createRoot = ViteReactSSG(<App />);
