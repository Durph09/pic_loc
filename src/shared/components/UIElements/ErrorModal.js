
import Modal from './Modal';
import Button from '../FormElements/Button';

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error && props.error !== "The user aborted a request."}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error} {console.log(props.error)}</p>
    </Modal>
  );
};

export default ErrorModal;
