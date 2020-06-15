import React, { Component } from "react";

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadedImages: []
        }
        this.uploadImage = this.uploadImage.bind(this);
    }

    uploadImage(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                uploadedImages: [...this.state.uploadedImages, { path: reader.result, name: file.name.split(".")[0] }]
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        const images = this.state.uploadedImages.map((image) => {
            return (
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={image.path} alt="image" width="100%" height="200" />
                    <h6 className="row justify-content-center" style={{ backgroundColor: "white" }}>{image.name}</h6>
                </div>
            )
        })
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div class="btn btn-light btn-outline-dark" style={{ width: "200px", height: "50px", marginTop: "80px" }}>
                        <span className="fa fa-upload"></span> Upload <input type="file" accept="image/*"
                            style={{ cursor: "pointer", opacity: "0" }} onChange={this.uploadImage} />
                    </div>
                </div>
                <div className="row justify-content-center col-12 mt-5">
                    <div className="row col-lg-9">
                        {images}
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;