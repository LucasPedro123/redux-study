import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home/Home.page'
import About from '../pages/About/About.page';

function Router (){
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    )
}

export default Router;