import {useEffect, useState} from "react";
import {callInterestingnessGetList} from "@/pages/fetcher/callInterestingnessGetList";
import {Container, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Browser from "@/pages/components/Browser";
import PhotoCard from "@/pages/components/PhotoCard";
import ScrollToTopButton from "@/pages/components/ScrollToTopButton";
import {Photo} from "@/types";

const HeaderStickyGrid = styled(Grid)(() => ({
  height: '15vh',
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export default function Home() {
  const [interestingList, setInterestingList] = useState([]);
  // @ts-ignore
  useEffect(() => {
    return async () => {
      let photoList = await callInterestingnessGetList()
      console.log(photoList)
      setInterestingList(photoList)
    };
  }, []);


  return (
    <Container>
      <Grid container minHeight={180} justifyContent={"center"} alignItems={"center"} spacing={2}>
        <HeaderStickyGrid item xs={10} md={8}>
          <Browser setInterestingList={setInterestingList}/>
        </HeaderStickyGrid>
        {
          interestingList.map((element: Photo) => (
            <Grid item xs={10} md={8} key={element.id}>
              <PhotoCard
                ownername={element.ownername}
                title={element.title}
                url_c={element.url_c}
                tags={element.tags}
                id={element.id}
              />
            </Grid>
          ))
        }
      </Grid>
      <ScrollToTopButton/>
    </Container>
  )
}
