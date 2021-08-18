import React from "react";
import Navbar from "../components/NavigationBar";
import Background from "../shrinkBG.jpg";
import shrinkImg from "../dr-house.png";

function ShrinkProfilePage() {
  return (
    <>
      <Navbar mode="user" />
      <div className="flex flex-col justify-center bg-white">
        <div
          className="shrinkHeader w-full shadow-md"
          style={{ height: "450px", boxShadow: "0px 0px 8px gray" }}
          s
        >
          <div
            className="bg-cover bg-no-repeat"
            style={{
              height: "60%",
              backgroundImage: `url("${Background}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex">
            <div className="w-4/12 p-8">
              <div
                style={{
                  float: "right",
                  marginTop: "-150px",
                  width: "250px",
                  height: "250px",
                  border: "8px solid white",
                  borderRadius: "50%",
                  backgroundImage: `url("${shrinkImg}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="w-8/12 p-8">
              <h3>Dr. Gregory House</h3>
              <p className="pt-2">Cognitive-Behaviorral Therapy</p>
              <a className="bg-green-700 px-8 py-2 text-white text-center no-underline rounded cursor-pointer">
                Connect
              </a>
            </div>
          </div>
        </div>

        <div className="shrinkBody w-full bg-gray-300 p-8 flex justify-center items-center">
          <div
            className="h-full rounded-xl bg-white p-8 w-4/5"
            style={{ boxShadow: "0px 0px 10px grey" }}
          >
            <h3 className="text-green-700">ABOUT ME</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              porttitor dictum metus quis lobortis. Integer sed lacus quis quam
              pretium venenatis non eget dolor. Nulla facilisi. Mauris bibendum
              dictum sapien, a pharetra augue facilisis at. Etiam odio metus,
              commodo in nunc ut, egestas dignissim nunc. Suspendisse vitae mi a
              nibh volutpat ultricies tempor ut ex. Donec quam est, faucibus sed
              ultricies sit amet, viverra sit amet mauris. Curabitur massa
              augue, tincidunt ut auctor ac, facilisis id turpis. Ut eu enim
              urna. Cras velit libero, rutrum nec est sed, aliquam auctor erat.
            </p>

            <div className="pt-4 flex justify-around items-center">
              <div>
                <span className="text-green-700 text-2xl">SPECIALTIES</span>
                <ul className="px-0 py-2">
                  <li>Addiction</li>
                  <li>Parenting issues</li>
                  <li>Anger management</li>
                  <li>Depression</li>
                </ul>
              </div>
              <div>
                <span className="text-green-700 text-2xl">LANGUAGES</span>
                <ul className="px-0 py-2">
                  <li>English</li>
                  <li>Arabic</li>
                  <li>french</li>
                </ul>
              </div>
              <div>
                <span className="text-green-700 text-2xl">LICENSING</span>
                <ul className="px-0 py-2">
                  <li>LMHC #005598 </li>
                  <li>(Expires: 2022-02-28)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShrinkProfilePage;
