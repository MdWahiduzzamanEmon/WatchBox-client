import React from "react";
import initializeFirebaseApp from "../pages/Authentication/Firebase/Firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
    const [formValue, setFormValue] = React.useState({});
    
    const handleFormFiled = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...formValue };
        newValue[field] = value;
        setFormValue(newValue);
  };

  return { handleFormFiled, formValue, setFormValue };
};

export default useFirebase;
