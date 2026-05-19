import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/index.scss';

import Header from "./components/multiPageComponents/Header.tsx";
import AllRoutes from "./Routes.tsx";
import Footer from "./components/multiPageComponents/Footer.tsx";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>

        <header>
          <Header/>
        </header>

        <div id={"content"}>
          <AllRoutes/>
        </div>

        <footer>
          <Footer/>
        </footer>

      </BrowserRouter>
  </StrictMode>,
)
