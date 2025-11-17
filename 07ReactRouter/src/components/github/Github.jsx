import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = React.useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((response) => response.json())
  //     .then(data => {
  //         console.log(data)
  //         setData(data)
  //     })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.following}
      <br />
      Following: {data.followers}
      <br />
      <img className="rounded-2xl" src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ayushhhsingh");
  return response.json();
};
