import axios, { AxiosResponse } from "axios";

import { Record } from "@/types/record";

const http = axios.create({
  baseURL: "https://venzjyuyd9.execute-api.us-east-1.amazonaws.com/dev",
});

async function getAllRecords(): Promise<AxiosResponse<Record[]>> {
  const res = await http.get("/leaderboard");
  return res;
}

async function createRecord({
  username,
  score,
}: {
  username: string;
  score: number;
}) {
  const res = await http.post("/leaderboard", { username, score });
  return res;
}

export const Leaderboard = {
  getAllRecords,
  createRecord,
};
