import { useState } from "react";
import InitializeApp from "../../Firebase/firebaseconfig";
import "../signIn.js/signIn.css";
import { getAuth } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import {Popup} from 'reactjs-popup'
import 'react-toastify/dist/ReactToastify.css'


import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup,OAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider,sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";
export default function SignIn() {
  const navigate=useNavigate()
  const auth = getAuth(InitializeApp);
  const provider =new OAuthProvider("apple.com");
  const googleprovider=new GoogleAuthProvider()
  var [state, setstate] = useState(true);
  var [email, setemail] = useState("johndoe@gmail.com");
  var [password, setpassword] = useState("");
  var [sign_in,setsign_in]=useState({
    signin:"Sign in with Google",
    signup:"Sign up with Google"
  }) 
  var [reset_password, setreset]=useState("")
  
  return (
    <div>
      <span>
        {state == true ? (
          <p
            style={{
              fontSize: "29px",
              fontFamily: "sans-serif",
              fontStyle: "bold",
              fontWeight: "bold",
            }}
          >
            Sign In
            <br />
            <p
              style={{
                fontSize: "15px",
                fontFamily: "sans-serif",
                fontWeight: "normal",
              }}
            >
              Sign in to your account
            </p>
          </p>
        ) : (
          <p
            style={{
              fontSize: "29px",
              fontFamily: "sans-serif",
              fontStyle: "bold",
              fontWeight: "bold",
            }}
          >
            Sign Up
            <br />
            <p
              style={{
                fontSize: "15px",
                fontFamily: "sans-serif",
                fontWeight: "normal",
              }}
            >
              Sign Up to your account
            </p>
          </p>
        )}
        <span>
            {state==true?<button onClick={async()=>{
               await signInWithPopup(auth,googleprovider).then((result)=>{
                   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
   
    const user = result.user;
    navigate("/dashboardroute/dashboard")
               }).catch((err)=>{
                  console.log(err);
               }) 
          }} className="but1">
            &nbsp;
            <FcGoogle />
            &nbsp;&nbsp;
         {sign_in.signin}   
        </button>:<></>}
         
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
       {state==true?<button onClick={async()=>{
          await signInWithPopup(auth,provider).then((result)=>{
            



            
    const user = result.user;

    
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
     navigate("/dashboardroute/dashboard")
          }).catch(err=>{
            console.log(err);
          })
        }} className="but1">
          &nbsp;
          <AiFillApple />
          &nbsp;&nbsp;
          {state == true ? "Sign in with Apple" : "Sign up with Apple"}
        </button>:<></>} 
        
      </span>
      <div className="container">
        <div className="centered-container">
          <div>
            <div className="form-group">
              <p
                style={{
                  textAlign: "left",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  fontStyle: "bold",
                }}
              >
                Email address
              </p>
              <input
                onChange={(e) => {
                  setemail((email = e.target.value));
                }}
                name="email"
                className="input1"
                placeholder="johndoe@gmail.com"
                style={{ borderRadius: "6px", backgroundColor: "#e1e1e1" }}
                type="email"
              />
            </div>
            <div className="form-group">
              <p
                style={{
                  textAlign: "left",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  fontStyle: "bold",
                }}
              >
                Password
              </p>
              <input
               className="input1"
                onChange={(e) => {
                  setpassword((password = e.target.value));
                }}
                name="password"
                style={{ borderRadius: "6px", backgroundColor: "#e1e1e1" }}
                type="password"
              />
              {state == true ? (
                <></>
              ) : (
                <>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      fontStyle: "bold",
                    }}
                  >
                
                  </p>
                  
                </>
              )}
              <br />
              {state == true ? (
                <Popup trigger={<p 
                    style={{
                      cursor: "pointer",
                      textAlign: "left",
                      color: "blue",
                    }}
                  >
                    Forgot password ?
                  </p>} position="right top">
                <div className="container"><input onChange={(e)=>{
                 setreset(reset_password=e.target.value)

                }} placeholder="Enter Email" className="input2" type="email"></input>
                &nbsp;
                <button onClick={async()=>{
                    
                    
                    await sendPasswordResetEmail(auth,reset_password).then((response)=>{
                        alert("Check Email For resetting the password 📧📧📧")
                  }).catch(err=>{
                      alert("Wrong Email 💀💀💀")
                  })
                }} style={{fontWeight:"bold",borderRadius:"5px",border:"None",color:"white",backgroundColor:"black",fontSize:"12px",fontFamily:"sans-serif"}}>Reset Password</button>
                </div>
                </Popup>
              ) : (
                <></>
              )}
            </div>
            <button
              className="button1"
              onClick={async () => {


             state==true?await signInWithEmailAndPassword(auth,email,password).then((user)=>{
                     
                 alert("Welcome to Dashboard")
                 navigate("/dashboardroute/dashboard")
             }
             ).catch(err=>{
              alert("Something Went wrong")
                console.log(err);
             }):   await createUserWithEmailAndPassword(auth, email, password)
                  .then((user) => {
                    alert("Welcome You are registered !!Sign In Now")
                  })
                  .catch((err) => {
                    alert("Something went wrong")
                    console.log(console.error());
                  });
              }}
            >
              {state==true?"Sign In":"Sign Up"}
            </button>
          </div>
        </div>
      </div>

      <span
        style={{
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontSize: "12px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {state == true ? <>Don't have an account?</> : <>Have an account?</>}
        <span
          onClick={() => {
            setstate((state = !state));
          }}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {state == true ? "Register" : "Sign In"}
        </span>
      </span>
    </div>
  );
}
