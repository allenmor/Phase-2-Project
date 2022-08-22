import React from "react";
import StadiumsCard from "./StadiumsCard";
import "./Stadiums.scss";
import { useState, useEffect } from "react";

function Stadiums() {
  const [stadiums, setStadiums] = useState([]);
  const [newObj, setNewObj] = useState({name: '', imageIn: '', imageOut: '', team: ''});
  const[clicked, setClicked] = useState(false)
  //MAP THROUGH ALL STADIUMS
  // fetch all stadiums
  useEffect(() => {
    fetch("http://localhost:3000/stadiums")
      .then((res) => res.json())
      .then((data) => {
        setStadiums(data);
      });
  }, [clicked]);


  function handleChange(e) {
    setNewObj({...newObj, [e.target.name] : e.target.value})
  }


  function handleSubmit(e) {
    e.preventDefault()
    console.log(newObj)
    fetch('http://localhost:3000/stadiums', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newObj)
    })
    .then(res => res.json())
    .then(data => {
      setClicked(prev => !prev)
    })
  }
  return (
    <div className="wrap">
      <div className="bg_img"></div>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Add A Stadium</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row clearfix">
              <div className="col_half">
                <label >Team</label>
                <div className="search-container">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-user"></i>
                  </span>
                  <input className="search-box" action="//llamaswill.tumblr.com/search"
                    onChange={handleChange}
                    value={newObj.team}
                    type="text"
                    name="team"
                    placeholder="Enter Name Of Team"
                    required
                  />
                </div>
              </div>
               <div className="row clearfix">
                <label>Image Inside</label>
                <div className="search-container" >
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-users"></i>
                  </span>
                  <input className="search-box" action="//llamaswill.tumblr.com/search" 
                    value={newObj.imageIn}
                    onChange={handleChange}
                    type="text"
                    name="imageIn"
                    placeholder="Enter Inside Picture"
                  />
                </div>
              </div> 
            </div>
            <div className="row clearfix">
              <div className="col_half">
                <label>Image Outside</label>
                <div className="search-container">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input className="search-box" action="//llamaswill.tumblr.com/search"
                    onChange={handleChange}
                    value={newObj.imageOut}
                    type="text"
                    name="imageOut"
                    placeholder="Enter Outside Picture"
                    required
                  />
                </div>
              </div>
              <div className="row clearfix">
                <label>Name Of Stadium</label>
                <div className="search-container">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-phone"></i>
                  </span>
                  <input className='search-box' action="//llamaswill.tumblr.com/search"
                    value={newObj.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Enter Name of Stadium"
                  />
                </div>
              </div>
            </div>
            <input className="button pulse" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      {stadiums.map((el, i) => {
        return <StadiumsCard key={el.id} stadium={el} />;
      })}
    </div>
  );
}

export default Stadiums;
