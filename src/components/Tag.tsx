import {Button} from "@mui/material";
import {styled} from '@mui/material/styles';
import {useRouter} from "next/router";

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
  const router = useRouter();

  const handleClick = async () => {
    await router.push(`/tag/${encodeURIComponent(title)}`);
  }

  return (
    <ResponsiveButton
      variant="outlined"
      onClick={handleClick}
    >
      {title.length < 15 ? title : title.slice(0, 10) + '...'}
    </ResponsiveButton>
  )
}