import "../App.css";
export default function Home() {
    return (
        <div className="home">
                <div className="home_left">
                    <img src="/logo.svg" alt="" className="icon"/>
                    <h1>BEMUHEN</h1>
                </div>
                <div className="home_right">
                    <div className="home_right container">
                        <p>work collection</p>
                        <div className="home_right card">
                            <h1>New Arrivals</h1>
                            <h4 className="text_muted">SUMMER COLLECTION</h4>
                            <p>
                                Welcome to bemuhen. A family store since 1994. We hope you like these new projects. For purchases should go to "PRODUCTS".
                                Welcome to bemuhen. A family store since 1994. We hope you like these new projects. For purchases should go to "PRODUCTS".
                            </p>
                        </div>
                    </div>
                    <div className="home_right footer">
                        <h3>EVENTS</h3>
                        <div>
                            <h4>
                                MAIL: aalanschlegel@gmail.com
                            </h4>
                            <h4>
                                MAIL: aalanschlegel@gmail.com
                            </h4>
                            <h4>
                                MAIL: aalanschlegel@gmail.com
                            </h4>
                            <h4>
                                MAIL: aalanschlegel@gmail.com
                            </h4>
                        </div>
                    </div>
                </div>
        </div>
    );
}