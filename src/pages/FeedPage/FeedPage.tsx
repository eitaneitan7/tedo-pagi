import React, { useEffect } from 'react';
import { useFeed } from '../../hooks/useFeed';
import InfiniteScroll from 'react-infinite-scroll-component';
import FeedItem from '../../components/FeedItem/FeedItem';
import ClipLoader from 'react-spinners/ClipLoader';
import './FeedPage.scss';

const FeedPage: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useFeed();

  // Flatten all pages into a single array of FeedItems
  const feedItems = data?.pages.flatMap((page) => page.data) || [];
  const validFeedItems = feedItems.filter((item) => item && item.id); 



  return (
    <div className="feed-page">
      {isError && <p>Error loading feed data.</p>}

      <InfiniteScroll
        dataLength={feedItems.length}
        next={() => {
          fetchNextPage();
        }}
        hasMore={Boolean(hasNextPage)}
        loader={
          <div className="feed-page__spinner">
            <ClipLoader color="#3498db" size={35} />
          </div>
        }
        endMessage={<p>No more items to load.</p>}
      >
        {feedItems.map((item) => (
          <FeedItem key={item.id} item={item} />
        ))}
      </InfiniteScroll>

      {isFetchingNextPage && (
        <div className="feed-page__spinner">
          <ClipLoader color="#3498db" size={35} />
        </div>
      )}
    </div>
  );
};

export default FeedPage;
