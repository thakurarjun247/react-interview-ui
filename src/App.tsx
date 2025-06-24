import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WidgetList from './components/WidgetList'
import WidgetForm from './components/WidgetForm'
import WidgetDetail from './components/WidgetDetail'

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WidgetList />} />
      <Route path="/create" element={<WidgetForm />} />
      <Route path="/edit/:name" element={<WidgetForm />} />
      <Route path="/widget/:name" element={<WidgetDetail />} />
    </Routes>
  </BrowserRouter>
)

export default App
