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
import GuideLineContinue from "./pages/WritingPage/GuideLine/Continue";
import GuideLineTIL from "./pages/WritingPage/GuideLine/TIL";
import GuideLineYWT from "./pages/WritingPage/GuideLine/YWT";
import GuideLineFourL from "./pages/WritingPage/GuideLine/FourL";
import GuideLineAAR from "./pages/WritingPage/GuideLine/AAR";
import GuideLineORID from "./pages/WritingPage/GuideLine/ORID";
import GuideLineFiveF from "./pages/WritingPage/GuideLine/FiveF";
import GuideLinePersonal from "./pages/WritingPage/GuideLine/Personal";
import GuideLinePerformance from "./pages/WritingPage/GuideLine/Performance";
import { MyPage } from "./pages/MyPage";
import { Browsing } from "./pages/Browsing";
import { MyRetro } from "./pages/ViewAll/MyRetro";
import { TempStorage } from "./pages/ViewAll/TempStorage";
import LoginCallback from "./pages/login/LoginCallback";
import CompleteWriting from "./pages/CompleteWriting";

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
          <Route path="/recommend-result" element={<RecommendResult />} />
          <Route path="/select-method" element={<SelectMethod />} />
          <Route path="/select-retro" element={<SelectRetro />} />

          {/* stepByStep */}
          <Route path="/step-by-step/kpt" element={<StepByStepKPT />} />
          <Route
            path="/step-by-step/continue"
            element={<StepByStepContinue />}
          />
          <Route path="/step-by-step/til" element={<StepByStepTIL />} />
          <Route path="/step-by-step/ywt" element={<StepByStepYWT />} />
          <Route path="/step-by-step/4l" element={<StepByStepFourL />} />
          <Route path="/step-by-step/aar" element={<StepByStepAAR />} />
          <Route path="/step-by-step/orid" element={<StepByStepORID />} />
          <Route path="/step-by-step/5f" element={<StepByStepFiveF />} />
          <Route
            path="/step-by-step/personal"
            element={<StepByStepPersonal />}
          />
          <Route
            path="/step-by-step/performance"
            element={<StepByStepPerformance />}
          />

          {/* guideLine */}
          <Route path="/guideline/kpt" element={<GuideLineKPT />} />
          <Route path="/guideline/continue" element={<GuideLineContinue />} />
          <Route path="/guideline/til" element={<GuideLineTIL />} />
          <Route path="/guideline/ywt" element={<GuideLineYWT />} />
          <Route path="/guideline/4l" element={<GuideLineFourL />} />
          <Route path="/guideline/aar" element={<GuideLineAAR />} />
          <Route path="/guideline/orid" element={<GuideLineORID />} />
          <Route path="/guideline/5f" element={<GuideLineFiveF />} />
          <Route path="/guideline/personal" element={<GuideLinePersonal />} />
          <Route
            path="/guideline-performance"
            element={<GuideLinePerformance />}
          />

          <Route path="/attach-picture" element={<AttachPicture />} />
          <Route path="/complete-writing/:id" element={<CompleteWriting />} />

          <Route path="/browsing/popular" element={<Browsing />} />
          <Route path="/browsing/latest" element={<Browsing />} />
          <Route path="/browsing/category" element={<Browsing />} />

          <Route path="/my-page" element={<MyPage />} />
          <Route path="/my-retro" element={<MyRetro />} />
          <Route path="/temp-storage" element={<TempStorage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
