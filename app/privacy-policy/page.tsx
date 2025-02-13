import { guidingPrinciples } from "@/data/data";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible AI Policy ",
};
export default function PrivacyPolicy() {
  const { principlesOne, principleTwo, governingStructure } = guidingPrinciples;
  return (
    <section className="py-[3rem] px-4">
      <div className="max-w-6xl lg:px-8 px-4 py-12 space-y-8 text-[#4F4F4F] bg-white rounded-xl mx-auto shadow-xl">
        <h2 className="text-3xl text-vsblue pb-8 border-b border-b-vsblue">
          Responsible AI Policy
        </h2>
        <div className="space-y-4 pb-8 border-b border-b-vsblue">
          <h3 className="text-lg">Purpose</h3>
          <p className="">
            This policy defines the principles and commitments that guide the
            development, deployment, and governance of Qova—an AI-powered
            chatbot and metahuman companion dedicated to providing real-time
            online safety guidance, resources, and support for adolescents
            across Africa. The policy ensures that Qova operates ethically,
            transparently, and safely while respecting the rights and dignity of
            all users.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg">Guiding Principles</h3>
          <ol className="space-y-4 pb-8 border-b border-b-vsblue list-decimal pl-4">
            {principlesOne.map(({ heading, info }) => (
              <li key={heading} className="space-y-1">
                <h4 className="font-semibold ">{heading}</h4>
                <p>{info}</p>
              </li>
            ))}
          </ol>
          <ol className="space-y-4 pb-8 border-b border-b-vsblue list-decimal pl-4">
            {principleTwo.map(({ heading, info }) => (
              <li key={heading}>
                <h4 className="font-semibold ">{heading}</h4>
                <ul>
                  {info.map((i) => (
                    <li className="list-disc list-outside ml-6" key={i}>
                      {i}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Governance Structure</h3>
            <ol className="space-y-4 pb-8 border-b border-b-vsblue list-decimal pl-4">
              {governingStructure.map((struc) => (
                <li key={struc}>{struc}</li>
              ))}
            </ol>
          </div>
          <div className="space-y-4 pb-8 border-b border-b-vsblue">
            <h3 className="text-lg font-semibold">Review and Updates</h3>
            <p>
              This policy is a living document and will be reviewed annually to
              incorporate advancements in technology, evolving societal needs,
              and regulatory changes. Feedback from stakeholders and users will
              inform updates to ensure Qova remains a trusted, responsible AI
              companion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
