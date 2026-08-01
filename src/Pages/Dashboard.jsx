import React from "react";
import ListMenu from "../Components/ListMenu";
const list = [
  { id: 1, title: " انتخاب واحد" },
  { id: 2, title: "مشاهده دروس ترم" },
  { id: 3, title: "اخرین وضعیت ترم" },
  { id: 4, title: "ویرایش اطلاعات" },
  { id: 5, title: "پرداخت شهریه" },
  { id: 6, title: "کارنامه دانشجویی" },
  { id: 7, title: "درخواست مجوز" },
  { id: 8, title: "ارزشیابی استاد" },
];

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-between flex-col w-60 h-screen border-My-blue bg-My-skyblue border-2 rounded-2xl sticky top-0 p-2 m-4">
        <ul className="flex-center flex-col  gap-3 w-full rounded-2xl p-2 ">
          {list.map((item) => {
            return <ListMenu key={item.id} text={item.title} />;
          })}
        </ul>
        <ul className="flex-center flex-col gap-5 w-full rounded-2xl p-2">
          <li className="flex-center flex-col  gap-5 w-full bg-My-blue text-white rounded-2xl p-2 ">
            خروج
          </li>
        </ul>
      </div>
      <div className="w-full h-500">
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
