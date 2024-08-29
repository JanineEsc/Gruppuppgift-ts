type ThreadCategory = "Thread" | "QNA"

type User = {
  userName: string,
  password: string,  
}

type Thread = {
  id: number;
  title: string;
  category: ThreadCategory;
  creationDate: string;
  description: string;
  creator: User;
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