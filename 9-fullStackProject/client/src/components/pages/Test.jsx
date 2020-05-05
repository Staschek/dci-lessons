import React, { useState, useEffect } from 'react';

function Test() {
  const path1 = `    <polygon
      id='cross'
      fill='#D8D8D8'
      points='336.459118 444.52644 668.226166 445.316773 336.56034 447.29629 333.983628 890.650299 333.727267 447.399741 5.68434189e-14 445.314763 333.727267 444.46029 333.995941 0'
    ></polygon>`;
  const path2 = `<path
      d='M627.973098,0.0412275276 C634.069655,0.164121663 638.530552,3.99526457 638.530552,9.10176528 C638.530552,12.6269549 638.530552,278.775946 638.530552,445.320314 C638.530552,445.398052 638.530552,574.700519 638.530552,576.622016 C638.530552,582.833535 524.079822,862.7062 520.228295,870.839257 C516.376768,878.972314 505.76345,890.65 494.558591,890.65 C490.148728,890.65 419.071719,890.65 334.288014,890.65 C203.647907,890.65 40.4645409,890.65 38.4889706,890.65 C35.2312813,890.65 31.3835805,888.07341 31.3835805,882.888088 C31.3835805,879.274772 30.7117416,610.976831 30.3043863,445.318304 C30.127163,373.247141 30,320.435206 30,317.57864 C30,308.156139 155.621154,8.7283242 152.36576,16.3716224 C149.110366,24.0149207 158.169452,0.0412275276 177.381172,0.0412275276 C184.815982,0.0412275276 253.065733,0.0520497296 334.300327,0.0366074808 C462.977779,0.0121466064 624.235869,-0.0341073777 627.973098,0.0412275276 Z'
      id='path'
      fill='#F8F4F0'
    ></path>`;
  let [path, setPath] = useState(path1);

  console.log(typeof path, path);

  useEffect(() => {
    let criss = document.getElementById('crossnpath');
    criss.innerHTML = path;
  }, [path]);

  const onSvgClick = () => {
    setPath(() => (path === path1 ? path2 : path1));
    return path;
  };

  const consFunc = () => {
    console.log(path);
  };

  return (
    <div>
      <div className='tilt_bg'>
        <svg width='609px' height='890px' viewBox='0 0 609 891' version='1.1'>
          <title>path</title>
          <g id='Artboard' transform='translate(-535.000000, -80.000000)'>
            <g id='crossnpath' transform='translate(505.000000, 80.000000)'></g>
          </g>
        </svg>
        <div className='tilt_div'>
          <div className='row'>
            <div className='col' onClick={onSvgClick}></div>
            <div className='col'></div>
          </div>
          <div className='row'>
            <div className='col'></div>
            <div className='col'></div>
          </div>
        </div>
      </div>

      <p>&copy; All Rights are reserved for Staschek</p>
    </div>
  );
}

export default Test;
