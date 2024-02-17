import React from "react";
import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import { AppSider } from "./components/layout/AppSider";
import { AppContent } from "./components/layout/AppContent";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default App;
