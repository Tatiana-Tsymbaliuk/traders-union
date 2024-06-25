const ctx = document.getElementById("forecastChart").getContext("2d");

const data = {
  labels: [
    "12/23",
    "01/24",
    "02/24",
    "03/24",
    "04/24",
    "05/24",
    "06/24",
    "07/24",
    "08/24",
    "09/24",
    "10/24",
    "11/24",
    "12/24",
  ],
  datasets: [
    {
      label: "HISTORICAL",
      data: [
        20000, 30000, 40000, 50000, 60000, 70000, 80000, 31000, 33000, 35000,
        37000, 39000, 41000,
      ],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      fill: true,
    },
    {
      label: "FORECASTED",
      data: [
        43000, 45000, 47000, 49000, 51000, 53000, 55000, 57000, 59000, 61000,
        63000, 65000, 67000,
      ],
      borderColor: "rgba(156, 79, 255, 1)",
      backgroundColor: "rgba(167, 139, 250, 0.2)",
      borderDash: [3, 3],
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#e5e7eb",
      },
      ticks: {
        beginAtZero: true,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});
