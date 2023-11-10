import Link from "next/link";

import Records from "@/components/records";
import { Leaderboard } from "@/api/leaderboard";
import { Record } from "@/types/record";

export default async function Home() {
  let records: Record[] = [];

  try {
    const res = await Leaderboard.getAllRecords();
    records = res.data;
  } catch (err) {
    console.log(err);
  }

  return (
    <main>
      <Records records={records} />
      <Link href="/add" className="underline">
        Add Record
      </Link>
    </main>
  );
}
