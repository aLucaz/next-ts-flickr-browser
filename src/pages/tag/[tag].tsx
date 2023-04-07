import {useEffect, useState} from "react";
import {callInterestingnessGetList} from "@/fetcher/callInterestingnessGetList";
import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useRouter} from "next/router";
import {CallSearchPhotosByTag} from "@/fetcher/callSearchPhotosByTag";
import Home from "@/components/Home";

const HeaderStickyGrid = styled(Grid)(() => ({
  height: '15vh',
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export default function TagQueryHome() {
  const [photoList, setPhotoList] = useState([]);
  const router = useRouter();
  const {tag} = router.query;

  useEffect(() => {
    async function fetchData() {
      if (tag) {
        const result = await CallSearchPhotosByTag(tag as string)
        setPhotoList(result);
      } else {
        const result = await callInterestingnessGetList();
        setPhotoList(result);
      }
    }

    fetchData().then(() => console.log("Tag fetched."))
  }, [tag]);

  return (
    <Home photoList={photoList}/>
  )
}
