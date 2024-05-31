import React from "react";

const WeeklyMenuTable = () => {
  return (
    <div classNmae=''>
    <table class="border-collapse border w-full  border-blue-500 m-10 mx-auto">
  <thead>
    <tr class="bg-blue-500 text-white ">
      <th class="py-2 px-4 text-right">روز</th>
      <th class="py-2 px-4 text-right">صبحانه</th>
      <th class="py-2 px-4 text-right">نهار</th>
      <th class="py-2 px-4 text-right">شام</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-white border-b border-blue-500">
    <td class="py-2 px-4">شنبه</td>
      <td class="py-2 px-4">25</td>
      <td class="py-2 px-4">New York</td>
    </tr>
    <tr class="bg-white border-b border-blue-500">
    <td class="py-2 px-4">یکشنبه</td>
      <td class="py-2 px-4">30</td>
      <td class="py-2 px-4">Los Angeles</td>
    </tr>
    <tr class="bg-white border-b border-blue-500">
      <td class="py-2 px-4">دوشنبه</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">Chicago</td>
    </tr>
    <tr class="bg-white border-b border-blue-500">
      <td class="py-2 px-4">سه شنبه</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">Chicago</td>
    </tr>
    <tr class="bg-white border-b border-blue-500">
      <td class="py-2 px-4">چهار شنبه</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">Chicago</td>
    </tr>
    <tr class="bg-white border-b border-blue-500">
      <td class="py-2 px-4">پنج شنبه</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">Chicago</td>
    </tr>
    <tr class="bg-white border-b border-blue-500">
      <td class="py-2 px-4">جمعه</td>
      <td class="py-2 px-4">40</td>
      <td class="py-2 px-4">Chicago</td>
    </tr>
  </tbody>
</table>
</div>
  );
};
export default WeeklyMenuTable;
