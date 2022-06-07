
import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default () => {

    const [marca,setMarca]=useState("")
    const [modelo,setModelo]=useState("")
    const [imei,setImei]=useState(0)
    const [numero,setNumero]=useState(0)
    const [ci,setCi]=useState("")
    const [detalles,setDetalles]=useState("")
    const [estado,setEstado]=useState("")


    const navigate= useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/devices', {
            marca,
            modelo,
            imei,
            numero,
            ci,
            detalles,
            estado
            })
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
                .then((navigate("/admin")))

    }

    const handleCancel =(e)=>{
        e.preventDefault();
        navigate('/admin')
    };



    return(
        <Container>
            <header>
                <Typography variant="h3" component="div" gutterBottom>
                    Juxtapoxe
                </Typography>
            </header>
            <div>
                <div>
                    <Typography variant="h4" component="div" gutterBottom>
                    Add a new device to repair
                    </Typography>
                </div>

                <form onSubmit={onSubmitHandler}>
                    <p>
                        <TextField
                            label="Marca"
                            size="small"
                            type='text'
                            autoComplete='off'
                            onChange={e=>setMarca(e.target.value)} value={marca}/>
                    </p>
                    <p>
                        <TextField
                            label="Modelo"
                            defaultValue="Small"
                            size="small"
                            type='text'
                            autoComplete='off'
                            onChange={e=>setModelo(e.target.value)} value={modelo}/>
                    </p>
                    <p>
                        <TextField
                            label="Imei"
                            defaultValue="Small"
                            size="small"
                            type='number'
                            autoComplete='off'
                            onChange={e=>setImei(e.target.value)} value={imei}/>
                    </p>
                    <p>
                        <TextField
                            label="Numero"
                            defaultValue="Small"
                            size="small"
                            type='number'
                            autoComplete='off'
                            onChange={e=>setNumero(e.target.value)} value={numero}/>
                    </p>
                    <p>
                        <TextField
                            label="C.I"
                            defaultValue="Small"
                            size="small"
                            type='text'
                            autoComplete='off'
                            onChange={e=>setCi(e.target.value)} value={ci}/>
                    </p>
                    <p>
                        <TextField
                            label="Device Condition"
                            defaultValue="Small"
                            size="small"
                            type='text'
                            autoComplete='off'
                            onChange={e=>setDetalles(e.target.value)} value={detalles}/>
                    </p>
                    <p>
                        <TextField
                            label="Device Status: Repaired"
                            defaultValue="Small"
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