import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  skillContainer: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    height: 'fit-content',
    padding: '13px 20px',
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #C9C9C7',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    height: '100%',
    maxWidth: 'calc(100% - 30px)',
  },
  checkbox: {
    /* pointerEvents: 'none', */
  },
  checkboxBG: {
    backgroundColor: '#F3F2F4 !important',
  },
  openedBG: {
    backgroundColor: 'rgba(122, 230, 255, 0.2) !important',
  },
  selectedBG: {
    backgroundColor: '#7AE6FF',
  },
  selectedCheckboxBG: {
    backgroundColor: '#FFFFFF !important',
  },
  label: {
    fontSize: 16,
    lineHeight: '24px',
    color: '#424242',
    marginLeft: 20,
    maxWidth: '100%',
  },
  openedLabel: {
    fontWeight: 700,
    color: '#00B2DB',
    maxWidth: 'calc(100% - 35px)',
  },
  selectedLabel: {
    fontWeight: 700,
  },
  itemArrow: {
    width: 19,
    height: 12,
  },
  descriptionContainer: {
    width: '100%',
    height: 'fit-content',
    padding: '0px 20px 0px 60px',
    backgroundColor: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    lineHeight: '21px',
    color: '#424242',
  },
}));
