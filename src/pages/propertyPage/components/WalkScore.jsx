import React from "react";
import walk from "../../../assets/Iframe.png";
import { Card, CardBody, Input, Tab, Tabs } from "@nextui-org/react";
import {
  SvgBikeScoreIcon,
  SvgTransitScoreIcon,
  SvgWalkScoreIcon,
} from "../../../utils/SvgIcons";

function WalkScore({ propertyData, id }) {
  return (
    <div id={id} className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 ">
      <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  ">
        <h4 className=" font-medium text-lg text-customdark">Walk score</h4>
      </div>
      <p className="text-customStreetcolor text-2xl mt-4">
        {propertyData?.property?.property?.address}
      </p>
      {/* Tabs */}
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" variant="underlined" color="danger">
          <Tab key="scores" title="Scores">
            <Card shadow="none">
              <CardBody className="flex  flex-col gap-5">
                <div className="flex gap-5 ">
                  <div className="relative">
                    <SvgWalkScoreIcon />
                    <p className="absolute inset-0 m-auto w-fit h-fit text-center font-bold text-[40px] text-customaccent top-4">
                      {propertyData?.property?.walkScores?.walkScore
                        ? propertyData?.property?.walkScores?.walkScore
                        : 0}
                    </p>
                  </div>
                  <div className="text-xs text-customStreetcolor pt-1">
                    <p className="text-sm">Walker's Paradise</p>
                    <p>{propertyData?.property?.walkScores?.description}</p>
                  </div>
                </div>

                <div className="flex gap-5 ">
                  <div className="relative">
                    <SvgTransitScoreIcon />
                    <p className="absolute inset-0 m-auto w-fit h-fit text-center font-bold text-[40px] text-customaccent top-4">
                      {propertyData?.property?.walkScores?.transitScore
                        ? propertyData?.property?.walkScores?.transitScore
                        : 0}
                    </p>
                  </div>
                  <div className="text-xs text-customStreetcolor pt-1">
                    <p className="text-sm">Rider's Paradise</p>
                    <p>World-class public transportation</p>
                  </div>
                </div>

                <div className="flex gap-5 ">
                  <div className="relative">
                    <SvgBikeScoreIcon />
                    <p className="absolute inset-0 m-auto w-fit h-fit text-center font-bold text-[40px] text-customaccent top-4">
                      {propertyData?.property?.walkScores?.transitScore
                        ? propertyData?.property?.walkScores?.transitScore
                        : 0}
                    </p>
                  </div>
                  <div className="text-xs text-customStreetcolor pt-1">
                    <p className="text-sm">Very Bikeable</p>
                    <p>Biking is convenient for most trips</p>
                  </div>
                </div>

                <p className=" text-blue-500 cursor-pointer font-thin">
                  View map of nearby restaurants, grocery stores, and more.
                </p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="neary" title="Nearby">
            <Card shadow="none">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <Input
        variant="bordered"
        radius="none"
        placeholder="Get scores for your address"
        classNames={{ input: "placeholder:text-md" }}
      ></Input>
    </div>
  );
}

export default WalkScore;
