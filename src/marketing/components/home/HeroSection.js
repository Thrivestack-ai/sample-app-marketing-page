import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { thriveSignupUrl } from "../../../constants";
import Hotspot from "./Hotspot";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import HotspotTooltip from "../hotspotTooltip/HotspotTooltip";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
  },
}));
function HeroSection(props) {
  return (
    <Fragment>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-52">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Welcome to the SaaSBox
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
                <p className="inline text-indigo-800">SaaSBox</p> -
                ThriveStack's Sample Application
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                This Marketing website page showcases SaaSBox, a sample
                application designed to illustrate the seamless integration of
                ThriveStack's workflows with your own application.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <HotspotTooltip
                  label={"Signup CTA"}
                  text={
                    "This redirects you to SaaSBuilder's SignUp page crafted using the ThriveStack workflow builder."
                  }
                  number={"1"}
                >
                  <a
                    href={thriveSignupUrl}
                    target={"_blank"}
                    className="relative rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Signup
                    {/* <Hotspot label="1" className="-top-2 -left-2" /> */}
                  </a>
                </HotspotTooltip>
                <HotspotTooltip
                  label={"Login CTA"}
                  text={
                    "This redirects you to SaaSBuilder's Login page crafted using the ThriveStack workflow builder."
                  }
                  placement="right"
                  isComingSoon
                  number={"2"}
                >
                  <a
                    href="/"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Login <span aria-hidden="true">→</span>
                  </a>
                </HotspotTooltip>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HeroSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default HeroSection;
