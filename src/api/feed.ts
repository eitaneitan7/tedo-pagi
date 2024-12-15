import axios from 'axios';
import type { FeedResponse } from '../types/feed.types';

/**
 * Fetch feed data from server using skip-based pagination.
 *
 * @param skip The offset for pagination (e.g. 0, 6, 12, etc.)
 * @returns The feed response with items + hasMore flag
 */
export async function fetchFeed(skip = 0): Promise<FeedResponse> {
  const url = `https://backend.tedooo.com/hw/feed.json`;
  const response = await axios.get<FeedResponse>(url);
  return response.data;
}

/**
 * Example "like" function placeholder.
 */
export async function likePost(postId: string) {
  return { success: true };
}

/**
 * Example "unlike" function placeholder.
 */
export async function unlikePost(postId: string) {
  return { success: true };
}
