import React, { useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage
} from 'mdb-react-ui-kit';
function WithdrawButton({ amount, method }) {
  const [btncolor, setBtnColor] = useState('btn btn-primary');
  const [btntext, setBtntext] = useState('Withdraw');
  const [load, setLoad] = useState(false);

  const apiurl = process.env.REACT_APP_BACKEND_URL;
  const accountID = localStorage.getItem('accountID');

  const withdraw = () => {
    setLoad(true);
    setBtntext('Withdrawing...');

    if (accountID) {
      fetch(`${apiurl}/getpoints?id=${accountID}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.currentPoints >= amount) {
            const updatedPoints2 = data.currentPoints - amount;
            const endpoint = `${apiurl}/payment`;
            const requestBody = {
              method: method,
              amount: amount,
            };

            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestBody),
            };

            fetch(`${endpoint}?id=${accountID}`, requestOptions)
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error(`Request failed with status: ${response.status}`);
                }
              })
              .then((data) => {
                const updateUrl = `${apiurl}/updatepoints?id=${accountID}`;
                fetch(updateUrl, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ currentPoints: updatedPoints2 }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    const requestOptions = {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    };

                    fetch(
                      `${apiurl}/paymentmail?amount=${amount}&method=${method}&accountID=${accountID}`,
                      requestOptions
                    )
                      .then((response) => {
                        if (response.ok) {
                          return response.json();
                        } else {
                          throw new Error(`Request failed with status: ${response.status}`);
                        }
                      })
                      .then((data) => {
                        console.log('Payment mail sent:', data);
                        setLoad(false);
                        setBtntext('Withdraw Request Sent');
                        setBtnColor('btn btn-success');
                        setTimeout(() => {
                            setBtnColor('btn btn-primary');
                            setBtntext('Withdraw');
                            setLoad(false);
                          }, 2000);
                      })
                      .catch((error) => {
                        console.error('Error sending payment mail:', error);
                      });
                  })
                  .catch((error) => {
                    console.error('Error updating points:', error);
                  });
              })
              .catch((error) => {
                console.error('Error requesting payment:', error);
              });
          } else {
            setLoad(false);
            setBtntext('Not Enough Points');
            setBtnColor('btn btn-danger');
          }
        })
        .catch((error) => {
          console.error('Error fetching points:', error);
        });
    }

    setTimeout(() => {
        setBtnColor('btn btn-primary');
        setBtntext('Withdraw');
        setLoad(false);
      }, 2000);
  };

  return (
    <button disabled={load} onClick={withdraw} className={btncolor}>
      {btntext}
    </button>
  );
}

export default function ProfilePage() {
    return (
        <section className="d-flex flex-wrap justify-content-center mt-4" >
            <MDBContainer className="py-5" style={{ marginTop: 60 }}>
                <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-4">
                        <MDBCard>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://www.androidp1.com/uploads/posts/2021-09/1630781158_google-play-store.webp"
                                    alt="avatar"
                                    style={{ width: '50%', marginTop: 20 }}
                                    fluid
                                />
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-muted mb-1 mt-5">
                                    Rs.10 Google Play Cash
                                </p>
                                <p style={{ fontSize: '1.2rem' }} className="text-muted mb-3">Exchange for 1000 Points</p>

                                <div className="d-flex justify-content-center mb-2">
                                <WithdrawButton amount={1000} method="Google Play" />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-4">
                        <MDBCard>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://www.androidp1.com/uploads/posts/2021-09/1630781158_google-play-store.webp"
                                    alt="avatar"
                                    style={{ width: '50%', marginTop: 20 }}
                                    fluid
                                />
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-muted mb-1 mt-5">
                                    Rs.50 Google Play Cash
                                </p>
                                <p style={{ fontSize: '1.2rem' }} className="text-muted mb-3">Exchange for 5,000 Points</p>

                                <div className="d-flex justify-content-center mb-2">
                                <WithdrawButton amount={5000} method="Google Play" />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-4">
                        <MDBCard>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://www.androidp1.com/uploads/posts/2021-09/1630781158_google-play-store.webp"
                                    alt="avatar"
                                    style={{ width: '50%', marginTop: 20 }}
                                    fluid
                                />
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-muted mb-1 mt-5">
                                    Rs.100 Google Play Cash
                                </p>
                                <p style={{ fontSize: '1.2rem' }} className="text-muted mb-3">Exchange for 10,000 Points</p>

                                <div className="d-flex justify-content-center mb-2">
                                <WithdrawButton amount={10000} method="Google Play" />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-4">
                        <MDBCard>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
                                    alt="avatar"
                                    style={{ width: '80%', marginTop: 20 }}
                                    fluid
                                />
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-muted mb-1 mt-5">
                                    Rs.10 Paytm Cash
                                </p>
                                <p style={{ fontSize: '1.2rem' }} className="text-muted mb-3">Exchange for 1000 Points</p>

                                <div className="d-flex justify-content-center mb-2">
                                <WithdrawButton amount={1000} method="Paytm Cash" />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-4">
                        <MDBCard>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
                                    alt="avatar"
                                    style={{ width: '80%', marginTop: 20 }}
                                    fluid
                                />
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-muted mb-1 mt-5">
                                    Rs.50 Paytm Cash
                                </p>
                                <p style={{ fontSize: '1.2rem' }} className="text-muted mb-3">Exchange for 5,000 Points</p>

                                <div className="d-flex justify-content-center mb-2">
                                <WithdrawButton amount={5000} method="Paytm Cash" />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="12" className="mb-4">
                        <MDBCard>
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
                                    alt="avatar"
                                    style={{ width: '80%', marginTop: 20 }}
                                    fluid
                                />
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-muted mb-1 mt-5">
                                    Rs.100 Paytm Cash
                                </p>
                                <p style={{ fontSize: '1.2rem' }} className="text-muted mb-3">Exchange for 10,000 Points</p>

                                <div className="d-flex justify-content-center mb-2">
                                <WithdrawButton amount={10000} method="Paytm Cash" />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
