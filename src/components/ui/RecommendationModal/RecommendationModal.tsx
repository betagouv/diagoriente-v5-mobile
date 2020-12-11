import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ModalContainer from 'components/common/Modal/ModalContainer';
import Input from 'components/inputs/Input/Input';
import Popup from 'components/common/Popup/Popup';
import CancelButton from 'components/cancelButton/CancelButton';
import NameFormator from 'utils/NameFormator';
import { Unpacked } from 'utils/types';
import Avatar from 'components/common/AvatarTheme/AvatarTheme';
import Button from 'components/button/Button';
import NextButton from 'components/nextButton/nextButton';
import PreviousButton from 'components/previousButton/previousButton';
import { UserParcour } from 'requests/types';
import { TextField } from '@material-ui/core';
import { useForm } from 'hooks/useInputs';
import { validateEmail } from 'utils/validation';
import { useAddSkillComment } from 'requests/skillComment';
import classNames from 'utils/classNames';
import UserContext from 'contexts/UserContext';
import msg from 'assets/svg/msg.svg';
import useStyles from './styles';

interface Props {
  skill: Unpacked<UserParcour['skills']>;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSuccess?: () => void;
}
const RecommendationModal = ({ skill, open, setOpen, onSuccess }: Props) => {
  const classes = useStyles();
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [thirdOpen, setThirdOpen] = React.useState(false);
  const [openPopup, setOpenPopup] = React.useState(false);
  const [addSkillCommentCall] = useAddSkillComment();
  const { user } = useContext(UserContext);

  const [state, actions] = useForm({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      comment: '',
    },
    validation: {
      email: validateEmail,
    },
    required: ['email', 'comment'],
  });

  useEffect(() => {
    if (secondOpen) {
      actions.setValues({
        comment: `Bonjour${NameFormator(state.values.firstName)} ${NameFormator(state.values.lastName)}, \n\n${user &&
          NameFormator(user?.profile.firstName)} ${user &&
          NameFormator(
            user?.profile.lastName,
            // eslint-disable-next-line
          )} a effectué une expérience professionnelle chez vous et sollicite une recommandation de votre part. Vous pouvez l'aider en montrant que vous validez cette expérience sur Diagoriente, la plateforme pour trouver son orientation et accéder à l'emploi.\nBien cordialement,`,
      });
    }
    // eslint-disable-next-line
  }, [secondOpen]);

  const handleSecondOpen = () => {
    if (!state.values.email) {
      actions.setAllTouched(true);
      setSecondOpen(false);
    } else {
      setOpen(false);
      setSecondOpen(true);
    }
  };

  const handleThirdOpen = () => {
    if (!state.values.comment) {
      actions.setAllTouched(true);
      setThirdOpen(false);
    } else {
      setOpen(false);
      if (skill) {
        addSkillCommentCall({
          variables: {
            id: skill.id,
            firstName: state.values.firstName,
            lastName: state.values.lastName,
            email: state.values.email,
            text: state.values.comment,
          },
        });
      }

      setSecondOpen(false);

      setThirdOpen(true);
    }
  };

  const handlePreced = () => {
    setSecondOpen(false);
    setOpen(true);
    setThirdOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSecondClose = () => {
    setSecondOpen(false);
  };

  const handleThirdClose = () => {
    setThirdOpen(false);
  };

  const reset = () => {
    setOpenPopup(true);
  };

  return (
    <>
      <ModalContainer open={open} handleClose={handleClose} backdropColor="#011A5E" colorIcon="#4D6EC5">
        <div className={classes.modalContainer}>
          <div className={classes.titleContainer}>
            <div className={classes.titleModal}>DEMANDE DE RECOMMANDATION</div>
          </div>
          {skill?.theme.type === 'professional' ? (
            <span className={classes.titleThemeDone}>{skill.theme.title}</span>
          ) : (
            <Avatar
              title={skill.theme.title}
              size={94}
              titleClassName={classes.titleClassName}
              className={classes.imgContainer}
              squareContainerClassName={classes.squareContainerClassName}
            >
              <img src={skill.theme.resources?.icon} alt="" />
            </Avatar>
          )}

          <div className={classes.descriptionModal}>Je souhaite demander une recommandation à :</div>
          <form className={classes.formContainer}>
            <Input
              label="Nom :"
              name="firstName"
              value={state.values.firstName}
              onChange={actions.handleChange}
              errorText={state.touched.firstName && state.errors.firstName}
              className={classes.marginInput}
              placeholder="ex : Marie"
              inputClassName={classes.fontInput}
            />

            <Input
              label="Prénom :"
              name="lastName"
              value={state.values.lastName}
              onChange={actions.handleChange}
              errorText={state.touched.lastName && state.errors.lastName}
              className={classes.marginInput}
              placeholder="ex : Dupont"
              inputClassName={classes.fontInput}
            />

            <Input
              label="Email"
              name="email"
              placeholder="ex : mail@exemple.com "
              value={state.values.email}
              onChange={actions.handleChange}
              errorText={state.touched.email && state.errors.email}
              className={classes.marginInput}
              inputClassName={classes.fontInput}
              required
            />
            <span
              className={classNames(
                classes.hideText,
                state.touched.email && validateEmail(state.values.email) && classes.errorName,
              )}
            >
              {!state.values.email ? 'Champ requis ' : 'Email invalide'}
            </span>
          </form>
          <div className={classes.required}>
            <span className={classes.start}>* </span>
            Champs obligatoires
          </div>

          {/*           <div className={classes.btnContainerModal}>
            <Button className={classes.btn} onClick={() => handleSecondOpen()}>
              <div className={classes.btnLabel}>Suivant</div>
            </Button>
          </div> */}
          <div className={classes.previousNext}>
            <div>
              <PreviousButton deleteArrow children="Annuler" onClick={() => handleClose()} />
            </div>
            <div>
              <NextButton onClick={() => handleSecondOpen()} />{' '}
            </div>
          </div>
        </div>
      </ModalContainer>
      <ModalContainer
        onReset={reset}
        open={secondOpen}
        handleClose={handleSecondClose}
        backdropColor="#011A5E"
        colorIcon="#4D6EC5"
      >
        <div className={classes.modalContainer}>
          <div className={classes.titleContainer}>
            <div className={classes.titleModal}>DEMANDE DE RECOMMANDATION</div>
          </div>
          <Avatar
            title={skill.theme.title}
            size={94}
            titleClassName={classes.titleClassName}
            className={classes.imgContainer}
            squareContainerClassName={classes.squareContainerClassName}
          >
            <img src={skill.theme.resources?.icon} alt="" />
          </Avatar>
          <div className={classes.descriptionModal}>
            Le message pour
            {/* eslint-disable-next-line */}
            <b>{` ${NameFormator(state.values.firstName)} ${NameFormator(state.values.lastName)}`}</b> (
            {`${state.values.email}`})
          </div>
          <form className={classes.experienceContainer}>
            <TextField
              name="comment"
              value={state.values.comment}
              onChange={actions.handleChange}
              InputProps={{
                classes: {
                  input: classes.defaultValue,
                  multiline: classes.multiline,
                },
              }}
              rows={6}
              multiline
              className={classes.textArea}
              variant="outlined"
              error={state.touched.comment && state.errors.comment}
            />
            <div className={classes.message}>
              <b> Attention </b>: Tu peux modifier ou compléter ce message avant de l&apos;envoyer !
            </div>
          </form>

          {/*  <div className={classes.btnSuccModal}>
            <Button className={classes.btn} onClick={handleThirdOpen}>
              <div className={classes.btnLabel}>Suivant</div>
            </Button>
          </div>
          <div className={classes.precedbutton} onClick={handlePreced}>
            <CancelButton />
            <span> Précedent</span>
          </div> */}
          <div className={classes.previousNext}>
            <div>
              <PreviousButton
                onClick={() => {
                  handlePreced();
                }}
              />
            </div>
            <div>
              <NextButton children="J’envoie" onClick={() => handleThirdOpen()} />{' '}
            </div>
          </div>
        </div>
      </ModalContainer>
      <ModalContainer open={thirdOpen} handleClose={handleThirdClose} backdropColor="#011A5E" colorIcon="#4D6EC5">
        <div className={classes.modalContainer}>
          <div className={classes.titleContainer}>
            <div className={classes.titleModal}>DEMANDE DE RECOMMANDATION</div>
          </div>
          <Avatar
            title={skill.theme.title}
            size={94}
            titleClassName={classes.titleClassName}
            className={classes.imgContainer}
            squareContainerClassName={classes.squareContainerClassName}
          >
            <img src={skill.theme.resources?.icon} alt="" />
          </Avatar>

          <img src={msg} height={90} className={classes.iconBackground} alt=" " />

          <div className={classes.descriptionModalContainer}>
            Le message a bien été envoyé ! Une fois rédigée, sa recommandation apparaîtra dans ta carte de compétences.
          </div>

          <div className={classes.btnContainerModal}>
            <div
              onClick={() => {
                setThirdOpen(false);
                if (onSuccess) onSuccess();
              }}
            >
              <Button className={classes.btn} onClick={() => {}}>
                <div className={classes.btnLabel}>OK !</div>
              </Button>
            </div>
          </div>
        </div>
      </ModalContainer>

      <Popup open={openPopup} handleClose={handleClose}>
        <div className={classes.popupContainer}>
          <p className={classes.popupDescription}>
            Veux-tu vraiment quitter ?
            <br /> Tes modifications ne seront pas enregistrées.
          </p>
          <Button
            className={classes.incluse}
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Non, continuer
          </Button>
          <Link to="/" className={classes.linkHome}>
            Oui, abandonner et revenir à l’accueil
          </Link>
        </div>
      </Popup>
    </>
  );
};

export default RecommendationModal;
