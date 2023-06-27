// Responsive Pages
import { useMediaQuery } from "react-responsive";

import { TaskItem } from "./TaskItem";
import { useTranslation } from "react-i18next";

// Creating TaskList component
export function TaskList({ tasks, onDelete }) {
  // Use responsive media queries to determine if device is desktop/laptop or tablet/mobile
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isMobile = useMediaQuery({query: "(max-width: 480px)"})
  const tasksQuantity = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;

  // Set up internationalization using react-i18next
  const { t } = useTranslation("common");

  return (
    // Using flexbox to align list items vertically
    <ul
      className={`flex flex-col text-center ${isTabletOrMobile ? "m-3" : "m-auto"} max-736px`}
    >
      <div className="flex items-center justify-between mb-6">
        <p className={`text-blue-600 font-bold ${isMobile ? "text-xs" : "text-sm"}  items-center gap-1.5 flex`}>
          {t("created_tasks")}

          <span className="text-white text-xs bg-blue-gray-900 px-2 py-1 rounded-full">
            {tasksQuantity}
          </span>
        </p>

        <p className={`text-green-600 font-bold ${isMobile ? "text-xs" : "text-sm"} items-center gap-1.5 flex`}>
          {t("completed_task")}

          <span className="text-white text-xs bg-blue-gray-900 px-2 py-1 rounded-full">
            {completedTask} {t("of")} {tasksQuantity}
          </span>
        </p>
      </div>

      {/* Mapping over each task in array */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}
