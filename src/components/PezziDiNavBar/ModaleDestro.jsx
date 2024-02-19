/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModaleDestro.css'

const ModaleDestro = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.mostraModaleDestro)
      }, [props.mostraModaleDestro])
      


    const handleClose = () => setShow(false);

    return (
        <>

            <Modal show={show} onHide={handleClose} className="modaleDestro modal fade modal-right" backdrop={false} centered="true" >

        <Modal.Header closeButton >
          <Modal.Title id="">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
        </>
    );
};

export default ModaleDestro;
