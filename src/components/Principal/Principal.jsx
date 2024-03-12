import "./Principal.css"


const Principal = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                    <a href="/category/newin"><img className='img' src='src/assets/Principal/1.jpg'/></a>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                    <a href="/category/dia"><img className='img' src='src/assets/Principal/2.jpg'/></a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                    <a href="/category/noche"><img className='img' src='src/assets/Principal/3.jpg'/></a>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                    <a href="/category/abrigos"><img className='img' src='src/assets/Principal/4-7.jpg' /></a>
                </div>
            </div>
        </div>
    )
}


export default Principal;
