import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Footer from '../components/Footer';
export default function Blog() {
  return (
    <>
    <MDBContainer className="py-5" style={{ marginTop: 80 }} >
      <MDBRow>
        <MDBCol>
          <h2 className="mb-4">CashQuiz - A Platform for Earning Money through Quizzes</h2>

          <h4>What is CashQuiz?</h4>
          <p>
            CashQuiz is an innovative platform designed to turn your knowledge and quiz-solving skills into real cash. It provides an engaging and entertaining way to earn money online. Whether you're a trivia buff or just someone looking to make some extra money, CashQuiz offers a fun and accessible opportunity. The platform presents a wide range of quizzes on various topics, from general knowledge to pop culture and more.
          </p>
          <p>
            Users can participate in these quizzes and accumulate points. These points can then be converted into real money through our easy withdrawal process. This unique concept allows you to enjoy your favorite pastime while also boosting your income.
          </p>

          <h4>How Will I Get Paid?</h4>
          <p>
            CashQuiz ensures convenient payment options for its users. Currently, we offer two payment methods: Paytm wallet cash and Google Play credits. You can choose the method that suits you best to receive your hard-earned money. We're constantly working to expand our payment options to provide even more flexibility for our users.
          </p>

          <h4>When Will the Payment Get Transferred to My Account?</h4>
          <p>
            We understand the importance of timely payments. At CashQuiz, we aim to complete transactions as quickly as possible. Rest assured, your payment will be processed and transferred to your account within a maximum of 7 days from the time you request a withdrawal. We prioritize efficiency and transparency in all our financial transactions.
          </p>

          <h4>What's Payment Status?</h4>
          <p>
            Payment status is a crucial aspect of your CashQuiz experience. It provides an overview of the progress of your financial transactions. There are three primary payment statuses: Pending, Success, and Rejected.
          </p>
          <p>
            "Pending" means that your payment request is currently under review or processing. "Success" signifies that your payment has been successfully transferred to your account. "Rejected" indicates that your payment request did not meet our criteria and was not processed. We maintain transparency and communication regarding your payment status.
          </p>

          <h4>What's the Limit of Earning?</h4>
          <p>
            At CashQuiz, your earning potential is virtually limitless. There is no fixed earning cap. The more actively you participate by answering quizzes, the more opportunities you have to increase your earnings. It's all about engaging with the platform and enjoying the rewards that come with it. So, answer as many quizzes as you can to maximize your earnings.
          </p>

          <h4>Is Cheating Allowed?</h4>
          <p>
            Cheating is strictly prohibited on CashQuiz. We maintain a fair and ethical user community. If we detect any form of cheating or fraudulent activity, we may take necessary actions, including the deletion of your account. We encourage honest and fair play on the platform, fostering a community that values integrity.
          </p>

          <h4>Why Adblockers Are Not Allowed?</h4>
          <p>
            Adblockers are not allowed on CashQuiz for an essential reason. We generate revenue through advertisements, which helps us provide the opportunity for users to earn money through quizzes. By allowing ads to be displayed, you contribute to the sustainability of our platform, ensuring that we can continue to offer rewards and maintain the platform's functionality. Your cooperation in this matter supports the CashQuiz community and its mission.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer/>
    </>

  );
}
