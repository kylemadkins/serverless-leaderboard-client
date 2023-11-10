"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Leaderboard } from "@/api/leaderboard";

export default function Add() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);

  const createRecord = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      await Leaderboard.createRecord({ username, score });
      router.push("/");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <main>
      <form onSubmit={createRecord} className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          placeholder="jane_doe"
          required
        />
        <label htmlFor="score">Score</label>
        <input
          id="score"
          value={isNaN(score) ? "" : score}
          onChange={(evt) => setScore(evt.target.valueAsNumber)}
          placeholder="500"
          type="number"
          required
        />
        <button className="underline text-left">Save</button>
      </form>
    </main>
  );
}
