export default function ModalForm(isOpen, onClose, mode, onSubmit) {
    return(
        <>
        {/* YOU CAN OPEN THE MODAL USING document.getElementByID('ID).showMdal()  METHOD*/}
      
        <dialog id = "my_modal_3" className = "modal" open={isOpen}>
        <div className="modal-box">
            <h3 className="font-bold text-lg py-4">{mode ==='edit' ? 'Edit Client'
            : 'Client Details'}</h3>
                <form method="dialog">
                    {/* IF THERE IS A BUTTON FORM, IT WILL CLOSE THE MODAL*/}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top -2">X</button>
                    <button className="btn btn-success">{mode ==='edit' ? 'save changes' : 'Add Client'}</button>
                </form>
    
        </div>
        </dialog>
        </>
    );
}