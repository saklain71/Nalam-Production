import React from 'react';

const Carosel = () => {
    return (

        <div className='mt-20'>
            <h1 className='text-4xl text-info font-bold mb-5'>Upcoming Products on List</h1>
            <div class="carousel">
                <div id="item1" class="carousel-item ">
                    <img src="https://m.media-amazon.com/images/I/71bxa7j5xIL._AC_SL1500_.jpg" class="w-80" />
                </div>
                <div id="item2" class="carousel-item ">
                    <img src="https://m.media-amazon.com/images/I/81dP+0hAyjL._AC_SL1500_.jpg" class="w-80" />
                </div>
                <div id="item3" class="carousel-item ">
                    <img src="https://m.media-amazon.com/images/I/81U5ydOuBsL._AC_SL1500_.jpg" class="w-80" />
                </div>
                <div id="item4" class="carousel-item ">
                    <img src="https://m.media-amazon.com/images/I/715xXHSzbkL._AC_SL1500_.jpg" class="w-80" />
                </div>
            </div>
            <div class="flex justify-center w-fit py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>

    );
};

export default Carosel;