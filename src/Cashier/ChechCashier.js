import React from 'react'
import Select from "react-select";
import './cashier.css'

export const ChechCashier = () => {
    return (
        <>
            
            <div className="row" style={{justifyContent:"center"}}>
                <div className="col-md-7" style={{padding:"20px 10px",border:"1px solid #999",borderRadius:"5px"}}>
                <div className="row" style={{justifyContent:"space-between"}}>
                    <div className="col-md-4 input_box" data-aos="fade-right">
                        <input
                            name='ID'
                            type="number"
                            className="form-control inp"
                            placeholder=""
                        />
                        <label className="labels">Mijoznig ID raqami</label>
                    </div>
            
                    <div className="col-md-5 input_box" data-aos="fade-left">
                        <input
                            disabled
                            name='FIO'
                            type="text"
                            className="form-control inp"
                            placeholder=""
                            style={{background:"#fff"}}
                        />
                        <label className="labels" style={{top:"-7px",fontSize:"12px",fontWeight:"500"}}>F.I.O</label>
                    </div>
                </div>
            <table style={{marginTop:"30px"}}>
                <thead>
                    <tr style={{borderBottom:"1px solid #999"}} data-aos="zoom-out">
                        <th style={{width:"5%",textAlign:"center",padding:"10px"}}>№</th>
                        <th style={{width:"35%",textAlign:"center",padding:"10px"}}>Bo'limlar</th>
                        <th style={{width:"25%",textAlign:"center",padding:"10px"}}>Hisob</th>
                        <th style={{width:"30%",textAlign:"center",padding:"10px"}}>To'lov</th>
                        <th style={{width:"5%",textAlign:"center",padding:"10px"}}>Holati</th>
                    </tr>
                </thead>
                <tbody style={{borderBottom:"1px solid #999"}}>
                    <tr data-aos="fade-right">
                        <td style={{width:"5%",textAlign:"center",padding:"10px"}}>1</td>
                        <td style={{width:"35%",textAlign:"center",padding:"10px"}}>
                            {/* <Select 
                                options={[
                                    { value: "Lor", label: "Lor" },
                                    { value: "Kardiolog", label: "Kardilog" },
                                    { value: "Terapevt", label: "Terapevt" },
                                  ]}
                            /> */}
                            Lor
                        </td>
                        <td style={{width:"25%",textAlign:"center",padding:"10px"}}>1000</td>
                        <td style={{width:"30%",padding:"10px"}}>
                            <input type="number" className="form-control" style={{width:"80%",margin:"auto",display:"inline"}} /> 
                            <input type="checkbox" className="check" style={{position:"absolute"}} />
                        </td>
                        <td style={{width:"5%",textAlign:"center",padding:"10px",color:"red"}}>
                        <div className="wrapper" style={{justifyContent:"center"}}>
                
                <input
                  className="input"
                  type="radio"
                  id="ayol"
                  name="gender"
                  defaultValue="woman"
                />
                <label
                  className={"rlabel rclabel"}
                  for="ayol"
                >
                  A
                </label>
                            </div>
                        </td>
                    </tr>
                    <tr data-aos="fade-left">
                        <td style={{width:"5%",textAlign:"center",padding:"10px"}}>2</td>
                        <td style={{width:"35%",textAlign:"center",padding:"10px"}}>
                            {/* <Select 
                                options={[
                                    { value: "Lor", label: "Lor" },
                                    { value: "Kardiolog", label: "Kardilog" },
                                    { value: "Terapevt", label: "Terapevt" },
                                  ]}
                            /> */}
                            Kardiolog
                        </td>
                        <td style={{width:"25%",textAlign:"center",padding:"10px"}}>1000</td>
                        <td style={{width:"30%",padding:"10px"}}>
                            <input type="number" className="form-control" style={{width:"80%",margin:"auto",display:"inline"}} /> 
                            <input type="checkbox" className="check" style={{position:"absolute"}} />
                        </td>
                        <td style={{width:"5%",textAlign:"center",padding:"10px",color:"red"}}>
                        <div className="wrapper" style={{justifyContent:"center"}}>
                
                <input
                  className="input"
                  type="radio"
                  id="ayol"
                  name="gender"
                  defaultValue="woman"
                />
                <label
                  className={"rlabel rclabel"}
                  for="ayol"
                >
                  A
                </label>
                            </div>
                        </td>
                    </tr>
                    <tr data-aos="fade-right">
                        <td style={{width:"5%",textAlign:"center",padding:"10px"}}>3</td>
                        <td style={{width:"35%",textAlign:"center",padding:"10px"}}>
                            {/* <Select 
                                options={[
                                    { value: "Lor", label: "Lor" },
                                    { value: "Kardiolog", label: "Kardilog" },
                                    { value: "Terapevt", label: "Terapevt" },
                                  ]}
                            /> */}
                            Hirurg
                        </td>
                        <td style={{width:"25%",textAlign:"center",padding:"10px"}}>1000</td>
                        <td style={{width:"30%",padding:"10px"}}>
                            <input type="number" className="form-control" style={{width:"80%",margin:"auto",display:"inline"}} /> 
                            <input type="checkbox" className="check" style={{position:"absolute"}} />
                        </td>
                        <td style={{width:"5%",textAlign:"center",padding:"10px",color:"red"}}>
                        <div className="wrapper" style={{justifyContent:"center"}}>
                
                <input
                  className="input"
                  type="radio"
                  id="ayol"
                  name="gender"
                  defaultValue="woman"
                />
                <label
                  className={"rlabel rclabel"}
                  for="ayol"
                >
                  A
                </label>
                            </div>
                        </td>
                    </tr>
                    <tr data-aos="fade-left">
                        <td style={{width:"5%",textAlign:"center",padding:"10px"}}>4</td>
                        <td style={{width:"35%",textAlign:"center",padding:"10px"}}>
                            {/* <Select 
                                options={[
                                    { value: "Lor", label: "Lor" },
                                    { value: "Kardiolog", label: "Kardilog" },
                                    { value: "Terapevt", label: "Terapevt" },
                                  ]}
                            /> */}
                        </td>
                        <td style={{width:"25%",textAlign:"center",padding:"10px"}}>1000</td>
                        <td style={{width:"30%",padding:"10px"}}>
                            <input type="number" className="form-control" style={{width:"80%",margin:"auto",display:"inline"}} /> 
                            <input type="checkbox" className="check" style={{position:"absolute"}} />
                        </td>
                        <td style={{width:"5%",textAlign:"center",padding:"10px",color:"red"}}>
                        <div className="wrapper" style={{justifyContent:"center"}}>
                <input
                  className="input"
                  type="radio"
                  id="ayol"
                  name="gender"
                  defaultValue="woman"
                />
                <label
                  className={"rlabel rclabel"}
                  for="ayol"
                >
                  A
                </label>
                            </div>
                        </td>
                    </tr>
                    {/* <tr data-aos="fade-right">
                        <td style={{width:"50px",textAlign:"center",padding:"10px"}}>5</td>
                        <td style={{width:"40%",textAlign:"center",padding:"10px"}}>
                            <Select 
                                options={[
                                    { value: "Lor", label: "Lor" },
                                    { value: "Kardiolog", label: "Kardilog" },
                                    { value: "Terapevt", label: "Terapevt" },
                                  ]}
                            />
                        </td>
                        <td style={{width:"100px",textAlign:"center",padding:"10px"}}>1000</td>
                        <td style={{width:"150px",textAlign:"center",padding:"10px"}}>
                            <input type="number" className="form-control" style={{width:"80%",margin:"auto"}} />
                        </td>
                        <td style={{width:"100px",textAlign:"center",padding:"10px",color:"red"}}>
                            <input type="checkbox" />
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <div className="row mt-3"  style={{margin:"auto",width:"100%",border:"2px solid blue",borderRadius:"5px"}} data-aos="zoom-out">
                <div className="col-md-6" style={{display:"flex"}} >
                    <p style={{color:"blue",marginRight:"72%",marginBottom:"10px",marginTop:"10px",fontWeight:"600"}}>Umumiy</p>
                    <p style={{marginRight:"35%",marginBottom:"10px",marginTop:"10px"}}>10000</p>
                    <p style={{marginRight:"19%",marginBottom:"10px",marginTop:"10px"}}>12000</p>
                    <p style={{color:"red",marginBottom:"10px",marginTop:"10px"}}>Waiting...</p>
                </div>
            </div>
            
                </div>
            </div>
        </>
    )
}
