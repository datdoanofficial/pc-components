import React, { useRef, useEffect } from "react";
import "../styles/pages/Store.scss";

type Props = {};

const Store = (props: Props) => {
  const productsShowcase01Ref = useRef<HTMLDivElement>(null);
  const productsShowcase02Ref = useRef<HTMLDivElement>(null);
  const productsShowcase03Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (productsShowcase01Ref.current) {
        productsShowcase01Ref.current.style.right = value * 0.06 + "px";
      }
      if (productsShowcase02Ref.current) {
        productsShowcase02Ref.current.style.left = value * 0.06 + "px";
      }
      if (productsShowcase03Ref.current) {
        productsShowcase03Ref.current.style.right = value * 0.06 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="store-page">
      {/* text information */}
      <div className="text-information">
        <span>Accessories for the PC - upgrade or assemble yourself</span>
        <div className="title">Explore Our Catalog</div>
      </div>
      {/* navbar background */}
      <div className="navbar-background"></div>
      {/* section 01 */}
      <section className="section-01" id="parallax">
        <div className="products_showcase">
          <div
            className="products_showcase_01 line-showcase"
            id="products_showcase_01"
            ref={productsShowcase01Ref}
          >
            <div className="item_01 item_showcase"></div>
            <div className="item_02 item_showcase"></div>
            <div className="item_03 item_showcase"></div>
          </div>
          <div
            className="products_showcase_02 line-showcase"
            id="products_showcase_02"
            ref={productsShowcase02Ref}
          >
            <div className="item_04 item_showcase"></div>
            <div className="item_05 item_showcase"></div>
            <div className="item_06 item_showcase"></div>
          </div>
          <div
            className="products_showcase_03 line-showcase"
            id="products_showcase_03"
            ref={productsShowcase03Ref}
          >
            <div className="item_07 item_showcase"></div>
            <div className="item_08 item_showcase"></div>
            <div className="item_09 item_showcase"></div>
          </div>
        </div>
      </section>
      {/* section 02 */}
      <div className="section-02"></div>
    </div>
  );
};

export default Store;
