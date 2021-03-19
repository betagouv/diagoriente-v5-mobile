import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { bgColor?: string; height?: string; width?: string; color?: string }>(
  (theme: Theme) => ({
    btnContainer: {
      backgroundColor: (props) => props.bgColor || '#7533FF',
      height: (props) => props.height || '50px',
      width: (props) => props.width || '100%',
      boxShadow: '0px -4px 5px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnLabel: {
      color: (props) => props.color || '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
    },
  }),
);
