import '../style/Header.scss'
import logo1 from '../images/logo1.svg'
import logo2 from '../images/icon2.svg'
import logo3 from '../images/icon3.svg'
import logo4 from '../images/icon4.svg'
import logo5 from '../images/icon5.svg'
import logo6 from '../images/icon6.svg'
import { useEffect } from 'react'
const Header = () => {


    useEffect(() => {
        let header = document.getElementById('01')
        window.addEventListener('load', () => {
            header.style.marginTop = '0px'
            header.style.opacity = '1'
        })
    }, [])

    return (
        <>
            <div className="Container-Header" >
                <div className='Content-top'>
                    <div className='Content-up-header'>

                    </div>
                    <div id='01' className='Content-down-header' >
                        <p className='succeed'>Succeed Together!</p>
                        <p>Thinking big is good. But without a supportive team, one can hardly do big. Rocket has everthing you need to
                            <br />develop your ability and nurture your passion. So why hesitate?</p>
                        <button>
                            Job list
                        </button>
                    </div>
                </div>
                <div className='Content-bottom'>
                    <p className='content-bottom-first'>What makes you love Rocket</p>
                    <div className='content-bottom-second'>

                        <div >
                            <img src={logo1} alt='text' />
                            <div>
                                <h3>Work with giants in the field</h3>
                            </div>
                            <div>
                                <p>Facebook, Google, Unity... are our strategic partners</p>
                            </div>
                        </div>
                        <div >
                            <img src={logo2} alt='text' />
                            <div><h3>Professional training process</h3></div>
                            <div>
                                <p>Mentors with years of experience in million-dollar projects</p>
                            </div>
                        </div>
                        <div>
                            <img src={logo4} alt='text' />
                            <div>
                                <h3>Attractive salary with limitless benefits</h3>

                            </div>
                            <div>
                                <p>Incentives from successful projects, tea break every day, gifts on official holidays, and more.</p>

                            </div>
                        </div>
                        <div>
                            <img src={logo3} alt='text' />
                            <div>
                                <h3>Generous vacations, at least 3 times a year</h3>

                            </div>
                            <div>
                                <p>Rocket-ers go round the world

                                </p>

                            </div>
                        </div>
                        <div>
                            <img src={logo5} alt='text' />
                            <div>
                                <h3>Work-life balance with 100% support</h3>

                            </div>
                            <div>
                                <p>Football team, Swimming club, Billiards contests, Dancing club, etc.</p>

                            </div>
                        </div>

                        <div>
                            <img src={logo6} alt='text' />

                            <div>
                                <h3>Awesome working environment</h3>

                            </div>
                            <div>
                                <p>All necessity are provided to push creativity and inspiration</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header