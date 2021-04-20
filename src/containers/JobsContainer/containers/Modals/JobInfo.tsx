import React from 'react';
import timeLogo from 'assets/svg/time.svg';
import reseauLogo from 'assets/svg/reseau.svg';
import { useHistory } from 'react-router-dom';
import { useDidMount } from 'common/hooks/useLifeCycle';
import { useJobs } from 'common/requests/jobs';
import Spinner from 'components/Spinner/Spinner';
import Arrow from 'assets/svg/arrow';
import useStyles from './styles';

interface IProps {
  job: any;
  handleClose: () => void;
}

const JobInfo = ({ job, handleClose }: IProps) => {
  const history = useHistory();
  const classes = useStyles();
  const [callJobs, calJobsState] = useJobs();
  useDidMount(() => {
    if (job.secteur.length !== 0) {
      callJobs({
        variables: { secteur: job.secteur[0].id },
      });
    }
  });
  const onNavigate = (id: string) => {
    history.push(`/jobs/job/${id}`);
    handleClose();
  };
  return (
    <div className={classes.contentModal}>
      <div className={classes.back} onClick={handleClose}>
        <Arrow color="#DB8F00" height="15" width="9.5" className={classes.arrow} />
        <div className={classes.textBack}>Retour à la page précédente</div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.TextTitle}>Niveau d’accès :</div>
        <div className={classes.textAccessibility}>{job.accessibility}</div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.TextTitle}>L&lsquo;offre et la demande :</div>
        <div className={classes.offreContainer}>
          <div className={classes.offreConatinerItems}>
            <div>
              <img src={timeLogo} alt="" />
              <span className={classes.offresTitle}>La semaine dernière</span>
            </div>
            <div>
              <b>22</b> offres pour <b>550</b> demandeurs d&lsquo;emploi
            </div>
          </div>
          <div className={classes.offreConatinerItems}>
            <div>
              <img src={reseauLogo} alt="" />
              <span className={classes.offresTitle}>Sur les 12 derniers mois, en moyenne :</span>
            </div>
            <div>
              <b>4</b> offres pour <b>10</b> demandeurs d&lsquo;emploi
            </div>
          </div>
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.infoContainer}>
          <div className={classes.similaireJob}>
            <div className={classes.TextTitle}>Métiers similaires :</div>
            <div className={classes.metiersContainer}>
              <div>{calJobsState.loading && <Spinner />}</div>
              {calJobsState.data?.myJobs?.slice(0, 6).map((i) => (
                <div key={i.id} className={classes.metierItem} onClick={() => onNavigate(i.id)}>
                  {i.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className={classes.containerBtn}>
        <Button onClick={handleClose} className={classes.btnCLose}>
          Fermer
        </Button>
      </div> */}
    </div>
  );
};
export default JobInfo;
