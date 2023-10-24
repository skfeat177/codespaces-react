import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
const TermsOfUse = () => {
    return (
        <>
        <Container style={{ marginTop: '80px' }}>
            <h1>Terms of Use</h1>
            <p>
                By using the CashQuiz platform, you agree to the following terms of use:
            </p>
            <ol>
                <li>Your points on CashQuiz hold no monetary value.</li>
                <li>All points are subject to termination at any time.</li>
                <li>Users must be at least 13 years old to use the platform.</li>
                <li>Users are responsible for the security of their accounts.</li>
                <li>Accounts may be suspended or terminated for violating our policies.</li>
                <li>Any form of cheating or fraudulent activity is strictly prohibited.</li>
                <li>Users must not use ad-blockers while using CashQuiz to support our platform's sustainability.</li>
                <li>Payments are processed within a maximum of 7 days from the time of withdrawal request.</li>
                <li>Content on CashQuiz may be subject to copyright protection.</li>
                <li>We reserve the right to modify the terms of use at any time. Users will be notified of any changes.</li>
                <li>By using CashQuiz, you acknowledge and agree to our Privacy Policy.</li>
            </ol>
            <p>
                If you do not agree with these terms, please refrain from using the CashQuiz platform.
            </p>
        </Container>
            <Footer/>
            </>
    );
}

export default TermsOfUse;
