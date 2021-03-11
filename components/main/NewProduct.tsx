import React from 'react'


class NewProduct extends React.Component {
    render(){
        return (
            <>
                <div className = "newProduct">
                    <h1>
                        <span>신상품</span>
                        <span>SubTitle</span>
                    </h1>
                    <div className="imageBoard">
                        <div>
                            <div className="card">
                                <img
                                    src = '../../static/images/dev2.jpg'
                                />
                                <div>
                                    <span>12</span>
                                </div>
                            </div>
                            <div className="card">
                                <img
                                    src = '../../static/images/dev2.jpg'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src = '../../static/images/dev2.jpg'
                                />
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <img
                                    src = '../../static/images/dev2.jpg'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src = '../../static/images/dev2.jpg'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src = '../../static/images/dev2.jpg'
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default NewProduct