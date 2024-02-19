/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import  gruppiIcona  from './gruppi.png'
import  learningIcona  from './learning.png'
import  marketplaceIcona  from './marketplace.png'
import  pubblicaIcona  from './pubblica.png'
import  pubblicizzaIcona  from './pubblicizza.png'
import  talentIcona  from './talent.png'
import  vendiIcona  from './vendi.png'
import './ModaleDestro.css'

const ModaleDestro = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.mostraModaleDestro)
      }, [props.mostraModaleDestro])
      


    const handleClose = () => setShow(false);

    return (
        <>
        <Modal show={show} onHide={handleClose} className="modaleDestro modal fade modal-right" backdrop={true} centered="true" >
        <Modal.Header closeButton >
          <Modal.Title id="titoloModaleDestro">
           Per le aziende
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            
        <ListGroup>
        <ListGroup.Item class="">Scopri altri prodotti LinkedIn</ListGroup.Item>
        <ListGroup.Item className='d-flex flex-wrap justify-content-start '>
            <div className='m-1 mx-2 pulsanteIconaModaleDestro d-flex align-items-center justify-content-center '>
                <div style={{width:"20%"}} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={learningIcona} alt="gruppiIcona" height={"36px"} />
                    <p style={{fontSize:"0.8rem"}} className='sottoTitoloIconeModaleDestro'>learning</p>
                </div>
            </div>
            <div className='m-1 mx-2 pulsanteIconaModaleDestro d-flex align-items-center justify-content-center '>
                <div style={{width:"20%"}} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={talentIcona} alt="gruppiIcona" height={"36px"} />
                    <p style={{fontSize:"0.8rem"}} className='sottoTitoloIconeModaleDestro'>Talent Insights</p>
                </div>
            </div>
            <div className='m-1 mx-2 pulsanteIconaModaleDestro d-flex align-items-center justify-content-center '>
                <div style={{width:"20%"}} className='d-flex flex-column justify-content-center align-items-center position-relative'>
                    <img src={pubblicaIcona} alt="gruppiIcona" height={"36px"} />
                    <p style={{fontSize:"0.8rem"}} className='sottoTitoloIconeModaleDestro'>Pubblica un</p><p className='sottoTitoloIconeModaleDestro position-absolute'> offerta di lavoro</p>
                </div>
            </div>
            <div className='m-1 mx-2 pulsanteIconaModaleDestro d-flex align-items-center justify-content-center '>
                <div style={{width:"20%"}} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={pubblicizzaIcona} alt="gruppiIcona" height={"36px"} />
                    <p style={{fontSize:"0.8rem"}} className='sottoTitoloIconeModaleDestro'>Pubblicizza</p>
                </div>
            </div>
            <div className='m-1 mx-2 pulsanteIconaModaleDestro d-flex align-items-center justify-content-center '>
                <div style={{width:"20%"}} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={vendiIcona} alt="gruppiIcona" height={"36px"} />
                    <p style={{fontSize:"0.8rem"}} className='sottoTitoloIconeModaleDestro'>Vendi</p>
                </div>
            </div>
            <div className='m-1 mx-2 pulsanteIconaModaleDestro d-flex align-items-center justify-content-center '>
                <div style={{width:"20%"}} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={gruppiIcona} alt="gruppiIcona" height={"36px"} />
                    <p style={{fontSize:"0.8rem"}} className='sottoTitoloIconeModaleDestro'>Gruppi</p>
                </div>
            </div>
            <div className='m-1 mx-2 pulsanteIconaModaleDestro d-flex align-items-center justify-content-center '>
                <div style={{width:"20%"}} className='d-flex flex-column justify-content-center align-items-center'>
                    <img src={marketplaceIcona} alt="gruppiIcona" height={"36px"} />
                    <p style={{fontSize:"0.8rem"}} className='sottoTitoloIconeModaleDestro'>Marketplace dei servizi</p>
                </div>
            </div>
        </ListGroup.Item>
        </ListGroup>

        <ListGroup className='my-2'>
        <ListGroup.Item style={{fontSize:"0.9rem"}}>
            
            Scopri altro per il tuo Business
            
            </ListGroup.Item>

        <ListGroup.Item className='listItemModaleDestro' >
            <div className='d-flex flex-column p-0 m-0'>
                <p className='p-0 m-0'  style={{fontSize:"0.8rem"}}>Assumi su LinkedIn</p>
                <p style={{fontSize:"0.6rem"}} className='m-0 sottoTitoloModaleDestro' >Trova, attrai e assumi</p>
            </div>
        </ListGroup.Item>
        <ListGroup.Item className='listItemModaleDestro' >
            <div className='d-flex flex-column p-0 m-0'>
                <p className='p-0 m-0'  style={{fontSize:"0.8rem"}}>Vendi con Linkedin</p>
                <p style={{fontSize:"0.6rem"}} className='m-0 sottoTitoloModaleDestro' >Sblocca nuove opportunità di vendita</p>
            </div>
        </ListGroup.Item>
        <ListGroup.Item className='listItemModaleDestro' >
            <div className='d-flex flex-column p-0 m-0'>
                <p className='p-0 m-0'  style={{fontSize:"0.8rem"}}>Offerta di lavoro gratuita</p>
                <p style={{fontSize:"0.6rem"}} className='m-0 sottoTitoloModaleDestro' >Ottieni rapidamente candidati qualificati</p>
            </div>
        </ListGroup.Item>
        <ListGroup.Item className='listItemModaleDestro' >
            <div className='d-flex flex-column p-0 m-0'>
                <p className='p-0 m-0'  style={{fontSize:"0.8rem"}}>Impara con LinkedIn</p>
                <p style={{fontSize:"0.6rem"}} className='m-0 sottoTitoloModaleDestro' >Corsi per formare i tuoi dipendenti</p>
            </div>
        </ListGroup.Item>
        <ListGroup.Item className='listItemModaleDestro' >
            <div className='d-flex flex-column p-0 m-0'>
                <p className='p-0 m-0'  style={{fontSize:"0.8rem"}}>Centro amministrazione</p>
                <p style={{fontSize:"0.6rem"}} className='m-0 sottoTitoloModaleDestro' >Gestisci i dettagli di fatturazione e account</p>
            </div>
        </ListGroup.Item>
        <ListGroup.Item className='d-flex align-items-center fw-bold listItemModaleDestro'>
            <div className='d-flex align-items-center gap-2 p-0 m-0'>
                <p className='p-0 m-0'  style={{fontSize:"0.8rem"}}>Crea pagina aziendale</p>
                <i className="bi bi-plus-circle"></i>
            </div>
        </ListGroup.Item>
        </ListGroup>


        </Modal.Body>
      </Modal>
        </>
    );
};

export default ModaleDestro;
