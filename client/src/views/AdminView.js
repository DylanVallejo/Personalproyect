import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default props => {
    const  navigate = useNavigate();
    const [devices,setDevices]= useState([]);
    // const {id}= useParams();

    //almacenando los documentos en un array 
    useEffect(() => {
        axios.get(`http://localhost:4000/api/devices`)
            .then(res => {setDevices(res.data)})
            .then(res => {
                console.log(res)
            })
    }, [])
    console.log(devices)

    const singleView = (id) => {
        navigate('/api/devices/'+ id)
    }

    const handleNavigation = (e) => {
        e.preventDefault();
        navigate('/add')
    }
    const updateDevice = (id) => {
        navigate('/update/'+id)
    }

    return(
        <Container>
            <header className='headerAdmin'>
                <Typography variant="h3" component="div" gutterBottom>
                    Administrate Devices
                </Typography>
            <Button  onClick={handleNavigation} >Agregar</Button>
            </header>
            <TableContainer  className='containerAdmin'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='tHead'>
                        <TableCell >Marca</TableCell >
                        <TableCell>Modelo</TableCell>
                        <TableCell>Imei</TableCell>
                        <TableCell>Numero</TableCell>
                        <TableCell>Detalles</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Ver</TableCell>
                        <TableCell>Modificar</TableCell>
                    </TableHead>
                    <TableBody>
                        {devices.map((sortDevices,idx)=>{
                            return<TableRow key={idx} className='gTables'>
                                <TableCell>{sortDevices.marca}</TableCell >
                                <TableCell>{sortDevices.modelo}</TableCell>
                                <TableCell>{sortDevices.imei}</TableCell>
                                <TableCell>{sortDevices.numero}</TableCell>
                                <TableCell>{sortDevices.detalles}</TableCell>
                                <TableCell>{sortDevices.estado}</TableCell>
                                <TableCell><Button variant="outlined"  color="secondary" onClick={()=>singleView(sortDevices._id)}>Revisar</Button></TableCell>
                                <TableCell><Button variant="outlined"  color="secondary" onClick={()=>updateDevice(sortDevices._id)}>Actualizar estado</Button></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer >
        </Container>
    )
}

