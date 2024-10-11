import { Button } from "@/components/ui/button";

export default function AztecCalculateScore() {
  return (
    <div className="bg-[#333333] rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold font-mono mb-4">Calculate Your Score on Aztec</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
        <div>
          <p className="text-sm text-[#b3b3b3] font-mono mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia,
            nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.
          </p>
        </div>
        <div>
          <p className="text-sm text-[#b3b3b3] font-mono mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget
            aliquam nisl nisl vel nisl. Sed euismod, nisl vel tincidunt lacinia,
            nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.
          </p>
        </div>
        <Button
          type="submit"
          className="col-span-2 bg-[#4d4d4d] hover:bg-[#666666] text-[#f2f2f2] font-bold font-mono py-2 px-4 rounded-md"
        >
          Calculate Score On Aztec
        </Button>
      </div>
    </div>
  );
}
