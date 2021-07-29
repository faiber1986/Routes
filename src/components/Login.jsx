import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useUsuario } from '../context/UserContext';

export const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('admin@admin.com');
    const [password, setPassword] = useState('');
    const {setLogin} = useUsuario();

    const loginUser = (e) => {
        e.preventDefault();
        if(email === 'admin@admin.com' && password === '123'){
            sessionStorage.setItem('login', true);
            setLogin(true)
            history.push('/root')
        } else {
            sessionStorage.setItem('login', false);
            setLogin(false)
            alert('contraseña incorrecta')
        }
    }

    return (
        <div className='container mt-5'>
            <div className="d-flex justify-content-center">
                <div className='col-12 col-lg-8'>
                    <div className="card">
                        <div className="card-body">
                        <form onSubmit = {loginUser}>
                            <div className='mb-3'>
                                <input type="email" placeholder='email' autoFocus value = {email} className='form-control' onChange = {(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className='mb-3'>
                                <input type="password" placeholder='contraseña' autoFocus className='form-control' onChange = {(e) => setPassword(e.target.value)}/>
                            </div>

                            <button className='btn btn-dark form-control' type='submit'>Ingresar</button>
                        </form>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}
