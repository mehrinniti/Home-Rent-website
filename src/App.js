import logo from './logo.svg';
import './App.css';

import { useEffect, useRef, useState } from 'react';
import Homepage from './pages/Homepage/Homepage';
import Review from './pages/Review/Review';
import { Route, BrowserRouter as Router, Switch, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/layout/Main';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Homepage></Homepage> },
        { path: '/home', element: <Homepage></Homepage> },
        { path: '/about', element: <div>About Page</div> },
        { path: '/review', element: <Review></Review> },
      ]
    }



  ])



  const [clientReviews, setClientReviews] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    fetch('http://localhost:7000/reviews')
      .then(res => res.json())
      .then(data => setClientReviews(data));
  }, [])

  const handleAddReview = e => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newReview = { name: name, email: email }

    // send data to the server
    fetch('http://localhost:7000/reviews', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const addedReview = data;
        const newReviews = [...clientReviews, addedReview];
        setClientReviews(newReviews);
      })

    nameRef.current.value = '';
    emailRef.current.value = '';


    e.preventDefault();
  }


  return (
    <div className="App">
      {/* <Reviews></Reviews>
      <SingleReview></SingleReview> */}

      {/* <Homepage></Homepage> */}

      {/* 
      <h1>Found reviews: {clientReviews.length} </h1>

      <form onSubmit={handleAddReview}>
        <input type="text" ref={nameRef} placeholder='Name' />
        <input type="email" ref={emailRef} placeholder="Your Email" name="" id="" />
        <input type="submit" value="Post" />
      </form>

      {
        clientReviews.map(clientReview => <li key={clientReview.id}>{clientReview.id} : {clientReview.name} {clientReview.email}</li>)
      } */}






      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
