import React, { useState } from 'react';
import { FeedItem as FeedItemType } from '../../types/feed.types';
import './FeedItem.scss';
// import { likePost, unlikePost } from '../../api/feed'; // if needed

interface FeedItemProps {
  item: FeedItemType;
}

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  // Manage local like state
  const [didLike, setDidLike] = useState(item.didLike);
  const [likesCount, setLikesCount] = useState(item.likes);

  const handleLike = () => {
    if (!didLike) {
      setDidLike(true);
      setLikesCount(prev => prev + 1);
      // Optionally call a likePost API
    } else {
      setDidLike(false);
      setLikesCount(prev => prev - 1);
      // Optionally call an unlikePost API
    }
  };

  return (
    <div className="feed-item">
      <div className="feed-item__header">
        <div>
          <span className="feed-item__username">{item.username}</span>
          <span className="feed-item__shopname">{item.shopName}</span>
        </div>
      </div>

      <div className="feed-item__content">
        <p className="feed-item__text">{item.text}</p>
        <div className="feed-item__images">
          {item.images.slice(0, 2).map((imgSrc, idx) => (
            <img key={idx} src={imgSrc} alt="post" />
          ))}
        </div>
      </div>

      <div className="feed-item__footer">
        <div className="feed-item__stats">
          <span>{likesCount} Likes</span>
          <span>{item.comments} Comments</span>
        </div>
        <div className="feed-item__actions">
          <button onClick={handleLike}>
            {didLike ? 'Unlike' : 'Like'}
          </button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
