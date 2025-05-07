import React from "react";
import "./NewAccident.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUserPlus,
  faExclamationTriangle,
  faSignOutAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/draexlmaier-logo.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export default function NewAccident() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  // Initialize the useNavigate hook
  const handleClick_visual = () => {
    navigate("/Visualization"); // Navigate to the Prediction page
  };
  // Initialize the useNavigate hook
  const handleClick_worker = () => {
    navigate("/NewWorker"); // Navigate to the Prediction page
  };
  const handleClick_accident = () => {
    navigate("/NewAccident"); // Navigate to the Prediction page
  };
  const handleClick_logOut = () => {
    navigate("/SignInPage"); // Navigate to the Prediction page
  };
  const formFields = [
    "Date",
    "Gender",
    "Process",
    "Location",
    "Segment",
    "Department",
    "Operation Mode",
    "Hazard Source",
    "Machine Type",
    "Type of Injury",
    "Injury Body Part",
    "Accident Type",
    "Repeat Incident",
    "Risk Factor",
    "Lost Days",
    "Maximum Possible Damage Occurred",
    "Recruitment Date",
    "SMS",
    "Accident Shift",
  ];

  const renderOptions = (label) => {
    switch (label) {
      case "Gender":
        return (
          <>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </>
        );
      case "Location":
        return (
          <>
            <option value="">Select Location</option>
            <option value="Eljem">Eljem</option>
            <option value="Jemmal">Jemmal</option>
            <option value="Rosslyn">Rosslyn</option>
            <option value="Siliana">Siliana</option>
            <option value="SousseMETS">SousseMETS</option>
            <option value="SousseUATS">SousseUATS</option>
          </>
        );
      case "Process":
        return (
          <>
            <option value="">click to select process </option>
            <option value="">Select Process</option>
            <option value="I - 4008 - assembly">I - 4008 - assembly</option>
            <option value="I - 4023 - foldback">I - 4023 - foldback</option>
            <option value="E - 7015 extracting,_laying-up_and_handle - wire_/_module_/wire_harness">
              E - 7015 extracting,_laying-up_and_handle -
              wire_/_module_/wire_harness
            </option>
            <option value="E - 8001 commissioning">
              E - 8001 commissioning
            </option>
            <option value="I - 3001 - drilling - vacuum_holes">
              I - 3001 - drilling - vacuum_holes
            </option>
            <option value="I - 3013 - cutting - manual">
              I - 3013 - cutting - manual
            </option>
            <option value="I - 7009 - commissioning">
              I - 7009 - commissioning
            </option>
            <option value="I - 3013 - cutting - manual">
              I - 3013 - cutting - manual
            </option>
            <option value="E - 8001 commissioning">
              E - 8001 commissioning
            </option>
            <option value="I - 3003 - turning">I - 3003 - turning</option>
            <option value="other">other</option>
            <option value="E - 7001 walking time_/_assembly line">
              E - 7001 waI - 4014 - pressing_(joining)- ironing_pressing
            </option>
            <option value="I - 4016 - screwing">I - 4016 - screwing</option>
            <option value="I - 8004 - internal_transport">
              I - 8004 - internal_transport
            </option>
            <option value="I - 5007 - painting - painting - silver_coating_badge">
              I - 5007 - painting - painting - silver_coating_badge
            </option>
            <option value="I - 4007 - gluing - assembly_bonding">
              I - 4007 - gluing - assembly_bonding
            </option>
            <option value="I - 1001 - blow_molding">
              I - 1001 - blow_molding
            </option>
            <option value="E - 2001 welding - ultrasonic - wire-cord">
              E - 2001 welding - ultrasonic - wire-cord
            </option>
            <option value="I - 7003 - measurement">
              I - 7003 - measurement
            </option>
            <option value="I - 7005 - testing">I - 7005 - testing</option>
            <option value="I - 3022 - cutting - machine">
              I - 3022 - cutting - machine
            </option>
            <option value="E - 7002 testing - function_electrical">
              E - 7002 testing - function_electrical
            </option>
            <option value="I - 3020 - cutting - roll_goods">
              I - 3020 - cutting - roll_goods
            </option>
            <option value="I - 1021 - injection_compression_molding">
              I - 1021 - injection_compression_molding
            </option>
            <option value="I - 8001 - supply_for_transport_to_next_plant">
              I - 8001 - supply_for_transport_to_next_plant
            </option>
            <option value="I - 7011 - cleaning">I - 7011 - cleaning</option>
            <option value="I - 4015 - pressing_(joining) - roll_pressing">
              I - 4015 - pressing_(joining) - roll_pressing
            </option>
            <option value="E - 4001 crimping - contact_part">
              E - 4001 crimping - contact_part
            </option>
            <option value="I - 8002 - preparation_raw_materials_/_components">
              I - 8002 - preparation_raw_materials_/_components
            </option>
            <option value="E - 4003 assembly - comb_conectro_/fuse_beam">
              E - 4003 assembly - comb_conectro_/fuse_beam
            </option>
            <option value="E - 4015 crimping - doublestrike - wire-contact_part">
              E - 4015 crimping - doublestrike - wire-contact_part
            </option>
            <option value="E - 4016 assembly - corrugated_pipe_/_sleeving">
              E - 4016 assembly - corrugated_pipe_/_sleeving
            </option>
            <option value="I - 7004 - reworking">I - 7004 - reworking</option>
            <option value="E - 3001 skinning_/strip/_removing - removal - wire_insulation">
              E - 3001 skinning_/strip/_removing - removal - wire_insulation
            </option>
            <option value="E - 3002 cutting - wire">
              E - 3002 cutting - wire
            </option>
            <option value="I - 8001 - supply_for_transport_to_next_plant">
              I - 8001 - supply_for_transport_to_next_plant
            </option>
            <option value="I - 4022 - staple">I - 4022 - staple</option>
            <option value="I - 1007 - extrusion - back-pressing">
              I - 1007 - extrusion - back-pressing
            </option>
            <option value="I - 3002 - cutting - leather">
              I - 3002 - cutting - leather
            </option>
            <option value="E-Pre Assembly - Detail Planning Group DPG">
              E-Pre Assembly - Detail Planning Group DPG
            </option>
            <option value="E-Assembly - Item number">
              E-Assembly - Item number
            </option>
            <option value="E-order picking - Customer order">
              E-order picking - Customer order
            </option>
            <option value="Logistics">Logistics</option>
            <option value="Office">Office</option>
            <option value="I-Production step 3 - lamination and finishing processes - Production cell">
              I-Production step 3 - lamination and finishing processes -
              Production cell
            </option>
            <option value="E-Cable Cutting - cable or cable-set">
              E-Cable Cutting - cable or cable-set
            </option>
            <option value="I - 8001 - supply_for_transport_to_next_plant">
              I - 8001 - supply_for_transport_to_next_plant
            </option>
            <option value="I-Production step 5 - sequenced assembly - Production island">
              I-Production step 5 - sequenced assembly - Production island
            </option>
            <option value="I-Production step 1 - carrier + pattern Production - technology shop">
              I-Production step 1 - carrier + pattern Production - technology
              shop
            </option>
            <option value="I-Production step 2 - PrProductionration processes - technologie shop">
              I-Production step 2 - PrProductionration processes - technologie
              shop
            </option>
            <option value="I-Production step 4 - bulk assembly - Production island">
              I-Production step 4 - bulk assembly - Production island
            </option>
            <option value="E-Staging Assembly - Item number">
              E-Staging Assembly - Item number
            </option>
            <option value="E-Commissioning - Customer order">
              E-Commissioning - Customer order
            </option>
            <option value="E-Staging Assembly - FP-Number">
              E-Staging Assembly - FP-Number
            </option>
            <option value="E-Final Assembly - Customer order">
              E-Final Assembly - Customer order
            </option>
            <option value="I-Production step 1 - carrier + pattern Production - technologie shop">
              I-Production step 1 - carrier + pattern Production - technologie
              shop
            </option>
            <option value="E-Staging Pre-assembly - Detail Planning Group DPG">
              E-Staging Pre-assembly - Detail Planning Group DPG
            </option>
            <option value="I-Production step 2 - Prefabrication processes - technology shop">
              I-Production step 2 - Prefabrication processes - technology shop
            </option>
            <option value="I-Production step 4 - bulk assembly - production island">
              I-Production step 4 - bulk assembly - production island
            </option>
            <option value="I-Production step 3 - lamination and finishing processes - production cell">
              I-Production step 3 - lamination and finishing processes -
              production cell
            </option>
            <option value="I-Production step 5 - sequenced assembly - production island">
              I-Production step 5 - sequenced assembly - production island
            </option>
            <option value="C-Back End (assembly)">C-Back End (assembly)</option>
            <option value="C-Mid End (injection molding / stamping - bending ...)">
              C-Mid End (injection molding / stamping - bending ...)
            </option>
            <option value="I-Production step 4 - bulk assembly - production cell">
              I-Production step 4 - bulk assembly - production cell
            </option>
          </>
        );
      case "Segment":
        return (
          <>
            <option value="">click to select segment </option>
            <option value="Electric">Electric</option>
            <option value="ES">ES</option>
            <option value="Interior">Interior</option>
            <option value="IS">IS</option>
            <option value="SY">SY</option>
          </>
        );
      case "Department":
        return (
          <>
            <option>click to select department</option>
            <option value="AB4">AB4</option>
            <option value="Administration">Administration</option>
            <option value="Annex KSIBA">Annex KSIBA</option>
            <option value="assemly">assembly</option>
            <option value="Bereit">Bereit</option>
            <option value="Bx8">Bx8</option>
            <option value="changing room">changing room</option>
            <option value="FBB">FBB</option>
            <option value="Foaming area">Foaming area</option>
            <option value="IE">IE</option>
            <option value="IR">IR</option>
            <option value="KS">KS</option>
            <option value="Logistics">Logistics</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Methalle">Methalle</option>
            <option value="MM">MM</option>
            <option value="MR">MR</option>
            <option value="Nacherbeit">Nacherbeit</option>
            <option value="outside building">outside building</option>
            <option value="Production">Production</option>
            <option value="Production IR">Production IR</option>
            <option value="Quality">Quality</option>
            <option value="SI">SI</option>
            <option value="TPT">TPT</option>
            <option value="Video IR">Video IR</option>
            <option value="VK">VK</option>
            <option value="WC">WC</option>
            <option value="ZB">ZB</option>
            <option value="Zeta">Zeta</option>
            <option value="ZSB">ZSB</option>
          </>
        );
      case "Operation Mode":
        return (
          <>
            <option value="">click to select operation mode </option>
            <option value="Normal Operation">Normal Operation</option>
            <option value="Testing mode">Testing mode</option>

            <option value="Maintenance">Maintenance</option>
            <option value="Malfunction">Malfunction</option>
          </>
        );
      case "Hazard Source":
        return (
          <>
            <option value="">click to select hazard source </option>
            <option value="Assembly table">Assembly table</option>
            <option value="Conveyor System / Robot">
              Conveyor System / Robot
            </option>
            <option value="Lifting Gear / conveyors">
              Lifting Gear / conveyors
            </option>
            <option value="Machine Tool">Machine Tool</option>
            <option value="Metal Working Machine">Metal Working Machine</option>
            <option value="Packaging Machine">Packaging Machine</option>
            <option value="Plastics processing machines">
              Plastics processing machines
            </option>
            <option value="Power / Work Machine">Power / Work Machine</option>
            <option value="Press machine">Press machine</option>
            <option value="Processing Machines">Processing Machines</option>
            <option value="Sharp tool">Sharp tool</option>
            <option value="Slippy floor">Slippy floor</option>
            <option value="Tools / Utilities">Tools / Utilities</option>
            <option value="Wood and processing machines">
              Wood and processing machines
            </option>
            <option value="Work place / paths">Work place / paths</option>
            <option value="Work place / stairs">Work place / stairs</option>
            <option value="Work table">Work table</option>
            <option value="Workplace / Work environment">
              Workplace / Work environment
            </option>
            <option value="even ground">even ground</option>
            <option value="heavy object">heavy object</option>
            <option value="non adequate ladder">non adequate ladder</option>
            <option value="non adequate posture">non adequate posture</option>
            <option value="non organized objects">non organized objects</option>
            <option value="non stable door">non stable door</option>
            <option value="parts with dangerous surface">
              parts with dangerous surface
            </option>
            <option value="road accident">road accident</option>
          </>
        );
      case "Machine Type":
        return (
          <>
            <option>click to select machine type </option>
            <option value="AGV SYSTEM">AGV SYSTEM</option>
            <option value="Amaisa">Amaisa</option>
            <option value="anti fatigue mat">anti fatigue mat</option>
            <option value="AP2_JLR">AP2_JLR</option>
            <option value="Assembly">Assembly</option>
            <option value="Baubertt">Baubertt</option>
            <option value="Baubertt(Aseembly line)">
              Baubertt(Aseembly line)
            </option>
            <option value="Baubrettbeförderer">Baubrettbeförderer</option>
            <option value="Blade Holder">Blade Holder</option>
            <option value="cable connector">cable connector</option>
            <option value="cart">cart</option>
            <option value="changing room">changing room</option>
            <option value="changing room floor">changing room floor</option>
            <option value="chariot">chariot</option>
            <option value="chariot elevator">chariot elevator</option>
            <option value="circular saw">circular saw</option>
            <option value="Commission kit">Commission kit</option>
            <option value="Conveyor kit">Conveyor kit</option>
            <option value="Conveyor system">Conveyor system</option>
            <option value="Coupe tesa">Coupe tesa</option>
            <option value="couvercle de rProductionrk en bois">
              couvercle de rProductionrk en bois
            </option>
            <option value="crimping machine">crimping machine</option>
            <option value="Cutting machine">Cutting machine</option>
            <option value="cutting world">cutting world</option>
            <option value="Electric screwdriver">Electric screwdriver</option>
            <option value="Electrical function test">
              Electrical function test
            </option>
            <option value="feeding workstation">feeding workstation</option>
            <option value="Fire fighting door">Fire fighting door</option>
            <option value="Foam injection robot">Foam injection robot</option>
            <option value="Foam injection machine">
              Foam injection machine
            </option>
            <option value="Foam injection mold">Foam injection mold</option>
            <option value="forkift">forkift</option>
            <option value="Gable">Gable</option>
            <option value="Hanke">Hanke</option>
            <option value="HANKE 11290/044">HANKE 11290/044</option>
            <option value="Hanke 971">Hanke 971</option>
            <option value="IR table structure">IR table structure</option>
            <option value="KOMAX">KOMAX</option>
            <option value="KOMAX 253">KOMAX 253</option>
            <option value="KOMAX alpha 355">KOMAX alpha 355</option>
            <option value="KSK Branch">KSK Branch</option>
            <option value="Ladders">Ladders</option>
            <option value="Lagger">Lagger</option>
            <option value="Machine 061 schluniger">
              Machine 061 schluniger
            </option>
            <option value="machine coupe schlauch N10741/002">
              machine coupe schlauch N10741/002
            </option>
            <option value="Machine CRMP CENTER 365">
              Machine CRMP CENTER 365
            </option>
            <option value="marble">marble</option>
            <option value="metal cart">metal cart</option>
            <option value="metal support">metal support</option>
            <option value="metal support of the water bottle">
              metal support of the water bottle
            </option>
            <option value="Mold of foam injection">
              Mold of foam injection
            </option>
            <option value="no machine">no machine</option>
            <option value="Nutrunner">Nutrunner</option>
            <option value="Palette">Palette</option>
            <option value="pistolet">pistolet</option>
            <option value="pistolet pneumatique">pistolet pneumatique</option>
            <option value="plan de travail">plan de travail</option>
            <option value="plastic boxes">plastic boxes</option>
            <option value="Porte">Porte</option>
            <option value="Press MFU">Press MFU</option>
            <option value="product transport trolley">
              product transport trolley
            </option>
            <option value="racks">racks</option>
            <option value="Reach Truck">Reach Truck</option>
            <option value="rearing trolley">rearing trolley</option>
            <option value="SCHÄFER">SCHÄFER</option>
            <option value="Schafer-736">Schafer-736</option>
            <option value="schleuniger">schleuniger</option>
            <option value="schleuniger CrimpCenter 63">
              schleuniger CrimpCenter 63
            </option>
            <option value="sertissage">sertissage</option>
            <option value="sewing">sewing</option>
            <option value="shelfs">shelfs</option>
            <option value="slippery ground">slippery ground</option>
            <option value="stapladder">stapladder</option>
            <option value="stapladder locking bracket">
              stapladder locking bracket
            </option>
            <option value="Steps">Steps</option>
            <option value="support metallique">support metallique</option>
            <option value="tesa cutter">tesa cutter</option>
            <option value="Tesa spender">Tesa spender</option>
            <option value="the Guillot support">the Guillot support</option>
            <option value="the prince of boutel">the prince of boutel</option>
            <option value="Three-hole expansion pliers(HWZ)">
              Three-hole expansion pliers(HWZ)
            </option>
            <option value="transpalet">transpalet</option>
            <option value="trolley">trolley</option>
            <option value="Ushall">Ushall</option>
            <option value="wooden pallet in the production process">
              wooden pallet in the production process
            </option>
            <option value="workstation">workstation</option>
          </>
        );
      case "Type of Injury":
        return (
          <>
            <option value="">click to select type of injury </option>
            <option value="Abrasion">Abrasion</option>
            <option value="Bruise">Bruise</option>
            <option value="Burn/Scald">Burn/Scald</option>
            <option value="Cut">Cut</option>
            <option value="Fracture">Fracture</option>
          </>
        );
      case "Injury Body Part":
        return (
          <>
            <option value="">click to select injury body part </option>
            <option value="Arm">Arm</option>
            <option value="Leg">Leg</option>
            <option value="Head">Head</option>
            <option value="Hand">Hand</option>
            <option value="Other">Other</option>
          </>
        );
      case "Accident Type":
        return (
          <>
            <option value="">click to select accident body part </option>
            <option value="Work related accident">Work related accident</option>
            <option value="Non-work related accident">
              Non-work related accident
            </option>
          </>
        );
      case "Repeat Incident":
        return (
          <>
            <option value="">click to select repeat incident </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </>
        );
      case "SMS":
        return (
          <>
            <option value="">click to select SMS </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </>
        );
      case "Accident Shift":
        return (
          <>
            <option value="">click to select accident shift </option>
            <option value="Shift1">Shift1</option>
            <option value="Shift2">Shift2</option>
            <option value="Shift3">Shift3</option>
          </>
        );
      case "Maximum Possible Damage Occurred":
        return (
          <>
            <option value="">
              click to select Maximum Possible Damage Occurred
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="title">Dashboard</h2>
        <div className="menu">
          <button onClick={handleClick_visual} className="menu-btn">
            <FontAwesomeIcon icon={faChartLine} />
            Visualization
          </button>
          <button onClick={handleClick_worker} className="menu-btn">
            <FontAwesomeIcon icon={faUserPlus} />
            New Employee
          </button>
          <button onClick={handleClick_accident} className="menu-btn active">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            Add Accident
          </button>
          <button onClick={handleClick_logOut} className="menu-btn">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Log Out
          </button>
        </div>
        <img src={logo} alt="DRÄXLMAIER Logo" className="logo-img" />
      </div>

      <div className="main">
        <div className="top-bar">
          <div className="search-container">
            <FontAwesomeIcon icon="search" className="search-icon" />
            <input className="search" placeholder="Search" />
          </div>
          <FontAwesomeIcon icon={faBell} className="icon" />
          <div className="user-circle"></div>
          <div className="user-info">
            <span>User1</span>
            <small>Admin</small>
          </div>
        </div>

        <div className="form-container">
          <div className="form-grid">
            {formFields.map((label) => (
              <div key={label} className="dropdown-group">
                <label>{label}</label>
                {["Date", "Recruitment Date"].includes(label) ? (
                  <input type="date" className="date-input" />
                ) : label === "Lost Days" ? (
                  <input type="number" className="number-input" />
                ) : (
                  <select>{renderOptions(label)}</select>
                )}
              </div>
            ))}
          </div>
          <button className="sendAlert-btn">Send Alert</button>
        </div>
      </div>
    </div>
  );
}
