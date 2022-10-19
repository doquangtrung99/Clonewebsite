import logo from '../images/logoROCKET.svg'
import '../style/Navigation.scss'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const [array] = useState(['VI', 'EN'])
    const [language, setLanguage] = useState('EN')
    const [language1, setLanguage1] = useState('VI')

    const changelanguage = () => {
        if (language1 === array[0]) {
            setLanguage1(array[1])
            setLanguage(array[0])
        } else {
            setLanguage1(array[0])
            setLanguage(array[1])
        }
    }

    useEffect(() => {
        let a = document.getElementById('02').getAttribute('class')

        console.log(a)

        let b = document.getElementById('03')
        if (a === "active") {
            b.classList.remove('active')
            b.classList.add('inactive')
        }
        if (a === "inactive") {
            b.classList.remove('inactive')
            b.classList.add('active')
        }
    })
    return (
        <div className="navigation-container" >
            <div className='navigation1'>
                <div className='Logo'>
                    <img src={logo} alt='text' />
                </div>
                <div className='navigation'>

                    <NavLink

                        to="/"
                        end
                        id='02'
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        Home
                    </NavLink>
                    <div>News</div>
                    <div>Rocket's Life</div>
                    <div>Play With Us</div>
                    {/* <NavLink
                        to="/workwithus"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}

                    >
                        Work With Us
                    </NavLink> */}
                    <a id='03' href='/workwithus' className=""
                    >Work With Us</a>
                    <div>Publish With Us</div>

                </div>
                <div className='something'>
                    <div className='dropdown'>
                        <span >{language} <div style={{ userSelect: 'none' }} className='arrow'></div> </span>

                        <div className='content-dropdown'>
                            <div onClick={() => changelanguage()}>{language1}</div>
                        </div>
                    </div>
                    <div className='icon'><i className="fas fa-search" ></i></div>
                </div>


            </div>
        </div>
    )
}

export default Navigation