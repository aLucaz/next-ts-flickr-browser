import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Browser() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const {tag} = router.query;

  useEffect(() => {
    if (tag) {
      setSearchTerm(tag as string);
    }
  }, [tag]);

   const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm && searchTerm.trim() !== '') {
      await router.push(`/tag/${encodeURIComponent(searchTerm)}`);
    }
  }

  const handleKeyPress = async (event: any) => {
    if (event.key === 'Enter' && searchTerm && searchTerm.trim() !== '') {
      event.preventDefault();
      await handleSearch();
    }
  };

  return (
    <Paper
      component="form"
      sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%'}}
    >
      <InputBase
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        sx={{ml: 1, flex: 1}}
        placeholder="Search by tag... 👀"
      />
      <p style={{fontSize: '12px', fontStyle: 'italic', textAlign: 'center'}}>
        Enter your keywords separated by space
      </p>
      <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={handleSearch}>
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}
