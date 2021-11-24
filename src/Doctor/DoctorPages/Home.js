import React from 'react'
import './home.css'

export const Home = () => {


    return (
        <>
            <div className="container" >
                    <article className="linkk orangee" style={{maxWidth:"700px", margin:"auto"}}>
                        <div className="info">
                            <input
                                name="id"
                                type="number"
                                className="form-control inp"
                                placeholder=""
                                style={{ width: "40%" }}
                            />
                            <label className="lables">ID</label>
                        </div>
                        <div className="row">
                            <div className="col-12" style={{ marginTop: "31px",display:"flex" }}>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control inp"
                                    placeholder=""
                                />
                                <label className="labelss">F.I.O</label>
                                <button className="btn text-white" style={{ backgroundColor: "#FCAE49",width:"50%",marginLeft:"5%" }}>Kirish</button>
                            </div>
                        </div>

                    </article>
                    
            </div>
        </>
    )
}
