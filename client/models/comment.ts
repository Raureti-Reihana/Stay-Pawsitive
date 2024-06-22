export interface CommentData {
  postId: number;
  id:     number;
  name:   string;
  email:  string;
  body:   string;
}

export interface Comment extends CommentData {
  id: number
}