"use client";

import { useState } from "react";

import { Record } from "@/types/record";
import { Leaderboard } from "@/api/leaderboard";

export default function Records({ records }: { records: Record[] }) {
  const [allRecords, setAllRecords] = useState(records);

  const refresh = async () => {
    try {
      const res = await Leaderboard.getAllRecords();
      setAllRecords(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={refresh} className="underline">
        Refresh
      </button>
      <table className="text-left">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Score</th>
            <th>Achieved At</th>
          </tr>
        </thead>
        <tbody>
          {allRecords.map((record) => (
            <tr key={record.user_id}>
              <td>{record.user_id}</td>
              <td>{record.username}</td>
              <td>{record.score}</td>
              <td>{record.achieved_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
