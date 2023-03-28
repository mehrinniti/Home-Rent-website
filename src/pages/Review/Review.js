import React from 'react';
import './Review.css';
import { useEffect, useRef, useState } from 'react';

function Review(props) {
    const [clientReviews, setClientReviews] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();
    const detailRef = useRef();

    useEffect(() => {
        fetch('http://localhost:7000/reviews')
            .then(res => res.json())
            .then(data => setClientReviews(data));
    }, [])

    const handleAddReview = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const detail = detailRef.current.value;
        const newReview = { name: name, email: email, detail: detail }

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
        detailRef.current.value = '';


        e.preventDefault();
    }

    return (
        <div className='review-container'>



            <h1>Found reviews: {clientReviews.length} </h1>

            <form onSubmit={handleAddReview}>
                <input type="text" ref={nameRef} placeholder='Name' />
                <input type="email" ref={emailRef} placeholder="Your Email" name="" id="" />
                <br />
                {/* <input type="text" ref={detailRef} placeholder="Your Email" name="" id="" /> */}
                <textarea ref={detailRef} placeholder="Enter Home details" name="" id="" cols="48" rows="5"></textarea>
                <br />
                <input type="submit" value="Post" />
            </form>

            {
                clientReviews.map(clientReview => <li key={clientReview.id}>{clientReview.id} : {clientReview.name}<li>{clientReview.email}</li>  <li>{clientReview.detail}</li></li>)
            }





        </div>
    );
}

export default Review;