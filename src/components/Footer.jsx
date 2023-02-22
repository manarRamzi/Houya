import React from "react";
import img1 from "../Images/footer2.png";
import img2 from "../Images/footer1.png";
import phone from "../Images/telephone-call.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import insta from "../Images/instagram.png";
import group from "../Images/Group.png";
export const Footer = () => {
  return (
    <div className="footer ">
      <div className="container pt-5">
        <div className="row border-bottom footerinfo ">
          <div className=" col-sm-12 col-md-3 ">
            <div className="logo_info border-bottom">
              <img src={img1} alt="img" className="mb-3 d-block w-100 " />
            </div>
            <div className="logo_info border-bottom">
              <img src={img2} alt="img" className="my-4 d-block w-100 " />
              <div className="phone">
                <img src={phone} alt="phone" className="ml-5" width="52px" />
                <span className="">8003010088</span>
              </div>
            </div>
            <div className="my-3">
              <img
                src={insta}
                alt="instgram"
                width="32px"
                height="32px"
                className=" mx-4"
              />
              <span className="vl"></span>
              <img
                src={facebook}
                alt="instgram"
                width="32px"
                height="32px"
                className=" mx-4"
              />
              <span className="vl"></span>
              <img
                src={twitter}
                alt="instgram"
                width="32px"
                height="32px"
                className="mx-4"
              />
            </div>
            <div>
              <img src={group} alt="img" className="d-block w-100 my-4" />
            </div>
          </div>
          <div className="col-sm-12 col-md-2   info_">
            <p className="p-0 m-0 title">متسوق</p>
            <div className="w-100">
              <sapn className="dash1"></sapn>
              <sapn className="dash2"></sapn>
              <sapn className="dash1"></sapn>
            </div>

            <ul className="my-2">
              <li>تسجيل الدخول</li>
              <li>التسويق بعمولة</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2  info_">
            <p className="p-0 m-0 title">تاجر</p>
            <div className="w-100">
              <sapn className="dash1"></sapn>
              <sapn className="dash2"></sapn>
              <sapn className="dash1"></sapn>
            </div>

            <ul className="my-2">
              <li>بوابة التاجر</li>
              <li>المتاجر</li>
              <li>شروط التجار</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2  info_last">
            <p className="p-0 m-0 title">تمور السعودية</p>
            <div className="w-100">
              <sapn className="dash1"></sapn>
              <sapn className="dash2"></sapn>
              <sapn className="dash1"></sapn>
            </div>

            <ul className="my-2">
              <li>عن المنصة</li>
              <li>الأسئلة الشائعة</li>
              <li>المدونة</li>
              <li>اتفاقية الإستخدام</li>
              <li>سياسة الخصوصية</li>
              <li>تواصل معنا</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3 copy_right">
        جميع الحقوق محفوظة لدى تمور السعودية ©️2022
        </div>
      </div>
    </div>
  );
};
