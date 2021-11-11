import React from "react";
import initializeFirebaseApp from "../pages/Authentication/Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import swal from "sweetalert";



initializeFirebaseApp();


const useFirebase = () => {

    const [formValue, setFormValue] = React.useState({});
    const [user, setUser] = React.useState({})
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading]= React.useState(true)
    const auth = getAuth();

//get input value
    const handleFormFiled = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...formValue };
        newValue[field] = value;
        setFormValue(newValue);
  };
//register
  const register = (history, uri) => {
      setIsLoading(true);
        createUserWithEmailAndPassword(
          auth,
          formValue?.email,
          formValue?.password
        )
          .then((result) => {
            setUser(result.user);
            updateName();
            saveUserInformation(formValue?.name, formValue?.email,"POST");
              swal({
                text: "Register successful!",
                icon: "success",
                buttons: true,
                dangerMode: true,
              }).then((willregister) => {
                if (willregister) {
                   history.push(uri);
                }
              })
          })
          .catch((error) => {
        
              setError(error.message);

          }).finally(() => {
            setIsLoading(false)
          })
  }
  
  //sign in 
  const handleSignIn = (history,uri) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, formValue?.email, formValue?.password)
      .then((result) => {
        // Signed in
        setUser(result.user);
        swal({
          text: "Login successful!",
          icon: "success",
          buttons: true,
          dangerMode: true,
        }).then((willSuccess) => {
          if (willSuccess) {
            history.push(uri)
          }
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }
  //observe 
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  },[auth])
    
  //update name 

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: formValue?.name,
    })
      .then(() => {
        
      })
      .catch((error) => {
       setError(error.message);
      });
  }
//sign out 
  const signout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        swal({
          text: "Logout successful!",
          icon: "success",
          buttons: true,
        });
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });

  }
//save userAuthentication information 
  const saveUserInformation = (name, email, Method) => {
    const data={name,email}
    fetch("http://localhost:5000/userInfo", {
      method: Method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }
  
  return {
    handleFormFiled,
    formValue,
    setFormValue,
    register,
    user,
    error,
    isLoading,
    handleSignIn,
    signout,
    setIsLoading,
  };
};

export default useFirebase;
