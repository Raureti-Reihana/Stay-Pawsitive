export interface dogPictures {
  message: string
  status: string
}

export interface DogsProps {
  currentDog: string;
  setCurrentDog: (url: string) => void;
}

export interface CommentsProps {
  currentDog: string;
  commentsMap: Record<string, string[]>;
  setCommentsMap: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
}