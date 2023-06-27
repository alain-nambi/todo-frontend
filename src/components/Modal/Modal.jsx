import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useTranslation } from "react-i18next";

export function DeleteTaskModal({ task, openDeleteTaskModal, handleOpenDeleteTaskModal, onDelete }) {
  // Set up internationalization using react-i18next
  const { t } = useTranslation("common");

  return (
    <div>
      <Dialog
        open={openDeleteTaskModal}
        size="xs"
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
