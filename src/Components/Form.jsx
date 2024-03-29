import React from "react";
import { useState } from "react";
import validator from 'email-validator';
import { useEffect } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  const [request, setRequest] = useState({
    nombreCompleto: "",
    email: ""
  })
  const [isValid, setIsValid] = useState(true);
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)


  useEffect(() =>{
    const handleEmailChange = () => {
      const newEmail = request.email
      setIsValid(validator.validate(newEmail));
    }; handleEmailChange()
  },[request.email])
  
  const handleSubmit = (event) => {
        event.preventDefault()
        if(request.nombreCompleto.trim().length > 5 && isValid){
            setShow(true)
            setErr(false)
            console.log(request);
        } else {
            setErr(true)
        }
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Nombre Completo</label>
        <input type="text" onBlur={(event) => setRequest({...request, nombreCompleto: event.target.value})} />
        <label htmlFor="">Email</label>
        <input type="email" onBlur={(event) => setRequest({...request, email: event.target.value})}/>
        <button type="submit">Enviar</button>
      </form>
      {err? "Por favor complete los campos correctamente" : `Gracias ${request.nombreCompleto}, 
        te contactaremos cuando antes vía mail`}
    </div>
  );
};

export default Form;
