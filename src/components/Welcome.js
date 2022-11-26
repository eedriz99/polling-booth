import React from 'react'
import ballotImg from '../images/ballotImg.png';
import './Welcome.css'

const Welcome = () => {
    return(
        <div className='container'>


            <section className='text-section'>
                <h1>
                Welcome to your ASSONIEC polling unit 
                <em> Eedriz_</em>
                </h1>
                <p>
                    Please endeavor to vote the right candidate, as they will be your voice and representative.
                </p>
{/* 
                <ul className='instructionList'>
                    <h3> Instructions </h3>

                </ul> */}

                <a href='#' className='btn'>Go to the polling booth </a>


            </section>
            <section className='image-section'>
                <img src={ ballotImg } className= "ballotImg"/>
            </section>
        </div>
    )
}

export default Welcome;