import {useEffect, useState} from "react";
import {callInterestingnessGetList} from "@/fetcher/callInterestingnessGetList";
import Home from "@/components/Home";

export default function FlickrBrowserIndex() {
  const [interestingList, setInterestingList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let photoList = await callInterestingnessGetList()
      setInterestingList(photoList)
    }

    fetchData().then(() => console.log("Home fetched."));
  }, []);

  return (
    <Home photoList={interestingList}/>
  )
}
