import React from "react";
import { CircularProgress, Card, CardBody, CardFooter, Chip, Tooltip } from "@nextui-org/react";
import { useSelector } from "react-redux";

export const CardRank = () => {
  const mmrResult = useSelector((state: any) => state.mmr.mmrResult);
  const rankImage = mmrResult && mmrResult.data.current_data && mmrResult.data.current_data.currenttierpatched
    ? `https://blitz-cdn-plain.blitz.gg/blitz/val/ranks/${mmrResult.data.current_data.currenttierpatched.replace(/\s+/g, '').toLowerCase()}.svg`
    : ''; // default image URL or empty string

  const value = mmrResult?.data?.current_data?.ranking_in_tier || 0; // default to 0 if not available

  return (
    <Card className="bg-default-50 rounded-xl shadow-md px-4 py-6 w-full bg-gradient-to-br from-violet-500 to-fuchsia-500 relative">
      <div className="relative w-36 h-36 mx-auto">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md absolute top-0 left-0",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={value}
          strokeWidth={4}
        />
        <Tooltip content={mmrResult?.data?.current_data?.currenttierpatched || 'Unknown Rank'}>
          <img src={rankImage} alt="Rank" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2"/>
        </Tooltip>
      </div>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          {value} RR
        </Chip>
      </CardFooter>
    </Card>
  );
};
