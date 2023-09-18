import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
} from "@material-tailwind/react";
import { useState } from "react";

import { useTranslation } from "react-i18next";

const DeleteTaskModal = ({ task, openDeleteTaskModal, handleOpenDeleteTaskModal, onDelete }) => {
  // Set up internationalization using react-i18next
  const { t } = useTranslation("common");

  return (
    <div>
      <Dialog
        open={openDeleteTaskModal}
        size="xs"
        handler={handleOpenDeleteTaskModal}
      >
        <DialogHeader className="text-lg">{t("delete_confirmation")}</DialogHeader>
        <DialogBody divider className="text-sm">
          {t("delete_task_title")} : <span className="font-extrabold">{task.title}</span> ?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="outlined"
            color="red"
            className="mr-1"
            onClick={handleOpenDeleteTaskModal}
          >
            <span>{t("cancel")}</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => onDelete(task.id)}>
            <span>{t("confirm")}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

const UpdateTaskModal = ({ task, openUpdateTaskModal, handleOpenUpdateTaskModal, onUpdate }) => {
  // Set up internationalization using react-i18next
  const { t } = useTranslation("common");

  const [updateTaskName, setUpdateTaskName] = useState("") 

  const handleChangeTaskName = (event) => {
    setUpdateTaskName(event.target.value)
  }

  return (
    <div>
      <Dialog
        open={openUpdateTaskModal}
        size="xs"
        handler={handleOpenUpdateTaskModal}
      >
        <DialogHeader className="text-lg">{t("update_confirmation")}</DialogHeader>
        <DialogBody divider className="text-sm">
          <Input 
            label={t("task_name")} 
            onChange={handleChangeTaskName} 
            value={updateTaskName} 
          ></Input>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="outlined"
            color="red"
            className="mr-1"
            onClick={handleOpenUpdateTaskModal}
          >
            <span>{t("cancel")}</span>
          </Button>
          <Button 
            variant="gradient" 
            color="green" 
            onClick={() => {
                onUpdate(task.id, updateTaskName)
                handleOpenUpdateTaskModal()
              }
            }
            disabled={updateTaskName.trim() !== "" ? false : true}
          >
            <span>{t("confirm")}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export {
  DeleteTaskModal,
  UpdateTaskModal
}
