import React from "react";
import dynamic from "next/dynamic";
import { TableWrapper } from "../table/table";
import { CardInfo } from "./card-info";
import { CardStats } from "./card-stats";
import { CardBalance3 } from "./card-balance3";
import { CardRank } from "./card-rank";
import { CardTransactions } from "./card-transactions";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className=" h-full">
    <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className="mt-6  gap-6 flex flex-col w-full p-4">
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Account</h3>
          <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-5  justify-center w-full">
            <CardInfo />
            <CardStats />
            <CardBalance3 />
          </div>
        </div>

        {/* Chart */}
        <div className="h-full flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Statistics</h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
            <Chart />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-1/2 p-4">
        <h3 className="text-xl font-semibold">Section</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <CardRank />
          <CardTransactions />
        </div>
      </div>
    </div>

    {/* Table Latest Users */}
    <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
      <div className="flex  flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Latest Users</h3>
        <Link
          href="/accounts"
          as={NextLink}
          color="primary"
          className="cursor-pointer"
        >
          View All
        </Link>
      </div>
      <TableWrapper />
    </div>
  </div>
);
