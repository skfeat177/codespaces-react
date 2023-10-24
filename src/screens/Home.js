import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../components/Footer';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [name, setName] = useState('');
    const [load, setLoad] = useState(false);
    const [btncolor, setBtncolor] = useState('primary');
    const [btntext, setBtntext] = useState('Send Message');
    const [accountID, setAccountID] = useState('');
    const [issue, setIssue] = useState('Payment Issue');
    const [issuedetail, setIssueDetail] = useState('');
    const navigate = useNavigate();
    const [marginTop, setMarginTop] = useState(
        window.innerWidth > 768 ? '140px' : '0px'
    );
    const [btn, setBtn] = useState("Start Earning")
    useEffect(() => {
        const handleResize = () => {
            setMarginTop(window.innerWidth > 768 ? '140px' : '0px');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Check for the existence of accountID in localStorage
        const accountID = localStorage.getItem('accountID');
        if (accountID) {
            setBtn("Start Playing")
        }
    }, []);
    const handleSubmit = async (e) => {
        setBtntext("Sending")
        setLoad(true)
        e.preventDefault();

        // Prepare the data to be sent in the request body
        const data = {
            name,
            accountID,
            issue,
            issuedetail,
        };

        // Make a POST request to the /contactmail endpoint
        const apiurl = process.env.REACT_APP_BACKEND_URL;
        try {
            const response = await fetch(`${apiurl}/contactmail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Request was successful
                setBtncolor("success")
                setBtntext("Message Sent")
                setLoad(false)
                setTimeout(() => {
                    setBtncolor("primary")
                    setBtntext("Send Message")
                }, 2000);
            } else {
                // Handle API errors here
                alert('Failed to send the message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending the message:', error);
            alert('An error occurred. Please try again later.');
        }
    };



    return (
        <>
            <div className='container' style={{ marginTop: '70px' }}>
                <div className="d-md-flex flex-md-row-reverse mt-4">
                    <div className="col-md-6">
                        <div
                            style={{
                                marginTop: '5px',
                                width: '100%',
                                maxHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/online-test-animate.svg'}
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
                    <div className="col-md-6">
                        <h1


                            style={{
                                fontWeight: 'bold',
                                fontFamily: 'Acme',
                                textAlign: window.innerWidth > 768 ? 'left' : 'center', // Center align text
                                fontSize: window.innerWidth > 768 ? '3rem' : '2.7rem',
                                marginTop: marginTop,

                            }}
                            className={`text-primary`}

                        >
                            You Play We Pay
                        </h1>
                        <h1
                            style={{
                                fontWeight: 'bold',
                                color: '#4E7FCF',
                                fontFamily: 'Roboto',
                                textAlign: window.innerWidth > 768 ? 'left' : 'center',
                                fontSize: window.innerWidth > 768 ? '1.5rem' : '1.1rem',
                                margin: '0', // Remove margin from the top
                            }}
                        >
                            Now, you can win cash prizes worth over Rs. 500 and lots of Gift Cards by simply participating and answering quiz questions.
                        </h1>

                        <div style={{ display: 'flex', justifyContent: window.innerWidth > 768 ? 'left' : 'center' }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ borderRadius: 30, marginTop: 2 }}
                                endIcon={<ArrowForwardIcon />}
                                onClick={() => {
                                    const accountID = localStorage.getItem('accountID');
                                    if (accountID) {
                                        navigate("/play quiz")
                                    }
                                    else {
                                        navigate("/sign up")
                                    }
                                }}>

                                {btn}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <p


                    style={{
                        fontWeight: 'bold',
                        fontFamily: 'Acme',
                        textAlign: 'center', // Center align text
                        fontSize: '2rem',
                        marginTop: 10,

                    }}
                    className={`text-primary`}

                >
                    How Cash Quiz Works?
                </p>

                <div className="d-md-flex flex-md-row-reverse">
                    <div className="col-md-6">
                        <div
                            style={{
                                marginTop: '5px',
                                width: '100%',
                                maxHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/answer.gif'}
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
                    <div className="col-md-6">
                        <h1


                            style={{
                                fontWeight: 'bold',
                                fontFamily: 'Acme',
                                textAlign: window.innerWidth > 768 ? 'left' : 'center', // Center align text
                                fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
                                marginTop: marginTop,

                            }}
                            className={`text-primary`}

                        >
                            You Participate
                        </h1>
                        <h1
                            style={{
                                fontWeight: 'bold',
                                color: '#4E7FCF',
                                fontFamily: 'Roboto',
                                textAlign: window.innerWidth > 768 ? 'left' : 'center',
                                fontSize: window.innerWidth > 768 ? '1.4rem' : '1.1rem',
                                margin: '0', // Remove margin from the top
                            }}
                        >
                            Engage in our diverse quizzes covering a wide range of topics, allowing you to actively respond to questions. You're sure to find a gratifying and enriching experience awaits you as the quizzes span across various subjects.
                        </h1>

                        <div style={{ display: 'flex', justifyContent: window.innerWidth > 768 ? 'left' : 'center' }}>

                        </div>
                    </div>
                </div>
                <div className="d-md-flex">
                    <div className="col-md-6">
                        <div
                            style={{
                                marginTop: '5px',
                                width: '100%',
                                maxHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'left',

                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/quiz.gif'}
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
                    <div className="col-md-6">
                        <h1


                            style={{
                                fontWeight: 'bold',
                                fontFamily: 'Acme',
                                textAlign: window.innerWidth > 768 ? 'left' : 'center', // Center align text
                                fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
                                marginTop: marginTop,

                            }}
                            className={`text-primary`}

                        >
                            You Answer
                        </h1>
                        <h1
                            style={{
                                fontWeight: 'bold',
                                color: '#4E7FCF',
                                fontFamily: 'Roboto',
                                textAlign: window.innerWidth > 768 ? 'left' : 'center',
                                fontSize: window.innerWidth > 768 ? '1.4rem' : '1.1rem',
                                margin: '0', // Remove margin from the top
                            }}
                        >
                            When you successfully answer quiz question with precision and accuracy, you accumulate valuable points that contribute to your overall score and potential rewards in our quiz platform.
                        </h1>

                        <div style={{ display: 'flex', justifyContent: window.innerWidth > 768 ? 'left' : 'center' }}>

                        </div>
                    </div>
                </div>

                <div className="d-md-flex flex-md-row-reverse">
                    <div className="col-md-6">
                        <div
                            style={{
                                marginTop: '5px',
                                width: '100%',
                                maxHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/gift.gif'}
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
                    <div className="col-md-6">
                        <h1


                            style={{
                                fontWeight: 'bold',
                                fontFamily: 'Acme',
                                textAlign: window.innerWidth > 768 ? 'left' : 'center', // Center align text
                                fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
                                marginTop: marginTop,

                            }}
                            className={`text-primary`}

                        >
                            You Win Cash
                        </h1>
                        <h1
                            style={{
                                fontWeight: 'bold',
                                color: '#4E7FCF',
                                fontFamily: 'Roboto',
                                textAlign: window.innerWidth > 768 ? 'left' : 'center',
                                fontSize: window.innerWidth > 768 ? '1.4rem' : '1.1rem',
                                margin: '0', // Remove margin from the top
                            }}
                        >
                            When you accumulate the required points, you have the option to easily withdraw them to your bank account or redeem them for gift cards, making it a flexible and convenient reward system.
                        </h1>

                        <div style={{ display: 'flex', justifyContent: window.innerWidth > 768 ? 'left' : 'center' }}>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <p


                    style={{
                        fontWeight: 'bold',
                        fontFamily: 'Acme',
                        textAlign: 'center', // Center align text
                        fontSize: '2.2rem',
                        marginTop: 10,
                        paddingTop: '10px',

                    }}
                    className='text-primary'

                >
                    Gift Cards to Reedem
                </p>

                <div className="row">
                    <div className="col-md-3">
                        <div
                            style={{
                                marginTop: '5px',
                                width: '100%',
                                maxHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                src='https://download.logo.wine/logo/Google_Play/Google_Play-Logo.wine.png'
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


                    <div className="col-md-3">
                        <div
                            style={{
                                marginBlock: '20px',
                                width: '100%',
                                maxHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                src='https://cdn.moglix.com/p/Qk3nMgw9zBnDe.jpg'
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
                    <div className="col-md-3">
                        <div
                            style={{
                                marginTop: '5px',
                                width: '100%',
                                maxHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                src='https://images.freekaamaal.com/post_images/1542189718.jpg'
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
                    <div className="col-md-3">
                        <div
                            style={{
                                marginTop: '20px',
                                width: '100%',
                                maxHeight: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <img
                                src='https://rukminim2.flixcart.com/image/850/1000/xif0q/e-gift-voucher/a/l/j/restaurant-anyone-zomato-100-original-imagjzwk3nzuuhzx.jpeg?q=90'
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
                </div>



            </div>
            <div className="container mb-5" >
                <p


                    style={{
                        fontWeight: 'bold',
                        fontFamily: 'Acme',
                        textAlign: 'center', // Center align text
                        fontSize: '2.5rem',
                        marginTop: 10,
                        paddingTop: '10px',

                    }}
                    className='text-primary'

                >
                    Contact Us
                </p>


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
                                src={process.env.PUBLIC_URL + '/contact.gif'}
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
                                fontSize: '2rem',

                            }}
                            className={`text-primary mt-5`}

                        >
                            Send Us Your Message
                        </h1>


                        <form onSubmit={handleSubmit}>
                            <div className="form-group mt-2">
                                <label style={{ fontWeight: 'bold' }}>Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your name here.."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <label style={{ fontWeight: 'bold' }}>Your Account ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Paste your account id..."
                                    value={accountID}
                                    onChange={(e) => setAccountID(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <label style={{ fontWeight: 'bold' }}>Select Your Issue</label>
                                <select
                                    className="form-control"
                                    value={issue}
                                    onChange={(e) => setIssue(e.target.value)}
                                >
                                    <option>Payment Issue</option>
                                    <option>Quiz Issue</option>
                                    <option>Account Issue</option>
                                    <option>Change Details Request</option>
                                    <option>Others Issues</option>
                                </select>
                            </div>
                            <div className="form-group mt-2">
                                <label style={{ fontWeight: 'bold' }}>Describe Your Issue</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={issuedetail}
                                    onChange={(e) => setIssueDetail(e.target.value)}
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="contained"
                                size="medium"
                                color={btncolor}
                                disabled={load}
                                sx={{
                                    borderRadius: 30,
                                    marginTop: 2,
                                    width: window.innerWidth > 768 ? '35%' : '50%',
                                }}
                                endIcon={<SendIcon />}
                            >
                               {btntext}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home