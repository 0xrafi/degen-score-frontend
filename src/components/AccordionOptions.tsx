import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function AccordionOptions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it private?</AccordionTrigger>
        <AccordionContent>
          Yes. All calculation happens client side and scores use {" "}
          <Link
            href="https://en.wikipedia.org/wiki/Differential_privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            differential privacy.
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How is it calculated?</AccordionTrigger>
        <AccordionContent>
          Degen score is calculated by aggregating and weighting on-chain
          metrics that indicate high-risk, high-engagement crypto activities.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Why calculate my score on Aztec?</AccordionTrigger>
        <AccordionContent>
          It provides access to a private leaderboard, verifies your Ethereum
          address&apos;s activity privately, creates a privacy-preserving burner
          account for other Aztec apps, and positions you for future airdrops 🤑
          all while keeping your onchain data confidential.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
