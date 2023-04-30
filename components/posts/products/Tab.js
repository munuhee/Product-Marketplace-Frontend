import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faChevronLeft, faChevronRight, faFileAlt, faFileCode, faFileImage, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faImage, faObjectGroup, faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

const Tab = () => {
  const tabRef = useRef(null);

  const scrollLeft = () => {
    tabRef.current.scrollLeft -= 100;
  };

  const scrollRight = () => {
    tabRef.current.scrollLeft += 100;
  };

  return (
    <div className="flex items-center">
      <button
        className="focus:outline-none"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div
        ref={tabRef}
        className="flex overflow-x-auto space-x-4"
        style={{ minWidth: '300px', overflowX: 'hidden' }}
      >
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faImage} className="mr-2" />
          JPG
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
          AI
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
          PDF
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faFileImage} className="mr-2" />
          PNG
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faFileCode} className="mr-2" />
          SVG
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faCamera} className="mr-2" />
          Photos
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faFileImage} className="mr-2" />
          PSD
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faObjectGroup} className="mr-2" />
          Vectors
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
          <FontAwesomeIcon icon={faWindowMaximize} className="mr-2" />
          Mockups
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
        <FontAwesomeIcon icon={faImage} className="mr-2" />
        Background
        </button>
        <button className="flex-shrink-0 flex items-center justify-center w-32 h-10 border focus:outline-none rounded-md">
        <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
        Text Effects
        </button>
        </div>
        <button
            className="focus:outline-none"
            onClick={scrollRight}
        >
        <FontAwesomeIcon icon={faChevronRight} />
        </button>
        </div>
        );
        };

export default Tab;
