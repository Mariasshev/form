import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export function AuthorizationForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [language, setLanguage] = useState('');
  const [about, setAbout] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name === '' || userId === '' || password === '' || address === '' ||
      zipCode === '' || email === '' || sex === '' || language === '' || about === '' || country === ''
    ) {
      setError('Все поля должны быть заполнены');
      alert('error!!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Введите корректный email');
    } else {
      setError('');
      alert(`Отправлено имя: ${name}, email: ${email}`);
    }
  }

  return (
    <div className="col-12 col-md-6 p-3 justify-content-center card-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="userId">User id</Form.Label>
          <Form.Control
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label htmlFor="inputPassword">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label htmlFor="userName">Name</Form.Label>
          <Form.Control
            type="text"
            id="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label htmlFor="country">Country</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Please select a country</option>
            <option value="Ukraine">Ukraine</option>
            <option value="USA">USA</option>
            <option value="Poland">Poland</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label htmlFor="zipCode">ZIP Code</Form.Label>
          <Form.Control
            type="number"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sex</Form.Label>
          <div className="mb-3">
            <Form.Check
              inline
              label="Male"
              name="sex"
              type="radio"
              id="inline-radio-1"
              value="Male"
              checked={sex === 'Male'}
              onChange={(e) => setSex(e.target.value)}
            />
            <Form.Check
              inline
              label="Female"
              name="sex"
              type="radio"
              id="inline-radio-2"
              value="Female"
              checked={sex === 'Female'}
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Language</Form.Label>
          <div className="mb-3">
            <Form.Check
              inline
              label="English"
              name="language"
              type="checkbox"
              id="inline-checkbox-1"
              value="English"
              checked={language === 'English'}
              onChange={(e) => setLanguage(e.target.value)}
            />
            <Form.Check
              inline
              label="Non English"
              name="language"
              type="checkbox"
              id="inline-checkbox-2"
              value="Non English"
              checked={language === 'Non English'}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <Form.Label>About</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </Form.Group>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='col-12 text-center'>
          <button type='submit' className='btn btn-warning px-5'>Отправить</button>
        </div>
      </Form>
    </div>
  );
}
