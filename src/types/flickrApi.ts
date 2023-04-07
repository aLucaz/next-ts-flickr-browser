export interface Photo {
  id: string;
  title: string;
  ownername: string;
  url_c: string;
  tags: string;
}

export interface PhotoSearchReq {
  tags: string;
  sort: string;
  safe_search: number;
}