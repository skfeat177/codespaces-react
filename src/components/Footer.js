import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    textAlign: 'center',
  };

  return (
    <div>
      <footer className="text-center text-white bg-primary" style={{position:"relative",bottom:0,width:"100%"}}>
        <div className="container">
          <section className="mt-2 ">
            <div className="row text-center d-flex justify-content-center pt-4 mb-3">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="/blog" className="text-white" style={{textDecoration:'none'}}>
                   Blog
                  </a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="/privacy" className="text-white" style={{textDecoration:'none'}}>
                    Privacy Policy
                  </a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="/terms" className="text-white" style={{textDecoration:'none'}}>
                   Terms of Use
                  </a>
                </h6>
              </div>
            </div>
          </section>
        </div>
        <div style={footerStyle}>
          © 2023 Copyright: <a  style={{textDecoration:'none'}} className="text-white" href="https://cashquiz.in">CashQuiz</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
