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
  const limit = 50;

  const { data, status } = await axios.get<Results>(
    "https://g.tenor.com/v1/search?q=padoru&key=LIVDSRZULELA&limit=" + limit
  );

  return { data, status };
}
