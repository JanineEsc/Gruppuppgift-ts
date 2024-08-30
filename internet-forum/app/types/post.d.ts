type ThreadCategory = "Thread" | "QNA"

type User = {
  userName: string,
  password: string,  
}

type Thread = {
  id: string;
  title: string;
  content: string;
  category: ThreadCategory;
  creationDate: string;
  creator: User;
<<<<<<< HEAD
  comments: Comment[]; 
=======
  timestamp: string;
  
>>>>>>> Albert
}

type QNAThread = Thread & {
  category: "QNA";
  isAnswered: boolean;
  commentAnswerId?: number;
}

type Comment = {
  id: number;
  thread: number;
  content: string;
  creator: User;
}