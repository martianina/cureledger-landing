//import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      {/* Hero section  */}
      <div
        className="flex flex-col items-center py-8 gap-12 md:gap-20"
        style={{ backgroundImage: `url(/assets/bg.png)`, backgroundRepeat: "repeat" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex relative w-10 h-10">
            <Image alt="CureLedger Logo" className="cursor-pointer" fill src="/favicon.png" />
          </div>
          <p className="text-3xl m-0 font-medium mt-1">CureLedger</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 mb-14 px-4">
          <h1 className="text-center text-3xl lg:text-5xl max-w-md lg:max-w-2xl px-3 m-0">
            The Verifiable Health Data Marketplace
          </h1>
          <h3 className="text-center text-3xl lg:text-2xl max-w-md lg:max-w-2xl px-3 m-0">
            Proven blockchain-based health data solutions
          </h3>
          <h3 className="text-center text-3xl lg:text-2xl max-w-md lg:max-w-2xl px-3 m-0">
            Over 1200 globally distributed locations
          </h3>
          <h3 className="text-center text-3xl lg:text-2xl max-w-md lg:max-w-2xl px-3 m-0">
            38 global initiatives since 2018
          </h3>
          <h2 className="text-center text-3xl lg:text-4xl max-w-md lg:max-w-2xl px-3 m-0">1,000,000+ Lives Impacted</h2>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a
              href="https://docsend.com/v/thypw/cureledger"
              className="btn btn-outline btn-sm px-5 h-10 bg-base-100 normal-case font-normal text-lg"
            >
              White Paper
            </a>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="bg-base-300/20">
        <div className="container max-w-[90%] lg:max-w-7xl m-auto py-16 lg:py-20 lg:pl-12 lg:pr-6 flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-0">
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:flex-col lg:items-start lg:justify-start gap-2 pt-4 lg:pt-0">
              <Image src="/favicon.png" alt="cureledger logo" height={30} width={30} />
              <p className="text-center lg:text-left text-xl m-0 font-light">DEDICATED TO GLOBAL HEALTH</p>
            </div>

            <h2 className="text-2xl lg:text-4xl lg:w-4/5 text-center lg:text-left font-medium">
              CureLedger is blockchain technology used for its highest purpose: improving human health
            </h2>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              With CureLedger, individual data sovereignty underpins health care data reuse and monetization.
            </p>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              Why is this revolutionary?
            </p>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              Health care data grows in value when aggregated over time and geography.
            </p>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              Until decentralized blockchain technology, there was no viable way to harness that data or its value.
            </p>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              CureLedger is the place where this valuable data is delivered in reusable, merchantable packages to a
              vibrant user exchange of contributors and consumers verifiable health data.
            </p>
          </div>
          <div className="max-w-[400px] lg:max-w-none">
            <Image src="/assets/globe.png" alt="globe-stethoscope" width={1400} height={1400} />
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="bg-base-300/60">
        <div className="container max-w-[90%] lg:max-w-7xl m-auto py-16 lg:py-20 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">
          <div className="flex flex-col items-center">
            <div className="max-w-[400px] lg:max-w-none">
              <Image src="/assets/compliance-flow.png" alt="CureLedger Compliance" width={2500} height={2500} />
            </div>
          </div>
          <div className="space-y-6 flex flex-col items-center lg:items-end">
            <div className="flex items-center justify-center lg:flex-col lg:items-start lg:justify-start gap-2 lg:w-3/4 pt-4 lg:pt-0">
              <Image src="/favicon.png" alt="cureledger logo" height={20} width={20} />
              <p className="text-center lg:text-left text-xl m-0 font-light">COMPLIANCE CORE</p>
            </div>
            <div className="lg:w-3/4 space-y-5">
              <h2 className="text-2xl lg:text-4xl lg:w-4/5 text-center lg:text-left font-medium">
                Proven Compliance Primitives Enhance Data Reusability, Merchantability & Liquidity
              </h2>
              <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
                Exclusive incentives & early access to CureLedger for DeSci projects
              </p>
              <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
                Our goal is to jump-start YOUR healthcare technology success
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>

      {/* Marketplace */}
      <div className="bg-base-300/20">
        <div className="container max-w-[90%] lg:max-w-7xl m-auto py-16 lg:py-20 lg:pl-12 lg:pr-6 flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-0">
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:flex-col lg:items-start lg:justify-start gap-2 pt-4 lg:pt-0">
              <Image src="/favicon.png" alt="cureledger logo" height={30} width={30} />
              <p className="text-center lg:text-left text-xl m-0 font-light">CURELEDGER MARKETPLACE</p>
            </div>

            <h2 className="text-2xl lg:text-4xl lg:w-4/5 text-center lg:text-left font-medium">
              Individual Data Sovereignty Unlocks Innovation & Monetization
            </h2>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              Data contributors are incentivized to contribute data because they receive benefits in terms of health
              care impact and tokenized rewards.
            </p>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              Data consumers buy verifiable, merchantable, reusable data, meaning innovation is accelerated.
            </p>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              Data brokers harness merchantable health care data for novel insight and monetization.
            </p>
          </div>
          <div className="max-w-[400px] lg:max-w-none">
            <Image src="/assets/explosion.png" alt="purple-sphere" width={1400} height={1400} />
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
      <div className="mt-10"></div>

      {/* Buidl in Community */}
      <div className="bg-[url(/assets/network.png)] h-[576px] bg-cover bg-center flex items-end justify-center">
        <div className="flex flex-col justify-center items-center bg-base-200 w-4/5 max-w-3xl lg:w-5/12 rounded-3xl shadow-lg shadow-primary p-10 gap-4 -mb-12">
          <Image src="/favicon.png" alt="cureledger logo" height={30} width={30} />
  
          
          <a
            href="https://docsend.com/v/thypw/cureledger"
            className="btn btn-outline btn-sm px-5 h-10 bg-base-100 normal-case font-normal text-lg"
          >
            Read White Paper
          </a>
        </div>
      </div>
      <div className="mt-10"></div>
      <div className="mt-10"></div>

      {/* Block Explorer */}
      <div className="bg-base-200">
        <div className="container max-w-[90%] lg:max-w-7xl m-auto py-24 lg:pb-20 lg:pt-28 lg:pl-4 flex flex-col justify-between items-center lg:flex-row gap-5 lg:gap-0">
          <div className="flex flex-col items-center">
            <div className="max-w-[400px] lg:max-w-none">
              <Image src="/assets/logo-violet.png" alt="Validators" width={500} height={500} />
            </div>
          </div>

          <div className="space-y-6 flex flex-col items-center lg:pl-16">
            <div className="flex items-center justify-center lg:flex-col lg:items-start lg:justify-start gap-2 lg:w-3/4 pt-4 lg:pt-0">
              <Image src="/favicon.png" alt="cureledger logo" height={20} width={20} />
              <p className="text-center lg:text-left text-xl m-0 font-light">VALIDATORS</p>
            </div>
            <div className="lg:w-3/4 space-y-6">
              <h2 className="text-2xl lg:text-4xl text-center lg:text-left font-medium">
                CureLedger validators underpin the most valuable and impactful human data set in the world.
              </h2>
              {/* Updated whitepaper link */}
              <div className="flex flex-wrap gap-4 items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
