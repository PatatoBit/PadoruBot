import axios from "axios";

type Result = {
  media: Array<{
    gif: {
      url: string;
    };
  }>;
};

type Results = {
  results: Result[];
};

export default async function getPadoru() {
  const res = await axios.get<Results>(
    `https://g.tenor.com/v1/random?q=padoru&key=LIVDSRZULELA&limit=50&media_filter=minimal`
  );

  return await res;
}
