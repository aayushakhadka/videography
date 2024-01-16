import React from 'react'

const Popup = ({ imageUrl, onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-md">
          <img src={imageUrl} alt="Popup Image" className="max-w-full max-h-full" />
          <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>&times;</button>
        </div>
      </div>
    );
  };
  
//   Popup.propTypes = {
//     imageUrl:   propTypes.string.isRequired,
//     onClose: PropTypes.func.isRequired,
//   };
export default Popup
