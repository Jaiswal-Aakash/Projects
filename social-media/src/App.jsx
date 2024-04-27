import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import Login from "./components/Login";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const handleLogin = (page) => {
    console.log(page);
    setSelectedTab(page);
  };
  return (
    <PostListProvider>
      <div className="app-container">
        {selectedTab === "Home" && (
          <SideBar
            selectedTab={selectedTab}
            setselectedTab={setSelectedTab}
          ></SideBar>
        )}

        {selectedTab === "Create Post" && (
          <SideBar
            selectedTab={selectedTab}
            setselectedTab={setSelectedTab}
          ></SideBar>
        )}

        <div className="content">
          <Header
            handleLogin={handleLogin}
            setselectedTab={setSelectedTab}
          ></Header>
          {selectedTab === "Create Post" && <CreatePost></CreatePost>}
          {selectedTab === "Home" && <PostList></PostList>}
          {selectedTab === "LOGIN" && (
            <Login setselectedTab={setSelectedTab}></Login>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>

    // <PostListProvider>
    //   <div className="app-container">
    //     <SideBar
    //       selectedTab={selectedTab}
    //       setselectedTab={setSelectedTab}
    //     ></SideBar>
    //     <div className="content">
    //       <Header handleLogin={handleLogin}></Header>
    //       <Login></Login>
    //       {selectedTab === "Home" ? (
    //         <PostList></PostList>
    //       ) : (
    //         <CreatePost></CreatePost>
    //       )}
    //       <Footer></Footer>
    //     </div>
    //   </div>
    // </PostListProvider>
  );
}

export default App;
