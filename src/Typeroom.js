import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Typeroom.css";
import TyperoomDetials from "./TyperoomDetials";

function Typeroom() {
  const navigate = useNavigate();
  return (
    <div className="typeroom">
      <div className="typeroom_info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <ArrowBack onClick={() => navigate("/search")} className="back" />
        <h1>Type of Room</h1>
        <TyperoomDetials
          img="https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/Screen%20Shot%202020-03-26%20at%202.57.55%20PM.png"
          location="Phnom Penh"
          title="2 In 1 room"
          description="Airbnb hosts and short-term rental companies grapple with empty rooms as travel to NYC halts"
          price="$60/night"
        />
        <TyperoomDetials
          img="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/12/07/0922/Grand-Hyatt-Singapore-P757-Premier-Suite-Bedroom.jpg/Grand-Hyatt-Singapore-P757-Premier-Suite-Bedroom.16x9.jpg?imwidth=1280"
          location="Phnom Penh"
          title="Hyatt 5 Phnom Pehn"
          description="Hyatt-Regency-Phnom-Penh-Jivapita-Spa-Aesthetic-Room - Picture of Hyatt Regency Phnom Penh - Tripadvisor"
          price="$50/night"
        />
        <TyperoomDetials
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d3/c9/17/guest-room.jpg?w=900&h=-1&s=1"
          location="Phnom Penh"
          title="Have Free 3 time foods"
          description="Hyatt Regency Phnom Penh Rooms: Pictures & Reviews - Tripadvisor"
          price="$ 150/night"
        />
        <TyperoomDetials
          img="https://www.sokhahotels.com.kh/angkor/img/slideshows/rooms/SAR016-Room.jpg"
          location="Siem Reap"
          title="Nearby Angkor wat temple"
          description="Rooms , Suites | Angkor Accommodation | Siem Reap Accommodations | Sokha Angkor Resort - Siem Reap , Cambodia"
          price="$200 / night"
        />
        <TyperoomDetials
          img="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/89/0d/8c/sokha-siem-reap-resort.jpg"
          location="Siem Reap"
          title="SOKHA SIEM REAP RESORT & CONVENTION CENTER"
          description="Resort Reviews, Photos, Rate Comparison - Tripadvisor"
          price="$150/night"
        />
        <TyperoomDetials
          img="https://www.sokhahotels.com.kh/kampot/img/slideshows/slide-03.jpg"
          location="Kompot Province"
          title="For Honeymoon"
          description="Thansur Sokha Hotel - 5 Star Luxury Hotel in Kampot Cambodia"
          price="$150/night"
        />
        <TyperoomDetials
          img="https://media-cdn.tripadvisor.com/media/photo-s/05/0b/4c/43/twin-beds-room.jpg"
          location="Kompot Province"
          title="twin beds room"
          description="Picture of Thansur Sokha Hotel - Kampot - Tripadvisor for Trip and nearby Keb"
          price="$170/night"
        />
        <TyperoomDetials
          img="https://exp.cdn-hotels.com/hotels/6000000/5590000/5589600/5589529/0a0e3bf5_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
          location="Kompot"
          title="For trip with Family"
          description="Book Thansur Sokha Hotel in Kampot | Hotels.com"
          price="$500/night"
        />
        <TyperoomDetials
          img="https://www.asiatravelgate.com/wp-content/uploads/2017/12/Thansur-Sokha-Hotel-Kampot-Cambodia-Room.jpg"
          location="Koshkong Province"
          title="Pretty for four people"
          description="Thansur Sokha Hotel : Koshkong Accommodations Reviews"
          price="$170/night"
        />
        <TyperoomDetials
          img="https://cf.bstatic.com/xdata/images/hotel/max1280x900/304102844.jpg?k=40e9dad06187ce4e2df96e69c7bfd62959b6bca1ec31e94c372e2807a75eaa26&o=&hp=1"
          location="Mondokiri"
          title="There three beds"
          description="For team work or small family will travelling."
          price="$90/night"
        />
        <TyperoomDetials
          img="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://www.cfmedia.vfmleonardo.com/imageRepo/7/0/116/255/150/Camping_O/Thansur-Sokha-Hotel-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto"
          location="camp ten every where"
          title="Relax for weekend"
          description="Really happy for us and freshes"
          price="$120/night"
        />
        <TyperoomDetials
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/35/ba/1c/khmer-room.jpg?w=900&h=600&s=1"
          location="Kompongsorm"
          title="The Resort LA JAVA BLEUE"
          description="Prices & Guest house Reviews (Kampogsorm, Cambodia) - Tripadvisor"
          price="$250/night"
        />
        <TyperoomDetials
          img="https://www.ttrweekly.com/site/wp-content/uploads/2020/11/Hyatt-Regency-Phnom-Penh-640x385.jpeg"
          location="Phnom Penh"
          title="Weekly page 2"
          description="Hyatt Regency Phnom Penh, Cambodia - reviews, prices | Planet of Hotels"
          price="$150/night"
        />
        <TyperoomDetials
          img="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c6/83/2a/hyatt-regency-phnom-penh.jpg"
          location="Phnom Penh"
          title="Updated 2022 Hotel Reviews (Cambodia) - Tripadvisor"
          description="HYATT REGENCY PHNOM PENH"
          price="$180/night"
        />
        <TyperoomDetials
          img="http://www.newhorizonhotel-manila.com/wp-content/uploads/2020/10/Reason-Advantage-Stay-In-5-Star-Hotel.jpg"
          location="Kompongsorm"
          title="New Horizon Hotel"
          description="Reason Advantage Stay In 5 Star Hotel - newhorizonhotel-manila.com"
          price="$620/night"
        />
        <TyperoomDetials
          img="https://www.eroshotels.co.in/wp-content/uploads/2018/04/606x368.jpg"
          location="Komport"
          title="Manufacturers, Suppliers & Products in China"
          description="Modern Hotel Room Furniture for 5 Star Hotel FurnitureWatch..."
          price="$1000/night"
        />
      </div>
    </div>
  );
}

export default Typeroom;
