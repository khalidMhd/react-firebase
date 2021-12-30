import React, { useEffect, useState } from "react";
import ContactForms from "./contactsForm"
import firebaseDb from "../firebase"

const Contacts = () => {
  const [contactData, setContactData] = useState({})
  const [currentId, setCurrentId] = useState("")
  useEffect(() => {
    firebaseDb.child("contacts").on('value', snapshot => {
      if (snapshot.val() !== null) {
        setContactData(snapshot.val())
      }
    })
  }, [])


  const addOrEdit = obj => {
    if (currentId === "") {
      firebaseDb.child("contacts").push(
        obj,
        err => {
          if (err) { 
            console.log(err);
          } else {
            setCurrentId("")
          }
        }
      )
    } else {
      firebaseDb.child(`contacts/${currentId}`).set(
        obj,
        err => {
          if (err) {
            console.log(err);
          } else {
            setCurrentId("")
          }
        }
      )
    }
    
  }

  const deleteHandler = key => {
    if (window.confirm("Are You Sure To Delete This Records?")) {
      firebaseDb.child(`contacts/${key}`).remove(
        err => {
          if (err) {
            console.log(err);
          } else {
            setCurrentId("")
          }
        }
      )
    }
  }

  return (
    <>
      <h2 className='text-center'>Contact Register</h2>
      <div className='row'>
        <div className='col-sm-6'>
          <ContactForms {...({addOrEdit, currentId, contactData})} />
        </div>
        <div className='col-sm-6'>List Of Contacts</div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(contactData).map(id => {
                return   <tr>
                <td>{contactData[id].name}</td>
                <td>{contactData[id].email}</td>
                <td>{contactData[id].mobile}</td>
                <td>{contactData[id].address}</td>
                <td>
                  <a className="btn text-primary" onClick={() => {setCurrentId(id)}}>
                    <i className="fa fa-pencil-alt"></i>
                  </a>
                  <a className="btn text-danger btn-sm" onClick={() => {deleteHandler(id)}} >
                    <i className="fa fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
              })
            }
          
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Contacts