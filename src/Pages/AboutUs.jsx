import React from "react";

export default function AboutUs() {
  return (
    <div className="pt-32 w-4/6 mx-auto py-32">
      <div>
        <h1 className="text-3xl text-center py-12 text-[#ec008c] font-semibold underline">
          About Us
        </h1>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-400 my-4">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold text-[#ec008c]">
          Who is the owner of BRAC?
        </div>
        <div className="collapse-content text-sm">
          BRAC was founded by Sir Fazle Hasan Abed, according to BRAC
          University. He established the organization in 1972 as a small relief
          and rehabilitation project and it has since grown into one of the
          world's largest development organizations.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-400 my-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-[#ec008c]">
          What is BRAC in full?
        </div>
        <div className="collapse-content text-sm">
          Originally founded in 1972 as the Bangladesh Rehabilitation Assistance
          Committee and later known as the Bangladesh Rural Advancement
          Committee, BRAC's operations have grown globally and with that growth,
          the organization changed to be known simply as BRAC.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-400 my-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-[#ec008c]">
          What is BRAC Island famous for?
        </div>
        <div className="collapse-content text-sm">
          The island is mostly made up of limestone, something that's shaped the
          economy and history. It's world famous for its stone quarries, some of
          which were used to build the White House in Washington, DC, the
          Parliament House in Budapest and Vienna, and Diocletian's Palace in
          Split.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-400 my-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-[#ec008c]">
          How to get a 100% scholarship in BRAC?
        </div>
        <div className="collapse-content text-sm">
          Up to 100% tuition fee waiver with or without food and accommodation
          is awarded to economically disadvantaged students. Eligibility
          criteria and other requirements in addition to Section-A (General
          Conditions): 4.1 Monthly income of parents not more than Tk20,000/-.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-400 my-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-[#ec008c]">
          Which part of Brač is best?
        </div>
        <div className="collapse-content text-sm">
          Bol Town. Located on the island's southern slopes, you'll find one of
          its most popular towns, Bol. The small port town has one of the
          longest tourism histories in Croatia, alongside the likes of Dubrovnik
          and other locations, and it remains one of the best places to go in
          Brač for residents and tourists alike.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-400 my-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-[#ec008c]">Is bKash under BRAC?</div>
        <div className="collapse-content text-sm">
          bKash Limited (Bengali: বিকাশ d/b/a: bkash) is a mobile financial
          service (MFS) in Bangladesh operating under the authority of
          Bangladesh Bank as a subsidiary of BRAC Bank PLC. This mobile
          financial service company started as a joint venture between BRAC Bank
          Limited, and Money in Motion LLC.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-400 my-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-[#ec008c]">
          Where to stay in Brac?
        </div>
        <div className="collapse-content text-sm">
          Kaktus Hotel. In Brac Island, Dalmatian Coast and Islands, <br />
          OOOOO. ... SKYTOURS. Gava Waterman Forest Cottages. In Brac Island,
          <br />
          Dalmatian Coast and Islands, Croatia. ... PLATINUM. Bluesun Hotel
          <br />
          Elaphusa. In Brac Island, Dalmatian Coast and Islands, Croatia. ...
          <br />
          SKYTOURS. Bluesun Hotel Borak.
        </div>
      </div>
    </div>
  );
}
