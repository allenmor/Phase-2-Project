import React from "react";
import { useState } from 'react'

function AddAPlayer() {
    const [newObj, setNewObj] = useState({name: '', imgURL: '', tid: '', pos: '', weight: ''})

    //POST NEW PLAYER TO ARRAY OF PLAYERS
    function handleSubmit(e) {
        
    }

    function handleChange(e) {
        setNewObj({...newObj, [e.target.name] : e.target.value,
            stats: {
                0: {
                    season: Math.floor(Math.random() * 32) + 1990,
                    tid: parseInt(newObj.tid),
                    pts: Math.floor(Math.random() * 3200) + 0,
                    orb: Math.floor(Math.random() * 510) + 0,
                    drb: Math.floor(Math.random() * 510) + 0,
                    gp: 82,
                    ast: Math.floor(Math.random() * 1000) + 0,
                    fg: Math.floor(Math.random() * 1070) + 0,
                    fga: Math.floor(Math.random() * 2000) + 0
                }
            }})
    }
    console.log(newObj)
  return (
    <>
      <div className="bg_img"></div>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Add A Player</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row clearfix">
              <div className="col_half">
                <label>Full Name</label>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-user"></i>
                  </span>
                  <input
                    onChange={handleChange}
                    value={newObj.name}
                    type="text"
                    name="name"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div className="col_half">
                <label>Team</label>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-user"></i>
                  </span>
                  <input value={newObj.tid} onChange={handleChange} type="text" name="tid" placeholder="Doe" />
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col_half">
                <label>Position</label>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    onChange={handleChange}
                    value={newObj.pos}
                    type="text"
                    name="pos"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="col_half">
                <label>Weight</label>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-phone"></i>
                  </span>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="weight"
                    placeholder="Phone no"
                  />
                </div>
              </div>
              <div className="col_half">
                <label>Image</label>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-phone"></i>
                  </span>
                  <input
                    onChange={handleChange}
                    value={newObj.imgURL}
                    type="text"
                    name="imgURL"
                    placeholder="Phone no"
                  />
                </div>
              </div>
            </div>
            <input className="button" type="submit" value="Sumbit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default AddAPlayer;
