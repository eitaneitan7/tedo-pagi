import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchFeed } from '../api/feed';
import type { FeedResponse } from '../types/feed.types';

/**
 * A custom hook for fetching the feed data using infinite pagination.
 */
export function useFeed() {
  return useInfiniteQuery({
    queryKey: ['feed'], // The unique key for this query
    queryFn: async ({ pageParam = 0 }) => {
      return await fetchFeed(pageParam);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length * 6 : undefined;
    },
  });
}
