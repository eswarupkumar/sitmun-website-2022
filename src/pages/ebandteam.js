import Navbar from "../components/common/navbar";
import * as React from "react";
import CoreTeam from "../components/team/coreteam";
import Creative from "../components/team/creatived";
import DATeam from "../components/team/daAffairs";
import Finance from "../components/team/finance";
import SponsorshipTeam from "../components/team/sponsor";
import DmTeam from "../components/team/digitalmarketing";
import Logistics from "../components/team/Logistics";
import PR from "../components/team/PR";
import Hospitality from "../components/team/Hospitality";
import EAteam from "../components/team/EAteam";
import TeamHero from "../components/team/teamhero";

import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";

function EbandTeampage() {
  return (
    <div>
      <Navbar />
      <ScrollTop />
      <TeamHero />
      <br></br>
      <CoreTeam />
      <Creative />
      <DATeam />
      <Finance />
      <SponsorshipTeam />
      <DmTeam />
      <Logistics />
      <PR />
      <Hospitality />
      <EAteam />
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default EbandTeampage;
