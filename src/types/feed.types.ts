export interface FeedItem {
    id: string;
    username: string; 
    shopName: string;
    text: string;
    images: string[];
    likes: number;
    comments: number;
    didLike: boolean; 
    avatar: string;
    shopId: string; 
    premium: boolean;
  }
  
  
  export interface FeedResponse {
    data: FeedItem[];
    hasMore: boolean;
  }
  