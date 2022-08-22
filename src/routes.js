import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate
} from 'react-router-dom'
import Home from './pages/Home'

function ProtectedRoute(props) {
    return true ? <Outlet /> : <Navigate to='/' />
}

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<ProtectedRoute />} >
                    <Route path='/home' element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}