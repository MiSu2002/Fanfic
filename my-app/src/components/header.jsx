import React from 'react';

function Header(){
    return(
        <div>
            <section className='header'>
            <div className='xs-img container-fluid p-0 d-block d-sm-none'>
            <div className="heading">
      <div className='row'>
        <div className='col logo ms-3 ms-lg-4 mb-2 mt-2'>Fanfic</div>
        <div className='col'>
            </div></div>
            </div></div>

            <div className='sm-img container-fluid p-0 vh-100 d-none d-sm-block d-md-none'>
            <div className="heading">
      <div className='row'>
        <div className='col logo ms-3 ms-lg-4 mb-2 mt-2'>Fanfic</div>
        <div className='col'>
            </div></div>
            </div></div>

            <div className='md-img container-fluid p-0 d-none d-md-block d-lg-none'>
            <div className="heading">
      <div className='row'>
        <div className='col logo ms-3 ms-lg-4 mb-2 mt-2'>Fanfic</div>
        <div className='col'>
            </div></div>
            </div></div>

            <div className='lg-img container-fluid p-0 d-none d-lg-block d-xl-none'>
            <div className="heading">
      <div className='row'>
        <div className='col logo ms-3 ms-lg-4 mb-2 mt-2 '>Fanfic</div>
        <div className='col'>
            </div></div>
            </div></div>

            <div className='xl-img container-fluid p-0 vh-100 d-none d-xl-block'>
            <div className="heading">
        <div className='logo mb-2 mt-2 text-center'>Fanfic</div>
            </div>
            </div>

            <div className='content'></div>

            </section>
        </div>
    )
}

export default Header;