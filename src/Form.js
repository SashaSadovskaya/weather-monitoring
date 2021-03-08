import React from "react";
import './Form.css'

function Form ({weather}) {

  return (
    <div className="form-container">
     <form onSubmit={weather}>
       <input type='text' name='city' placeholder='City'/>
       <button className='form-button' type='submit'>Получить погоду</button>
     </form>
    </div>
  );
}

export default Form;
