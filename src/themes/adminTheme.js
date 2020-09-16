const styles = (theme) => ({
  header: {
    'text-align': 'center',
    width: '100%',
    margin: '5% auto 5% auto',
    font: '400 30px Poppins, sans-serif',
    color: '#1f3556',
  },
  headerMore: {
    'text-align': 'center',
    width: '100%',
    margin: '1% auto 5% auto',
    font: '400 30px Poppins, sans-serif',
    color: '#1f3556',
  },
  headerView: {
    'text-align': 'center',
    width: '100%',
    margin: '2% auto 2% auto',
    font: '400 30px Poppins, sans-serif',
    color: '#1f3556',
  },
  headerLess: {
    'text-align': 'center',
    width: '100%',
    margin: '1% auto -4% auto',
    font: '400 25px Poppins, sans-serif',
    color: '#1f3556',
  },
  headerLesser: {
    'text-align': 'center',
    width: '100%',
    margin: '1% auto 0% auto',
    font: '400 25px Poppins, sans-serif',
    color: '#1f3556',
  },
  headerLeast: {
    'text-align': 'center',
    width: '100%',
    margin: '4% auto -3% auto',
    font: '400 20px Poppins, sans-serif',
    color: '#1f3556',
  },
  paddingR: { padding: '0px 10px 0px 0px' },
  paddingLR: { padding: '0px 10px 0px 10px' },
  formControl: {
    margin: '0px 0px 15px 0px',
    width: '70%',
  },
  formContainer: {
    'text-align': 'center',
    width: '100%',
    margin: '-2px auto 15px auto',
    position: 'relative',
  },
  formContainerQuestion: {
    'text-align': 'center',
    width: '100%',
    margin: '5% auto 15px auto',
    position: 'relative',
  },
  formContainerVideo: {
    marginTop: '-20px',
  },

  grayPreview: {
    margin: '1.5% 0px 0px 0px',
    padding: '0px 10px 0 10px',
    font: '400 30px Poppins, sans-serif',
    color: 'gray',
  },
  preview: {
    margin: '1.5% 0px 0px 0px',
    padding: '0px 10px 0 10px',
    font: '400 30px Poppins, sans-serif',
    color: '#1f3556',
    '&:hover': {
      color: '#64add9',
    },
  },
  previewTitle: {
    font: '400 20px Poppins, sans-serif',
    color: '#1f3556',
    marginTop: '-50px auto 0px auto',
    'text-align': 'center',
  },
  clickedPreview: {
    margin: '1.5% 0px 0px 0px',
    padding: '0px 10px 0 10px',
    font: '400 30px Poppins, sans-serif',
    color: '#64add9',
    '&:hover': {
      color: '#1f3556',
    },
  },
  sectionVideoContainer: {
    position: 'relative',
    padding: ' 30px 0 56.25% 0',
    marginBottom: '-20px',
  },
  sectionVideo: {
    'text-align': 'center',
    margin: 'auto',
    width: '90%',
    height: '90%',
    'border-radius': '5px',
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  sectionImageContainer: {
    'text-align': 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  sectionImage: {
    'text-align': 'center',
    width: '92%',
    'border-radius': '7px',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: '-10px',
  },
  inputControl: {
    margin: '0px auto 15px auto',
    width: '50%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlIconSelector: {
    margin: '0px auto 15px auto',
    width: '20%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlQuestion: {
    margin: '0px auto 15px auto',
    width: '100%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlLink: {
    margin: '0px auto 10px 50px',
    'text-align': 'center',
    width: '50%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlTextContent: {
    margin: '10px auto 0px auto',
    'max-height': 500,
    width: '100%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  inputControlContentDescription: {
    margin: '20px auto -10px auto',
    'max-height': 500,
    width: '100%',
    font: '500 10px Poppins, sans-serif',
    color: '#1f3556',
  },
  previewDescription: {
    font: '300 12px Poppins, sans-serif',
    color: '#1f3556',
    padding: '0px 10% 0px 10%',
    margin: '-1% 0px 0px 0px',
    'text-align': 'left',
  },
  helperText: {
    color: '#1f3556',
  },
  input: {
    color: '#1f3556',
  },
  cssLabel: {
    color: '#1f3556',
    '&.Mui-focused': {
      color: '#1f3556',
    },
    cssOutlinedSelect: {
      '&$cssFocused $notchedOutline': {
        borderColor: `#1f3556 !important`,
        color: '#1f3556',
      },
    },
  },
  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#1f3556 !important',
  },
  menu: { color: 'blue' },
  adminButtonContainer: {
    padding: '0px 0px 10px 0px',
    margin: '0% 0px -0% 0px',
    width: '100%',
    'text-align': 'center',
  },
  adminButton: {
    font: '300 12px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '50%',
    padding: '10px 40px 10px 40px',
    margin: '0px 2% 4% 2%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  adminButtonDialog: {
    font: '300 16px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '7px',
    padding: '10px 20px 10px 20px',
    margin: '0px 0px 0% 0%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  adminButtonEdit: {
    font: '300 12px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '70%',
    padding: '10px 40px 10px 40px',
    margin: '0px 2% 4% 2%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  adminButtonPreviewAgain: {
    font: '300 12px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '70%',
    padding: '10px 0px 10px 0px',
    margin: '-1% 2% 4% 2%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },

  adminButtonAdd: {
    font: '300 16px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '30%',
    padding: '10px 0px 10px 0px',
    margin: '0px 15% 3% 15%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  adminButtonAddMarginLess: {
    font: '300 16px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '30%',
    padding: '10px 0px 10px 0px',
    margin: '-10px 15% 3% 15%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  adminButtonView: {
    font: '300 18px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '10%',
    padding: '10px 0px 10px 0px',
    margin: '0px 15% 3% 15%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  adminButtonPreview: {
    font: '300 18px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '20%',
    padding: '10px 0px 10px 0px',
    margin: '0px 15% 3% 15%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  squareButtons: {
    font: '300 40px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '40%',
    padding: '120px 20px 120px 20px',
    margin: '4% 2% 4% 2%',
    'text-transform': 'capitalize',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  downloadButton: {
    font: '300 40px Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '30%',
    padding: '40px 0px 40px 0px',
    margin: '0px 2% 4% 2%',
    'text-transform': 'capitalize',
    'text-decoration': 'none',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  dialogContent: { margin: '5px 0px -5px 0px' },
  downloadButtonExtended: {
    font: '300 200% Poppins, sans-serif',
    backgroundColor: '#1f3556',
    color: '#fff',
    'border-radius': '25px',
    width: '25%',
    padding: '40px 10px 40px 10px',
    margin: '0px 4% 4% 4%',
    'text-transform': 'capitalize',
    'text-decoration': 'none',
    '&:hover': {
      backgroundColor: '#457b9d',
    },
  },
  downloadButtonLink: {
    color: '#fff',
    'text-decoration': 'none',
  },
  statisticsHeader: {
    'text-align': 'center',
    width: '100%',
    margin: '5% auto 10% auto',

    font: '400 40px Poppins, sans-serif',
    color: '#1f3556',
  },
  downloadIcon: { 'font-size': '30px', margin: ' 0px 4px -4px 0px ' },
  welcomeMessage: {
    margin: '5% 2% 4% 2%',
    font: '400 40px Poppins, sans-serif',
    'text-align': 'center',
    color: '#1f3556',
  },
  paper: {
    width: '27%',
    marginTop: '5%',
    marginBottom: '3%',
    overflowX: 'auto',
  },
  paperView: {
    width: '40%',
    marginTop: '5%',
    marginBottom: '3%',
    overflowX: 'auto',
  },
  paperViewRealm: {
    width: '25%',
    marginTop: '5%',
    marginBottom: '3%',
    overflowX: 'auto',
  },
  table: {
    minWidth: '35%',
  },
  tableHeader: { font: '500 18px Poppins, sans-serif' },
  tableCell: {
    font: '400 16px Poppins, sans-serif',
    margin: '0% -10px 0% -10px',
  },
  tableCellType: { font: '400 30px Poppins, sans-serif', 'font-size': '50px' },
  checkBoxIcon: {
    color: '#1f3556',
    padding: '0px 12px 0px 0px',
  },
  addSectionResourceIcon: {
    color: '#1f3556',
    'font-size': '50px',
  },
  removeSectionResourceIcon: {
    color: '#1f3556',
    'font-size': '35px',
  },
  addSectionViewIcon: {
    'font-size': '26px',
    marginTop: '-.5%',
    marginRight: '.5%',
  },
  editSectionPreviewIcon: {
    'font-size': '20px',
    marginTop: '-.5%',
    marginRight: '2%',
  },
  previewSectionPreviewIcon: {
    'font-size': '18px',
    marginRight: '1%',
  },
  viewSectionDeleteIcon: {
    color: '#e92f26',
    'font-size': '26px',
    marginTop: '9%',
  },
  viewSectionIcon: {
    color: '#1f3556',
    'font-size': '26px',
    marginTop: '6%',
  },
  noDecoration: { 'text-decoration': 'none' },
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

export default styles;
