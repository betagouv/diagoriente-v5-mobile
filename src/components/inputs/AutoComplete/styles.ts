import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { error: boolean }>((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    margin: '15px px 0px 0px',
    // [theme.breakpoints.down(480)]: {
    //   margin: '0px 0px 0px 40px',

    // },
    // [theme.breakpoints.down(330)]: {
    //   margin: '0px 0px 0px 21px',

    // }
    '@media not all and (min-resolution:.001dpcm)': {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
      margin: '15px -18px 0px 0px',
        }
    
  },
gridItem:{
  '& .MuiGrid-grid-xs-12':{
    flexBasis:'40%'
  },
      [theme.breakpoints.down(450)]: {
        '& .MuiGrid-grid-xs-12':{
          flexBasis:'60%'
        },
    }
},
  dropDown: {
    padding: '0px !important',
    height: 300,
    width: 228,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
  },
  input: {
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 4,
    },
    width: 229,
    '& .MuiAutocomplete-listbox': {
      backgroundColor: 'red !important',
    },
    '& .MuiInputBase-root': {
      height: 35,
      width: 229,
      background: '#FFFFFF',
      border: (props) => `1px solid ${props.error ? theme.palette.error.main : '#C9C9C7'}`,
      borderRadius: 5,
      margin: '9px 0px',
      padding: '0px 5px 0px 5px',
      '&:hover:not(:focus-within)': {
        borderColor: (props) => (props.error ? theme.palette.error.main : '#6B6B6A'),
      },
      '&:focus-within': {
        borderColor: (props) => (props.error ? theme.palette.error.main : theme.palette.primary.main),
      },
      '& .MuiInputBase-input': {
        padding: 0,
        flex: '1 1 0%',
        height: 'auto',
        fontSize: 14,
        borderRadius: 5,

        '&::placeholder': {
          color: '#C9C9C7',
          fontSize: 14,
        },
        '& .MuiOutlinedInput-input': {
          paddingLeft: '5px',
        },
      },
      '& .MuiOutlinedInput-input:-webkit-autofill': {
        padding: '7px 0px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: 0,
      },
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: 5,
      marginLeft: 5,
    },
    ' &:-webkit-autofill': {
      animationName: '$autofill !important',
      animationFillMode: 'both',
      animationDuration: 1,
    },
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: '100%',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-end',
    },
  },
  label: {
    marginRight: 14,
    fontWeight: 'bold',
    [theme.breakpoints.down(450)]: {
          paddingTop:30

  }
  },
  wrapperInput: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    '& .MuiFormControl-root-269': {
      '& .MuiOutlinedInput-root': {
        padding: '0 important',
      },
    },
  },
  logo: {
    paddingLeft: 15,
  },
  requiredInput: {
    color: theme.palette.success.main,
  },
  inputRoot: {
    height: 37,
    padding: '0px 0px 2px 15px !important',
  },

  inputPadding: {
    paddingRight: '35px !important',
  },
}));
