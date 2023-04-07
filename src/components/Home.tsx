import {Container, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Browser from "@/components/Browser";
import PhotoCard from "@/components/PhotoCard";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import {Photo} from "@/types";

const HeaderStickyGrid = styled(Grid)(() => ({
  height: '15vh',
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export default function Home({photoList}: any) {
  return (
    <Container>
      <Grid container minHeight={180} justifyContent={"center"} alignItems={"center"} spacing={2}>
        <HeaderStickyGrid item xs={10} md={8}>
          <Browser/>
        </HeaderStickyGrid>
        {
          photoList.map((element: Photo) => (
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
