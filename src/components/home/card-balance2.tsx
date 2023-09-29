import React from "react";
import { Card, CardBody, CircularProgress } from "@nextui-org/react";
import { Community } from "../icons/community";

export const CardBalance2 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex flex-col">
          {/* Upper div for Stats */}
          <div className="flex gap-2.5">
            <Community />
            <div className="flex flex-col">
              <span className="text-default-900">Stats</span>
              <span className="text-default-900 text-xs">Episode 7 Act 2</span>
            </div>
          </div>

          {/* Lower div for Circular Progress and additional content */}
          <div className="flex justify-between gap-2.5 mt-4">
            {/* Left lower div for Circular Progress */}
            <div className="flex-1 flex justify-center items-center">
              <CircularProgress
                classNames={{
                  svg: "w-[90%] h-[90%] drop-shadow-md",
                  indicator: "stroke-green-500",
                  track: "stroke-red-500",
                  value: "text-sm font-semibold text-default-600",
                }}
                value={70}
                strokeWidth={3}
                showValueLabel={true}
              />
            </div>

            {/* Right lower div for additional content */}
            <div className="flex-1 flex justify-center items-center">
              {/* Your additional content can go here */}
              <span>Your content here</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
