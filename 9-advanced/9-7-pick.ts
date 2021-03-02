{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // have to pick keys from T
  // type Pick<T, K extends keyof T> = {
  //   [P in K]: T[P];
  // };

  type VideoMetaData = Pick<Video, "id" | "title">;

  // function getVideo(id: string): Video {
  //   return {
  //     id,
  //     title: "video",
  //     url: "https://..",
  //     data: "byte-data..",
  //   };
  // }

  // function getVideoMetaData(id: string): VideoMetaData {
  //   return {
  //     id,
  //     title: "title",
  //   };
  // }
}
