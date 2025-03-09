import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./Store/post-list";

function App() {
  const [SelectedTab, SetSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="Body">
        <Sidebar SelectedTab={SelectedTab} SetSelectedTab={SetSelectedTab}></Sidebar>
        <div className="Content">
          <Header></Header>
          {SelectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;