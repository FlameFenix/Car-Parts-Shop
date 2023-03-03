import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();

    return (
        //     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        //         <ol className="carousel-indicators">
        //             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        //             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //         </ol>
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <img className="d-block w-100" src="https://www.nanoheal.uio.no/total.png" alt="First slide" />
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100" src="https://1000logos.net/wp-content/uploads/2020/09/Repsol-Logo.png" alt="Second slide" />
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100" src="https://logos-download.com/wp-content/uploads/2016/02/Castrol_logo_2D_transparent.png" alt="Third slide" />
        //             </div>
        //         </div>
        //         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Previous</span>
        //         </a>
        //         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Next</span>
        //         </a>
        //     </div>

        <div className="home-page">
            <section className='home-articles'>
                <article className='article'>
                    <header>
                        <h2>CASTROL</h2>
                    </header>
                    <Link to='/Castrol'>
                        <img src="https://seeklogo.com/images/C/Castrol-logo-15A87BF0AA-seeklogo.com.png" alt="castrol-logo" />
                    </Link>
                </article>
                <article class="article">
                    <header>
                        <h2>REPSOL</h2>
                    </header>
                    <Link to='/Repsol'>
                        <img src="https://logosdownload.com/logo/Repsol-logo.svg" alt="respol-logo" />
                    </Link>
                </article>
                <article className='article'>
                    <header>
                        <h2>TOTAL</h2>
                    </header>
                    <Link to='/Total'>
                        <img src="https://c8.alamy.com/comp/D455M5/total-logo-as-an-app-icon-clipping-path-included-D455M5.jpg" alt="total-logo" />
                    </Link>
                </article>

            </section>

            <div className="jumbotron">
                <h1 className="display-4">Добре дошли в <Link to="/" className="home-link">Car Parts Shop</Link> </h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="#" role="button">Прочети повече</Link>
                </p>
            </div>
        </div>
    );
}