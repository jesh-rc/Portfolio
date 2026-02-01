"use client";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

const initialStats = [
  { num: 5, text: "Months of experience" },
  { num: 6, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 0, text: "Code Commits" }, // will be updated dynamically
];

const Stats = () => {
  const [stats, setStats] = useState(initialStats);
  const [startCounting, setStartCounting] = useState(false); // for delaying CountUp

  useEffect(() => {
    // Fetch GitHub commits
    fetch("/api/github-commits")
      .then((res) => res.json())
      .then((data) => {
        setStats((prev) =>
          prev.map((item) =>
            item.text === "Code Commits"
              ? { ...item, num: data.totalCommits || 0 }
              : item
          )
        );
      })
      .catch((err) => {
        console.error("Failed to fetch commits:", err);
      });

    // Delay CountUp to sync with stair animation
    const timer = setTimeout(() => {
      setStartCounting(true);
    }, 2000); // adjust delay (ms) to match your stair animation timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={startCounting ? item.num : 0} // only start counting when startCounting = true
                duration={7} // adjust duration to your preference
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
