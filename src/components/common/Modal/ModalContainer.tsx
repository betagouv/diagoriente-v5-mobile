import React from 'react';
import Modal, { ModalProps } from '@material-ui/core/Modal';
import Reset from 'components/common/Rest/Rest';
import closeButton from 'assets/svg/closeX.svg';
import useStyles from './styles';

interface IProps extends ModalProps {
  open: boolean;
  handleClose?: () => void;
  onReset?: () => void;
  children: React.ReactElement;
  backdropColor: string;
  colorIcon: string;
  size?: number;
  title?: string;
  ZIndex?: number;
  height?: number;
}

const ModalContainer = ({
  open,
  handleClose,
  backdropColor,
  colorIcon,
  children,
  size,
  height,
  onReset,
  title,
  ZIndex,
  ...rest
}: IProps) => {
  const classes = useStyles({ backdropColor, size, height });
  return (
    <Modal
      style={{ zIndex: ZIndex ? ZIndex : 200 }}
      open={open}
      onClose={handleClose}
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      BackdropProps={{ className: classes.backdrop }}
      {...rest}
    >

      <div className={classes.modalContainer}>
        <div className={classes.modal}>
     
          <div className={classes.modalContainerBody}>{children}</div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContainer;
