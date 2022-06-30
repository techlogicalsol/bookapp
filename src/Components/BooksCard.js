import React, { useState } from "react";
import { Modal } from "reactstrap";


function BooksCard({thumbnail, title, pageCount, language, authors, publisher, description, previewLink, infoLink }){

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);


    return(
        <>
            <div className="card m-auto">
                <img src={thumbnail} className="cardImg" 
                alt={title}/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>

                    <button onClick={toggle} className="btn btn-dark">More Info</button>
                   
                </div>  

                <Modal isOpen={modal} toggle={toggle} scrollable={true}>
                    <div className="modal-header d-flex justify-content-around">
                        <h5>{title}</h5>

                    <button type="button" className="close"
                    aria-label="Close" onClick={toggle}>
                        <span aria-hidden={true}>X</span>
                    </button>
                    </div>

            <div class="modal-body">
                <div className="d-flex justify-content-around">
                    <img src={thumbnail} className="cardImg" 
                    alt={title}/>

                <div>
                    <p>Page Count: {pageCount}</p>
                    <p>Language: {language}</p>
                    <p>Authors: {authors}</p>
                    <p>Publishers: {publisher}</p>
                </div>
                </div>

            
                <div className="mt-3">
                    <p>Description: {description}</p>
                </div>
            </div>

            <div className="modal-footer">
            <div className="left-silde">
                <a 
                    href={previewLink} 
                    className='btn-link'
                    color="default"
                    target="_blank"
                    rel='noopener noreferrer'
                    type="button">
                        Preview Link
                </a>
                </div>

                <div className="right-silde">
                <a 
                    href={infoLink} 
                    className='btn-link'
                    color="default"
                    target="_blank"
                    rel='noopener noreferrer'
                    type="button">
                        Info Link
                </a>
                </div>
            </div>


        </Modal>   

      </div>

        </>
    )
}

export default BooksCard