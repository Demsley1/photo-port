import React from 'react';

function Modal({currentPhoto}) {
    const { name, category, description, index} = currentPhoto;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt={category} />
                <p>
                    {description}
                </p>
                
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary my-5">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;