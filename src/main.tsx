import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/index.scss';

import Header from "./components/multiPage/Header.tsx";
import AllRoutes from "./Routes.tsx";
import Footer from "./components/multiPage/Footer.tsx";
import {HashRouter} from "react-router";
import ScrollToTop from "./components/multiPage/ScrollToTop.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>

        <ScrollToTop/>

        <header>
          <Header/>
        </header>

        <div id={"content"}>
          <AllRoutes/>
        </div>

        <footer>
          <Footer/>
        </footer>

      </HashRouter>
  </StrictMode>,
)
