import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate(); 
    const [userData, setUserData] = useState({
        name: '',
        number: '',
        password: '',
        username: '',
    });
const [btncolor,setBtnColor]=useState("btn btn-primary mt-3")
const [btntext,setBtntext]=useState("Create CashQuiz Account")
const [load,setload]=useState(false)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        setBtnColor("btn btn-primary mt-3")
        setBtntext("Creating your account...")
        setload(true)
        event.preventDefault();
        try {
            const apiurl = process.env.REACT_APP_BACKEND_URL
            const response = await fetch(`${apiurl}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.status === 200) {
                localStorage.setItem('accountID', data.data._id);

                setBtnColor("btn btn-success mt-3")
                setBtntext("Account Created Successfully")
                setload(false)
                window.location.href="/play quiz";
            } else {
                setBtnColor("btn btn-danger mt-3")
                setBtntext("Account Created Failed")
                setload(false)
          
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="container" style={{ marginTop: 80 }}>
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
                                src={process.env.PUBLIC_URL + '/Signup.gif'}
                                alt="Description"
                                className="img-fluid"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',

                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6" style={{ alignItems: 'center' }}>
                        <h1


                            style={{
                                fontWeight: 'bold',
                                fontFamily: 'Acme',
                                textAlign: 'center', // Center align text
                                fontSize: window.innerWidth > 768 ? '2rem' : '1.7rem',

                            }}
                            className={`text-primary mt-2`}

                        >
                            Create a New Account
                        </h1>


                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <form>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div className="form-group mt-2">
                            <label htmlFor="name" style={{ fontWeight: 'bold' }}>Enter Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter here your name"
                                required
                                value={userData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="username" style={{ fontWeight: 'bold' }}>Choose Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Choose a Username"
                                required
                                value={userData.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="number" style={{ fontWeight: 'bold' }}>Enter Paytm Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="number"
                                name="number"
                                placeholder="Enter KYC Paytm Number"
                                required
                                value={userData.number}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="password" style={{ fontWeight: 'bold' }}>Choose Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Choose a password"
                                required
                                value={userData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-check mt-2">
                            <input checked type="checkbox" className="form-check-input" id="privacyPolicy" required />
                            <label className="form-check-label" htmlFor="privacyPolicy">
                                I Agree to <a href='/privacy' style={{ fontWeight: 'bold' }} >Privacy Policy</a> and <a href='/terms' style={{ fontWeight: 'bold' }} >Terms of Use</a>
                            </label>
                        </div>

                        <button type="submit" disabled={load}  onClick={handleFormSubmit} className={btncolor}>
                          {btntext}
                        </button>
                    </div>
                </form>

                <p className='text-center pt-3'>Already have a CashQuiz account?<a className='text-primary' onClick={()=>{
                                             navigate(`/sign in`);
                                    }} style={{ fontWeight: 'bold' ,cursor:'pointer'}} > Log in here</a> </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup;
