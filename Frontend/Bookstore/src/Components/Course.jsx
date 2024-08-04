import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards"
import {Link} from "react-router-dom"

function Course() {
 
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Explore our extensive collection of free and premium courses,
            tailored to fuel your curiosity and expand your horizons. From
            fiction to self-help, history to science, we offer something for
            every reader. Start your adventure now and let the pages of
            knowledge and discovery unfold.
          </p>
          <Link to = "/">
          <button className="bg-pink-500 rounded-md px-4 py-2 mt-6 hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
              list.map((item)=> (<Cards key={item.id} item={item}/>))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
