import React, { useState, useEffect } from 'react'
import { AttendenceInfo } from "./AtttendenceInfo";
import { auth, fs } from '../Config/config';
import { Navber } from "./Navber";

export const Home = () => {

      //getting current user function

    function GetCurrentUser() {
      const [user, setUser] = useState(null);
      useEffect(() => {
          auth.onAuthStateChanged(user => {
              if (user) {
                  fs.collection('employes').doc(user.uid).get().then(snapshot => {
                      setUser(snapshot.data().last_name);
                  })
              }
              else {
                  setUser(null);
              }
          })

      }, [])
      return user;
  }

  const user = GetCurrentUser();
  console.log(user);


      return (
         <>
               <Navber user={user}/>

               {!user && <>
                  <div className="attenInfo1">
                              <h1>Please Login or Signup First and Show Attendence Information</h1>
                        </div>       

                    </>}

                    {user && <>
                        <AttendenceInfo/>

                    </>}

         
         
         </>
      )

}