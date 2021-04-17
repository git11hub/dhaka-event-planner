import React from 'react';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { Container } from 'react-bootstrap';

const PhotoGallery = () => {

    return (        
            <Container fluid>
                <Container>
                <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Photo Gallery</h1>
                <hr class="mt-2 mb-5" />
                </Container>

                <div class="row text-center text-lg-left">
                    <div class="col-lg-3 col-md-4 col-6">
                        <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1512241138768-69004236c1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1594709287485-447f40e8d7a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1493728695749-5a3603bd6908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1560173045-beaf11c65dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1595231712612-754e8fe9d29b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1594140700557-ba2bf8247150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <a href="#" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1594140700560-c60169ef5b9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                        </a>
                    </div>
                </div>
            </Container>        
    );
};

export default PhotoGallery;