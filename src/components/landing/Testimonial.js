import React from "react";
import { Container, Card } from "react-bootstrap";
import TinySlider from "tiny-slider-react";
import "../../css/testimonial.css";
import Heading from "../common/Heading";
import SlantDiv from "../common/SlantDiv";
import asthaKar from "../../img/testimonial-img/Astha kar.jpeg";
import sreelaxmi from "../../img/testimonial-img/Sreelaxmi.jpeg";
import savyasachi from "../../img/testimonial-img/Savyasachi.jpeg";
import polaki from "../../img/testimonial-img/Polaki.jpeg";
import amrutaRay from "../../img/testimonial-img/Amruta.jpeg";
import keshav from "../../img/testimonial-img/Keshav.jpeg";

function Testimonial() {
  const settings = {
    mouseDrag: true,
    gutter: 30,
    responsive: {
      300: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      }
    },
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplayButtonOutput: false,
    loop: true,
    speed: 400,
    swipeAngle: false,
  };
  return (
    <div className="testimonial">
      <Container>
        <Heading head="WHY YOU CHOOSE US ?" />
        <div>
          <TinySlider settings={settings}>
            <div>
              <Card className="testimonial-card">
                <Card.Body>
                  <p>
                    SITMUN2021 was a memorable experience. I represented Russia
                    in UNHRC and it was an amazing committee, full of
                    enthusiasm. One of the most remarkable things was the
                    Executive Board, they were so good in their job which kept
                    all of us focused and engaged through all 3 days. The
                    socials were pretty cool, all thanks to the OC. Looking
                    forward to the 2022 edition💫🦋.
                  </p>
                </Card.Body>
                <div className="card-footer-a">
                  <img src={asthaKar} alt="user" />
                  <h4>Astha Kar</h4>
                  <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 700"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition duration-300 ease-in-out delay-150"
                  >
                    <path
                      d="M 0,700 C 0,700 0,233 0,233 C 63.55023923444975,264.6076555023924 127.1004784688995,296.2153110047847 237,280 C 346.8995215311005,263.7846889952153 503.1483253588517,199.74641148325355 608,176 C 712.8516746411483,152.25358851674645 766.3062200956939,168.79904306220095 860,205 C 953.6937799043061,241.20095693779905 1087.6267942583731,297.0574162679426 1191,305 C 1294.3732057416269,312.9425837320574 1367.1866028708134,272.9712918660287 1440,233 C 1440,233 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d388"
                      class="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                    <path
                      d="M 0,700 C 0,700 0,466 0,466 C 105.4736842105263,429.27272727272725 210.9473684210526,392.54545454545456 310,404 C 409.0526315789474,415.45454545454544 501.6842105263157,475.09090909090907 594,482 C 686.3157894736843,488.90909090909093 778.3157894736843,443.0909090909091 883,423 C 987.6842105263157,402.9090909090909 1105.0526315789473,408.54545454545456 1200,420 C 1294.9473684210527,431.45454545454544 1367.4736842105262,448.72727272727275 1440,466 C 1440,466 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d3ff"
                      class="transition-all duration-300 ease-in-out delay-150 path-1"
                    ></path>
                  </svg>
                </div>
              </Card>
            </div>
            <div>
              <Card className="testimonial-card">
                <Card.Body>
                  <p>
                    Being a first timer I was hesitating a lot in the beginning
                    and had many doubts. But starting from the first day itself
                    I enjoyed the process of learning. It's a great platform,
                    starting from debating to developing diplomacy. Many soft
                    skills also develop in this whole process. It was a great
                    experience for me. I believe for a college student - MUN is
                    a ’MUST to have’ experience.
                  </p>
                </Card.Body>
                <div className="card-footer-a">
                  <img src={sreelaxmi} alt="user" />
                  <h4>Sreelaxmi</h4>
                  <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 700"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition duration-300 ease-in-out delay-150"
                  >
                    <path
                      d="M 0,700 C 0,700 0,233 0,233 C 113.866028708134,201.14354066985646 227.732057416268,169.2870813397129 312,177 C 396.267942583732,184.7129186602871 450.9377990430622,231.99521531100478 543,232 C 635.0622009569378,232.00478468899522 764.5167464114832,184.73205741626793 864,195 C 963.4832535885168,205.26794258373207 1032.9952153110048,273.07655502392345 1124,289 C 1215.0047846889952,304.92344497607655 1327.5023923444976,268.9617224880383 1440,233 C 1440,233 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d388"
                      class="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                    <path
                      d="M 0,700 C 0,700 0,466 0,466 C 90.04784688995215,444.66985645933016 180.0956937799043,423.33971291866027 272,444 C 363.9043062200957,464.66028708133973 457.66507177033486,527.311004784689 567,517 C 676.3349282296651,506.68899521531097 801.244019138756,423.4162679425837 895,418 C 988.755980861244,412.5837320574163 1051.358851674641,485.02392344497605 1137,506 C 1222.641148325359,526.976076555024 1331.3205741626793,496.488038277512 1440,466 C 1440,466 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d3ff"
                      class="transition-all duration-300 ease-in-out delay-150 path-1"
                    ></path>
                  </svg>
                </div>
              </Card>
            </div>
            <div>
              <Card className="testimonial-card">
                <Card.Body>
                  <p>
                    Last year I was fortunate enough to participate in the SIT
                    MUN 2021 as a photographer for the IP team .It was a really
                    fantastic experience as on field there is so much going on
                    in terms of emotions , debate and commute. Looking forward
                    to what more SIT MUN 2022 has to offer !
                  </p>
                </Card.Body>
                <div className="card-footer-a">
                  <img src={savyasachi} alt="user" />
                  <h4>Savyasachi</h4>
                  <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 700"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition duration-300 ease-in-out delay-150"
                  >
                    <path
                      d="M 0,700 C 0,700 0,233 0,233 C 61.119617224880386,227.46889952153109 122.23923444976077,221.93779904306217 235,222 C 347.7607655502392,222.06220095693783 512.1626794258373,227.71770334928232 625,257 C 737.8373205741627,286.2822966507177 799.1100478468901,339.1913875598087 888,312 C 976.8899521531099,284.8086124401913 1093.3971291866028,177.51674641148324 1190,151 C 1286.6028708133972,124.48325358851676 1363.3014354066986,178.74162679425837 1440,233 C 1440,233 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d388"
                      class="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                    <path
                      d="M 0,700 C 0,700 0,466 0,466 C 93.89473684210523,503.77033492822966 187.78947368421046,541.5406698564593 275,520 C 362.21052631578954,498.4593301435407 442.73684210526324,417.6076555023924 539,408 C 635.2631578947368,398.3923444976076 747.2631578947368,460.02870813397124 848,500 C 948.7368421052632,539.9712918660288 1038.2105263157896,558.2775119617224 1135,549 C 1231.7894736842104,539.7224880382776 1335.8947368421052,502.8612440191388 1440,466 C 1440,466 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d3ff"
                      class="transition-all duration-300 ease-in-out delay-150 path-1"
                    ></path>
                  </svg>
                </div>
              </Card>
            </div>
            <div>
              <Card className="testimonial-card">
                <Card.Body>
                  <p>
                    I joined my first MUN as the delegate of Denmark in SITMUN.I
                    was in the DISEC commitee. SITMUN is the best platform to
                    participate and give urself a chance to share your point of
                    views on delegate affairs and public relations . I
                    personally recommend all the freshers to participate atleast
                    once and urself a beautiful experience to explore the
                    SITMUN.
                  </p>
                </Card.Body>
                <div className="card-footer-a">
                  <img src={amrutaRay} alt="user" />
                  <h4>Amruta Ray</h4>
                  <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 700"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition duration-300 ease-in-out delay-150"
                  >
                    <path
                      d="M 0,700 C 0,700 0,233 0,233 C 113.866028708134,201.14354066985646 227.732057416268,169.2870813397129 312,177 C 396.267942583732,184.7129186602871 450.9377990430622,231.99521531100478 543,232 C 635.0622009569378,232.00478468899522 764.5167464114832,184.73205741626793 864,195 C 963.4832535885168,205.26794258373207 1032.9952153110048,273.07655502392345 1124,289 C 1215.0047846889952,304.92344497607655 1327.5023923444976,268.9617224880383 1440,233 C 1440,233 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d388"
                      class="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                    <path
                      d="M 0,700 C 0,700 0,466 0,466 C 90.04784688995215,444.66985645933016 180.0956937799043,423.33971291866027 272,444 C 363.9043062200957,464.66028708133973 457.66507177033486,527.311004784689 567,517 C 676.3349282296651,506.68899521531097 801.244019138756,423.4162679425837 895,418 C 988.755980861244,412.5837320574163 1051.358851674641,485.02392344497605 1137,506 C 1222.641148325359,526.976076555024 1331.3205741626793,496.488038277512 1440,466 C 1440,466 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d3ff"
                      class="transition-all duration-300 ease-in-out delay-150 path-1"
                    ></path>
                  </svg>
                </div>
              </Card>
            </div>
            <div>
              <Card className="testimonial-card">
                <Card.Body>
                  <p>
                    My experience on SITMUN-2021 was just awesome. This was a
                    very convincing experience where I have developed many
                    skills like how to research things and got a real time
                    experience of the actual MUN. The debate and the thought
                    process of various delegation made me realise how the
                    delegates of the countries represent their nation. This is a
                    real time experience and I suggest everyone must attend it
                    atleast once in a life time.
                  </p>
                </Card.Body>
                <div className="card-footer-a">
                  <img src={polaki} alt="user" />
                  <h4>Polaki</h4>
                  <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 700"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition duration-300 ease-in-out delay-150"
                  >
                    <path
                      d="M 0,700 C 0,700 0,233 0,233 C 107.44497607655504,262.52153110047846 214.88995215311007,292.04306220095697 320,308 C 425.1100478468899,323.95693779904303 527.8851674641148,326.3492822966507 614,306 C 700.1148325358852,285.6507177033493 769.5693779904307,242.55980861244018 858,208 C 946.4306220095693,173.44019138755982 1053.8373205741627,147.41148325358853 1154,153 C 1254.1626794258373,158.58851674641147 1347.0813397129186,195.79425837320574 1440,233 C 1440,233 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d388"
                      class="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                    <path
                      d="M 0,700 C 0,700 0,466 0,466 C 72.77511961722487,465.82775119617224 145.55023923444975,465.65550239234443 247,487 C 348.44976076555025,508.34449760765557 478.57416267942585,551.2057416267943 575,548 C 671.4258373205741,544.7942583732057 734.153110047847,495.5215311004785 825,466 C 915.846889952153,436.4784688995215 1034.8133971291866,426.7081339712919 1142,430 C 1249.1866028708134,433.2918660287081 1344.5933014354068,449.64593301435406 1440,466 C 1440,466 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d3ff"
                      class="transition-all duration-300 ease-in-out delay-150 path-1"
                    ></path>
                  </svg>
                </div>
              </Card>
            </div>
            <div>
              <Card className="testimonial-card">
                <Card.Body>
                  <p>
                    SIT MUN 2021 was one of my best experiences in 2021. It was
                    my first MUN, and I knew nothing about it, but the
                    chairpersons helped me at every stage. I learned a lot of
                    things there.
                  </p>
                </Card.Body>
                <div className="card-footer-a">
                  <img src={keshav} alt="user" />
                  <h4>Keshav</h4>
                  <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 700"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition duration-300 ease-in-out delay-150"
                  >
                    <path
                      d="M 0,700 C 0,700 0,233 0,233 C 107.44497607655504,262.52153110047846 214.88995215311007,292.04306220095697 320,308 C 425.1100478468899,323.95693779904303 527.8851674641148,326.3492822966507 614,306 C 700.1148325358852,285.6507177033493 769.5693779904307,242.55980861244018 858,208 C 946.4306220095693,173.44019138755982 1053.8373205741627,147.41148325358853 1154,153 C 1254.1626794258373,158.58851674641147 1347.0813397129186,195.79425837320574 1440,233 C 1440,233 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d388"
                      class="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                    <path
                      d="M 0,700 C 0,700 0,466 0,466 C 72.77511961722487,465.82775119617224 145.55023923444975,465.65550239234443 247,487 C 348.44976076555025,508.34449760765557 478.57416267942585,551.2057416267943 575,548 C 671.4258373205741,544.7942583732057 734.153110047847,495.5215311004785 825,466 C 915.846889952153,436.4784688995215 1034.8133971291866,426.7081339712919 1142,430 C 1249.1866028708134,433.2918660287081 1344.5933014354068,449.64593301435406 1440,466 C 1440,466 1440,700 1440,700 Z"
                      stroke="none"
                      stroke-width="0"
                      fill="#29a0d3ff"
                      class="transition-all duration-300 ease-in-out delay-150 path-1"
                    ></path>
                  </svg>
                </div>
              </Card>
            </div>
          </TinySlider>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
