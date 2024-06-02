import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


export function AuthorizationForm()
{

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [language, setLanguage] = useState('');
    const [about, setAbout] = useState('');



    return(
        <div className="col-12 col-md-6 p-3 justify-content-center card-form">
            <div className='row gy-2'>


            <Form>
                <Form.Group className="mb-2" controlId="userId">
                <Form.Label htmlFor="userId">User id</Form.Label>
                    <Form.Control
                        type="text"
                        id="userId"
                        value={userId}
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="inputPassword">
                    <Form.Label htmlFor="inputPassword">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword"
                        aria-describedby="passwordHelpBlock"
                        value={password}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers
                    </Form.Text> 
                </Form.Group>

                <Form.Group className="mb-2" controlId="userName">
                    <Form.Label htmlFor="userName">Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="userName"
                        value={name}
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="address">
                    <Form.Label htmlFor="address">Address</Form.Label>
                    <Form.Control
                        type="text"
                        id="address"
                        value={address}
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="country">
                    <Form.Label htmlFor="country">Country</Form.Label>
                    <Form.Select aria-label="Default select example" id='country'>
                        <option> Please select a country</option>
                        <option value="1">Ukraine</option>
                        <option value="2">USA</option>
                        <option value="3">Poland</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-2" controlId="zipCode">
                    <Form.Label htmlFor="zipCode">ZIP Code</Form.Label>
                    <Form.Control
                        type="number"
                        id="zipCode"
                        value={zipCode}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Sex</Form.Label>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Male"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                        </div>
                    ))}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Language</Form.Label>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="English"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Non English"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                        </div>
                    ))}
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>About</Form.Label>
                    <Form.Control as="textarea" rows={3} />
            </Form.Group>

            </Form>

                <div className='col-12 text-center'>
                    <button type='submit' className='btn btn-warning px-5'>Отправить</button>
                </div>


            </div>
            

            

            {/* <label className='pe-2'> ZIP Code </label>
            <input type='number' value={zipCode}></input>

            <label className='pe-2'> Email </label>
            <input type='email' value={email}></input>

            <label className='pe-2'> Sex </label>
            <input type='text' value={sex}></input>

            <label className='pe-2'> Language </label>
            <input type='text' value={language}></input>

            <label className='pe-2'> About </label>
            <textarea value={about}></textarea> */}

        </div>
    )
}
