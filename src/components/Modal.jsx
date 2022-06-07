

export const Modal = ({showModal, setShowModal}) => {

    return (
        <>
        {showModal ?
        <div>
            <span className="close-btn" onClick={() => setShowModal(prev => !prev)}>Жабу</span>
            <div className="modal-block">
                <h1>Hello world</h1>
            </div>
        </div>
        : null}
        </>
    )
}