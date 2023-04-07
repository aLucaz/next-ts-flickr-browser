import {Button} from "@mui/material";
import {styled} from '@mui/material/styles';

interface TagProps {
  title: string;
}

const ResponsiveButton = styled(Button)(({theme}) => ({
  height: '3vh',
  fontSize: '11px',
  color: '#fff',
  borderColor: '#fff',
  marginRight: '10px',
  marginTop: '5px',
  [theme.breakpoints.up('md')]: {
    height: '2rem',
  },
}));

export default function Tag({title}: TagProps) {
  return (
    <ResponsiveButton
      variant="outlined"
    >
      {title}
    </ResponsiveButton>
  )
}