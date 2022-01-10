import React from "react";
import Benner from "./Benner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Benner />
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home_section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://media.kempinski.com/1754/slider_kempinski-hotel-suzhou-dulexe-golf-view-room.jpg;width=1905;height=794;mode=crop;anchor=middlecenter;autorotate=true;quality=85;scale=both;progressive=true;encoder=freeimage;format=jpg"
          title="The best rooms in Cambodia"
          description="Bedroom CheckerTypes Of Hotel Rooms | What To Expect During Check-In"
          price="£80/night"
        />
        <Card
          src="https://media.kempinski.com/1753/slider_kempinski-hotel-suzhou-deluxe-lake-view-room.jpg;width=1905;height=794;mode=crop;anchor=middlecenter;autorotate=true;quality=85;scale=both;progressive=true;encoder=freeimage;format=jpg"
          title="Pacific Hotel Rooms"
          description="Photography | Joe Ogden | Cambodia"
          price="£60/night"
        />
        <Card
          src="https://media.kempinski.com/1096/kempinski-hotel-suzhou-whole-view.jpg;width=1905;height=794;mode=crop;anchor=middlecenter;autorotate=true;quality=85;scale=both;progressive=true;encoder=freeimage;format=jpg"
          title="Hotels in Minneapolis"
          description="Rooms | Loews Minneapolis is the best room for travelling"
          price="£120/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://i.insider.com/5bbbba3993032c10e8697327?width=700"
          title="Krystal Beach Hotel Rooms"
          description="Pictures & Reviews - Tripadvisor of the world"
          price="£100/night"
        />
        <Card
          src="https://www.kayak.com/rimg/himg/fb/fd/0c/leonardo-1953004-GMS_Room_13_S-833921.jpg?width=720&height=576&crop=true"
          title="Hotel Rooms in Shoreditch"
          description="The Hoxton, Shoreditch so fresh on the height"
          price="£200/night"
        />
        <Card
          src="https://i.insider.com/60f5acdcbc757c001904baf0?width=700"
          title="Inside the World's Must Luxurious Hotel Suite"
          description="It's beautyful for me and will be sleep well"
          price="£250/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F13036d75-d91f-48e3-a4cb-d32b0887f8a2.jpg?fit=scale-down&source=next&width=700"
          title="Chicago hotels have tough year"
          description="Chicago hotels have tough year, with lower rates, more rooms - Chicago Tribune"
          price="£500/night"
        />
        <Card
          src="https://i.insider.com/5a6a6345ec1ade67895a630b?width=700"
          title="HOTEL ROOMS"
          description="This video took a whole year to make. Every hotel room I've stayed in this year, and I've actually missed 7"
          price="£600/night"
        />
        <Card
          src="https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3-ap-northeast-1.amazonaws.com%252Fpsh-ex-ftnikkei-3937bb4%252Fimages%252F6%252F2%252F1%252F7%252F23567126-3-eng-GB%252FCropped-1574143446%25EF%25BC%2594%25E4%25BA%25BA%25E4%25BB%25A5%25E4%25B8%258A%25E5%25AF%25BE%25E5%25BF%259C%25E3%2583%259B%25E3%2583%2586%25E3%2583%25AB%25E9%2596%258B%25E7%2599%25BA%25E3%2580%2581%25E4%25B8%25AD%25E5%25A0%2585%25E3%2583%2587%25E3%2583%2599%25E3%2583%25AD%25E3%2583%2583%25E3%2583%2591%25E3%2583%25BC%25E3%2581%258C%25E5%258A%25A0%25E9%2580%259F%25EF%25BC%258F%25E5%25A4%25A7%25E4%25BA%25BA%25E6%2595%25B0%25E3%2581%25AE%25E8%25A8%25AA%25E6%2597%25A5%25E5%25AE%25A2%25E3%2581%25AB%25E7%2585%25A7%25E6%25BA%259620191119145521_Data.jpg?width=700&fit=cover&gravity=faces&dpr=2&quality=medium&source=nar-cms"
          title="60 room hotel for sale Chinese Embassy"
          description="Russian Market - Abode Real Estate"
          price="£80/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://cdn.onemileatatime.com/wp-content/uploads/2017/01/W-Hotel-Punta-De-Mita-6.jpg?width=700&auto_optimize=low&quality=75&height=467&aspect_ratio=700%3A467"
          title="Some Hotels Aren't Good"
          description="At Measuring... - One Mile at a Time"
          price="£200/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          title="One beds room"
          description="Download Free Images on Unsplash"
          price="£300/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          title="Download Free Images on Unsplash"
          description="Russian Market - Abode Real Estate"
          price="£140/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/201801081726577177-503f97dd_z.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg"
          title="Omni HotelsSuites In Oklahoma City"
          description="Omni Oklahoma City Hotel relax weely or yearly"
          price="£150/night"
        />
        <Card
          src="https://i.insider.com/5ec802eb19182461c17925fd?width=700"
          title="One bed for tow people"
          description="Coronavirus Risk in Hotels Is Low If Rooms Get Properly Cleaned"
          price="£300/night"
        />
        <Card
          src="https://kentstatehotel.com/media/14336/_o6a0522-1.jpg?center=0.5,0.5&mode=crop&width=700&height=450"
          title="Our Accommodations Kent State Hotel"
          description="Kent State Hotel Omni Oklahoma City Hotel relax weely or yearly"
          price="£250/night"
        />
      </div>
    </div>
  );
}

export default Home;
