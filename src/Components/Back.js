import React from 'react'
import './App.css';
import PropTypes from 'prop-types'

function Back(props) {
  return (
    <>
   <section id="bk1" style={{ backgroundImage: "url('open8.jPG')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
  <br /><br /><br /><br /><br /><br />
  <section id="bk2" className="text-white center pt-5-md p-0 text-center text-md-start">
    <div id="con1" className="container p-0">
      <div className="d-sm-flex align-items-center justify-content-between">
        <div>
          <h1 className="mb-3 d-sm-flex text-center display-7">
            <span>Good </span>
            <span style={{ marginLeft: "20px" }}> Morning</span>
          </h1>
          <br /><br />
          <a id='one' className='' href="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <b >{props.name}😊</b>
          </a>
        </div>
      </div>
    </div>
  </section>
</section> 
    </>
  )
}
Back.propTypes= {
    name: PropTypes.string
  }




export default Back
