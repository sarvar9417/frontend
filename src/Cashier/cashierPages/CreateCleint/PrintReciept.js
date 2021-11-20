import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Reciept } from './Reciept';

export const PrintReciept = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    return (
        <div className="container" >
            <div className="row">
                <div className="offset-lg-5 col-lg-2">
                    <Reciept ref={componentRef} />
                    <button onClick={handlePrint} className="btn btn-primary" >
                        Print
                    </button>
                </div>
            </div>
        </div>
    )
}
