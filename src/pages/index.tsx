import {useEffect, useState} from "react";
import {callInterestingnessGetList} from "@/pages/fetcher/callInterestingnessGetList";
import Home from "@/pages/components/Home";

export default function FlickrBrowserIndex() {
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
    <Home photoList={interestingList}/>
  )
}
