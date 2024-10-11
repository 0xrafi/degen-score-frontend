import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionOptions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it private?</AccordionTrigger>
        <AccordionContent>
          Yes. All calculation happens client side and scores use differential privacy.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How is it calculated?</AccordionTrigger>
        <AccordionContent>
          kdfjsklafjsdk
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Why calculate my score on Aztec?</AccordionTrigger>
        <AccordionContent>
          kdjsklfjdsklfajsj why not
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
