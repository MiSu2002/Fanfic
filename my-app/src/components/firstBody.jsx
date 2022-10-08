import React from 'react';

function firstBody(){
    return( 
        <div>
            <section className='body1'>
            <h1>Dive into the world of Fanfic</h1>
            <div className='feature justify-content-center d-flex'>
            <div className='violet-box'>
                <p className='featured text-center'>Featured</p>
            </div>
                <div className='feature-img justify-content-center d-flex'></div>
            </div>
            <div className='title1 d-flex justify-content-center'>Differences Between Us</div>
            <div className='paragraph d-flex justify-content-center text-center'>Can you dive into an endless loop of love and lust? <br></br>How far can you go for their love?</div>
            {/* <div className='tags d-flex justify-content-center'>
                <div className='me-5'>BL</div>
                <div className='ms-5'>romcom</div>
            </div> */}
            <div className='description d-flex justify-content-center text-center'>You, CEO of Hang Electronics, a successful businesswoman at the age of 25, had never experienced love cause of a busy schedule. You were committed not to falling in love with anyone until you found yourself engaged in an endless loop of love and lust after involving in an affair with two handsome stars from a popular boy band group.</div>
            <div className='row'>
            <div className='col-6 d-flex justify-content-end'>
            <div className='buttons'>Read Now</div>
            </div>
            <div className='col-6 d-flex justify-content-start'>
            <div className='buttons'>
                <div className='add'><p className='readlist'>Readlist</p></div>
                </div>
            </div>
            </div>
            </section>
        </div>
    
    )
}

export default firstBody;