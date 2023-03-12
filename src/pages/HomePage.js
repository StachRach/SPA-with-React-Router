import React from "react";
import Article from "../components/Article";

const articles = [
   {
      id: 1,
      title: "String Theory",
      author: "Jon Snow",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
         "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
         "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
   {
      id: 2,
      title: "Fermie's Paradox",
      author: "Harry Potter",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
         "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
         "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
   {
      id: 3,
      title: "Dark Matter and Dark Energy",
      author: "John Watson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
         "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
         "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   },
]

const HomePage = () => {
   const artList = articles.map(article => <Article key={article.id} {...article}/>)

   return (
      <div className={"home"}>
         {artList}
      </div>
   )
}

export default HomePage;