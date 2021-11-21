import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../../components/Loader";
import { toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { CheckClentData } from "./CheckClentData";
import '../radio.css'
const mongoose = require("mongoose");
const animatedComponents = makeAnimated();

toast.configure();
export const NewClient = () => {
  let s = [];
  const { loading, request, error, clearError } = useHttp();
  const [turns, seTurns] = useState([]);
  const [sections, setSections] = useState([]);
  const notify = (e) => {
    toast.error(e);
  };
  const history = useHistory();
  const [client, setClient] = useState({
    firstname: "",
    lastname: "",
    fathername: "",
    gender: "",
    phone: "",
    id: 0,
    born: "",
  });

  const changeHandlar = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value });
  };

  const changeDate = (event) => {
    setClient({ ...client, born: new Date(event.target.value) });
  };

  const changeSections = (event) => {
    s = [];
    event.map((section) => {
      let turn = 0;
      turns.map((sec) => {
        if (checkTurn(sec, section.value)) {
          turn++;
        }
      });
      s.push({
        name: section.value,
        price: 0,
        comment: " ",
        summary: " ",
        done: "tasdiqlanmagan",
        payment: "kutilmoqda",
        turn: turn + 1,
        bron: "offline",
        bronDay: new Date(),
        bronTime: " ",
        position: "offline",
      });
    });
    setSections(s);
  };

  const createSections = (event) => {
    let key = parseInt(event.target.id);
    setSections(
      Object.values({
        ...sections,
        [key]: { ...sections[key], price: event.target.value },
      }),
      () =>
        setSections(
          Object.values({
            ...sections,
            [key]: { ...sections[key], turn: parseInt(event.target.name) },
          })
        )
    );
  };

  const allClients = useCallback(async () => {
    try {
      const fetch = await request("/api/clients/", "GET", null);
      const sec = await request("/api/section/", "GET", null);
      seTurns(sec);
      client.id = fetch.length + 1000001;
    } catch (e) {}
  }, [request]);

  const checkData = () => {
    if (CheckClentData(client)) {
      return notify(CheckClentData(client));
    }
    createHandler();
  };

  const createHandler = async () => {
    try {
      const data = await request("/api/clients/register", "POST", {
        ...client,
      });
      createAllSections(data._id);
      history.push(`/reseption/reciept/${data._id}`)
    } catch (e) {}
  };

  const createAllSections = (id) => {
    sections.map((section) => {
      create(id, section);
    });
    history.push(`/reseption/reciept/${id}`);
  };

  const create = async (id, section) => {
    try {
      const data = await request(`/api/section/register/${id}`, "POST", {
        ...section,
      });
      console.log(data);
    } catch (e) {}
  };

  useEffect(() => {
    allClients();
  }, [allClients]);

  useEffect(() => {
    if (error) {
      notify(error);
      clearError();
    }
  }, [error, clearError]);

  const checkTurn = (turn, name) => {
    if (
      mongoose.Types.ObjectId(turn._id).getTimestamp().getFullYear() ===
        new Date().getFullYear() &&
      mongoose.Types.ObjectId(turn._id).getTimestamp().getMonth() ===
        new Date().getMonth() &&
      mongoose.Types.ObjectId(turn._id).getTimestamp().getDate() ===
        new Date().getDate() &&
      turn.name === name
    )
      return true;
    return false;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="row">
        <div className="col-12 mt-3 d-flex justify-content-center align-items-center">
          <h4 className="text-right">Mijozning ma'lumotlarini kiritish</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 input_box" data-aos="fade-right">
          <input
            onChange={changeHandlar}
            name="lastname"
            type="text"
            className="form-control inp"
            placeholder=""
          />
          <label className="labels">Familiya</label>
        </div>
        <div className="col-md-6 input_box" data-aos="fade-left">
          <input
            onChange={changeHandlar}
            name="firstname"
            type="text"
            className="form-control inp"
            placeholder=""
          />
          <label className="labels">Ism</label>
        </div>
      </div>
      <div className="row" style={{padding:"15px 0"}}>
        <div className="col-md-6 input_box" data-aos="fade-right">
          <input
            onChange={changeHandlar}
            name="fathername"
            type="text"
            className="form-control inp"
            placeholder=""
          />
          <label className="labels">Otasining ismi</label>
        </div>
        <div className="col-md-6 input_box" data-aos="fade-left">
          <input
            onChange={changeDate}
            type="date"
            name="born"
            className="form-control inp"
            placeholder=""
            style={{color:"#999"}}
          />
          <label className="labels">Tug'ilgan sanasi</label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" data-aos="zoom-out">
          <div className="form-group">
            {/* <label className="text-muted mandatory d-block">Jinsi</label> */}
            <div className="btn-group" data-toggle="buttons">
            <div className="wrapper">
                <input
                  className="input"
                  id="erkak"
                  onChange={changeHandlar}
                  name="gender"
                  type="radio"
                  defaultValue="man"
                />
                <label
                  className={client.gender === "man" ? "label clabel" : "label"}
                  for="erkak"
                >
                  Erkak
                </label>
                <input
                  className="input"
                  type="radio"
                  id="ayol"
                  onChange={changeHandlar}
                  name="gender"
                  defaultValue="woman"
                />
                <label
                  className={
                    client.gender === "woman" ? "label clabel" : "label"
                  }
                  for="ayol"
                >
                  Ayol
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 input_box" data-aos="fade-left">
          <input
            onChange={changeHandlar}
            type="number"
            name="phone"
            maxLength="12"
            minLength="12"
            className="form-control inp"
            placeholder=""
          />
          <label className="labels">Telefon raqam</label>
        </div>
      </div>
      <hr className="form-control" />

      <div className="row">
        <div className="col-md-12" data-aos="zoom-out">
          <label className="labels">qayta tanlaganda narx o'chib ketadi</label>
          <Select
            onChange={(event) => changeSections(event)}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={[
              { value: "Lor", label: "Lor" },
              { value: "Kardiolog", label: "Kardilog" },
              { value: "Terapevt", label: "Terapevt" },
            ]}
          />
        </div>
      </div>
      <div className="row">
        {sections.map((section, key) => {
          return (
            <>
              <div className="col-7">
                <label className="text-muted mandatory"></label>
                <input
                  defaultValue={section.price}
                  onChange={createSections}
                  id={key}
                  type="number"
                  name={section.name}
                  className="form-control"
                  placeholder={section.name + " summasi"}
                />
              </div>
              <div className="col-5">
                <label className="text-muted mandatory">{} navbati</label>
                <input
                  // onChange={changeHandlar}
                  type="number"
                  className="form-control"
                  placeholder="section"
                  value={section.turn}
                  disabled
                />
              </div>
            </>
          );
        })}
      </div>
      {/* <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="text-muted mandatory d-block">Maqsad</label>
                        <div className="btn-group" data-toggle="buttons">
                            <label htmlFor="intact" className="btn btn-primary form-check-label">
                                <input
                                    onChange={changeHandlar}
                                    name="intact"
                                    className="form-check-input"
                                    type="radio"
                                    defaultValue="Ko`rik"
                                />
                                Ko`rik
                            </label>
                            <label htmlFor="intact" className="btn btn-primary form-check-label">
                                <input
                                    onChange={changeHandlar}
                                    defaultValue="Davolanish"
                                    name="intact"
                                    className="form-check-input"
                                    type="radio"
                                />
                                Davolanish
                            </label>
                        </div>
                    </div>
                </div>

            </div> */}
      <div className="mt-3 text-center" data-aos="fade-up">
        <button onClick={checkData} className="btn btn-primary profile-button">
          Saqlash
        </button>
      </div>
    </>
  );
};
