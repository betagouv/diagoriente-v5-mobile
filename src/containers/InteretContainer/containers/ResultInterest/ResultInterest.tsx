import React from 'react';
import ModalContainer from 'components/common/Modal/ModalContainer';
import Dialog from '@material-ui/core/Dialog';
import Button from 'components/button/Button';
import { Link } from 'react-router-dom';
import ModalSelect from './Modals/SelectJob/SelectModal';
import useStyles from './styles';

const ResultInterest = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.title}>BRAVO !</div>
        </div>
        <div className={classes.description}>
          <div className={classes.text}>
            <b>Tu as sélectionné et classé les familles d&lsquo;intérêts.</b>
          </div>
          <div className={classes.text}>
            En fonction de tes expériences et de tes centres d&lsquo;intérêt, nous allons maintenant te proposer des
            métiers qui peuvent te plaire.
          </div>
        </div>
        <div className={classes.btnContainer}>
          <Button className={classes.btn} onClick={() => handleOpen()}>
            <div className={classes.btnLabel}>Je découvre mes pistes métiers</div>
          </Button>
        </div>
        <Link to="/experience?redirect=profil" className={classes.link}>
          <div className={classes.info}>Je n&lsquo;ai pas encore ajouté d&lsquo;expériences</div>
        </Link>
      </div>
      <Dialog open={open} keepMounted fullScreen style={{ zIndex: 2000 }}>
        <ModalSelect />
      </Dialog>
    </div>
  );
};

export default ResultInterest;
