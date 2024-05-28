import * as bootstrao from 'bootstrap'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import { ContextLoginRegister } from './context/ContextLoginRegister'
import AppRouters from './routers/AppRouters'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextLoginRegister>
    <BrowserRouter>
      <Navbar />
      <AppRouters />
    </BrowserRouter>
  </ContextLoginRegister>
)
