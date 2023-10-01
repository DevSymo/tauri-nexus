import React from "react";
import { Card, CardBody, CircularProgress } from "@nextui-org/react";
import { Community } from "../icons/community";
import { useSelector } from "react-redux";

export const CardStats = () => {
  // Win/Loss
  const mmrResult = useSelector((state: any) => state.mmr.mmrResult);
  const matchesResult = useSelector((state: any) => state.matches.matchesResult);
  const wins = mmrResult ? mmrResult.data.by_season.e7a2.wins : 0;
  const numberOfGames = mmrResult ? mmrResult.data.by_season.e7a2.number_of_games : 0;
  const losses = numberOfGames - wins;
  const labelContentWL = `${wins} W | ${losses} L`;
  const winPercentage = numberOfGames > 0 ? (wins / numberOfGames) * 100 : 0;
  
  // Kills/Deaths/Assists
  let totalKills = 0;
  let totalDeaths = 0;
  let totalAssists = 0;
  // Check if matchesResult and matchesResult.data exist
  if (matchesResult && Array.isArray(matchesResult.data)) {
    // Accumulate the values for each match
    matchesResult.data.forEach((match: any) => {
      totalKills += match.stats.kills || 0;
      totalDeaths += match.stats.deaths || 0;
      totalAssists += match.stats.assists || 0;
    });
  }
  const labelContentKD = `${totalKills} K | ${totalDeaths} D | ${totalAssists} A`;
  const KDPercentage = totalDeaths > 0 ? (totalKills / totalDeaths) * 100 : 0;

  
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
          <div className="flex justify-between gap-4 mt-4">
            <div className="flex-1 flex justify-center items-center">
              <CircularProgress
                classNames={{
                  svg: "w-[100%] h-[100%] drop-shadow-md",
                  indicator: "stroke-green-500",
                  track: "stroke-red-500",
                  value: "text-sm font-semibold text-default-600",
                  label: "text-xs font-semibold text-default-600",
                }}
                label={labelContentWL}
                value={winPercentage}
                strokeWidth={3}
                showValueLabel={true}
              />
            </div>

            {/* Right lower div for additional content */}
            <div className="flex-1 flex justify-center items-center">
              <CircularProgress
                classNames={{
                  svg: "w-[100%] h-[100%] drop-shadow-md",
                  indicator: "stroke-green-500",
                  track: "stroke-red-500",
                  value: "text-sm font-semibold text-default-600",
                  label: "text-xs font-semibold text-default-600",
                }}
                label={labelContentKD}
                value={KDPercentage}
                formatOptions={{ style: "decimal" }}
                strokeWidth={3}
                showValueLabel={true}
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
