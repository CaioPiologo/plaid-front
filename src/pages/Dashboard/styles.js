import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      position: 'inherit',
      margin: 'auto',
      width: '100%',
      '&.Mui-expanded': {
        margin: 'auto',
      },
      '&.Mui-disabled': {
        backgroundColor: 'transparent',
      },
      '& .MuiAccordionDetails-root': {
        flexDirection: 'column',
      },
    },
    summary: {
      minHeight: 48,
      justifyContent: 'left',
      padding: '0 2px',
      '&.Mui-expanded': {
        minHeight: 48,
      },
      '& .MuiAccordionSummary-content': {
        flex: '0 1 auto',
        '&.Mui-expanded': {
          margin: '12px 0',
        },
      },
      '& .MuiIconButton-root': {
        flex: '0 0 auto',
        justifyContent: 'left',
        padding: '8px',
      },
    },
    icon: {
      color: '#18191b',
      height: 24,
      width: 24,
    },
  })
);
