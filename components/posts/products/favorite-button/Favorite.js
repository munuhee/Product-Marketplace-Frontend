import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as notBookmarked } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as bookmarked } from '@fortawesome/free-solid-svg-icons';

function Favorite() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  }

  return (
    <button onClick={handleToggleFavorite}>
      <FontAwesomeIcon icon={isFavorited ? bookmarked : notBookmarked} className={isFavorited ? "text-red-500" : ""} width={20} height={20} />
    </button>
  )
}

export default Favorite
