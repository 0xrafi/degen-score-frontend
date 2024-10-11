import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import StarIcon from "./StarIcon";

export default function Leaderboard() {
  return (
    <div className="bg-[#333333] rounded-lg shadow-lg p-6">
    <h2 className="text-xl font-bold font-mono mb-4">Leaderboard</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-mono">Rank</TableHead>
          <TableHead className="font-mono">Address</TableHead>
          <TableHead className="font-mono">Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono">1</TableCell>
          <TableCell className="font-mono">0x123...abc</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="text-[#4d4d4d] font-bold font-mono">
                9.8
              </span>
              <StarIcon className="w-4 h-4 text-[#4d4d4d]" />
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">2</TableCell>
          <TableCell className="font-mono">0x456...def</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="text-[#4d4d4d] font-bold font-mono">
                9.5
              </span>
              <StarIcon className="w-4 h-4 text-[#4d4d4d]" />
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">3</TableCell>
          <TableCell className="font-mono">0x789...ghi</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="text-[#4d4d4d] font-bold font-mono">
                9.2
              </span>
              <StarIcon className="w-4 h-4 text-[#4d4d4d]" />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
  );
}
