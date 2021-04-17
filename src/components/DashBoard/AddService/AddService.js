import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Col, Row } from 'react-bootstrap';
import SideBarComponent from '../SideBarComponent/SideBarComponent';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            event: data.eventName,
            imageURL: imageURL
        };
        const url = `http://localhost:5055/addEvent`;
        // console.log(eventData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
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
                setImageURL(response.data.data.display_url);
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
                        <input defaultValue="" placeholder="Event Name" {...register("eventName")} />
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

export default AddService;