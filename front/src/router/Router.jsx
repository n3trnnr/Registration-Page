import { Routes, Route } from 'react-router-dom'
import LogIn from '../components/elements/LogIn'
import SignIn from '../components/elements/SignIn'
import Main from '../components/pages/Main'

const Router = () => {

    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signin' element={<SignIn />} />
        </Routes>
    )
}

export default Router