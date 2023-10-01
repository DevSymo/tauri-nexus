import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";
import { GithubIcon } from "../icons/navbar/github-icon";
import { SupportIcon } from "../icons/navbar/support-icon";
import { SearchIcon } from "../icons/searchicon";
import { invoke } from '@tauri-apps/api/tauri';
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { useDispatch } from "react-redux";
import { setAccountResult, setMatchesResult, setMmrResult } from "../../store/store";

interface Props {
  children: React.ReactNode;
}

interface AccountResponse {
  status: number;
  data: {
    account_level: number;
    card: object;
    last_update: string;
    last_update_raw: number;
    name: string;
    puuid: string;
    region: string;
    tag: string;
  };
}

export const NavbarWrapper = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();


  const search = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchTerm.includes("#")) {
      const [name, tag] = searchTerm.split("#");
      invoke<AccountResponse>("get_account", { name, tag })
        .then((accountResult) => {
          dispatch(setAccountResult(accountResult));
          if (accountResult.status === 200) {
            const { region } = accountResult.data;
            const { puuid } = accountResult.data;
            
            // Get MMR and matches at the same time
            Promise.all([
              invoke("get_mmr", { affinity: region, name, tag }),
              invoke("get_matches", { affinity: region, puuid, size: 20 })
            ])
            .then(([mmrResult, matchesResult]) => {
              dispatch(setMmrResult(mmrResult));
              dispatch(setMatchesResult(matchesResult));
            })
            .catch((err) => {
              console.log("An error occurred while fetching data:", err);
            });
          }
        })
        .catch((err) => {
          console.log("An error occurred:", err);
        });    
    }
  };


  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={search}
          />
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <div className="flex items-center gap-2 max-md:hidden">
            <FeedbackIcon />
            <span>Feedback?</span>
          </div>

          <NotificationsDropdown />

          <div className="max-md:hidden">
            <SupportIcon />
          </div>

          <Link
            href="https://github.com/Siumauricio/nextui-dashboard-template"
            target={"_blank"}
          >
            <GithubIcon />
          </Link>
          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
