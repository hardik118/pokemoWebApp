"use client"

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent" // Ensure compatibility
        },
        pointLabels: {
          font: {
            size: 14,
            weight: "bold"
          }
        }
      }
    },
    plugins: {
      legend: { display: true }
    }
  } as const;





  export interface PokemonStat {
    base_stat: number;
    stat: {
      name: string;
    };
  }


export  default function StatCard({stats}:{stats: PokemonStat[]}){
  const data = {
    labels: stats.map((s) => s.stat.name.toUpperCase()), // Stat names in uppercase
    datasets: [
      {
        label: "Base Stats",
        data: stats.map((s) => s.base_stat),
        backgroundColor: "rgba(255, 99, 132, 0.3)", // Transparent fill
        borderColor: "rgba(255, 99, 132, 1)", // Outline color
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Dots on each axis
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2
      }
    ]
  };
    return <div className="h-1/2 w-full border border-gray-200  rounded-lg">
        <Radar data={data} options={options} style={{ maxHeight: "500px", fontStyle:'serif' }} />
        </div>
}