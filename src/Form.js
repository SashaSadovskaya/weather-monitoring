import React from "react";


function Form ({weather}) {

  return (
    <div className="form-container">
     <form onSubmit={weather}>
       <input type='text' name='city' placeholder='City'/>
       <button type='submit'>Получить погоду</button>
     </form>
    </div>
  );
}

export default Form;
