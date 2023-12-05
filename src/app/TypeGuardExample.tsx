import React from "react";
import { Task, Note } from "./types";

function isTask(item: any): item is Task {
  return (
    item &&
    item.type === "task" &&
    "id" in item &&
    "title" in item &&
    "completed" in item
  );
}

function isNote(item: any): item is Note {
  return item && item.type === "note" && "id" in item && "content" in item;
}

function TypeGuardExample(props: { items: (Task | Note)[] }) {
  const { items } = props;

  return (
    <ul className="list-disc ml-4 mt-10">
      {items.map((item, index) => (
        <li key={index} className="mb-2 p-2 border rounded-lg shadow-md">
          {isTask(item) ? (
            <>
              <strong className="text-blue-500">Task:</strong> {item.title}{" "}
              (Completed:{" "}
              {item.completed ? (
                <span className="text-green-500">Yes</span>
              ) : (
                <span className="text-red-500">No</span>
              )}
              )
            </>
          ) : isNote(item) ? (
            <>
              <strong className="text-purple-500">Note:</strong> {item.content}
            </>
          ) : (
            "Unknown item type"
          )}
        </li>
      ))}
    </ul>
  );
}

export default TypeGuardExample;
