import { MouseEventHandler } from "react"

const SubmitFormModal = ({toggleModal}: {toggleModal: MouseEventHandler<HTMLElement>}) => {
    return <div>
        <div className='fixed inset-0 bg-black opacity-50 z-40'></div>
        <div onClick={toggleModal} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50">
            <div className="absolute top-2 right-2">
                <button>X</button>
            </div>
            <p>The form has been submitted</p>
        </div>
    </div>
}
export default SubmitFormModal