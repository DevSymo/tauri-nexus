import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { useSelector } from "react-redux";

export const CardInfo = () => {
  const accountResult = useSelector((state: any) => state.account.accountResult);
  return (
    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">Info</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">
            {
              accountResult && accountResult.data && accountResult.data.name && accountResult.data.tag
                ? `${accountResult.data.name}#${accountResult.data.tag}`
                : "Unavailable"
            }
          </span>
          <span className="text-success text-xs">{accountResult ? accountResult.data.account_level : "N/A"}</span>
        </div>
        <div className="py-2">
          {
            accountResult && accountResult.data && accountResult.data.card && accountResult.data.card.wide
              ? <img src={accountResult.data.card.wide} alt="Card Wide Art" style={{ borderRadius: '8px', border: '2px solid black' }} />
              : "N/A"
          }
        </div>
      </CardBody>
    </Card>
  );
};

