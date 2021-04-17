import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SideBarComponent from '../SideBarComponent/SideBarComponent';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [userImageURL, setUserImageURL] = useState(null);

    const onSubmit = data => {
        const reviewData = {
            userName: data.name,
            description: data.description,
            userImageURL: userImageURL
        };
        const url = `http://localhost:5055/addReview`;
        // console.log(eventData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0a80ef9c4775e2c334e71c2a3dfab812');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setUserImageURL(response.data.data.display_url);
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <Row>
                <Col md={3}>
                    <SideBarComponent></SideBarComponent>
                </Col>
                <Col className="mt-5" md={9}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue="" placeholder="Name" {...register("name")} />
                        <br />
                        <br />

                        <input defaultValue="" placeholder="Description" {...register("description")} />
                        <br />
                        <br />

                        <input name="image" type="file" onChange={handleImageUpload} />
                        <br />
                        <br />

                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </>
    );
};

export default Review;