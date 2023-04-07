import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {CallSearchPhotosByTag} from "@/pages/fetcher/callSearchPhotosByTag";

export default function Browser({setInterestingList}: any) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    const photos = await CallSearchPhotosByTag(searchTerm);
    setInterestingList(photos);
  }

  const handleKeyPress = async (event: any) => {
    if (event.key === 'Enter') {
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
