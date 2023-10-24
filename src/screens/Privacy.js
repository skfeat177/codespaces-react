import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
const PrivacyPolicy = () => {
    return (
        <>
            <Container style={{ marginTop: '80px' }}>
                <Row className="mt-4" >
                    <Col>
                        <h1>Privacy Policy</h1>
                        <p>
                            We are committed to maintaining the accuracy, confidentiality, and
                            security of your personally identifiable information ("Personal
                            Information"). As part of this commitment, our privacy policy
                            governs our actions as they relate to the collection, use, and
                            disclosure of Personal Information. Our privacy policy is based upon
                            the values set by the Canadian Standards Association's Model Code
                            for the Protection of Personal Information and Canada's Personal
                            Information Protection and Electronic Documents Act.
                        </p>
                        <h2>1. Introduction</h2>
                        <p>
                            We are responsible for maintaining and protecting the Personal
                            Information under our control. We have designated an individual or
                            individuals who are responsible for compliance with our privacy
                            policy.
                        </p>

                        <h2>2. Identifying Purposes</h2>
                        <p>
                            We collect, use, and disclose Personal Information to provide you
                            with the product or service you have requested and to offer you
                            additional products and services we believe you might be interested
                            in. The purposes for which we collect Personal Information will be
                            identified before or at the time we collect the information.
                        </p>

                        <h2>3. Consent</h2>
                        <p>
                            Knowledge and consent are required for the collection, use, or
                            disclosure of Personal Information except where required or
                            permitted by law. Providing us with your Personal Information is
                            always your choice.
                        </p>

                        <h2>4. Limiting Collection</h2>
                        <p>
                            The Personal Information collected will be limited to those details
                            necessary for the purposes identified by us. With your consent, we
                            may collect Personal Information from you in person, over the
                            telephone, or by corresponding with you via mail, facsimile, or the
                            Internet.
                        </p>

                        <h2>5. Limiting Use, Disclosure, and Retention</h2>
                        <p>
                            Personal Information may only be used or disclosed for the purpose
                            for which it was collected unless you have otherwise consented, or
                            when it is required or permitted by law.
                        </p>

                        <h2>6. Accuracy</h2>
                        <p>
                            Personal Information will be maintained in as accurate, complete,
                            and up-to-date form as is necessary to fulfill the purposes for which
                            it is to be used.
                        </p>

                        <h2>7. Safeguarding Customer Information</h2>
                        <p>
                            Personal Information will be protected by security safeguards that
                            are appropriate to the sensitivity level of the information.
                        </p>

                        <h2>8. Openness</h2>
                        <p>
                            We will make information available to you about our policies and
                            practices with respect to the management of your Personal
                            Information.
                        </p>

                        <h2>9. Customer Access</h2>
                        <p>
                            Upon request, you will be informed of the existence, use, and
                            disclosure of your Personal Information, and will be given access to
                            it. You may verify the accuracy and completeness of your Personal
                            Information, and may request that it be amended, if appropriate.
                        </p>

                        <h2>10. Handling Customer Complaints and Suggestions</h2>
                        <p>
                            You may direct any questions or inquiries with respect to our privacy
                            policy or our practices by contacting [Contact Information].
                        </p>

                        <h2>Additional Information</h2>
                        <p>
                            <strong>Cookies</strong>
                            <br />
                            A cookie is a small computer file or piece of information that may
                            be stored in your computer's hard drive when you visit our websites.
                            We may use cookies to improve our website’s functionality and in
                            some cases, to provide visitors with a customized online experience.
                        </p>
                        <p>
                            <strong>Other Websites</strong>
                            <br />
                            Our website may contain links to other third-party sites that are not
                            governed by this privacy policy. Although we endeavor to only link to
                            sites with high privacy standards, our privacy policy will no longer
                            apply once you leave our website.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
