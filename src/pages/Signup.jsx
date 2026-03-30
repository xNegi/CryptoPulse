import React from 'react'
import { useState,useEffect } from 'react'
import { signupUser } from "../services/authApi";

const Signup = () => {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [username, setusername] = useState("")
    const [email , setemail] = useState ("")
    const [number , setnumber] = useState ("")
    const [password, setpassword] = useState("")
    const [ConfirmPass, setConfirmPass] = useState ("")
    const [error, setError] = useState("")
    const [loading , setLoading] = useState (false);

    useEffect(() => {
      if (ConfirmPass && password  !== ConfirmPass){
        setError("Password do not match")
      }
      else {
        setError("")
      }
    }, [password, ConfirmPass])
    
    const handleSubmit = async () =>{
      if (error) return;

      if (
      !FirstName ||
      !LastName ||
      !username ||
      !email ||
      !number ||
      !password ||
      !ConfirmPass
    ) {
      return setError("All fields are required");
    };

    try {
      setLoading(true);

      const res = await signupUser({
        firstName: FirstName,
        lastName: LastName,
        username,
        email,
        number,
        password
      });

      console.log("Signup success:", res.data);
      alert("Signup successful!");

    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };
    

  
  return (
    <div className='flex  flex-col items-center justify-center h-[70vh] w-full '>

      <h3 className='font-bold text-2xl p-2 '>Welcome to CryptoPulse , Signup!</h3>
      <div className='flex flex-col gap-2 p-2'>
        <div className='flex gap-3'>
        <input onChange={(e)=> setFirstName(e.target.value)} value={FirstName} type="text" placeholder='First name' className='border rounded-md p-2 ' />
        <input onChange={(e)=> setLastName(e.target.value)} value={LastName} type="text" placeholder='Last name' className='border rounded-md p-2 ' />
        </div>
        <input onChange={(e)=> setusername(e.target.value)} value={username} type="text" placeholder='Username' className='border rounded-md p-2 ' /> 
        <input onChange={(e)=> setemail(e.target.value)} value={email} type='email' placeholder='Email' className='border rounded-md p-2'/>
        <input onChange={(e)=> setnumber (e.target.value)}  value={number} type="tel" placeholder='Number' className='border rounded-md p-2 '/>
        <input onChange={(e)=> setpassword(e.target.value)} value={password} type='password' placeholder='Password'className='border rounded-md p-2 '/>
        <input onChange={(e)=> setConfirmPass (e.target.value)}  value={ConfirmPass} type='password' placeholder='Confirm Password'className='border rounded-md p-2 '/>
        {error && (<p className="text-red-500 text-sm mt-1">{error}</p>)}
        <button onClick={handleSubmit}  disabled={loading} className="border rounded-md w-full p-2">
            {loading ? "Creating Account..." : "Submit"}
        </button>
      </div>
    </div>
  )
}

export default Signup
