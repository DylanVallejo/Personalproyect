import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'
import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';

export default props => {

    const [estado,setEstado]=useState("")
    const {id}= useParams();


    const navigate= useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/api/devices/${id}`, {
            estado
            })
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
                .then(()=>{
                    if(estado.length<0){
                        alert('actualiza el estado')
                    }else{
                        navigate('/admin')
                    }
                })    
                    
        }

    const handleCancel =(e)=>{
        e.preventDefault();
        navigate('/admin')
    };



    return(
        <Container>
            <div>
                <h1>Juxtapoxe Sistem</h1>
            </div>
            <div>
                
                <div>
                    <h3>Update the status of the device </h3>
                </div>

                <form onSubmit={onSubmitHandler}>
                    <p>
                        <TextField
                            label="Estado"
                            size="small"
                            type='text'
                            autoComplete='off'
                            onChange={e=>setEstado(e.target.value)} value={estado}/>
                    </p>
                    <p>
                        <Button type='submit'>Submit</Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </p>
                </form>
            </div>
        </Container>
    )
}