import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CollectionsBookmarkOutlined } from '@material-ui/icons';
import { size } from 'lodash';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

export default makeStyles((theme: Theme) =>
  createStyles({
    previousNext: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '8px 8px ',
    },
    hideLine: {
      textDecoration: 'none',
    },
    classNameTitle: {
      color: '#4D6EC5',
      fontSize: 18,
      lineHeight: '26px',
    },
  }),
);
