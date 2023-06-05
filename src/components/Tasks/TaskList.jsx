// CSS
import styles from "./tasks.module.css";

export function TaskList({ tasks }) {
  return (
    <ul className="flex flex-col text-center">
      {tasks.map((task, index) => (
        <li key={index}>
            <div className={`${styles.taskList} mb-1 flex items-center justify-center`}>
                <span> {task.title} </span>
                <span> {task.date} </span>
            </div>
        </li>
      ))}
    </ul>
  );
}
