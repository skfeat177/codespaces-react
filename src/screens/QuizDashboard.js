import React from 'react';
import { Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
function QuizDashboard() {
  const navigate = useNavigate(); 
  return (
    <div style={{marginTop:80}}>
    <div className="container">
    <p


                    style={{
                        fontWeight: 'bold',
                        fontFamily: 'Acme',
                        textAlign: 'center', // Center align text
                        fontSize: '2.5rem',
                        marginTop: 10,

                    }}
                    className={`text-primary`}

                >
                    Quiz Challenges for You!
                </p>


      <div className="card mb-3" style={{ maxWidth: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + '/easy.png'}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-primary" style={{fontWeight:'bold',  fontFamily: 'Acme',}}>The First Steps of Adventure</h2>
              <h4 className="card-text text-primary mt-5" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Quiz Difficulty : <span className='text-dark' style={{fontWeight:'600'}}>Easy</span>
              </h4>
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Correct Points : <span className='text-dark' style={{fontWeight:'600'}}><span className='text-success'>+10 </span>Per Question</span>
              </h4>
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Incorrect Points : <span className='text-dark' style={{fontWeight:'600'}}><span className='text-danger'>-5 </span>Per Question</span>
              </h4>
     
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Max Points : <span className='text-dark' style={{fontWeight:'600'}}>100</span>
              </h4>  
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Bonus Tip : <span className='text-dark' style={{fontWeight:'600'}}>Skip unanswered questions after 7 seconds with no penalties.</span>
              </h4>

              <div style={{ display: 'flex', justifyContent: window.innerWidth > 768 ? 'left' : 'center' }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ borderRadius: 30, marginTop: 2,marginBottom:2 }}
                                onClick={() => {
                                  navigate(`/easyquiz`)
                                }}
                          
                            >
                                Start Easy Level
                            </Button>
                        </div>    
            </div>
          </div>
        </div>
      </div>



      <div className="card mb-3" style={{ maxWidth: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + '/medium.png'}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-primary" style={{fontWeight:'bold',  fontFamily: 'Acme',}}>Journeying Through Intermediate</h2>
              <h4 className="card-text text-primary mt-5" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Quiz Difficulty : <span className='text-dark' style={{fontWeight:'600'}}>Medium</span>
              </h4>
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Correct Points : <span className='text-dark' style={{fontWeight:'600'}}><span className='text-success'>+15 </span>Per Question</span>
              </h4>
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Incorrect Points : <span className='text-dark' style={{fontWeight:'600'}}><span className='text-danger'>-7.5 </span>Per Question</span>
              </h4>
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Max Points : <span className='text-dark' style={{fontWeight:'600'}}>150</span>
              </h4>  
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Bonus Tip : <span className='text-dark' style={{fontWeight:'600'}}>Skip unanswered questions after 7 seconds with no penalties.</span>
              </h4>

              <div style={{ display: 'flex', justifyContent: window.innerWidth > 768 ? 'left' : 'center' }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ borderRadius: 30, marginTop: 2,marginBottom:2 }}
                                onClick={() => {
                                  navigate(`/mediumquiz`)
                                }}
                          
                            >
                                Start Medium Level
                            </Button>
                        </div>    
            </div>
          </div>
        </div>
      </div>










      <div className="card mb-3" style={{ maxWidth: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + '/hard.png'}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-primary" style={{fontWeight:'bold',  fontFamily: 'Acme',}}>Beyond Limits of Proficiency</h2>
              <h4 className="card-text text-primary mt-5" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Quiz Difficulty : <span className='text-dark' style={{fontWeight:'600'}}>Hard</span>
              </h4>
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Correct Points : <span className='text-dark' style={{fontWeight:'600'}}><span className='text-success'>+20 </span>Per Question</span>
              </h4>
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Incorrect Points : <span className='text-dark' style={{fontWeight:'600'}}><span className='text-danger'>-10 </span>Per Question</span>
              </h4>
            
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Max Points : <span className='text-dark' style={{fontWeight:'600'}}>200</span>
              </h4>  
              <h4 className="card-text text-primary" style={{fontWeight:'bold',fontFamily:'Roboto'}} >Bonus Tip : <span className='text-dark' style={{fontWeight:'600'}}>Skip unanswered questions after 7 seconds with no penalties.</span>
              </h4>

              <div style={{ display: 'flex', justifyContent: window.innerWidth > 768 ? 'left' : 'center' }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ borderRadius: 30, marginTop: 2,marginBottom:2 }}
                          
                                onClick={() => {
                                  navigate(`/hardquiz`)
                                }}
                            >
                                Start Hard Level
                            </Button>
                        </div>    
            </div>
          </div>
        </div>
      </div>


    </div>
    </div>
  );
}

export default QuizDashboard;
