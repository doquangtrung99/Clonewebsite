import logo from '../images/logoROCKET.svg'
import '../style/Footer.scss'

const Footer = () => {
    return (
        <div className='content-wrap-content2-down'>
            <div className='content-wrap-content2-down1'>
                <div className='wrapdiv1'>
                    <div className='div1'>
                        <img src={logo} alt='text' />
                    </div>
                    <div className='div2'>
                        <p>ABOUT</p>
                        <p>OUR GAMES</p>
                        <p>SUBMIT YOUR GAMES</p>
                        <p>NEWS</p>
                    </div>
                </div>

            </div >
            <div className='content-wrap-content2-down2'>
                <div className='wrapdown'>
                    <div className='down01'>
                        <div>
                            <span className='icon'>
                                <i className="fas fa-envelope"></i>
                            </span>
                            <p>SUPPORT</p>

                        </div>
                    </div>
                    <div className='down02'>

                        <div className='down01'>
                            <div>
                                <span className='icon'>
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <p>GENERAL ENQUIRIES</p>

                            </div>
                        </div>



                    </div>
                    <div className='down03'>

                        <div className='down01'>
                            <div>
                                <span className='icon'>
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <p>JOIN OUR TEAM</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='content-wrap-content2-down3'>
                <div>
                    <div className='fb'>
                        <i className="fab fa-facebook"></i>
                    </div>
                    <div className='youtube'>
                        <i className="fab fa-youtube" ></i>
                    </div>
                    <div className='tiktok'>
                        <i className="fab fa-tiktok"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer