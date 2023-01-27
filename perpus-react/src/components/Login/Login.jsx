import logo from '../../image/logo atas.png'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const [serverError, setServerError] = useState("");
    const [form, setForm] = useState({
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
    })


    const validateForm = () => {
        let emailError = "";
        let passwordError = "";

        if (!form.email) {
            emailError = "Email Anda Masih Kosong";
        } else {
            setForm({ ...form, emailError: "" });
        }

        if (!form.password) {
            passwordError = "Password Anda Masih Kosong";
        } else {
            setForm({ ...form, passwordError: "" });
        }

        if (emailError || passwordError) {
            setForm({ ...form, emailError, passwordError });
            return false;
        }

        return true;
    };

    const sendData = () => {
        axios.post('https://reqres.in/api/login',
            {
                email: form.email,
                password: form.password
            })
            .then(response => {
                console.log(response)
                localStorage.setItem('auth', JSON.stringify(response.data.token))
                window.location.reload();
            }).catch(err => {
                if (err.response && err.response.status === 400) {
                    setServerError(err.response.error);
                } else {
                    console.log(err)
                }
            })
    }

    return (
        <div>
            <div className="flex justify-center h-screen items-center">
                <div className="flex h-[460px] vsm:h-[500px] xl:h-[534px] justify-center">
                    <img className="absolute w-[40px] vsm:w-[46px] lg:w-[52px] xl:w-[64px] -mt-[20px] lg:-mt-[30px] xl:-mt-[40px]" src={logo} alt="" />
                    <div className="flex flex-col py-[50px] bg-gray-100 border shadow-sm rounded-lg px-[30px] vsm:px-[40px] sm:px-[80px] xl:px-[100px] ">
                        <div className="flex flex-col items-center">
                            <h1 className="xl:text-[30px] text-[24px] font-bold">Join our libraries</h1>
                            <h3 className="text-[#556987] xl:text-[18px] text-[14px] font-medium items-start">Start your free Trial</h3>
                        </div>
                        <div className="flex justify-center flex-col">
                            <label className="mt-10 text-[14px] lg:text-[16px] text-[#333F51] font-bold">Email</label>
                            <input
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                onBlur={validateForm}
                                type="text"
                                required
                                className="w-[280px] vsm:w-[350px] rounded-md shadow-md outline-none focus:ring-2 focus:ring-blue-500 mt-2 p-3 placeholder:text-[14px] placeholder:-pl-[600px]"
                                placeholder="Enter your email adress" />
                            {form.emailError && <p className='text-red-500 text-[12px] font-semibold mt-1'>{form.emailError}</p>}

                            <label className="mt-8 text-[14px] lg:text-[16px] text-[#333F51] font-bold">Password</label>
                            <input
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                onBlur={validateForm}
                                type="password"
                                required
                                className="w-full rounded-md shadow-md mt-2 p-3 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[14px] placeholder:-pl-[600px]"
                                placeholder="Enter your password" />
                            {form.passwordError && <p className='text-red-500 text-[12px] font-semibold mt-1'>{form.passwordError}</p>}
                            
                            <button 
                                type="submit" 
                                onClick={sendData} 
                                className="bg-[#22C55E] p-2 xl:p-3 mt-10 xl:mt-14 rounded-lg w-full text-white hover:bg-[#1eae53]">Get Started</button>
                            {serverError && <p className='text-red-500 text-[12px] font-semibold mt-10'>{serverError}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;