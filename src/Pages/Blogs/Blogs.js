import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h3 className='my-4'>Difference between authorization and authentication</h3>
            <div className='d-flex'>
                <div className='border border-1 p-3'>
                    <h6 >Authentication</h6>
                    Authentication is the process of verifying user,Who wants to access an application
                    <br></br>
                    <br></br>
                    User can see and change(partially) authentication
                    <br></br>
                    <br></br>
                    Authentication is the first step of a good identity and access management process.
                </div>
                <div className='border border-1 p-3'>
                    <h6>Authorization</h6>
                    Authorization is the process of verifying the what specific applications, files, and data a authentic user can access.
                    <br></br>
                    <br></br>

                    User can't see and change(partially) authorization
                    <br></br>
                    <br></br>
                    Authorization always takes place after authentication.
                </div>
            </div>
            <div className="questTwo p-3">
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    1.Firebase helps to implement authentication system easily. It is easily sign in able in any platform.
                    <br></br>
                    2.FirebaseUI provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users.
                    <br />
                    3.Its security system is very strong.As a result it is very reliable.
                    <br />
                    4.Fast Implementation.
                </p>
                <h6>The top ten User Authentication and Access Management platforms include:</h6>
                <p>
                    1Prove MFA
                    <br />
                    2. DUO Access
                    <br />
                    3 HID Global IAM <br />
                    4. ESET Secure Authentication <br />
                    5. Ping Identity <br />
                    6. TypingDNA Verify 2FA <br />
                    7.Thales SafeNet Trusted Access <br />
                    8. ManageEngine ADSelfService Plus <br />
                    9. Entrust Identity Enterprise <br />
                    10. Okta Adaptive Multi-Factor Authentication
                </p>

            </div>

            <div className="questThree p-3">

                <h4>What other services does firebase provide other than authentication?</h4>
                <h6>There are many services which Firebase provides, Most useful of them are:</h6>
                <p>
                    Cloud Firestore. <br />
                    Cloud Functions.<br />
                    Authentication.<br />
                    Hosting.<br />
                    Cloud Storage.<br />
                    Google Analytics.<br />
                    Predictions.<br />
                    Cloud Messaging<br />
                </p>
            </div>
        </div>
    );
};

export default Blogs;