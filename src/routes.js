import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from './pages/Home'

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}