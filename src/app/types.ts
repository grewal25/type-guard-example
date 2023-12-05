export interface Task {
  type: "task";
  id: number;
  title: string;
  completed: boolean;
}

export interface Note {
  type: "note";
  id: number;
  content: string;
}
