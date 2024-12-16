import React from "react";

function Categories() {
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-2xl font-bold">Browse by category</h3>
        <p>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
      </div>
      <div className="flex  overflow-hidden gap-8 my-10">
        {categoryItems.map((category) => (
          <div
            key={category.jobsAvailable}
            className=" flex gap-3 items-center py-3 px-5 border rounded-lg shadow-sm hover:shadow-inner  cursor-pointer "
          >
            <div className="h-9 w-9">
              <img src={category.icon} className="h-full w-full" alt="" />
            </div>
            <div>
              <h4 className=" capitalize font-medium text-lg text-nowrap">
                {category.title}
              </h4>
              <p className="text-black/85 text-nowrap">
                <span>{category.jobsAvailable} </span> Jobs Availible
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

const categoryItems = [
  {
    title: "Marketing & Sale",
    jobsAvailable: 1526,
    icon: "https://img.icons8.com/?size=100&id=Uibp6q3u8oDK&format=png&color=000000",
  },
  {
    title: "Customer Help",
    jobsAvailable: 185,
    icon: "https://img.icons8.com/?size=100&id=47844&format=png&color=000000",
  },
  {
    title: "Finance",
    jobsAvailable: 168,
    icon: "https://img.icons8.com/?size=100&id=8olwviCxV70D&format=png&color=000000",
  },
  {
    title: "Software",
    jobsAvailable: 1856,
    icon: "https://img.icons8.com/?size=100&id=1fNvCAFsoQ7C&format=png&color=000000",
  },
  {
    title: "Human Resource",
    jobsAvailable: 165,
    icon: "https://img.icons8.com/?size=100&id=pw5jKtbwb1MU&format=png&color=000000",
  },
  {
    title: "Management",
    jobsAvailable: 965,
    icon: "https://img.icons8.com/?size=100&id=65218&format=png&color=000000",
  },
  {
    title: "Retail & Products",
    jobsAvailable: 563,
    icon: "https://img.icons8.com/?size=100&id=119777&format=png&color=000000",
  },
  {
    title: "Security Analyst",
    jobsAvailable: 254,
    icon: "https://img.icons8.com/?size=100&id=hql0weDQj5Gm&format=png&color=000000",
  },
  {
    title: "Content Writer",
    jobsAvailable: 142,
    icon: "https://img.icons8.com/?size=100&id=pIeLAYAbNRzG&format=png&color=000000",
  },
  {
    title: "Market Research",
    jobsAvailable: 532,
    icon: "https://img.icons8.com/?size=100&id=65173&format=png&color=000000",
  },
];
