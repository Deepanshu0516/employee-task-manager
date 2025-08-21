import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitHandler(e) {
        e.preventDefault();
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 rounded-xl p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400'
                        type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent mt-3 placeholder:text-gray-400'
                        type="password" placeholder='Enter your password' />
                    <button className='border-2
                    border-none bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none 
                    mt-3
                    placeholder:text-gray-400'>Log In</button>
                </form>

            </div>


        </div>
    )
}

export default Login