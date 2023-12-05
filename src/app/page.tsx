import TypeGuardExample from "./TypeGuardExample";
import { Task, Note } from "./types";

export default function Home() {
  const items: (Task | Note)[] = [
    {
      type: "task",
      id: 1,
      title: "Complete assignment",
      completed: false,
    },
    {
      type: "note",
      id: 2,
      content: "Meeting at 3 PM",
    },
    {
      type: "task",
      id: 3,
      title: "Buy groceries",
      completed: true,
    },
    {
      type: "note",
      id: 4,
      content: "Call John regarding project",
    },
  ];

  return <TypeGuardExample items={items} />;
}
