import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tag from "./Tag";
import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Photo} from "@/types";

const ResponsiveCardContent = styled(CardContent)(({theme}) => ({
  height: '7rem',
  [theme.breakpoints.up('md')]: {
    height: '6vh',
  },
}));

const TagsGrid = styled(Grid)(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center"
  },
}));

export default function PhotoCard({title, url_c, ownername, tags}: Photo) {
  return (
    <Card style={{
      position: "relative",
      height: '40vh',
      width: '100%',
      maxWidth: '50rem',
      right: 0
    }}>
      <CardMedia
        component="img"
        image={url_c}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <ResponsiveCardContent style={{
        position: 'absolute',
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        color: '#fff',
        width: '98%',
      }}
      >
        <Grid container>
          <Grid item xs={12} md={5}>
            <div>
              <Typography variant="h6">
                {title.length < 30 ? title : title.slice(0, 20) + '...'}
              </Typography>
              <Typography variant="body1">
                By {ownername.length < 25 ? ownername : ownername.slice(0, 10) + '...'}
              </Typography>
            </div>
          </Grid>
          <TagsGrid item xs={12} md={7}>
            {
              tags ? tags.split(" ").slice(0, 3).map((tag, index) => (
                <Tag title={tag} key={index}/>
              )) : <></>
            }
          </TagsGrid>
        </Grid>
      </ResponsiveCardContent>
    </Card>
  );
};