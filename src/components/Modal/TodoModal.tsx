import {
  Overlay,
  Modal,
  Title,
  Content,
  CloseModal,
} from "./TodoModal.styled.t.ts";

type TodoModalProps = {
  text: string;
  onClose: () => void;
};

const TodoModal = ({ text, onClose }: TodoModalProps) => {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title></Title>
        <Content>{text}</Content>
        <CloseModal onClick={onClose}>Закрыть</CloseModal>
      </Modal>
    </Overlay>
  );
};

export default TodoModal;
