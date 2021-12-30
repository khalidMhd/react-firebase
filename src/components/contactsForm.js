import React, { useEffect, useState } from 'react'
const ContactForms = (props) => {
  
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
console.log({...props.contactData[props.currentId]});
  const handleFormSubmit = e => {
    e.preventDefault()
    props.addOrEdit({name, mobile, email, address})
  }

  useEffect(() => {
    if (props.currentId !== "") {
      setName(props.contactData[props.currentId].name)
      setEmail(props.contactData[props.currentId].email)
      setMobile(props.contactData[props.currentId].mobile)
      setAddress(props.contactData[props.currentId].address)
    }

  }, [props.currentId, props.contactData])

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        
        <div className="form-group">
          <label for="name">Full Name</label>
          <input type="text"  value = {name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" />
        </div>

        <div className="form-group">
          <label for="mobile">Mobile</label>
          <input type="text" value = {mobile} onChange={(e) => setMobile(e.target.value)} name= "mobile" className="form-control" placeholder="Enter Mobile Number" />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" value = {email} onChange={(e) => setEmail(e.target.value)} name= "email" className="form-control" placeholder="Enter Email" />
        </div>

        <div className="form-group">
          <label for="address">Address</label>
          <input type="text" value = {address} onChange={(e) => setAddress(e.target.value)} name = "address" className="form-control"  placeholder="Enter Address" />
        </div>
        <input type="submit" value={props.currentId === "" ? "save" : "update"} className="btn btn-primary" />
      </form>
    </>
  )
}

export default ContactForms