import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// CSS and Theme
import './css/index.css';
import theme from './themes/main/main.theme';

// Views
import HomeView from './components/views/home.view';
import TagsView from './components/views/tags.view';
import SearchView from './components/views/search.view';
import Components from './components/views/component.view';

// Misc
import PageType from './types/page.type';
import PageRouteType from './types/page.route.type';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path={PageRouteType[PageType.HOME]} element={<HomeView />} />
          <Route path={PageRouteType[PageType.TAGS]} element={<TagsView />} />
          <Route path={PageRouteType[PageType.SEARCH]} element={<SearchView />} />
          <Route path={PageRouteType[PageType.COMPONENTS]} element={<Components />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
