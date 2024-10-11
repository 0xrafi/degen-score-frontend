import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddressCalculator() {
  return (
    <div className="bg-[#333333] rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold font-mono mb-4">
        Degen Score Calculator
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="address" className="text-sm text-[#b3b3b3] font-mono">
            Enter an Ethereum address to calculate its degen score.
          </Label>
          <Input
            id="address"
            type="text"
            placeholder="0x..."
            className="bg-[#4d4d4d] text-[#f2f2f2] font-mono py-2 px-4 rounded-md w-full"
          />
        </div>
        <Button
          type="submit"
          className="bg-[#4d4d4d] hover:bg-[#666666] text-[#f2f2f2] font-bold font-mono py-2 px-4 rounded-md"
        >
          Calculate Score
        </Button>
      </div>
    </div>
  );
}
