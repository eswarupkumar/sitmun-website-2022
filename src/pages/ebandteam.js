import Navbar from "../components/common/navbar";
import React, { useState, useEffect} from "react";
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
import Webteam from "../components/team/webdev";
import Loading from "../components/common/Loading";

import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";

function EbandTeampage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden"
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "scroll"
    }, 4000);
    // eslint-disable-next-line
  }, [])
  return (
    <div>
    {loading ? <Loading />:
      <Navbar />}
      <ScrollTop />
      <TeamHero />
      <br></br>
      <CoreTeam />
      <Creative />
      <DATeam />
      <PR />
      <Finance />
      <SponsorshipTeam />
      <DmTeam />
      <Logistics />
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
