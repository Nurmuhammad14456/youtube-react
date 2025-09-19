import { Outlet } from 'react-router-dom'
import Header from '..'

const MainLoyaut = () => {
   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default MainLoyaut