import React from 'react';
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  Icon,
} from '@material-ui/core';

function CreateFolderBtn(props) {
  const { onSubmit, onInputChangeHandler } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Icon id="add-folder-btn" onClick={handleClickOpen}>
        <i className="fas fa-folder-plus"></i>
      </Icon>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create new folder</DialogTitle>
        <DialogContent>
          <DialogContentText>
            to create new directory fill the input below and press `create` button
          </DialogContentText>

          <TextField
            onChange={onInputChangeHandler}
            margin="dense"
            id="name"
            autoFocus
            name="file"
            label="folder name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <button className="btn btn-primary" onClick={onSubmit}>
            CREATE
          </button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateFolderBtn;
