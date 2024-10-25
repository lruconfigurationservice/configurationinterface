'use client'
import { useState } from "react";

interface LoginProps {
    onLoginSucces: () => void;
}

const Login: React.FC<LoginProps> = ({onLoginSucces}) => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault()

            if ((user === process.env.NEXT_PUBLIC_USERNAME) && (pwd === process.env.NEXT_PUBLIC_PWD)){
            setUser('')
            setPwd('')
            setSuccess(true)
            onLoginSucces()
         }
            else {
                setError(true)  
    }}

    return <div>
    {success ? ( <section>
        <h1>You are logged in!</h1>
        <br />
    </section>) : (
        <div className="flex justify-center items-center h-[100vh]">
        <form onSubmit={handleSubmit}>
        {error ? (<p className="">Failed Login</p>) : (<></>)}
        <div className="flex flex-col gap-2">
        <>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={user} className="border border-black rounded-md" autoComplete="off" onChange={(e) => setUser(e.target.value)} required/>
        </>
        <>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={pwd} className="border border-black rounded-md" onChange={(e) => setPwd(e.target.value)} required/>
        </>
        </div>
        <div className="font flex w-full justify-center p-2">
        <button className="rounded bg-black pl-2 pr-2 text-white self-center">Login</button>
        </div>
        </form>
        </div>
        )}
        </div>
}

export default Login