import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextFieldStyled, Wrapper } from "../styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { TEditPostRequest, TPost, TAddPostRequest } from "@/utils/types";
import TButonComponent from "../t-button.tsx/t-button.component";

type TFormData = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function DialogFormComponent({
  publication,
  handleEditPost,
  handleAddPost,
}: {
  publication?: TPost;
  handleEditPost?: (data: TEditPostRequest, publication: TPost) => void;
  handleAddPost?: (data: TAddPostRequest) => void;
}) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm<TFormData>({
    mode: "onChange",
    defaultValues: {
      title: publication?.title,
      body: publication?.body,
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<TFormData> = (
    data: TEditPostRequest
  ) => {
    if (handleEditPost && publication) {
      handleEditPost(data, publication);
      handleClose();
    }
    if (handleAddPost) {
      const addPostData = {
        title: data.title,
        body: data.body,
        userId: 1
      }
      handleAddPost(addPostData);
      handleClose();
    }
  };

  return (
    <Wrapper>
      {publication ? (
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
      ) : (
        <TButonComponent onClick={handleClickOpen} />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { width: "500px" } }}
      >
        <DialogTitle>Editar post</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} id="edit-form">
            <div>
              <label
                for="title"
                class="block mt-5 text-sm font-large text-gray-900 dark:text-gray-400"
              >
                Title
              </label>
              <TextFieldStyled
                autoFocus
                margin="dense"
                id="title"
                type="text"
                fullWidth
                variant="standard"
                {...register("title", { required: "Title is required" })}
              />
            </div>
            <div>
              <label
                for="body"
                class="block mb-2 mt-5 text-sm font-large text-gray-900 dark:text-gray-400"
              >
                Body
              </label>
              <textarea
                id="body"
                {...register("body", { required: "Title is required" })}
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your body..."
              ></textarea>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button form={"edit-form"} type={"submit"}>
            edit
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
}
