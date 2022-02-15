import React from 'react';

function Modal({onClose, currentPhoto}) {
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
                    <button type="button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;