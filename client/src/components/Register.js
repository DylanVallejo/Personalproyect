
import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default () => {
    //form are fullfieled by admins
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRoles]=useState([])


    const navigate= useNavigate();
//http://localhost:4000/api/users
    // axios.post('http://localhost:4000/api/auth/signup', {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/auth/signup', {
            username,
            email,
            password,
            role
        })
        .then(res=>{
            const statusCode = res.status
            console.log(res)
            if(statusCode===200){
                alert("user created")
                navigate('/')
            }
        })
        .catch(err=>console.log(err))
        // .then((navigate("/movies")))
    }
console.log(username,email,password,role)
    // const handleCancel =(e)=>{
    //     e.preventDefault();
    //     navigate('/helpdesk')
    // };



    return(
        <Container>
            <header className='headerAdmin'>
                <Typography variant="h3" component="div" gutterBottom>
                    Juxtapoxe Sistem
                </Typography>
            </header>
            <div>
                <Typography variant="h4" component="div" gutterBottom>
                    Register a client add an admin
                </Typography>

                <form onSubmit={onSubmitHandler}>
                    <p>
                        <TextField
                        label="User Name"
                        size="small"
                        type='text'
                        autoComplete='off'
                        onChange={e=>setUsername(e.target.value)} value={username}/>
                    </p>

                    <p>
                        <TextField
                        label="E-mail"
                        size="small"
                        type='email'
                        autoComplete='off'
                        onChange={e=>setEmail(e.target.value)} value={email}/>
                    </p>

                    <p>
                        <TextField
                        label="Password"
                        size="small"
                        type='password'
                        onChange={e=>setPassword(e.target.value)} value={password}/>
                    </p>
                    <p>
                        <TextField
                        label="Role"
                        size="small"
                        type='text'
                        autoComplete='off'
                        onChange={e=>setRoles(e.target.value)} value={role}/>
                    </p>

                    <p>
                        <Button type='submit'>Register</Button>
                        <Button onClick={()=>{navigate('/')}} >Back to login</Button>
                    </p>
                </form>
            </div>
        </Container>
    )
}

