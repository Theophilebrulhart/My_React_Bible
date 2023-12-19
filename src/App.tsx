import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import 'tailwindcss/tailwind.css';
import { UseStatePrev } from './pages/UseStatePrev';
import { ConditionalRendering } from './pages/ConditionalRendering';
import { UpdatingObjectState } from './pages/UpdatingObjectState';
import { DerivedValue } from './pages/DerivedValue';
import { PrimitiveVsNonPrimitiv } from './pages/PrimitiveVsNonPrimitiv';
import { StateWithObject } from './pages/StateWithObj';
import { CustomHooks } from './pages/CustomHooks';
import { StateClosure } from './pages/StateClosure';
import { InterfaceVsType } from './pages/InterfaceVsType';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />}/>
      <Route path={"/useStatePrev"} element={<UseStatePrev/>}/>
      <Route path={"/conditionalRendering"} element={<ConditionalRendering />}/>
      <Route path={"/updatingObjectState"} element={<UpdatingObjectState/>}/>
      <Route path={"/derivedValue"} element={<DerivedValue/>}/>
      <Route path={"/PrimitiveVsNonPrimitive"} element={<PrimitiveVsNonPrimitiv/>}/>
      <Route path={"/StateWithObj"} element={<StateWithObject/>}/>
      <Route path={"/CustomHooks"} element={<CustomHooks/>}/>
      <Route path={"/StateClosure"} element={<StateClosure/>}/>
      <Route path={"/TypeVsInterface"} element={<InterfaceVsType/>}/>
      <Route path="*" element={<Navigate to={"/"}/>}/>
    </Routes>
  );
}

export default App;

