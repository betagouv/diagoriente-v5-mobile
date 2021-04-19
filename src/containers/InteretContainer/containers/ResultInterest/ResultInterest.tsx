import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import ModalSelect from './Modals/SelectJob/SelectModal';
import useStyles from './styles';

const ResultInterest = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.title}>BRAVO !</div>
        </div>
        <div className={classes.description}>
          <div className={classes.text}>
            <b>Tu as sélectionné et classé 5 familles d&apos;intérêt.</b>
          </div>
          <div className={classes.text}>
            En fonction de tes expériences et de tes centres d&apos;intérêt, nous allons maintenant te proposer des
            métiers qui peuvent te plaire.
          </div>
        </div>

        <div className={classes.btnContainer} onClick={() => handleOpen()}>
          <div className={classes.suivantContainer}>
            <div className={classes.btnLabel}>Voir mes pistes métiers</div>
          </div>
        </div>
        <Link to="/experience?redirect=profil" className={classes.link}>
          <div className={classes.info}>Je n&lsquo;ai pas encore ajouté d&lsquo;expériences</div>
        </Link>
      </div>
      <Dialog open={open} keepMounted fullScreen style={{ zIndex: 300 }}>
        <ModalSelect />
      </Dialog>
    </div>
  );
};

export default ResultInterest;
