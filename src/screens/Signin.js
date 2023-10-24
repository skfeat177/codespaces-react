import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [btncolor, setBtnColor] = useState("btn btn-primary mt-3")
    const [btntext, setBtntext] = useState("Log in CashQuiz Account")
    const [load, setload] = useState(false)
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleLogin = async () => {
        setBtnColor("btn btn-primary mt-3")
        setBtntext("Logging your account...")
        setload(true)
        try {
            const apiurl = process.env.REACT_APP_BACKEND_URL
            const response = await fetch(`${apiurl}/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.status === 200) {
                localStorage.setItem('accountID', data.accountID);
                setBtnColor("btn btn-success mt-3")
                setBtntext("Account Logged in Successfully")
                setload(false)
                window.location.href="/play quiz";
            } else {
                setBtnColor("btn btn-danger mt-3")
                setBtntext("Account Not Found")
                setload(false)
            }
        } catch (error) {
            console.error('Error:', error);
            setBtnColor("btn btn-danger mt-3")
            setBtntext("Internal Server Error")
            setload(false)
        }
        finally{
            setTimeout(() => {
                setBtnColor("btn btn-primary mt-3")
                setBtntext("Log in CashQuiz Account")
                setload(false)
            }, 2000);
        
        }
    };
    return (
        <>
            <div className="container " style={{ marginTop: 80 }}>

                <div className="d-md-flex">
                    <div className="col-md-6">
                        <div
                            style={{
                                marginTop: '5px',
                                display: window.innerWidth > 768 ? 'flex' : 'none', // 
                                alignItems: 'center',
                                justifyContent: 'left',

                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/Login.gif'}
                                alt="Description"
                                className="img-fluid"
                                style={{
                                    display: window.innerWidth > 768 ? 'block' : 'none', // 
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',

                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6" style={{ alignItems: 'center' }}>



                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: "center" }}>
                            <form>
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <h1


                                        style={{
                                            fontWeight: 'bold',
                                            fontFamily: 'Acme',
                                            textAlign: 'center', // Center align text
                                            fontSize: window.innerWidth > 768 ? '2rem' : '1.7rem',

                                        }}
                                        className={`text-primary mt-5`}

                                    >
                                   Log in Your CashQuiz Account
                                    </h1>   <div className="form-group mt-4">
                                        <label htmlFor="text" style={{ fontWeight: 'bold' }}>Enter Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your username"
                                            required
                                            value={username}
                                            onChange={handleUsernameChange}
                                        />
                                    </div>

                                    <div className="form-group mt-2">
                                        <label htmlFor="text" style={{ fontWeight: 'bold' }}>Choose Password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="password"
                                            placeholder="Choose your password.."
                                            required
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>


                                    <button
                                        type="button"
                                        className={btncolor}
                                        onClick={handleLogin}
                                        disabled={load}
                                    >
                                             {btntext}
                                    </button>
                                </div>
                            </form>

                            <p className='text-center pt-3'>Don't have a CashQuiz account yet?<a className='text-primary' onClick={() => {
                                navigate(`/sign up`);
                            }} style={{ fontWeight: 'bold', cursor: 'pointer' }} > Create a New here</a> </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup