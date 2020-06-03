import React from 'react';

import '../../css/components/error404.css';

const error404 = () => (
  <div className="not-found parallax">
    <div className="sky-bg"></div>
    <div className="wave-7"></div>
    <div className="wave-6"></div>
    
    <div className="wave-5"></div>
    
    <div className="wave-lost wrp">
      <span>4</span>
      <span>0</span>
      <span>4</span>
    </div>
    
    <div className="wave-4"></div>
    
    <div className="wave-boat">
      <img className="boat" src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg" alt="Boat" />
    </div>
    
    <div className="wave-3"></div>
    <div className="wave-2"></div>
    <div className="wave-1"></div>
    <div className="wave-message">
      <p>Contenido no encontrado, favor de intentar más tarde!</p>
    </div>
  </div>
);

export default error404;
