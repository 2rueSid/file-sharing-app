import React from 'react';

function CreateFilesBtn(props) {
  const { onChangeHandler } = props;

  return (
    <div className="header-add-btn">
      <label className="btn btn-primary">
        <input type="file" name="file" onChange={onChangeHandler} />+ Add files
      </label>
    </div>
  );
}

export default CreateFilesBtn;
