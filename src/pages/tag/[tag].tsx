import {useEffect, useState} from "react";
import {callInterestingnessGetList} from "@/pages/fetcher/callInterestingnessGetList";
import {Container, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Browser from "@/pages/components/Browser";
import PhotoCard from "@/pages/components/PhotoCard";
import ScrollToTopButton from "@/pages/components/ScrollToTopButton";
import {Photo} from "@/types";
import {useRouter} from "next/router";
import {CallSearchPhotosByTag} from "@/pages/fetcher/callSearchPhotosByTag";
import Home from "@/pages/components/Home";

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
    if (tag) {
      CallSearchPhotosByTag(tag as string).then((result) => {
        setPhotoList(result);
      });
    } else {
      callInterestingnessGetList().then((result) => {
        setPhotoList(result);
      });
    }
  }, [tag]);

  return (
    <Home photoList={photoList}/>
  )
}
