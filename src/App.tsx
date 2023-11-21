import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/login/Login";
import Recommend from "./pages/Recommend";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import RecommendResult from "./pages/RecommendResult";
import SelectMethod from "./pages/SelectMethod";
import SelectRetro from "./pages/SelectRetro";
import CompleteWritingAAR from "./components/CompleteWriting/AAR";
import CompleteWritingContinue from "./components/CompleteWriting/Continue";
import CompleteWritingFiveF from "./components/CompleteWriting/FiveF";
import CompleteWritingFourL from "./components/CompleteWriting/FourL";
import CompleteWritingKPT from "./components/CompleteWriting/KPT";
import CompleteWritingORID from "./components/CompleteWriting/ORID";
import CompleteWritingPerformance from "./components/CompleteWriting/Performance";
import CompleteWritingPersonal from "./components/CompleteWriting/Personal";
import CompleteWritingTIL from "./components/CompleteWriting/TIL";
import CompleteWritingYWT from "./components/CompleteWriting/YWT";
import StepByStepKPT from "./pages/WritingPage/StepByStep/KPT";
import StepByStepContinue from "./pages/WritingPage/StepByStep/Continue";
import StepByStepTIL from "./pages/WritingPage/StepByStep/TIL";
import StepByStepYWT from "./pages/WritingPage/StepByStep/YWT";
import StepByStepFourL from "./pages/WritingPage/StepByStep/FourL";
import StepByStepAAR from "./pages/WritingPage/StepByStep/AAR";
import StepByStepORID from "./pages/WritingPage/StepByStep/ORID";
import StepByStepFiveF from "./pages/WritingPage/StepByStep/FiveF";
import StepByStepPersonal from "./pages/WritingPage/StepByStep/Personal";
import StepByStepPerformance from "./pages/WritingPage/StepByStep/Performance";
import AttachPicture from "./pages/AttachPicture";
import GuideLineKPT from "./pages/WritingPage/GuideLine/KPT";
import GuideLineContiue from "./pages/WritingPage/GuideLine/Continue";
import GuideLineTIL from "./pages/WritingPage/GuideLine/TIL";
import GuideLineYWT from "./pages/WritingPage/GuideLine/YWT";
import GuideLineFourL from "./pages/WritingPage/GuideLine/FourL";
import GuideLineAAR from "./pages/WritingPage/GuideLine/AAR";
import GuideLineORID from "./pages/WritingPage/GuideLine/ORID";
import GuidLineFiveF from "./pages/WritingPage/GuideLine/FiveF";
import GiudLinePersonal from "./pages/WritingPage/GuideLine/Personal";
import GuideLinePerformance from "./pages/WritingPage/GuideLine/Performance";
import { MyPage } from "./pages/MyPage";
import { Browsing } from "./pages/Browsing";
import { MyRetro } from "./pages/ViewAll/MyRetro";
import { TempStorage } from "./pages/ViewAll/TempStorage";
import LoginCallback from "./pages/login/LoginCallback";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<LoginCallback />} />

          <Route path="/recommend" element={<Recommend />} />
          <Route path="/recommendResult" element={<RecommendResult />} />
          <Route path="/selectMethod" element={<SelectMethod />} />
          <Route path="/selectRetro" element={<SelectRetro />} />

          {/* stepByStep */}
          <Route path="/stepByStepKPT" element={<StepByStepKPT />} />
          <Route path="/stepByStepContinue" element={<StepByStepContinue />} />
          <Route path="/stepByStepTIL" element={<StepByStepTIL />} />
          <Route path="/stepByStepYWT" element={<StepByStepYWT />} />
          <Route path="/stepByStepFourL" element={<StepByStepFourL />} />
          <Route path="/stepByStepAAR" element={<StepByStepAAR />} />
          <Route path="/stepByStepORID" element={<StepByStepORID />} />
          <Route path="/stepByStepFiveF" element={<StepByStepFiveF />} />
          <Route path="/stepByStepPersonal" element={<StepByStepPersonal />} />
          <Route
            path="/stepByStepPerformance"
            element={<StepByStepPerformance />}
          />

          {/* guideLine */}
          <Route path="/guideLineKPT" element={<GuideLineKPT />} />
          <Route path="/guideLineContinue" element={<GuideLineContiue />} />
          <Route path="/guideLineTIL" element={<GuideLineTIL />} />
          <Route path="/guideLineYWT" element={<GuideLineYWT />} />
          <Route path="/guideLineFourL" element={<GuideLineFourL />} />
          <Route path="/guideLineAAR" element={<GuideLineAAR />} />
          <Route path="/guideLineORID" element={<GuideLineORID />} />
          <Route path="/guideLineFIveF" element={<GuidLineFiveF />} />
          <Route path="/guideLinePersonal" element={<GiudLinePersonal />} />
          <Route
            path="/guideLinePerformance"
            element={<GuideLinePerformance />}
          />

          {/* CompleteWriting */}
          <Route path="/attachPicture" element={<AttachPicture />} />
          <Route path="/CompleteWritingAAR" element={<CompleteWritingAAR />} />
          <Route
            path="/CompleteWritingContinue"
            element={<CompleteWritingContinue />}
          />
          <Route
            path="/CompleteWritingFiveF"
            element={<CompleteWritingFiveF />}
          />
          <Route
            path="/CompleteWritingFourL"
            element={<CompleteWritingFourL />}
          />
          <Route path="/CompleteWritingKPT" element={<CompleteWritingKPT />} />
          <Route
            path="/CompleteWritingORID"
            element={<CompleteWritingORID />}
          />
          <Route
            path="/CompleteWritingPerformance"
            element={<CompleteWritingPerformance />}
          />
          <Route
            path="/CompleteWritingPersonal"
            element={<CompleteWritingPersonal />}
          />
          <Route path="/CompleteWritingTIL" element={<CompleteWritingTIL />} />
          <Route path="/CompleteWritingYWT" element={<CompleteWritingYWT />} />

          <Route path="/myPage" element={<MyPage />} />
          <Route path="/browsing" element={<Browsing />} />
          <Route path="/myRetro" element={<MyRetro />} />
          <Route path="/tempStorage" element={<TempStorage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
