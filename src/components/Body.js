import '../style/Body.scss'
import Footer from './Footter'
const Body = () => {

    return (
        <div className="Body-Container" >
            <div className='wrap-content1'>
                <div className='Content01'>

                    <div className='Content01-left'>
                        <p>
                            Rocket's people are experts in many fields, from Marketing to IT, from an
                            artist to a video creator, but all share a single passion: Gaming. We are working
                            toward the best games to share that passion with millions of players around the world.
                        </p>
                    </div>
                    <div className='Content01-right' draggable={true}>
                    </div>
                </div>
                <div className='Content02'>

                    <div className='Content02-left' draggable={true}>

                    </div>
                    <div className='Content02-right' >
                        <p>
                            In Rocket, there is no boss-worker boundary.
                            Everyone has a voice, and no one is left behind. Constant communication and mutual learning are how we keep a dynamic, active environment for all.
                        </p>
                    </div>
                </div>
                <div className='Content03'>

                    <div className='Content03-left'>
                        <p>
                            We believe that success will come automatically when we help others gain success. For that reason, we always work as teams and value people’s contributions even the slightest.
                            Sometimes, a small idea can make an outstanding result.
                        </p>
                    </div>
                    <div className='Content03-right' draggable={true}>

                    </div>
                </div>
            </div>
            <div className='wrap-content2'>
                <div className='content-wrap-content2-up'>
                    <div className='content-wrap-content2-up01'>
                        <p>Are you ready to succeed together?</p>
                    </div>
                    <div className='content-wrap-content2-up02'>
                        <div className='div01'>
                            <p className='p01'>Unity Developer</p>
                            <p className='p02'>Number: 5</p>
                            <p className='p03'>Details</p>
                        </div>
                        <div>
                            <p className='p01'>HTML5/Cocos2dx Developer</p>
                            <p className='p02'>Number: 5</p>
                            <p className='p03'>Details</p>
                        </div>
                        <div>
                            <p className='p01'>Game Designer</p>
                            <p className='p02'>Number: 1</p>
                            <p className='p03'>Details</p>
                        </div>
                        <div>
                            <p className='p01'>2D/3D Artist</p>
                            <p className='p02'>Number: 2</p>
                            <p className='p03'>Details</p>
                        </div>
                        <div>
                            <p className='p01'>UA Marketing</p>
                            <p className='p02'>Number: 2</p>
                            <p className='p03'>Details</p>
                        </div>
                        <div>
                            <p className='p01'>Video Creative</p>
                            <p className='p02'>Number: 1</p>
                            <p className='p03'>Details</p>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Body