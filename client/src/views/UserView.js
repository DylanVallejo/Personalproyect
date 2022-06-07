import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export default props => {
    const  navigate = useNavigate();
    const [devices,setDevices]= useState([]);
    const {id}= useParams();
    //almacenando los documentos en un array 
    useEffect(() => {
        axios.get(`http://localhost:4000/api/devices/${id}`)
            .then(res => {
                console.log('original')
                console.log(res.data)
                setDevices(res.data)})
            .then(res => {
                console.log(res)
            })
    }, [])


    //deleting one document by id receiving an id as prop
    const deleteThis = (id) => {
        axios.delete('http://localhost:4000/api/devices/'+ id)
            .then(res => {
                console.log(res)
                navigate('/admin')
            })
    }


    console.log(devices._id)
    const logOut = () => {
        navigate('/')
    }
    const  watchDevice = (id) => {
        navigate('/admin')
    }


    return(
        <Container>

            <header className='headerAdmin'>
                <Typography variant="h3" component="div" gutterBottom>
                    Welcome User
                </Typography>
                <Button size="medium" color ="warning" variant="text" onClick={logOut} >Logout</Button>
            </header>
            <div>
                <Typography variant="h5" component="div" gutterBottom>
                    Estado del Dispositivo:
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    {devices.estado}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    Marca: {devices.marca}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    Contacto: {devices.numero}
                </Typography>
                <Button 
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={()=>deleteThis(devices._id)} >
                    Eliminar</Button>
                <Button color="secondary" variant="outlined" onClick={watchDevice}>Dispositivos</Button>
            </div>
        </Container>
    )
}