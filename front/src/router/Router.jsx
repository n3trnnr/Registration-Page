import { Routes, Route } from 'react-router-dom'
import LogIn from '../components/elements/LogIn'
import SignIn from '../components/elements/SignIn'
import Registration from '../components/pages/Registration'
import Messenger from '../components/pages/Messenger'

const Router = () => {

    return (
        <Routes>
            <Route path='/' element={<Registration />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/messenger' element={<Messenger />} />
        </Routes>
    )
}

export default Router