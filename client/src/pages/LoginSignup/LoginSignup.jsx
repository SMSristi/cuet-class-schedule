// // LoginSignup.jsx
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './LoginSignup.css';

// const LoginSignup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);

//   const history = useHistory();

//   const handleToggle = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Implement authentication logic here
//     console.log(`Email: ${email}, Password: ${password}, Mode: ${isLogin ? 'Login' : 'Signup'}`);
//     // Reset form fields after submission
//     setEmail('');
//     setPassword('');
//     // Redirect to the home page after successful login/signup
//     history.push('/');
//   };

//   return (
    <div className="login-signup-container">
//       <h2>{isLogin ? 'Login' : 'Signup'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//         <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
//       </form>

//       <p onClick={handleToggle} className="toggle-link">
//         {isLogin ? "Don't have an account? Signup here." : 'Already have an account? Login here.'}
//       </p>
//     </div>
//   );
// };

// export default LoginSignup;
