import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/index.scss';

import Header from "./components/multiPageComponents/Header.tsx";
import AllRoutes from "./Routes.tsx";
import Footer from "./components/multiPageComponents/Footer.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <header>
      <Header/>
    </header>

    <div id={"content"}>
      <AllRoutes/>
    </div>

    <footer>
      <Footer/>
    </footer>
  </StrictMode>,
)
