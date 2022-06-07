//login /sigin form 

import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


export default props => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const navigate= useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/auth/signin', {
            email,
            password
            })
                .then(res =>{
                    const statusCode = res.status ,success = res.statusText,
                    respuesta=res
                    console.log(respuesta)
                    console.log(statusCode)
                    console.log(success+" logged in")
                    if(statusCode === 200 && success === "OK"){
                        navigate('/admin')
                    }
                    console.log(res)})
                .catch(err=>{
                    const axiosMessage = err.response.status
                    console.log(axiosMessage)
                    if(axiosMessage===400 || axiosMessage===401){
                        alert("wrong email or password")
                    }
                })
        }



    return(
        <div>
            <Container>
                <header>
                    <Typography variant="h3" component="div" gutterBottom>
                        Juxtapoxe
                    </Typography>
                </header>
                <div>
                    <div>
                        <Typography variant="h4" component="div" gutterBottom>
                            Login /Inicia sesion
                        </Typography>
                    </div>
                    
                    <form onSubmit={onSubmitHandler}>
                        <p>
                            <TextField
                                label="E-mail"
                                defaultValue="Small"
                                size="small"
                                type="email"
                                autoComplete='off'
                                onChange={e=>setEmail(e.target.value)} value={email}/>
                        </p>
                        <p>
                            <TextField
                                label="Password"
                                defaultValue="Small"
                                size="small"
                                type='password'
                                autoComplete='off'
                                onChange={e=>setPassword(e.target.value)} value={password}/>
                        </p>
            
                        <p>
                            <Button type='submit'>Login</Button>
                            <Button onClick={()=>{navigate('/register')}} >Register</Button>
                        </p>
                        
                    </form>
                </div>
            </Container>
        </div>
    )
}