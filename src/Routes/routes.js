import {Route, Routes} from 'react-router-dom';
import Login from '../Template/Login'
import CreateAccountForm from '../CreateAccountForm/CreateAccount'
import CreateUserForm from '../CreateUserForm/CreateUser'
export default function MainRoutes() {
    return(
        <Routes>
            <Route path='/' element= {<Login/>}/>
            <Route path='/criar-usuario' element= {<CreateUserForm/>}/>
            <Route path='/criar-conta' element= {<CreateAccountForm/>}/>
        </Routes>
    );
}
