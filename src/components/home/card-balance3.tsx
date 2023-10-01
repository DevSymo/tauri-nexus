import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import Legs from "../icons/body/legs";
import Body from "../icons/body/body";
import Head from "../icons/body/head";

export const CardBalance3 = () => {
  return (
    <Card className="xl:max-w-sm bg-success rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">Shot Percentage</span>
            <span className="text-white text-xs">Last 20 Games</span>
          </div>
        </div>
        {/* New divs */}
        <div className="flex flex-col mt-4 space-y-2">
          <div className="bg-gray-300 h-10 w-full rounded flex items-center justify-center py-1">
            <Head />
          </div>
          <div className="bg-gray-400 h-10 w-full rounded flex items-center justify-center py-1">
            <Body />
          </div>
          <div className="bg-gray-500 h-10 w-full rounded flex items-center justify-center py-1">
            <Legs />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
